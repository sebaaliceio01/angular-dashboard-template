import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import moment from 'moment';
import { BehaviorSubject, catchError, finalize, map, Observable, take, tap, throwError } from 'rxjs';
import { IBaseTable, ICustomSelectModel, IPaginationOptions, IReport } from 'src/app/interfaces';
import { IPaginatedRequest } from 'src/app/interfaces/paginated-request.interface';
import { AlertService } from 'src/app/modules/ui/services/alert.service';
import { DialogService } from 'src/app/modules/ui/services/dialog.service';
import { NavbarService } from 'src/app/modules/ui/services/navbar.service';
import { reportColumns } from 'src/app/utils';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  isLoading: boolean = false

  dataSource: IReport[] = []

  totalCount: number = 0

  private reportLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private reportLoading: Observable<boolean> = this.reportLoadingSubject.asObservable()

  startDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])
  endDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])
  payoutId: FormControl = new FormControl('', [Validators.required])
  bankAccount: FormControl = new FormControl('', [Validators.required])
  benefDocNumber: FormControl = new FormControl('', [Validators.required])
  orderId: FormControl = new FormControl('', [Validators.required])
  merchant: FormControl = new FormControl('all', [Validators.required])
  bank: FormControl = new FormControl('all', [Validators.required])
  stage: FormControl = new FormControl('all', [Validators.required])
  status: FormControl = new FormControl('all', [Validators.required])

  form: FormGroup = new FormGroup({
    startDay: this.startDay,
    endDay: this.endDay,
    payoutId: this.payoutId,
    bankAccount: this.bankAccount,
    benefDocNumber: this.benefDocNumber,
    orderId: this.orderId,
    merchant: this.merchant,
    bank: this.bank,
    stage: this.stage,
    status: this.status,
  })

  set reportLoadingValue(value: boolean) {
    this.reportLoadingSubject.next(value)
  }

  value: ICustomSelectModel[] = [
    { label: 'All', value: 'all' },
    { label: 'BCP', value: "0002" },
  ]

  baseTableOptions: IBaseTable<IReport> = {
    dataSource: this.dataSource,
    columns: reportColumns,
    paginateOptions: {
      pageSize: 10,
      totalCount: this.totalCount,
      pageSizeOptions: [10, 15, 25],
    }
  }

  constructor(
    private dialog: DialogService,
    private reportService: ReportService,
    private alertService: AlertService,
    private navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this.navbarService.componentTitle = {
      icon: 'list',
      steps: ['Report', 'Report']
    }
  }

  onPageChange(event: PageEvent): void {
    this.baseTableOptions.paginateOptions = {
      ...this.baseTableOptions.paginateOptions,
      page: event.pageIndex,
      pageSize: event.pageSize,
    }

    this.getReport(this.form.value, { page: event.pageIndex, pageSize: event.pageSize })
  }

  openReportDialog(): void {
    if (!this.baseTableOptions.dataSource.length) {
      this.alertService.info('No data to export')
      return
    }

    if (this.baseTableOptions.dataSource.length > 10000) {
      this.alertService.info('Amount of data exceeded! Please reduce the date range')
      return
    }

    this.dialog.fileLoaderDialog({
      func: this.generateReport,
      isLoading: this.reportLoading,
    })
  }

  onSearch(): void {
    // if (this.form.invalid) {
    //   this.alertService.info('All fields are required')
    //   return
    // }

    this.getReport(this.form.value, { page: this.baseTableOptions.paginateOptions?.page, pageSize: this.baseTableOptions.paginateOptions?.pageSize })
  }

  private getReport(data: IReport, paginationOptions: IPaginationOptions) {
    this.isLoading = true

    setTimeout(() => {
      this.reportService.getReport(data, { pageSize: paginationOptions.page, page: paginationOptions.pageSize })
        .pipe(
          take(1),
          map((result: IPaginatedRequest<IReport>) => {
            this.dataSource = result['data']
            this.totalCount = result['totalCount']

            this.baseTableOptions = {
              ...this.baseTableOptions,
              dataSource: this.dataSource,
              paginateOptions: {
                ...this.baseTableOptions.paginateOptions,
                totalCount: this.totalCount
              }
            }
          }),
          catchError((err: Error) => {
            this.dataSource = []
            this.baseTableOptions.dataSource = []
            this.alertService.error('An error happens')
            return throwError(() => { return err })
          }),
          finalize(() => {
            this.isLoading = false
          })
        ).subscribe()
    }, 2000);
  }

  generateReport = (): void => {
    this.reportLoadingValue = true
    setTimeout(() => {
      this.reportService.exportReport(JSON.stringify(this.baseTableOptions.dataSource)).subscribe()
      this.reportLoadingValue = false
    }, 5000);
  }

  resetForm(): void {
    this.form.reset()
    this.startDay.setValue(new Date(moment().format('YYYY-MM-DD HH:mm:ss')))
    this.endDay.setValue(new Date(moment().format('YYYY-MM-DD HH:mm:ss')))
    this.merchant.setValue('all')
    this.bank.setValue('all')
    this.stage.setValue('all')
    this.status.setValue('all')
  }
}
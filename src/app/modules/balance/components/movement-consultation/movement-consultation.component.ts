import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { IBaseTable, IColumns, ICustomSelectModel, IMovementConsultation } from 'src/app/interfaces';
import { BalanceService } from '../../services/balance.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPaginatedRequest } from 'src/app/interfaces/paginated-request.interface';
import { catchError, finalize, map, throwError } from 'rxjs';
import { NavbarService } from 'src/app/modules/ui/services/navbar.service';

@Component({
  selector: 'app-movement-consultation',
  templateUrl: './movement-consultation.component.html',
  styleUrls: ['./movement-consultation.component.scss']
})
export class MovementConsultationComponent implements OnInit {

  merchant: FormControl = new FormControl('all', [Validators.required])
  country: FormControl = new FormControl('all', [Validators.required])
  currency: FormControl = new FormControl('all', [Validators.required])
  startDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])
  endDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])

  form: FormGroup = new FormGroup({
    merchant: this.merchant,
    country: this.country,
    currency: this.currency,
    startDay: this.startDay,
    endDay: this.endDay
  })

  defaultValues: ICustomSelectModel[] = [
    { label: 'Seleccione', value: null },
    { label: 'BCP', value: "0002" },
  ]

  public dataSource: IMovementConsultation[] = []

  isLoading: boolean = false

  baseTableOptions: IBaseTable<IMovementConsultation> = {
    dataSource: this.dataSource,
    columns: columns,
    paginateOptions: {
      pageSize: 10,
      totalCount: 15,
      pageSizeOptions: [10, 15, 25],
      page: 0,
    }
  }

  constructor(
    private balanceService: BalanceService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.componentTitle = {
      icon: 'balance',
      steps: ['Balance', 'Movement inquiry']
    }
  }

  getBalanceRegister(): void {
    this.isLoading = true

    setTimeout(() => {
      this.balanceService.movementConsultation(this.form.value, { page: this.baseTableOptions.paginateOptions?.page, pageSize: this.baseTableOptions.paginateOptions?.pageSize })
        .pipe(
          map((result: IPaginatedRequest<IMovementConsultation>) => {
            this.dataSource = result['data']

            this.baseTableOptions = {
              ...this.baseTableOptions,
              dataSource: this.dataSource,
              paginateOptions: {
                ...this.baseTableOptions.paginateOptions,
                totalCount: result['totalCount']
              }
            }
          }),
          catchError((err: Error) => {
            return throwError(() => { return err })
          }),
          finalize(() => {
            this.isLoading = false
          })
        ).subscribe()
    }, 2000);
  }

}

const columns: IColumns[] = [
  {
    caption: 'Date', field: {
      key: 'date',
      parseElement: (date: string) => moment(date).format('DD/MM/YYYY hh:mm')
    }
  },
  {
    caption: 'Description', field: {
      key: 'description',
    }
  },
  {
    caption: 'Currency', field: {
      key: 'currency',
    }
  },
  {
    caption: 'Amount', field: {
      key: 'amount',
    }
  },
]
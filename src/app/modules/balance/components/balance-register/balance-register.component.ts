import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { catchError, finalize, map, throwError } from 'rxjs';
import { IBaseTable, IPaginationOptions, IRegisterBalance } from 'src/app/interfaces';
import { IPaginatedRequest } from 'src/app/interfaces/paginated-request.interface';
import { DialogService } from 'src/app/modules/ui/services/dialog.service';
import { NavbarService } from 'src/app/modules/ui/services/navbar.service';
import { registerBalanceColumns } from 'src/app/utils';
import { AuthenticationService } from 'src/app/utils/keycloak/services/authentication.service';
import { environment } from 'src/environments/environment.development';
import { BalanceService } from '../../services/balance.service';
import { EditBalanceComponent } from '../edit-balance/edit-balance.component';
import { NewBalanceRegisterComponent } from '../new-balance-register/new-balance-register.component';

@Component({
  selector: 'app-balance-register',
  templateUrl: './balance-register.component.html',
  styleUrls: ['./balance-register.component.scss']
})
export class BalanceRegisterComponent implements OnInit {

  roles: any = environment.roles

  isLoading: boolean = false

  showActions: boolean = true

  merchant: FormControl = new FormControl('all', [Validators.required])
  country: FormControl = new FormControl('all', [Validators.required])
  startDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])
  endDay: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])

  form: FormGroup = new FormGroup({
    merchant: this.merchant,
    country: this.country,
    startDay: this.startDay,
    endDay: this.endDay
  })

  public dataSource: IRegisterBalance[] = []

  baseTableOptions: IBaseTable<IRegisterBalance> = {
    dataSource: this.dataSource,
    columns: registerBalanceColumns,
    actions: [{
      icon: 'edit',
      name: 'Edit',
      role: [this.roles.adminGeneral],
      action: (element: IRegisterBalance) => this.onEdit(element)
    }],
    paginateOptions: {
      pageSize: 10,
      totalCount: 15,
      page: 0,
      pageSizeOptions: [10, 15, 25]
    }
  }

  constructor(
    private dialog: DialogService,
    private balanceService: BalanceService,
    public authenticationService: AuthenticationService,
    private navbarService: NavbarService,
  ) {
  }

  ngOnInit(): void {
    this.navbarService.componentTitle = {
      icon: 'balance',
      steps: ['Balance', 'Balance register']
    }
  }

  onClick(): void {
    this.dialog.open(NewBalanceRegisterComponent)
  }

  onEdit(element: IRegisterBalance): void {
    this.dialog.open(EditBalanceComponent, {
      data: {...element, description: element.description.slice(0, element.description.length - 11)},
      width: '500px'
    })
  }

  getBalanceRegister(): void {
    this.isLoading = true

    setTimeout(() => {
      this.balanceService.getBalanceRegister(this.form.value, { page: this.baseTableOptions.paginateOptions?.page, pageSize: this.baseTableOptions.paginateOptions?.pageSize })
        .pipe(
          map((result: IPaginatedRequest<IRegisterBalance>) => {
            this.dataSource = result['data']

            this.dataSource = this.dataSource.map((result) => {
              return {
                ...result,
                description: result.description + ' ' + moment(result.movementDate).format('DD-MM-yyyy')
              }
            })

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
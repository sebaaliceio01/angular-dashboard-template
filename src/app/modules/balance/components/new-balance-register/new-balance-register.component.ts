import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';
import { catchError, finalize, map, take, throwError } from 'rxjs';
import { ICustomSelectModel } from 'src/app/interfaces';
import { AlertService } from 'src/app/modules/ui/services/alert.service';
import { DialogService } from 'src/app/modules/ui/services/dialog.service';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-new-balance-register',
  templateUrl: './new-balance-register.component.html',
  styleUrls: ['./new-balance-register.component.scss']
})
export class NewBalanceRegisterComponent {

  merchant: FormControl = new FormControl('', [Validators.required])
  country: FormControl = new FormControl('', [Validators.required])
  currency: FormControl = new FormControl('', [Validators.required])
  amount: FormControl = new FormControl('', [Validators.required])
  movementType: FormControl = new FormControl('', [Validators.required])
  descriptionType: FormControl = new FormControl('', [Validators.required])
  startDate: FormControl = new FormControl(new Date(moment().format('YYYY-MM-DD HH:mm:ss')), [Validators.required])
  endDate: FormControl = new FormControl('')
  bankOpCode: FormControl = new FormControl('')

  form: FormGroup = new FormGroup({
    merchant: this.merchant,
    country: this.country,
    currency: this.currency,
    amount: this.amount,
    movementType: this.movementType,
    descriptionType: this.descriptionType,
    startDate: this.startDate,
    endDate: this.endDate,
    bankOpCode: this.bankOpCode
  })

  defaultValues: ICustomSelectModel[] = [
    { label: 'Seleccione', value: null },
    { label: 'BCP', value: "0002" },
  ]

  constructor(
    public dialogRef: MatDialogRef<NewBalanceRegisterComponent>,
    public dialog: DialogService,
    private alertService: AlertService,
    private balanceService: BalanceService,
  ) { }

  onClick() {
    if (this.form.invalid) {
      this.alertService.info('Please complete required fields')
      return
    }

    this.dialog.confirmationDialog({
      data: {
        title: 'Confirmacion',
        message: '',
      },
      callback: () => this.createRecord()
    })
  }

  createRecord(): void {
    this.balanceService.createBalanceRegister(this.form.value)
      .pipe(
        take(1),
        map((result) => {
          this.form.reset()
          this.startDate.setValue(new Date(moment().format('YYYY-MM-DD HH:mm:ss')))
          this.endDate.setValue('')
          this.alertService.success(result.message)
          return result
        }),
        catchError((err: Error) => {
          this.alertService.error(err.message)
          return throwError(() => { return err })
        }),
      ).subscribe()
  }
}
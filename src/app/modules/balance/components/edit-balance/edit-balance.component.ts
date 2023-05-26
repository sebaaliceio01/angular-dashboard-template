import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, map, throwError } from 'rxjs';
import { IRegisterBalance } from 'src/app/interfaces';
import { AlertService } from 'src/app/modules/ui/services/alert.service';
import { DialogService } from 'src/app/modules/ui/services/dialog.service';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-edit-balance',
  templateUrl: './edit-balance.component.html',
  styleUrls: ['./edit-balance.component.scss']
})
export class EditBalanceComponent {
  bankOpCode: FormControl = new FormControl('')
  descriptionType: FormControl = new FormControl('')

  form: FormGroup = new FormGroup({
    bankOpCode: this.bankOpCode,
    descriptionType: this.descriptionType,
  })

  constructor(
    public dialogRef: MatDialogRef<EditBalanceComponent>,
    public dialog: DialogService,
    private alertService: AlertService,
    private balanceService: BalanceService,
    @Inject(MAT_DIALOG_DATA) public data: IRegisterBalance
  ) {
    this.bankOpCode.setValue(data.bankOpCode)
    this.descriptionType.setValue(data.description)
  }

  onClick() {
    if (this.form.invalid) {
      this.alertService.info('All fields are required')
      return
    }

    this.dialog.confirmationDialog({
      data: {
        title: 'Confirmacion',
        message: '',
      },
      callback: () => this.editRecord()
    })
  }

  editRecord(): void {
    this.balanceService.updateMovement(this.form.value, this.data.id)
      .pipe(
        map((result) => {
          this.alertService.success('Success')
          this.dialog.closeAll()
          return result
        }),
        catchError((err: Error) => {
          this.alertService.error(err.message)
          return throwError(() => { return err })
        }),
      ).subscribe()
  }
}

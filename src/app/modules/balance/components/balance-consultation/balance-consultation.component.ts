import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, map, take, throwError } from 'rxjs';
import { ICustomSelectModel } from 'src/app/interfaces';
import { IBalanceConsultationWidget } from 'src/app/interfaces/balance-consultation-widget.interface';
import { AlertService } from 'src/app/modules/ui/services/alert.service';
import { NavbarService } from 'src/app/modules/ui/services/navbar.service';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-balance-consultation',
  templateUrl: './balance-consultation.component.html',
  styleUrls: ['./balance-consultation.component.scss']
})
export class BalanceConsultationComponent implements OnInit {
  balanceWidgets: IBalanceConsultationWidget[]

  isLoading: boolean = false

  merchant: FormControl = new FormControl('all', [Validators.required])
  currency: FormControl = new FormControl('all', [Validators.required])

  form: FormGroup = new FormGroup({
    merchant: this.merchant,
    currency: this.currency
  })

  constructor(
    private balanceService: BalanceService,
    private alertService: AlertService,
    private navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this.form.setValue({
      merchant: ['1'],
      currency: 'all'
    })

    this.onSearch()
    
    this.navbarService.componentTitle = {
      icon: 'balance',
      steps: ['Balance', 'Balance inquiry']
    }
  }

  onMerchantChange() {
    this.onSearch()
  }

  onSearch(): void {
    if (this.form.invalid) {
      this.alertService.info('All fields are required')
      return
    }

    this.isLoading = true

    setTimeout(() => {
      this.balanceService.balanceConsultation(this.form.value)
      .pipe(
        take(1),
        map((result: any) => {
          this.balanceWidgets = result.map((result: any) => {
            return {
              country: result.country as string,
              totalBalanceAmount: {
                amount: result.totalBalance,
                currency: this.currency.value,
              },
              availableBalanceAmount: {
                amount: result.eableBalance,
                currency: this.currency.value,
              },
              inProgressBalanceAmount: {
                amount: result.inProgressBalance,
                currency: this.currency.value,
              }
            }
          })

          return result
        }),
        catchError((err) => {
          this.alertService.error(err)
          return throwError(() => this.balanceService.error)
        }),
        finalize(() => {
          this.isLoading = false
        })
      ).subscribe()
    }, 2000);
  }
}

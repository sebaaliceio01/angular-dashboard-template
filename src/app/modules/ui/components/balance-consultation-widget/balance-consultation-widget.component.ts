import { Component, Input } from '@angular/core';
import { IBalanceConsultationWidget } from 'src/app/interfaces/balance-consultation-widget.interface';

@Component({
  selector: 'ui-balance-consultation-widget',
  templateUrl: './balance-consultation-widget.component.html',
  styleUrls: ['./balance-consultation-widget.component.scss']
})
export class BalanceConsultationWidgetComponent {

  @Input() data: IBalanceConsultationWidget = {
    country: '',
    totalBalanceAmount: {
      amount: 0,
      currency: 'USD'
    },
    availableBalanceAmount: {
      amount: 0,
      currency: 'USD'
    },
    inProgressBalanceAmount: {
      amount: 0,
      currency: 'USD'
    }
  }
}

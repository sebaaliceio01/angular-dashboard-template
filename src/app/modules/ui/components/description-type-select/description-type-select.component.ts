import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICustomSelectModel } from 'src/app/interfaces';

@Component({
  selector: 'ui-description-type-select',
  templateUrl: './description-type-select.component.html',
  styleUrls: ['./description-type-select.component.scss']
})
export class DescriptionTypeSelectComponent {
  @Input() value: FormControl = new FormControl()

  @Input() required: boolean = false

  @Input() default_value: string = ''

  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  defaultValues: ICustomSelectModel[] = [
    { label: 'Seleccione', value: null },
    { label: 'Settlements Payins', value: "Settlements Payins" },
    { label: 'Settlements Payouts', value: "Settlements Payouts" },
    { label: "Billing Payouts", value: "Billing Payouts" },
    { label: 'Unique Wallet', value: "Unique Wallet" },
    { label: 'Fund', value: "Fund" },
    { label: 'Refund', value: "Refund" },
  ]

  onChange($event: ICustomSelectModel) {
    this.onChangeEvent.emit($event)
  }
}

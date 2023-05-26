import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ICustomSelectModel } from 'src/app/interfaces';

@Component({
  selector: 'ui-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {
  @Input() value: FormControl = new FormControl('all', [Validators.required])

  @Input() max_width: boolean = false
  @Input() required: boolean = false
  @Input() disabled: boolean = false
  @Input() allOption: boolean = false

  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  defaultValues: ICustomSelectModel[] = [
    { label: 'All', value: 'all' },
    { label: 'Soles', value: "SOL" },
    { label: 'Dolares', value: "DOL" },
    { label: 'Pesos', value: "PES" },
  ]

  ngOnInit(): void {
    if (this.allOption) {
      this.defaultValues.filter((result: ICustomSelectModel, index: number) => {
        if (result.value === 'all') {
          this.defaultValues.splice(index, 1)
        }
      })
    }
  }

  onChange($event: ICustomSelectModel) {
    this.onChangeEvent.emit($event)
  }
}

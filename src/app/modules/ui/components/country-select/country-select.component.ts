import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICustomSelectModel } from 'src/app/interfaces';
@Component({
  selector: 'ui-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  @Input() value: FormControl = new FormControl()

  @Input() max_width: boolean = false
  @Input() required: boolean = false
  @Input() allOption: boolean = false

  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  defaultValues: ICustomSelectModel[] = [
    { label: 'All', value: 'all' },
    { label: 'Uruguay', value: "URU" },
    { label: 'Peru', value: "PER" },
    { label: 'Ecuador', value: "ECU" },
  ]

  onChange($event: ICustomSelectModel) {
    this.onChangeEvent.emit($event)
  }

  ngOnInit(): void {
    if (this.allOption) {
      this.defaultValues.filter((result: ICustomSelectModel, index: number) => {
        if (result.value === 'all') {
          this.defaultValues.splice(index, 1)
        }
      })
    }
  }
}

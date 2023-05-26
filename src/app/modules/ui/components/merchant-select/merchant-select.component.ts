import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICustomSelectModel } from 'src/app/interfaces';

@Component({
  selector: 'ui-merchant-select',
  templateUrl: './merchant-select.component.html',
  styleUrls: ['./merchant-select.component.scss']
})
export class MerchantSelectComponent implements OnInit {

  @Input() value: FormControl = new FormControl()

  @Input() required: boolean = false
  @Input() max_width: boolean = false
  @Input() multiple: boolean = false
  @Input() disabled: boolean = false
  @Input() allOption: boolean = false

  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  defaultValues: ICustomSelectModel[] = [
    { label: 'All', value: "all" },
    { label: '12. GrupoTest', value: "1" },
    { label: '1. Inxbet', value: "3" },
    { label: '25. AT', value: "4" },
    { label: '5. Test20', value: "5" },
  ]

  ngOnInit(): void {
      if(this.allOption) {
        this.defaultValues.filter((result: ICustomSelectModel, index: number) => {
          if(result.value === 'all') {
            this.defaultValues.splice(index, 1)
          }
        })
      }
  }

  onChange($event: ICustomSelectModel) {
    this.onChangeEvent.emit($event)
  }

}

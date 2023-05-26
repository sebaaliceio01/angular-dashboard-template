import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ICustomSelectModel } from 'src/app/interfaces';

@Component({
  selector: 'ui-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})

export class InputSelectComponent {
  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  @Input() default_value: string | null = null

  @Input() valueOptions: ICustomSelectModel[] = []

  @Input() value: FormControl = new FormControl(null)

  @Input() label: string = ''

  @Input() multiple: boolean = false
  @Input() required: boolean = false
  @Input() max_width: boolean = false
  @Input() disabled: boolean = false

  ngOnInit(): void {
    if (this.default_value) {
      this.value.setValue(this.default_value)
      return
    }

    if (this.multiple) {
      this.value.setValue([this.valueOptions[0]['value']])
      return
    }

    this.onChangeEvent.emit({
      label: this.valueOptions[0]['label'],
      value: null,
    })
  }

  onChange($event: MatSelectChange): void {
    // Multiple selection emit an array of ICustomSelectModel

    if (this.multiple) {
      let values: ICustomSelectModel[] = []

      this.valueOptions.forEach((customSelect: ICustomSelectModel) => {

        $event.value.forEach((result: string) => {
          if (result === customSelect.value) {
            values.push({
              label: customSelect.label,
              value: result
            })
          }
        })
      })

      if (!values.length) {
        this.value.setValue([this.valueOptions[0]['value']])
        this.onChangeEvent.emit([{
          label: this.valueOptions[0]['label'],
          value: this.valueOptions[0]['value']
        }] as any)
        return
      }

      this.onChangeEvent.emit(values as any)
      return
    }

    // Simple selection emit an objet of ICustomSelectModel

    const response = this.valueOptions.find((result) => {
      return $event.value === result.value
    })

    this.onChangeEvent.emit(response)
  }

  getClass(): { [key: string]: boolean } {
    return {
      'max-width-mat-field': this.max_width
    }
  }
}

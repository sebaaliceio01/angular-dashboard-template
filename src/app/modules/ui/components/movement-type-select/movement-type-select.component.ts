import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICustomSelectModel } from 'src/app/interfaces';

@Component({
  selector: 'ui-movement-type-select',
  templateUrl: './movement-type-select.component.html',
  styleUrls: ['./movement-type-select.component.scss']
})
export class MovementTypeSelectComponent {
  @Input() required: boolean = false

  @Input() value: FormControl = new FormControl()

  @Output() onChangeEvent: EventEmitter<ICustomSelectModel> = new EventEmitter<ICustomSelectModel>()

  defaultValues: ICustomSelectModel[] = [
    { label: 'Seleccione', value: null },
    { label: 'BCP', value: "0002" },
  ]

  onChange($event: ICustomSelectModel) {
    this.onChangeEvent.emit($event)
  }
}

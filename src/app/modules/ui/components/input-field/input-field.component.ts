import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ui-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})

export class InputFieldComponent {
  @Input() value: FormControl = new FormControl()

  @Input() label: string = ''
  @Input() default_value: string
  @Input() type: string = ''

  @Input() required: boolean = false
  @Input() textArea: boolean = false
  @Input() max_width: boolean = false

  @Output() onChangeEvent: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: any): void {
    this.onChangeEvent.emit($event.target.value)
  }
}

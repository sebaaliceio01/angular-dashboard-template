import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ui-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent {
  @Input() required: boolean = false
  @Input() label: string = ''
  @Input() color: string = 'white'
}

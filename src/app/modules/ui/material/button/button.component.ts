import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() type: string = 'button';
  @Input() raised: boolean = false;
  @Input() flat: boolean = false;
  @Input() stroked: boolean = false;
  @Input() basic: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() isLoading: boolean = false;
  @Input() spinnerColor: string = 'primary';
  @Input() bg_white: boolean = false
  @Input() mat_menu: boolean = false
  @Input() full_width: boolean = false

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>()

  getClass() {
    return {
      [`mat-${this.color}`]: true,
      'mat-icon-button': !!this.icon,
      'bg-white': this.bg_white,
      'mat-menu': this.mat_menu,
      'full-width': this.full_width
    };
  }

  onEmit(): void {
    this.onClick.emit()
  }
}

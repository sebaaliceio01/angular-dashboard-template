import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ui-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
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
  @Input() bg_gray: boolean = false
  @Input() user_account: boolean = false
  @Input() bg_blue: boolean = false
  @Input() svg_path: string = ''
  @Input() menu_style: boolean = false
  @Input() sidebar: boolean = false

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>()

  getClass() {
    return {
      [`mat-${this.color}`]: true,
      'background-gray': this.bg_gray,
      'background-blue': this.bg_blue,
      'user-account': this.user_account,
      'menu-style': this.menu_style,
      'sidebar-style': this.sidebar,
    };
  }

  onEmit(): void {
    this.onClick.emit()
  }
}

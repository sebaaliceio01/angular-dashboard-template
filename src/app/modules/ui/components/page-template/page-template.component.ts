import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent {
  @Input() title: string = ''
  @Input() icon: string = 'dashboard'

  @Input() filters: boolean = false
  @Input() actions: boolean = true
}

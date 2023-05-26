import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableActions } from 'src/app/interfaces';
import { AuthenticationService } from 'src/app/utils/keycloak/services/authentication.service';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent<T> {
  @Input() icon: string = 'more_horiz'

  @Input() actions: ITableActions<any>[] = []

  constructor(public authenticationService: AuthenticationService) {}
}

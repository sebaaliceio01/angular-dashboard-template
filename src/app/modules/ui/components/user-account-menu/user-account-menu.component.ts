import { Component, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'user-account-menu',
  templateUrl: './user-account-menu.component.html',
  styleUrls: ['./user-account-menu.component.scss']
})
export class UserAccountMenuComponent {
  @Input() username: string = 'SA'

  constructor(
    public keycloakService: KeycloakService,
  ) {}

  logout(): void {
    this.keycloakService.logout()
  }
}

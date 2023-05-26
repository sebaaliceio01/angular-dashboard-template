import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthenticationService } from 'src/app/utils/keycloak/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userRole: string

  constructor(
    private authenticationService: AuthenticationService,
    private keycloakService: KeycloakService,
  ) {
    this.authenticationService.role$.subscribe((result) => {
      this.userRole = result[0]
    })
  }
}

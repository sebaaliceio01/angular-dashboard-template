import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthenticationService } from './utils/keycloak/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private keyCloakService: KeycloakService, private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.authenticationService.role = this.keyCloakService.getUserRoles()
  }
}

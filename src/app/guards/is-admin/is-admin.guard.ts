import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard extends KeycloakAuthGuard implements CanActivate {

  constructor(
    router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const keycloakRole = this.keycloak.getUserRoles()

    if (keycloakRole.includes(environment.roles.adminGeneral) || keycloakRole.includes(environment.roles.admin)) {
      return true
    }

    return false
  }

}
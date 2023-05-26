import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private roleSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  
  public role$: Observable<string[]> = this.roleSubject.asObservable()

  set role(roles: string[]) {
    this.roleSubject.next(roles)
  }

  get role(): string[] {
    return this.roleSubject.getValue()
  }
}

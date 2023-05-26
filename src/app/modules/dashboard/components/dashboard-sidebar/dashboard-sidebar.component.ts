import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren, ɵɵsetComponentScope } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ISidebarRoutes } from 'src/app/interfaces/sidebar-routes.interface';
import { SidebarRoutes } from 'src/app/utils';
import { AuthenticationService } from 'src/app/utils/keycloak/services/authentication.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

  subscriber: Subscription;

  roles: string[] = ['admin-general']

  urlActive: string

  showFiller: boolean = false;

  routes: ISidebarRoutes[]

  @Input() collapsed: boolean = false;

  @Output() mouseenter: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
  @Output() mouselave: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()

  constructor(public router: Router, private authenticationService: AuthenticationService) {
    this.routes = SidebarRoutes
    // this.roles = this.authenticationService.role
  }

  ngOnInit() {
    this.urlActive = this.router.url

    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.urlActive = event['url']
    });
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }

  onPanelOpen($event: MouseEvent) {
    this.mouseenter.emit($event)
    this.panels.forEach(panel => panel.open());
  }

  onPanelClose($event: MouseEvent) {
    this.mouselave.emit($event)
    this.panels.forEach(panel => panel.close());
  }

  onReturn() {
    this.panels.forEach(panel => panel.open());
  }

  commonArray(routeRoles: string[], userRoles: any): boolean {
    return routeRoles.some((elemento: any) => userRoles.includes(elemento));
  }
}


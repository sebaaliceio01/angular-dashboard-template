import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  @ViewChild('sidenav') sidenav: MatSidenav

  collapse: boolean = false

  get collapsed(): boolean { return this.collapse }

  collapseSidebar(collapse: boolean) {
    this.collapse = collapse
  }

  onPanelClose() {
    this.collapseSidebar(true)
    this.sidenav.close()
  }

  onPanelOpen() {
    this.collapseSidebar(false)
  }
}
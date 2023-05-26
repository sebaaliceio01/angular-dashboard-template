import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IComponentTitle, NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy{

  subscription: Subscription

  componentTitleOptions: IComponentTitle

  constructor(private navbarService: NavbarService) {
    this.subscription = this.navbarService.componentTitle$.subscribe((result: IComponentTitle) => {
      this.componentTitleOptions = result
      this.parseSteps(result.steps)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  parseSteps(steps: string[]) {
    this.componentTitleOptions.steps = []

    steps.forEach((result, index) => {
      this.componentTitleOptions.steps.push(result)

      if (index != steps.length - 1) {
        this.componentTitleOptions.steps.push('>')
      }
    })
  }
}

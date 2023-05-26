import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IComponentTitle {
  icon: string
  steps: string[]
}

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  componentTitleSubject: BehaviorSubject<IComponentTitle> = new BehaviorSubject<IComponentTitle>({
    icon: '',
    steps: []
  })

  componentTitle$: Observable<IComponentTitle> = this.componentTitleSubject.asObservable()

  set componentTitle(data: IComponentTitle) {
    this.componentTitleSubject.next(data)
  }

  get componentTitle(): IComponentTitle {
    return this.componentTitleSubject.getValue()
  }

  get componentTitleObserver(): Observable<IComponentTitle> {
    return this.componentTitle$
  }

  constructor() { }
}

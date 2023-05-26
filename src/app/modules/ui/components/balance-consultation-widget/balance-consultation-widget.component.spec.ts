import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceConsultationWidgetComponent } from './balance-consultation-widget.component';

describe('BalanceConsultationWidgetComponent', () => {
  let component: BalanceConsultationWidgetComponent;
  let fixture: ComponentFixture<BalanceConsultationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceConsultationWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceConsultationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

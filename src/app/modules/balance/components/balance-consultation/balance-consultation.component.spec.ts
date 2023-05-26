import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceConsultationComponent } from './balance-consultation.component';

describe('BalanceConsultationComponent', () => {
  let component: BalanceConsultationComponent;
  let fixture: ComponentFixture<BalanceConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

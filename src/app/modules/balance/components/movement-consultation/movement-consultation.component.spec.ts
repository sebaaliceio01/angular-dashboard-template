import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementConsultationComponent } from './movement-consultation.component';

describe('MovementConsultationComponent', () => {
  let component: MovementConsultationComponent;
  let fixture: ComponentFixture<MovementConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

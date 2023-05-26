import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypeSelectComponent } from './movement-type-select.component';

describe('MovementTypeSelectComponent', () => {
  let component: MovementTypeSelectComponent;
  let fixture: ComponentFixture<MovementTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementTypeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTypeSelectComponent } from './description-type-select.component';

describe('DescriptionTypeSelectComponent', () => {
  let component: DescriptionTypeSelectComponent;
  let fixture: ComponentFixture<DescriptionTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTypeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSelectComponent } from './merchant-select.component';

describe('MerchantSelectComponent', () => {
  let component: MerchantSelectComponent;
  let fixture: ComponentFixture<MerchantSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

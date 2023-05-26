import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBalanceRegisterComponent } from './new-balance-register.component';

describe('NewBalanceRegisterComponent', () => {
  let component: NewBalanceRegisterComponent;
  let fixture: ComponentFixture<NewBalanceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBalanceRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBalanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

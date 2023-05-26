import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceRegisterComponent } from './balance-register.component';

describe('MovementRegisterComponent', () => {
  let component: BalanceRegisterComponent;
  let fixture: ComponentFixture<BalanceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

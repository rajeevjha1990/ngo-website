import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramPaymentPage } from './program-payment.page';

describe('ProgramPaymentPage', () => {
  let component: ProgramPaymentPage;
  let fixture: ComponentFixture<ProgramPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

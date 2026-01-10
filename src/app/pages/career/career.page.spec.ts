import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerPage } from './career.page';

describe('CareerPage', () => {
  let component: CareerPage;
  let fixture: ComponentFixture<CareerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

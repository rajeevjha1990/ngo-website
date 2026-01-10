import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramApplyPage } from './program-apply.page';

describe('ProgramApplyPage', () => {
  let component: ProgramApplyPage;
  let fixture: ComponentFixture<ProgramApplyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

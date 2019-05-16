import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddDeleteComponent } from './employee-add-delete.component';

describe('EmployeeAddDeleteComponent', () => {
  let component: EmployeeAddDeleteComponent;
  let fixture: ComponentFixture<EmployeeAddDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftConfigComponent } from './shift-config.component';

describe('ShiftConfigComponent', () => {
  let component: ShiftConfigComponent;
  let fixture: ComponentFixture<ShiftConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftpoolComponent } from './shiftpool.component';

describe('ShiftpoolComponent', () => {
  let component: ShiftpoolComponent;
  let fixture: ComponentFixture<ShiftpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

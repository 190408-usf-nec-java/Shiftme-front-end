import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessPageComponent } from './buisness-page.component';

describe('BuisnessPageComponent', () => {
  let component: BuisnessPageComponent;
  let fixture: ComponentFixture<BuisnessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

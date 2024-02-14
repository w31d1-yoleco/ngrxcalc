import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcalertComponent } from './calcalert.component';

describe('CalcalertComponent', () => {
  let component: CalcalertComponent;
  let fixture: ComponentFixture<CalcalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcalertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

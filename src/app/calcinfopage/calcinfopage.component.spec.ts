import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcinfopageComponent } from './calcinfopage.component';

describe('CalcinfopageComponent', () => {
  let component: CalcinfopageComponent;
  let fixture: ComponentFixture<CalcinfopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcinfopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcinfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

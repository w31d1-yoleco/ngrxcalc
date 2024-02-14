import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalctableComponent } from './calctable.component';

describe('CalctableComponent', () => {
  let component: CalctableComponent;
  let fixture: ComponentFixture<CalctableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalctableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalctableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

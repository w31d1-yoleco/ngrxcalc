import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorbodyComponent } from './calculatorbody.component';

describe('CalculatorbodyComponent', () => {
  let component: CalculatorbodyComponent;
  let fixture: ComponentFixture<CalculatorbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatorbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

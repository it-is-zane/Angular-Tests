import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderThingComponent } from './adder-thing.component';

describe('AdderThingComponent', () => {
  let component: AdderThingComponent;
  let fixture: ComponentFixture<AdderThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdderThingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdderThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VollzoInputComponent } from './vollzo-input.component';

describe('VollzoInputComponent', () => {
  let component: VollzoInputComponent;
  let fixture: ComponentFixture<VollzoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VollzoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VollzoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

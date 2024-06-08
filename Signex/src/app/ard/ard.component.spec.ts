import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARDComponent } from './ard.component';

describe('ARDComponent', () => {
  let component: ARDComponent;
  let fixture: ComponentFixture<ARDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ARDComponent]
    });
    fixture = TestBed.createComponent(ARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

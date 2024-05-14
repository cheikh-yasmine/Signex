import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorCodeComponent } from './visitor-code.component';

describe('VisitorCodeComponent', () => {
  let component: VisitorCodeComponent;
  let fixture: ComponentFixture<VisitorCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorCodeComponent]
    });
    fixture = TestBed.createComponent(VisitorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

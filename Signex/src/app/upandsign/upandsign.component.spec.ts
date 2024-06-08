import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpandsignComponent } from './upandsign.component';

describe('UpandsignComponent', () => {
  let component: UpandsignComponent;
  let fixture: ComponentFixture<UpandsignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpandsignComponent]
    });
    fixture = TestBed.createComponent(UpandsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

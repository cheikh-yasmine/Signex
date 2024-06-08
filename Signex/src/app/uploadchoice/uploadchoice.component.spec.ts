import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadchoiceComponent } from './uploadchoice.component';

describe('UploadchoiceComponent', () => {
  let component: UploadchoiceComponent;
  let fixture: ComponentFixture<UploadchoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadchoiceComponent]
    });
    fixture = TestBed.createComponent(UploadchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

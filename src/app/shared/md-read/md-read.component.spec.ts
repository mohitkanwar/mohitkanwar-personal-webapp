import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdReadComponent } from './md-read.component';

describe('MdReadComponent', () => {
  let component: MdReadComponent;
  let fixture: ComponentFixture<MdReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdReadComponent]
    });
    fixture = TestBed.createComponent(MdReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

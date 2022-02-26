import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeevanRatansComponent } from './jeevan-ratans.component';

describe('JeevanRatansComponent', () => {
  let component: JeevanRatansComponent;
  let fixture: ComponentFixture<JeevanRatansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeevanRatansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeevanRatansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

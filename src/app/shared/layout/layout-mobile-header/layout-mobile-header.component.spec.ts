import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMobileHeaderComponent } from './layout-mobile-header.component';

describe('LayoutMobileHeaderComponent', () => {
  let component: LayoutMobileHeaderComponent;
  let fixture: ComponentFixture<LayoutMobileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMobileHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

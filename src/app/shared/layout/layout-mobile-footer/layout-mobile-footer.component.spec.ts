import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMobileFooterComponent } from './layout-mobile-footer.component';

describe('LayoutMobileFooterComponent', () => {
  let component: LayoutMobileFooterComponent;
  let fixture: ComponentFixture<LayoutMobileFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMobileFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMobileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

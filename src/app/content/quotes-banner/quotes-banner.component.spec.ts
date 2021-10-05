import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBannerComponent } from './quotes-banner.component';

describe('QuotesBannerComponent', () => {
  let component: QuotesBannerComponent;
  let fixture: ComponentFixture<QuotesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

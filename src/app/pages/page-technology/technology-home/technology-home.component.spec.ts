import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyHomeComponent } from './technology-home.component';

describe('TechnologyHomeComponent', () => {
  let component: TechnologyHomeComponent;
  let fixture: ComponentFixture<TechnologyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyHomeComponent]
    });
    fixture = TestBed.createComponent(TechnologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

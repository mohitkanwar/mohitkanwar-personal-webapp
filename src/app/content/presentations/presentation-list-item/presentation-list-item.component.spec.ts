import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationListItemComponent } from './presentation-list-item.component';

describe('PresentationListItemComponent', () => {
  let component: PresentationListItemComponent;
  let fixture: ComponentFixture<PresentationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

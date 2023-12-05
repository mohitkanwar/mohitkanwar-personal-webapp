import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GinTutorialComponent } from './gin-tutorial.component';

describe('GinTutorialComponent', () => {
  let component: GinTutorialComponent;
  let fixture: ComponentFixture<GinTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GinTutorialComponent]
    });
    fixture = TestBed.createComponent(GinTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCxoCircleComponent } from './your-cxo-circle.component';

describe('YourCxoCircleComponent', () => {
  let component: YourCxoCircleComponent;
  let fixture: ComponentFixture<YourCxoCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCxoCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCxoCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

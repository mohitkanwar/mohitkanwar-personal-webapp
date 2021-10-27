import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublicInfoComponent } from './my-public-info.component';

describe('MyPublicInfoComponent', () => {
  let component: MyPublicInfoComponent;
  let fixture: ComponentFixture<MyPublicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPublicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTechItemComponent } from './blog-tech-item.component';

describe('BlogTechItemComponent', () => {
  let component: BlogTechItemComponent;
  let fixture: ComponentFixture<BlogTechItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTechItemComponent]
    });
    fixture = TestBed.createComponent(BlogTechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

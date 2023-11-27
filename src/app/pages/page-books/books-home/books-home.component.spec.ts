import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHomeComponent } from './books-home.component';

describe('BooksHomeComponent', () => {
  let component: BooksHomeComponent;
  let fixture: ComponentFixture<BooksHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksHomeComponent]
    });
    fixture = TestBed.createComponent(BooksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

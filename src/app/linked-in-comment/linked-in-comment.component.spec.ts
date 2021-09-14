import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInCommentComponent } from './linked-in-comment.component';

describe('LinkedInCommentComponent', () => {
  let component: LinkedInCommentComponent;
  let fixture: ComponentFixture<LinkedInCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

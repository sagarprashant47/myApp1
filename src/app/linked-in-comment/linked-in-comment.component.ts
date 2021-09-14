import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-in-comment',
  templateUrl: './linked-in-comment.component.html',
  styleUrls: ['./linked-in-comment.component.css']
})
export class LinkedInCommentComponent implements OnInit {
  @Input() lstPosts : any;
  constructor() { }

  ngOnInit(): void {
  }

}

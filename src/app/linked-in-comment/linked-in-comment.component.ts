import { Component, Input, OnInit } from '@angular/core';
import { LinkedInService } from '../linked-in.service';
import { Comment } from '../models/linkedInComment';

@Component({
  selector: 'app-linked-in-comment',
  templateUrl: './linked-in-comment.component.html',
  styleUrls: ['./linked-in-comment.component.css']
})
export class LinkedInCommentComponent implements OnInit {
  @Input() lstPosts : any;
  objComment: Comment = new Comment();
  
  constructor(public linkedinService : LinkedInService) 
  { 
    console.log(this.lstPosts);
  }

  ngOnInit(): void {
  }

  AddComment(postId: number){
    debugger
    this.linkedinService.AddComment(postId,this.objComment).subscribe(result=>{
        this.linkedinService.GetAllPost().subscribe(cmt=>{
          this.lstPosts =cmt;
        })
      this.objComment.Comments ="";
    });
  }

  ChangeButtonColor( )
  {
       
  }

  
}

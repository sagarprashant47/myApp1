import { Component, OnInit } from '@angular/core';
import { LinkedInService } from '../linked-in.service';
import { Post } from '../models/linkedInPost';

@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css']
})
export class LinkedInComponent implements OnInit {
  linkedinPost: Post = new Post();
  public lstPost : Array<Post>;
  constructor(public linkedinService : LinkedInService) 
  {
      this.lstPost= new Array<Post>();
  }

  ngOnInit(): void {
    
   
    this.getAllPost();
  }
  public getAllPost(){
    this.linkedinService.GetAllPost()
     .subscribe(data => this.lstPost = data);
  }

  AddPost():void {
    //debugger
    //console.log(this.linkedinPost);  
    this.linkedinService.AddPost(this.linkedinPost).subscribe(result=>{
       this.linkedinService.GetAllPost().subscribe(list=>{
         this.lstPost = list
      })
    });
  }

}

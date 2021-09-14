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
  constructor(public linkedinService : LinkedInService) 
  {

  }

  ngOnInit(): void {
  }

  AddPost():void {
    //debugger
    //console.log(this.linkedinPost);  
    this.linkedinService.AddPost(this.linkedinPost).subscribe(result=>{
      // this.linkedinService.getAllList().subscribe(list=>{
      //   this.lists = list
      //})
    });
  }

}

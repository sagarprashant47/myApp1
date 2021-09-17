import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './models/linkedInComment';
import { Post } from './models/linkedInPost';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
  
  private readonly baseurl : string = "http://localhost:44140/api/home";
  formData: Post = new Post();
  
  constructor(private readonly http : HttpClient) { 
 
  }

  AddPost(data:Post):Observable<Array<Post>>{
    debugger
    return this.http.post<Array<Post>>( `${this.baseurl}`+'/UpdatePost',data);
  }

  GetAllPost():Observable<Array<Post>>{
    //debugger
    return this.http.get<Array<Post>>(`${this.baseurl}`);
  }

  AddComment(postId: number ,data: Comment):Observable<Array<Comment>>{
    //debugger
    return this.http.post<Array<Comment>>(`${this.baseurl}/AddComment/${postId}`,data);
  }
}

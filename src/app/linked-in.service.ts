import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
  private post  : any[];
  private readonly baseurl : string = "http://localhost:44140/api/home";
  constructor() { 
    this.post='';

  }

  getAllPosts(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(this.baseurl);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
headers:{}={
  'accept':'application/json',
  'content-type':'application/json'
};
url='https://jsonplaceholder.typicode.com/posts'
  constructor(private https:HttpClient) { }
  getPosts(){
      return this.https.get(this.url)
  }
  
}

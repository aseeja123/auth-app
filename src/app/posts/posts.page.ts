import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  records: {} = {};
  posts: any[] = [];
  id: [] = [];
  constructor(private service: PostServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.retreivePosts();

    console.log(this.posts)
  }
  /**fetchPosts(){
    this.service.getPosts().subscribe((res)=>{
        res=this.records;
        console.log(res);
        console.log(this.records)
    },
    (error)=>{
      console.log(error);
    })
  }**/
  retreivePosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res: any) => {
      console.log(res)
      console.log(this.id)
      const data = JSON.stringify(res)
      console.log(data)
      this.posts.push(data);
      console.log(this.posts)
    },
      (error) => {
        console.log(error)
      })
  }
  scrollBottom(event) {
    this.retreivePosts();
    event.target.complete();
    if(this.posts.length=10){
    if (this.posts.length == 100) {
      event.target.disabled = true;
    }
  }
}
}

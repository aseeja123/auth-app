import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostServiceService } from '../services/post-service.service';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule
  ],
  providers:[HttpClient,PostServiceService],
  declarations: [PostsPage]
})
export class PostsPageModule {}

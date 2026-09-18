import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../../posts.data';
import { Posts } from '../../../interface/posts';

@Component({
  selector: 'app-natural',
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './natural.html',
  styleUrl: './natural.css',
})
export class Natural {

  //======================= filtering state =======================
  naturalPosts: Posts[] = AllPosts.filter(post => post.category === 'natural');

  //======================= filtering logic =======================
  get displayedPosts(): Posts[] {
    return this.naturalPosts;
  }

  //======================= view mode state =======================
  viewMode: 'grid' | 'list' = 'grid';

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

}

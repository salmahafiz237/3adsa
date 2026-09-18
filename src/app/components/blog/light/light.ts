import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../../posts.data';
import { Posts } from '../../../interface/posts';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './light.html',
  styleUrl: './light.css',
})
export class Light {
  
  //======================= filtering state =======================
  lightPosts: Posts[] = AllPosts.filter(post => post.category === 'light');

  //======================= filtering logic =======================
  get displayedPosts(): Posts[] {
    return this.lightPosts;
  }

  //======================= view mode state =======================
  viewMode: 'grid' | 'list' = 'grid';

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}
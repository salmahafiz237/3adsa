import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../../posts.data';
import { Posts } from '../../../interface/posts';


@Component({
  selector: 'app-portrait',
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './portrait.html',
  styleUrl: './portrait.css',
})

export class Portrait {

  //======================= filtering state =======================
  portraitPosts: Posts[] = AllPosts.filter(post => post.category === 'portrait');

  //======================= filtering logic =======================
  get displayedPosts(): Posts[] {
    return this.portraitPosts;
  }

  //======================= view mode state =======================
  viewMode: 'grid' | 'list' = 'grid';

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

}


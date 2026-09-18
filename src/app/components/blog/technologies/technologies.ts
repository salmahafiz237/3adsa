import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../../posts.data';
import { Posts } from '../../../interface/posts';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {

   //======================= filtering state =======================
   technologiesPosts: Posts[] = AllPosts.filter(post => post.category === 'portrait');
  
    //======================= filtering logic =======================
    get displayedPosts(): Posts[] {
      return this.technologiesPosts;
    }
  
    //======================= view mode state =======================
    viewMode: 'grid' | 'list' = 'grid';
  
    setViewMode(mode: 'grid' | 'list') {
      this.viewMode = mode;
    }
 }

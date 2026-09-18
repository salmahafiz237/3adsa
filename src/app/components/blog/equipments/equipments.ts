import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet } from '@angular/router';
import { AllPosts } from '../../../posts.data';
import { Posts } from '../../../interface/posts';

@Component({
  selector: 'app-equipments',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './equipments.html',
  styleUrl: './equipments.css',
})
export class Equipments {

  //======================= filtering state =======================
  equipmentsPosts: Posts[] = AllPosts.filter(post => post.category === 'equipments');

  //======================= filtering logic =======================
  get displayedPosts(): Posts[] {
    return this.equipmentsPosts;
  }

  //======================= view mode state =======================
  viewMode: 'grid' | 'list' = 'grid';

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}

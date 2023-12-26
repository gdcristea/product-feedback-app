import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CategoriesComponent,
    RoadmapComponent
  ],
  exports: [
    CategoriesComponent,
    RoadmapComponent
  ]
})
export class SharedModule {}

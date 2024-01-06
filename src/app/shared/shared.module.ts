import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import {CustomButtonComponent} from "./components/custom-button/custom-button.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CategoriesComponent,
    RoadmapComponent,
    CustomButtonComponent
  ],
  exports: [
    CategoriesComponent,
    RoadmapComponent,
    CustomButtonComponent
  ]
})
export class SharedModule {}

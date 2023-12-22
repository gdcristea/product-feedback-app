import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CategoriesComponent
  ],
  exports: [CategoriesComponent],
})
export class SharedModule {}

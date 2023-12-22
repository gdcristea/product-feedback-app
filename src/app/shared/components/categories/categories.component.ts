import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../../models/category.interface";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  /**
   * Stores the list of categories
   */
  categories: Category[] = [
    {
      id: 1,
      name: 'All',
      checked: true,
    },
    {
      id: 2,
      name: 'UI',
      checked: false,
    },
    {
      id: 3,
      name: 'UX',
      checked: false,
    },
    {
      id: 4,
      name: 'Enhancement',
      checked: false,
    },
    {
      id: 5,
      name: 'Bug',
      checked: false,
    },
    {
      id: 6,
      name: 'Feature',
      checked: false,
    }
  ]

  /**
   * Emits the name of the selected category
   */
  @Output() filterCategories: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Checks the category the user selected and emits its name.
   * @param categoryId
   */
  onSelectCategory(categoryId: number): void {
   const checkedCategory: Category = this.categories.find((category: Category) => category.id === categoryId) as Category;
   const checkedIndex: number = this.categories.indexOf(checkedCategory);
   this.categories.forEach((category: Category) => category.checked = false);
   this.categories[checkedIndex].checked = true;

   this.filterCategories.emit(checkedCategory.name);
  }
}

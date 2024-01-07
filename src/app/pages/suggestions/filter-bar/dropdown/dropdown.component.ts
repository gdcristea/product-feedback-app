import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  /**
   * The list of filters
   */
  filters: string[] = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

  /**
   * Current selected filter
   */
  selectedFilter: string = 'Most Upvotes';

  /**
   * Is dropdown open or not. Default false/not open.
   */
  isOpen = false;

  /**
   * Manages the appearance of the dropdown
   */
  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  /**
   * Holds logic to handle the dropdown
   * @param filter
   */
  selectFilter(filter: string): void {
    if (filter === this.selectedFilter) {
      this.isOpen = false;
    } else {
      this.selectedFilter = filter;
      this.isOpen = false;
    }
  }
}

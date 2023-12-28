import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent {
  /**
   * Show/Hide sidebar
   * false by default
   */
  showSidebar = false;

  /**
   * Show/hide sidebar
   */
  manageSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}

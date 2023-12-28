import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Show/Hide close icon
   * false by default
   */
  showCloseIcon = false;

  /**
   * Event emitter for showing the sidebar
   */
  @Output() manageSidebar: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Show icons (close, hamburger) based on clicks
   * Emit event to show/hide the sidebar
   */
  clickOnIcon(): void {
    this.showCloseIcon = !this.showCloseIcon;
    this.manageSidebar.emit();
  }
}

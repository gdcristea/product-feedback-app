import {Component} from '@angular/core';
import {ManageSidebarService} from "../../../services/manage-sidebar/manage-sidebar.service";

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
  showCloseIcon: boolean;

  constructor(private readonly manageSidebarService: ManageSidebarService) {}

  ngOnInit(): void {
    this.manageSidebarService.getSidebarStateAsObservable()
        .subscribe((sidebarState: boolean): void => {
          this.showCloseIcon = sidebarState;
        })
  }

  /**
   * Show icons (close, hamburger) based on user's actions
   */
  clickOnIcon(): void {
    if (this.showCloseIcon) {
      this.manageSidebarService.closeSidebar();
    } else {
      this.manageSidebarService.openSidebar();
    }
  }
}

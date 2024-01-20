import {Component} from '@angular/core';
import {ManageSidebarService} from "../../../services/manage-sidebar/manage-sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  /**
   * Show/hide this component
   */
  showSidebar = false;

  constructor(private readonly manageSidebarService: ManageSidebarService) {}

  ngOnInit(): void {
    this.manageSidebarService.getSidebarStateAsObservable()
      .subscribe((sidebarState: boolean): void => {
        this.showSidebar = sidebarState;
    })
  }

  /**
   * Close the sidebar when the user clicks
   * on the gray overlay that covers the rest of the
   * screen when the sidebar is opened
   */
  closeSidebar(): void {
    this.manageSidebarService.closeSidebar();
  }
}

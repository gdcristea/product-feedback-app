import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ManageSidebarService {
  /**
   * Determines if the sidebar is shown or not
   * Default is false
   */
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Get sidebar state as observable
   */
  getSidebarStateAsObservable(): Observable<boolean> {
    return this.sidebarState.asObservable();
  }

  /**
   * Opens the sidebar
   */
  openSidebar(): void {
    this.sidebarState.next(true);
  }

  /**
   * Closes the sidebar
   */
  closeSidebar(): void {
    this.sidebarState.next(false);
  }
}

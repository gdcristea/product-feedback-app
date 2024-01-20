import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuggestionsComponent} from "./suggestions.component";
import {SuggestionsRoutingModule} from "./suggestions-routing.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from "../../shared/shared.module";
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { DropdownComponent } from './filter-bar/dropdown/dropdown.component';
import {ManageSidebarService} from "../../services/manage-sidebar/manage-sidebar.service";

@NgModule({
  declarations: [SuggestionsComponent, HeaderComponent, SidebarComponent, FilterBarComponent, DropdownComponent],
  imports: [CommonModule, SuggestionsRoutingModule, SharedModule],
  providers: [ManageSidebarService]
})
export class SuggestionsModule { }

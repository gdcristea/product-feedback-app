import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuggestionsComponent} from "./suggestions.component";
import {SuggestionsRoutingModule} from "./suggestions-routing.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [SuggestionsComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, SuggestionsRoutingModule, SharedModule]
})
export class SuggestionsModule { }

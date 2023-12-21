import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuggestionsComponent} from "./suggestions.component";
import {SuggestionsRoutingModule} from "./suggestions-routing.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SuggestionsComponent, HeaderComponent],
  imports: [CommonModule, SuggestionsRoutingModule]
})
export class SuggestionsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutingPathsService} from "./services/routing-paths/routing-paths.service";

const routes: Routes = [
  /**
   * Redirect empty path to suggestions page
   */
  {
    path: '',
    redirectTo: RoutingPathsService.paths.suggestions,
    pathMatch: 'full',
  },
  /**
   * Suggestions page
   */
  {
    path: RoutingPathsService.paths.suggestions,
    loadChildren: () => import('./pages/suggestions/suggestions.module').then(m => m.SuggestionsModule)
  },
  /**
   * Wildcard route for any other route than the ones defined above
   */
  {
    path: '**',
    redirectTo: RoutingPathsService.paths.suggestions
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 * pages:
 * 1. suggestions
 * 2. feedback-detail + i will need an id here to identify the feedback
 * 3. new feedback
 * 4. edit feedback + i will need an id here to identify the feedback
 * 5. road map
 */

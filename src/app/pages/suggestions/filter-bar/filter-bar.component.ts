import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  /**
   * Number of results after filtering
   */
  @Input() numberOfFilteredResults: number = 6;
}

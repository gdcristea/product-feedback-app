import { Component } from '@angular/core';
import {Roadmap} from "../../../models/roadmap.interface";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  /**
   * Roadmap details
   */
  roadmap: Roadmap[] = [
    {
      id: 1,
      color: '#F49F85',
      status: 'Planned',
      value: 2
    },
    {
      id: 2,
      color: '#AD1FEA',
      status: 'In-Progress',
      value: 3
    },
    {
      id: 3,
      color: '#62BCFA',
      status: 'Live',
      value: 1
    }
  ];

  /**
   * Navigate to roadmap page
   */
  navigateToRoadmap(): void {
    //TO BE ADDED LATER
  }
}

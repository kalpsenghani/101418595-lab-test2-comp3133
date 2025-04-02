import { Component } from '@angular/core';
import { SpaceXService } from '../services/spacex.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';
  filteredMissions: any[] = [];

  constructor(private spaceXService: SpaceXService) {}

  search(): void {
    this.spaceXService.getMissionsByYear(this.launchYear).subscribe(data => {
      this.filteredMissions = data;
    });
  }
}

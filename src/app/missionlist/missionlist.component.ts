import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SpaceXLaunch } from '../interfaces/spacex.interface';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule, 
    NgFor,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  @Input() yearFilter: string = '';
  @Input() launchStatus: string = '';
  @Input() landingStatus: string = '';
  
  allMissions: SpaceXLaunch[] = [];
  missions: (SpaceXLaunch & { showDetails: boolean })[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<SpaceXLaunch[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.allMissions = data;
      this.missions = data.map(mission => ({
        ...mission,
        showDetails: false
      }));
    });
  }

  ngOnChanges(): void {
    this.filterMissions();
  }

  toggleDetails(mission: SpaceXLaunch & { showDetails: boolean }): void {
    mission.showDetails = !mission.showDetails;
  }

  private filterMissions(): void {
    this.missions = this.allMissions.map(mission => ({
      ...mission,
      showDetails: false
    })).filter(mission => {
      const yearMatch = !this.yearFilter || mission.launch_year === this.yearFilter;
      const launchMatch = !this.launchStatus || 
        (this.launchStatus === 'success' && mission.launch_success) ||
        (this.launchStatus === 'failed' && !mission.launch_success);
      const landingMatch = !this.landingStatus || 
        (this.landingStatus === 'success' && mission.rocket.first_stage.cores[0].land_success) ||
        (this.landingStatus === 'failed' && !mission.rocket.first_stage.cores[0].land_success);
      
      return yearMatch && launchMatch && landingMatch;
    });
  }
}

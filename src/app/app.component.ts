import { Component } from '@angular/core';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MissionlistComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101418595-lab-test2-comp3133';
  yearFilter: string = '';
  launchStatus: string = '';
  landingStatus: string = '';

  applyFilters() {
    // This will be handled by the missionlist component
  }

  resetFilters() {
    this.yearFilter = '';
    this.launchStatus = '';
    this.landingStatus = '';
    // This will be handled by the missionlist component
  }
}

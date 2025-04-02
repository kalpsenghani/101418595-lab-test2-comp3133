import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMissionsByYear(year: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?launch_year=${year}`);
  }
}

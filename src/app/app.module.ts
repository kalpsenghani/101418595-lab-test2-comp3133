import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// ✅ Import the MissionlistComponent
import { MissionlistComponent } from './missionlist/missionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent  // ✅ This must be here
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

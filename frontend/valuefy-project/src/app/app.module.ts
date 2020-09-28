import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './videoplayer/videoplayer.component';
import { PlayListComponent } from './playlist/playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './videoservices.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    PlayListComponent
  ],
  imports: [
    BrowserModule,
    //// AppRoutingModule,
    HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

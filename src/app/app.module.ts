import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordFinderComponent } from './word-finder/word-finder.component';
// Services
import { WordFinderService } from './word-finder/word-finder.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    WordFinderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [WordFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

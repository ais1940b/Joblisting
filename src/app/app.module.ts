import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from  '@angular/common/http';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

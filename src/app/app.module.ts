import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { BadgeComponent } from './pages/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypographyComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    // Please keep in alphabetical order
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

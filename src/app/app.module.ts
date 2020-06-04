import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
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
import {
  BottomSheetComponent,

  BottomSheetOverviewExampleSheet,
} from './pages/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { CardComponent } from './pages/card/card.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypographyComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetOverviewExampleSheet,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // Please keep in alphabetical order
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,



    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}

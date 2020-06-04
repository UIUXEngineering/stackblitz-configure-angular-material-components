import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeComponent } from './pages/badge/badge.component';
import {
  BottomSheetComponent,
  BottomSheetOverviewExampleSheet,
} from './pages/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ButtonComponent } from './pages/button/button.component';
import { CardComponent } from './pages/card/card.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { HomeComponent } from './pages/home/home.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { TableComponent } from './pages/table/table.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { DialogComponent, DialogOverviewExampleDialog } from './pages/dialog/dialog.component';

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
    ChipsComponent,
    TableComponent,
    DatepickerComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Please keep in alphabetical order
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
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

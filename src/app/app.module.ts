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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
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
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { GridListComponent } from './pages/grid-list/grid-list.component';
import { InputComponent } from './pages/input/input.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { RadioButtonComponent } from './pages/radio-button/radio-button.component';
import { SelectComponent } from './pages/select/select.component';
import { SliderComponent } from './pages/slider/slider.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { TabGroupComponent } from './pages/tab-group/tab-group.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { AppTooltipComponent } from './pages/tooltip/tooltip.component';
import { ListComponent } from './pages/list/list.component';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { TreeComponent } from './pages/tree/tree.component';

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
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    InputComponent,
    MenuComponent,
    PaginatorComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    StepperComponent,
    TabGroupComponent,
    ToolbarComponent,
    AppTooltipComponent,
    ListComponent,
    SnackbarComponent,
    TreeComponent,
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
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,


    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}

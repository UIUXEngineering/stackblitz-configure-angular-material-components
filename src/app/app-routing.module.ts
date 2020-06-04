import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeComponent } from './pages/badge/badge.component';
import { BottomSheetComponent } from './pages/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ButtonComponent } from './pages/button/button.component';
import { CardComponent } from './pages/card/card.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { ExpansionPanelComponent } from './pages/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { GridListComponent } from './pages/grid-list/grid-list.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/input/input.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'bottom-sheet',
    component: BottomSheetComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'button-toggle',
    component: ButtonToggleComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'chips',
    component: ChipsComponent,
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
  {
    path: 'form-field',
    component: FormFieldComponent,
  },
  {
    path: 'grid-list',
    component: GridListComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'paginator',
    component: PaginatorComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

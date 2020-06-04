import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeComponent } from './pages/badge/badge.component';
import { BottomSheetComponent } from './pages/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ButtonComponent } from './pages/button/button.component';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './pages/home/home.component';
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllStyleOptionsComponent } from './all-style-options/all-style-options.component';
import { AllGraphicsComponent } from './all-graphics/all-graphics.component';
import { StyleColorsComponent } from './style-colors/style-colors.component';
import { GraphicComponent } from './graphic/graphic.component';
import { UserInfoService } from '../core/user-info.service';
import { AuthchildrenGuard } from './core/authchildren.guard';
import { CanDeactivateGuard } from './core/can-deactivate.guard';
const routes: Routes = [
  {
    path: '',
    component: AllStyleOptionsComponent,
    canActivateChild: [AuthchildrenGuard],
    canDeactivate: [CanDeactivateGuard],
    children: [
      {path: 'allGraphics', component: AllGraphicsComponent,
      children: [
        {path: 'graphic/:graphicName', component: GraphicComponent}
      ]},
      {path: 'allColors', component: StyleColorsComponent},
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AllStyleOptionsComponent,
    AllGraphicsComponent,
    StyleColorsComponent,
    GraphicComponent
  ],
  providers: [
    UserInfoService,
    CanDeactivateGuard,
    AuthchildrenGuard
  ],
})
export class StyleGalleryModule { }

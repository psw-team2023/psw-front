import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/feature-modules/layout/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistrationComponent } from '../auth/registration/registration.component';
import { CheckpointComponent } from 'src/app/feature-modules/tour-authoring/checkpoint/checkpoint.component';
import { TourComponent } from 'src/app/feature-modules/tour-authoring/tour/tour.component';
import { EquipmentComponent } from 'src/app/feature-modules/administration/equipment/equipment.component';
import { AuthGuard } from '../auth/auth.guard';

import { TourProblemsComponent } from 'src/app/feature-modules/tour-problem/tour-problems/tour-problem.component';

import { TourEquipmentComponent } from 'src/app/feature-modules/tour-authoring/tour-equipment/tour-equipment.component';
import { ObjectComponent } from 'src/app/feature-modules/tour-authoring/object-form/object.component';
import { TouristSelectedEquipmentComponent } from 'src/app/feature-modules/tourist/tourist-selected-equipment/tourist-selected-equipment.component';
import { TourReviewFormComponent } from 'src/app/feature-modules/marketplace/tour-review-form/tour-review-form.component';
import { TourReviewComponent } from 'src/app/feature-modules/marketplace/tour-review/tour-review.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'equipment', component: EquipmentComponent, canActivate: [AuthGuard],},
  {path: 'tour-problem', component: TourProblemsComponent, canActivate: [AuthGuard],},
  {path: 'checkpoint/:id', component: CheckpointComponent},
  {path: 'tour', component: TourComponent},
  {path: 'equipment/:id', component: TourEquipmentComponent},
  {path: 'object', component: ObjectComponent},
  {path: 'touristSelectingEquipment', component: TouristSelectedEquipmentComponent},
  {path: 'tour-review-form', component: TourReviewFormComponent},
  {path: 'tour-review', component: TourReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

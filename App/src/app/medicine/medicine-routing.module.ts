import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedAddComponent } from './med-add/med-add.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MedListComponent } from './med-list/med-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MedEditComponent } from './med-edit/med-edit.component';
import { AuthGuard } from '../Auth/guard/auth.guard';


const routes: Routes = [
  { path: "", component: MedListComponent },
  { path: "add", component: MedAddComponent ,canActivate:[AuthGuard]},
  { path: "details/:id", component: MedDetailsComponent ,canActivate:[AuthGuard]},
  { path: 'edit/:id', component: MedEditComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatInputModule, MatSelectModule, MatSlideToggleModule],
  exports: [RouterModule, MatInputModule, MatSelectModule, MatSlideToggleModule],
})
export class MedRoutingModule { }

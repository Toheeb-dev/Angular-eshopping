import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { ContainerComponent } from './container/container.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [
  {path: "", redirectTo: "container", pathMatch: "full"},
  {path: 'container', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  {
    path: "accounts",
    component: UsersTableComponent
  },
  {
    path: "accounts/:id",
    component: UserTableComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'accounts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

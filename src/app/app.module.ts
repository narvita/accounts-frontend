import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { UserTableComponent } from './user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

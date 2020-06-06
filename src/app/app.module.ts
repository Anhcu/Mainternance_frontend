import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { AreasComponent } from './components/areas/areas.component';
import { ToastrModule } from 'ngx-toastr';
import { MaterialsComponent } from './components/materials/materials.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ProceduresComponent } from './components/procedures/procedures.component';
import { TypologiesComponent } from './components/typologies/typologies.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    EmployeesComponent,
    UsersComponent,
    AreasComponent,
    MaterialsComponent,
    CompetencesComponent,
    ProceduresComponent,
    TypologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

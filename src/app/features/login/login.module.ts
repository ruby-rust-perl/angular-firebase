import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { RegisterComponent } from '../../components/register/register.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }

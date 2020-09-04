import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [ContactFormComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule
  ]
})
export class CmspageModule { }

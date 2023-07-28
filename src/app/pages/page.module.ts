import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PageRoutingModule, LoginModule, SignupModule],
})
export class PageModule {}

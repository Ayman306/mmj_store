import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageRoutingModule } from './pages/page-routing.module';
import { PageModule } from './pages/page.module';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

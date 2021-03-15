import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsModule } from './modules/details/details.module';
import { CoreModule } from './modules/core/core.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const components = [AppComponent, ProfileComponent];

const modules = [
  BrowserModule,
  AppRoutingModule,
  DetailsModule,
  CoreModule,
  DashboardModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule {}

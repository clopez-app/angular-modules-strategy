import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsOverviewComponent } from './components/details-overview/details-overview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsOverviewComponent, ProfileComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}

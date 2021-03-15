import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutService } from 'src/app/services/layout.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  providers: [LayoutService],
  exports: [LayoutComponent, NotFoundComponent],
})
export class CoreModule {}

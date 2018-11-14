import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepositoriesRoutingModule } from '@app/pages/repositories/repositories-routing.module';
import { RepositoriesComponent } from '@app/pages/repositories/repositories.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    SharedModule,
    RepositoriesRoutingModule,
    CommonModule
  ]
})
export class RepositoriesModule { }

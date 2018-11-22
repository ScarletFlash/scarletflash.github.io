import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepositoryRoutingModule } from '@app/pages/repository/repository-routing.module';
import { RepositoryComponent } from '@app/pages/repository/repository.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    SharedModule,
    RepositoryRoutingModule,
    CommonModule
  ]
})
export class RepositoryModule { }

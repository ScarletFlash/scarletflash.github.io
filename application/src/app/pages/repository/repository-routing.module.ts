import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from '@app/pages/repository/repository.component';

const routes: Routes = [
    {
        path: '',
        component: RepositoryComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RepositoryRoutingModule {}

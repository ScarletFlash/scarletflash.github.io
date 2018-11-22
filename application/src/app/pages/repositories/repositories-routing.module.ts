import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from '@app/pages/repositories/repositories.component';

const routes: Routes = [
    {
        path: '',
        component: RepositoriesComponent
    },
    {
        path: '*',
        loadChildren: '@app/pages/repository/repository.module#RepositoryModule'
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

export class RepositoriesRoutingModule {}

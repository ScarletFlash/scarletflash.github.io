import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from '@app/pages/repositories/repositories.component';

const routes: Routes = [
    {
        path: '',
        component: RepositoriesComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: '@app/pages/main/main.module#MainModule'
    },
    {
        path: 'contacts',
        loadChildren: '@app/pages/contacts/contacts.module#ContactsModule'
    },
    {
        path: 'repos',
        loadChildren: '@app/pages/repositories/repositories.module#RepositoriesModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}

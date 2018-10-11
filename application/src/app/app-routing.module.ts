import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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

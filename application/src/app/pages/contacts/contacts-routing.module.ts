import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsComponent } from '@app/pages/contacts/contacts.component';

const routes: Routes = [
    {
        path: '',
        component: ContactsComponent
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

export class ContactsRoutingModule {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { EntryformComponent } from './entryform/entryform.component';

const routes: Routes = [
    { path:'', redirectTo:'table', pathMatch:'full' },
    { path: 'table', component: TableComponent },
    { path: 'entryform', component: EntryformComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
          { enableTracing: true } // <-- debugging purposes only
        )
      ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {

}
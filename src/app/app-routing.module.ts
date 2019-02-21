import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';

const routes: Routes = [
    {path:'', redirectTo:'table', pathMatch:'full'},
    { path: 'table', component: TableComponent }
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
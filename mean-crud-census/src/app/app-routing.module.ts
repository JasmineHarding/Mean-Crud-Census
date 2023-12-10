import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusComponent } from './components/census/census.component';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'census' },
  { path: 'census', component: CensusComponent },
  {path:'update-census/:id', component:CensusDetailComponent },
  {path:'add-census', component:AddCensusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

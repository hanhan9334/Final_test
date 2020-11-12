import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { EditComponent } from './pages/edit/edit.component';
import { AddComponent } from './pages/add/add.component';

/*mport { StoreFirstGuard } from './guards/storeFirst.guard';*/

const routes: Routes = [

  {path: 'survey-list', component: SurveyListComponent, data: {title: 'Survey List'}},
  {path: '', redirectTo: '/survey-list', pathMatch: 'full', data: {title: 'Survey List'}},
  {path: 'edit', component: EditComponent, pathMatch: 'full', data: {title: 'Add New Survey'}},
  {path: 'add', component: AddComponent, pathMatch: 'full', data: {title: 'Create New Survey'}},
  {path: '**', redirectTo: '/survey-list'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /*provide: [ StoreFirstGuard ]*/
})
export class AppRoutingModule { }

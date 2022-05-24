import { Step1Component } from './info/step1/step1.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './info/list/list.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'step', component: Step1Component},
  { path: '', component: MainComponent},
  { path: 'list', component: ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InfoComponent, Step1Component,MainComponent,ListComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateMomComponent } from './generate-mom/generate-mom.component';

const routes: Routes = [
  {path:'',component:GenerateMomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

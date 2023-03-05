import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewscardComponent } from './newscard/newscard.component';

const routes: Routes = [
  {
  path:"",
  component: NewscardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

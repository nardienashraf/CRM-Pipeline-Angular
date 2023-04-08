import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './Components/deals/deals.component';

const routes: Routes = [
  {path:'', redirectTo:'deals' ,pathMatch:'full'},
  {path:'deals', component:DealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

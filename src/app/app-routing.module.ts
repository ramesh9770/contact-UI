import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CreatecontactComponent} from './createcontact/createcontact.component';
import{ContactlistComponent} from './contactlist/contactlist.component';
import{ContacteditComponent} from './contactedit/contactedit.component';
import{HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
 
  {path:"create-contact",component:CreatecontactComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"contacts",component:ContactlistComponent},
  {path:"edit/:id",component:ContacteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

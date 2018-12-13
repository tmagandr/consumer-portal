import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './adduser/adduser.component';
import { InfoComponent } from './info/info.component';
import { SettingsComponent } from './settings/settings.component';
import { ResourcemanComponent } from './resourceman/resourceman.component';
import { ReappComponent } from './resourceapp/resourceapp.component';
import { ResourceteamComponent } from './resourceteam/resourceteam.component';
import { RatecostComponent } from './ratecost/ratecost.component';

const routes: Routes = [
  {path: 'adduser', component: AddUserComponent},
  {path: '', component: InfoComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'remanager', component: ResourcemanComponent },
  {path: 'reapp', component: ReappComponent},
  {path: 'reteam', component: ResourceteamComponent},
  {path: 'ratecost', component: RatecostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

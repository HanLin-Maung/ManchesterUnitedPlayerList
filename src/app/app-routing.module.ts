import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeffenderComponent } from './deffender/deffender.component';
import { DfinfoComponent } from './dfinfo/dfinfo.component';
import { ForwardComponent } from './forward/forward.component';
import { GkinfoComponent } from './gkinfo/gkinfo.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { HomeComponent } from './home/home.component';
import { MdinfoComponent } from './mdinfo/mdinfo.component';
import { MidfielderComponent } from './midfielder/midfielder.component';
import { StkinfoComponent } from './stkinfo/stkinfo.component';

const routes: Routes = [
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'goalkeeper',
    component: GoalkeeperComponent
  },
  {
    path: 'gkinfo/:id',
    component: GkinfoComponent
  },
  {
    path: 'defender',
    component: DeffenderComponent
  },
  {
    path: 'dfinfo/:id',
    component: DfinfoComponent
  },
  {
    path: 'midfielder',
    component: MidfielderComponent
  },
  {
    path: 'mdinfo/:id',
    component: MdinfoComponent
  },
  {
    path: 'striker',
    component: ForwardComponent
  },
  {
    path: 'stkinfo/:id',
    component: StkinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

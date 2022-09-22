import { HeroesComponent } from './heroes/heroes.component';
import { VillanosComponent } from './villanos/villanos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'villanos', component: VillanosComponent},
  {path:'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

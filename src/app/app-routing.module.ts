import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountBattleComponent } from './count-battle/count-battle.component';
import { ListBattleComponent } from './list-battle/list-battle.component';
import { ListallbattlesComponent } from './listallbattles/listallbattles.component';

const routes: Routes = [
  {path:'list-battle', component:ListBattleComponent},
  {path:'count-battle', component:CountBattleComponent},
  {path:'listallbattles', component:ListallbattlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

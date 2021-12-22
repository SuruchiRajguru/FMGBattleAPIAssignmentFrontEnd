import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBattleComponent } from './list-battle/list-battle.component';
import { CountBattleComponent } from './count-battle/count-battle.component';
import { FormsModule } from '@angular/forms';
import { ListallbattlesComponent } from './listallbattles/listallbattles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBattleComponent,
    CountBattleComponent,
    ListallbattlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

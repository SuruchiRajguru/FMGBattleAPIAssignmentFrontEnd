import { Component, OnInit } from '@angular/core';
import { Battle } from '../model/battle';
import { BattleService } from '../services/battle.service';


@Component({
  selector: 'app-listallbattles',
  templateUrl: './listallbattles.component.html',
  styleUrls: ['./listallbattles.component.css']
})
export class ListallbattlesComponent implements OnInit {
 
  battles:Battle[]=[];
 
  constructor(private battleService:BattleService) { }
  

  ngOnInit(): void {
    this.battleService.listBattle().subscribe(data=>{this.battles=data;});
  }

}

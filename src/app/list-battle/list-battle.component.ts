import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-battle',
  templateUrl: './list-battle.component.html',
  styleUrls: ['./list-battle.component.css']
})
export class ListBattleComponent implements OnInit {
 // listBattle:any;

  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    // this._httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(result=>{
    //   this.listBattle=result;
    //   console.log(this.listBattle);
    // },error=>{
    //   console.log('There are some erors...');
    //   console.log(error);
    // },
    // )
  }
}

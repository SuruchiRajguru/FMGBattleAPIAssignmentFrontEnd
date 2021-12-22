import { Injectable } from '@angular/core';
import { Battle } from '../model/battle';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  apiUrl:string="http://localhost:8080/BattleAPI/name";
  headers=new HttpHeaders().set('content-Type','application-json');

  constructor(private http:HttpClient) { }

  public listBattle():Observable<Battle[]>{
    return this.http.get<Battle[]>(this.apiUrl);
  }

}

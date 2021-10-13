import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UdanceService {

  constructor(private http: HttpClient) { }


  getUdanceTotal(){
    //let header = new HttpHeaders();
    //header.append('Content-Type', 'text/html; charset=UTF-8');
    //header.append('Access-Control-Allow-Origin', '*');
    //header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    //this.http.get<any>('https://www.udancede.org/bpos_teampage.aspx?eventtag=ud2022&teamid=3717', {headers: header}).subscribe(data => {
    //  console.log(data);
    //}) 
  }      
   
}

import { Injectable } from '@angular/core';

import { getDatabase, ref, get, push, set, DataSnapshot } from "firebase/database";
import { initializeApp }  from 'firebase/app';
import { environment } from "src/environments/environment";

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'responseType': 'text',
    "x-iq-image-response-type":"url",
    "Accept":"*/*",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' })
};

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {

    db: any;
    theBoard: Object[] = [];

    constructor(private http:HttpClient) { 
        initializeApp(environment.firebaseConfig),
        this.db = getDatabase();
    }

    test() {
        //test = new RegExp('data-fund-current="\\d+\\.\\d+')

        //return this.http.get('/api/bpos_teampage.aspx?eventtag=ud2022&teamid=3717')
        //      .pipe(map((response: any) => response));

        return this.http.get('/api/', {responseType: 'text'});
    }

    getBoard(): Promise<DataSnapshot>{
        let boardMembers = ref(this.db, "/boardMembers/");
        return get(boardMembers);
    }

    getHome(): Promise<DataSnapshot>{
        let home = ref(this.db, "/home/");
        return get(home);
    }

    setAboutUs(data){
        let home = ref(this.db, "/home/aboutus/blurb");
        set(home, data);
    }

    getRush(): Promise<DataSnapshot>{
        let rush = ref(this.db, "/rush/");
        return get(rush);
    }

    setRushBlurb(data){
        let rush = ref(this.db, "/rush/blurb");
        set(rush, data);
    }


    getBrotherhood(): Promise<DataSnapshot>{
        let brotherhood = ref(this.db, "/brotherhood/");
        return get(brotherhood);
    }

    setBrotherhoodBlurb(data){
        let brotherhoood = ref(this.db, "/brotherhood/blurb");
        set(brotherhoood, data);
    }


}

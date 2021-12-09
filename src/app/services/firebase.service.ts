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

    submitRushInterest(data){
        let contact = ref(this.db, "/contact/rush/");
        push(contact, data);
    }

    submitContactMessage(data){
        let contact = ref(this.db, "/contact/emailus/");
        push(contact, data);
    }


    getBrotherhood(): Promise<DataSnapshot>{
        let brotherhood = ref(this.db, "/brotherhood/");
        return get(brotherhood);
    }

    setBrotherhoodBlurb(data){
        let brotherhoood = ref(this.db, "/brotherhood/blurb");
        set(brotherhoood, data);
    }

    getHistory(): Promise<DataSnapshot>{
        let history = ref(this.db, "/history/events");
        return get(history);
    }

    addHistoryEvent(data){
        let history = ref(this.db, "/history/events");
        push(history, data);
    }

    getPhilanthropy(): Promise<DataSnapshot>{
        let udance = ref(this.db, "/philanthropy");
        return get(udance);
    }

    setPhilanthropy(data){
        let philanthropy = ref(this.db, "/philanthropy");
        set(philanthropy, data);
    }

    setUdance(data){
        let udance = ref(this.db, "/philanthropy/udance");
        set(udance, data);
    }

}

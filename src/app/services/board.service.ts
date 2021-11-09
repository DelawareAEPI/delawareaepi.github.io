import { Injectable } from '@angular/core';

import { getDatabase, ref, get, push, set, DataSnapshot } from "firebase/database";
import { initializeApp }  from 'firebase/app';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class BoardService {

    db: any;
    theBoard: Object[] = [];

    constructor() { 
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


    getBrotherhood(): Promise<DataSnapshot>{
        let brotherhood = ref(this.db, "/brotherhood/");
        return get(brotherhood);
    }

    setBrotherhoodBlurb(data){
        let brotherhoood = ref(this.db, "/brotherhood/blurb");
        set(brotherhoood, data);
    }

    testMethod2(){

    }


}

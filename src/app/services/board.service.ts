import { Injectable } from '@angular/core';

import { getDatabase, ref, get, push, DataSnapshot } from "firebase/database";
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

    getRush(): Promise<DataSnapshot>{
        let rush = ref(this.db, "/rush/");
        return get(rush);
    }

    getBrotherhood(): Promise<DataSnapshot>{
        let brotherhood = ref(this.db, "/brotherhood/");
        return get(brotherhood);
    }

    testMethod2(){

    }


}

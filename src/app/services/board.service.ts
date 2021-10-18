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

    testMethod2(){
        let boardMembers = ref(this.db, "/boardMembers/");
        push(boardMembers, {'name':'Dylan Wechman', 'position':'Exchequer', 'image':'https://static.wixstatic.com/media/0d4090_d6d499f6b02b493e95f79d52a67b50e0~mv2.jpeg/v1/fill/w_100,h_139,al_c,q_80,usm_0.66_1.00_0.01/Screen%20Shot%202021-02-13%20at%202_34_00%20PM.webp'});
    
    }
}

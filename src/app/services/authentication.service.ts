import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";

import { getDatabase, ref, get, set } from "firebase/database";
import { initializeApp }  from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {GoogleSheetsDbService} from 'ng-google-sheets-db';

import { attributesMapping, Brother } from '../pages/composite/brother.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    db: any;
    user: any;
    admin = new BehaviorSubject(false);

    constructor(private googleSheetsDbService: GoogleSheetsDbService) { 
        initializeApp(environment.firebaseConfig),
        this.db = getDatabase();
    }

    signUserIn() {
        let provider = new GoogleAuthProvider();
        const auth = getAuth();

        if(auth.currentUser == null){
            signInWithPopup(auth, provider);
        }
    }


    createUser(user){
        let userRef = ref(this.db, "/users/" + user.uid);

        //first check the users email against the emails in the roster
        //make sure the user is a brother                
        let isBrother = false, isBoard = false;
        this.googleSheetsDbService.get(environment.rosterDriveID, "All Active Brothers", attributesMapping).subscribe(data =>{
            for(let brother of data){
                if((<Brother>brother).udemail == user.email){
                    isBrother=true;
                    if((<Brother>brother).board){
                        isBoard = true;
                    }
                }
            }
            // Create record
            if(isBrother){
                set(userRef, {admin: isBoard, email: user.email, name: user.displayName, uid: user.uid});
                this.updateAdmin(isBoard);
            }
        });
    }

    signUserOut(){
        const auth = getAuth();

        signOut(auth).then(() => {
            console.log("signed out");
            this.updateAdmin(false);
        }).catch((error) => { console.log(error); });
    
    }

    updateAdmin(status: any) {
        this.admin.next(status);
    }

    getCurrentAdminStatus(): Observable<any> {
        return this.admin.asObservable();
    }

    getUserDbEntry(user){
        let userRef = ref(this.db, "/users/" + user?.uid);
        return get(userRef);
    }

    getUser(){
        return getAuth().currentUser;
    }

    authListener(){
        onAuthStateChanged(getAuth(), (user)=>{
            if (user != null){
                this.getUserDbEntry(user).then((ss)=>{
                    // If user does not exist, create user
                    if (ss.val() == null){
                        this.createUser(user);
                    } else {
                        // if user does exist, set admin status
                        this.updateAdmin(ss.val().admin);
                    }
                })
            }
        })
    }



}

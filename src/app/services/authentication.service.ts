import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";

import { getDatabase, ref, get, set } from "firebase/database";
import { initializeApp }  from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {GoogleSheetsDbService} from 'ng-google-sheets-db';

import { attributesMapping, Brother } from '../pages/composite/brother.model';
import { Observable, Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    db: any;

    user: any;
    admin = new Subject();

    provider;

    constructor(private googleSheetsDbService: GoogleSheetsDbService) { 
        initializeApp(environment.firebaseConfig),
        this.db = getDatabase();
        this.provider = new GoogleAuthProvider();
    }

    signUserIn() {

        console.log(this.getUser());
        
        const auth = getAuth();

        if(auth.currentUser == null){
            signInWithPopup(auth, this.provider).then((result) => {
                const user = result.user;
                this.createUser(user);
            }).catch((error) => {console.log(error)});;
        }
    }

    createUser(user){
        let userRef = ref(this.db, "/users/" + user.uid);

        get(userRef).then(ss=>{ 
            //if the user does not exist, make a new user
            if(ss.val() == null){
                //first check the users email against the emails in the roster
                //make sure the user is a brother                
                let isBrother = false, isBoard = false;
                this.googleSheetsDbService.get('1UgD_wIiqgUpVBbRVSBNOySmjb1TnAF3tY6Lf9aCAWb4', "All Active Brothers", attributesMapping).subscribe(data =>{
                    for(let brother of data){
                        if((<Brother>brother).udemail == user.email){
                            isBrother=true;
                            if((<Brother>brother).board){
                                isBoard = true;
                            }
                        }
                    }
                    if(isBrother){
                        set(userRef, {admin: isBoard, email: user.email, name: user.displayName, uid: user.uid});
                        this.updateAdmin(isBoard);
                    }
                });
            } else {
                this.updateAdmin(ss.val().admin);
            }
            
        });
    }

    signUserOut(){
        const auth = getAuth();

        console.log(auth.currentUser);

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out");

            this.updateAdmin(false);

        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    updateAdmin(status: any) {
        this.admin.next(status);
    }

    getCurrentAdminStatus(): Observable<any> {
        return this.admin.asObservable();
    }

    isAdmin(){
        let userRef = ref(this.db, "/users/" + getAuth().currentUser?.uid);
        return get(userRef);
    }

    getUser(){
        return getAuth().currentUser;
    }



}

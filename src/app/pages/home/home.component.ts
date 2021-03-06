import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    board: { name: string, position: string, image:string }[] = [];
    aboutus = new Map();
    udanceLink: string;

    isMobile: boolean;
    isAdmin: boolean;
    
    constructor(private firebaseService: FirebaseService, private authService: AuthenticationService) { }

    ngOnInit(): void {

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.firebaseService.getBoard().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.board.push(data[id]);    
            });
        });

        this.firebaseService.getHome().then((snapshot: any)=>{
            let data = snapshot.val();

            this.udanceLink = data.udance.link;

            Object.keys(data.aboutus.blurb).map(id=>{
                this.aboutus.set(id, data.aboutus.blurb[id]);    
            });

            //check user but has to be in this async because it doesn't work right away
            //this check is for navigating back to this page while being signed in
            if(this.authService.getUser()){
                this.authService.getUserDbEntry().then(ss=>{ 
                    if(ss.val() != null){
                        this.isAdmin = ss.val().admin;
                        console.log(this.isAdmin);
                    }
                });
            }

        });

        //this check is to update the admin status whenever the user signs in or signs out
        this.authService.getCurrentAdminStatus().subscribe(data => {
            this.isAdmin = data;
        });

    }

    onBlur(element){
        this.aboutus.set(element.id, element.textContent);
        console.log(this.aboutus);
        //this.firebaseService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onSaveChanges(){
        this.firebaseService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onAddParagraph(){
        this.aboutus.set((this.aboutus.size + 1).toString(), "new paragraph - edit me");
    }

    onRemoveParagraph(){
        this.aboutus.delete(this.aboutus.size.toString());
    }

}

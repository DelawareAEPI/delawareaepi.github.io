import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-rush',
    templateUrl: './rush.component.html',
    styleUrls: ['./rush.component.css']
})

export class RushComponent implements OnInit {

    email: string;
    validEmail: boolean = false;
    name: string;
    phone: string;

    rushBlurb = new Map();
    rushCardImage: string;

    isMobile: boolean = false;
    isAdmin: boolean = false;

    constructor(private firebaseService: FirebaseService, private authService: AuthenticationService) { }

    ngOnInit(): void {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.firebaseService.getRush().then((snapshot: any)=>{
            let data = snapshot.val();

            this.rushCardImage = data.rushcard; 

            Object.keys(data.blurb).map(id=>{
                this.rushBlurb.set(id, data.blurb[id]);    
            });
        });

        this.authService.getCurrentAdminStatus().subscribe(data => {
            this.isAdmin = data;
        });

    }

    isEmailValid(valid: boolean){
        this.validEmail = valid;
    }

    submitRushInterest(){
        if(this.validEmail){
            if(!this.name)
                this.name = "";
            if(!this.phone)
                this.phone = "";

            this.firebaseService.submitRushInterest({name:this.name, email:this.email, phone:this.phone});
            alert("Submitted! Thank you for your interest in rush.");
            this.clearText();
        } else {
            alert("Please enter a valid email");
        }
    }

    
    clearText(){
        this.email = "";
        this.name = "";
        this.phone = "";
    }


    onBlur(element){
        this.rushBlurb.set(element.id, element.textContent);
    }

    onSaveChanges(){
        this.firebaseService.setRushBlurb(Object.fromEntries(this.rushBlurb));
    }

    onAddParagraph(){
        this.rushBlurb.set((this.rushBlurb.size + 1).toString(), "new paragraph - edit me");
    }

    onRemoveParagraph(){
        this.rushBlurb.delete(this.rushBlurb.size.toString());
    }

}

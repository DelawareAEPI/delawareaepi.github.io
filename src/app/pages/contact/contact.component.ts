import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    isMobile: boolean = false;

    name: string;
    email: string;
    message: string;

    validEmail: boolean = false;


    constructor(private firebaseService: FirebaseService) { }

    contacts: {name: string, position: string, phone: string, image:string }[]= [ ];

    ngOnInit(): void {

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.firebaseService.getBoard().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                if(data[id].position == "Master" || data[id].position == "Rush Chair"){
                    data[id].image = data[id].image.replace("w_92,h_139", "w_134,h_200")
                    this.contacts.push(data[id]);
                }  
            });
        });
    }
    
    updateMessage(event){
        if(event.target.value){
            event.target.classList.add('has-val');
        } else {
            event.target.classList.remove('has-val');
        }

        console.log(event.target.value);
    }

    isEmailValid(valid: boolean){
        this.validEmail = valid;
    }

    submitContactForm(){
        if(this.validEmail){
            if(!this.name)
                this.name = "";
            
            this.firebaseService.submitContactMessage({name:this.name, email:this.email, message:this.message});
            alert("Message Sumbitted!");
            this.clearText();
        } else {
            alert("Please enter a valid email");
        }
    }


    clearText(){
        this.email = "";
        this.name = "";
        this.message = "";
    }

}

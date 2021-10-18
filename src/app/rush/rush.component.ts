import { Component, OnInit } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';

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

    isMobile: boolean = false;

    constructor() { }

    ngOnInit(): void {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }
    }

    isEmailValid(valid: boolean){
        this.validEmail = valid;
    }

    submitRushInterest(){
        if(this.validEmail){
            //send an email to RhoD
        } else {
            alert("Please enter a valid email");
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    isMobile: boolean = false;

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

}

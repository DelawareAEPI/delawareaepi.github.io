import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';



@Component({
    selector: 'app-brotherhood',
    templateUrl: './brotherhood.component.html',
    styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

    events: string[] = [];
    eventImages: {event: string, description: string, imageLink: string}[] = [];

    files = ['/aepi_website/assets/eventImages/apple.JPG', '/aepi_website/assets/eventImages/apple_picking2.jpg', '/aepi_website/assets/eventImages/eta_initiation.JPG', 
    '/aepi_website/assets/eventImages/guysbeingdudes.jpg', '/aepi_website/assets/eventImages/philly1.jpeg', '/aepi_website/assets/eventImages/philly2.jpeg', 
    '/aepi_website/assets/eventImages/philly3.JPG', '/aepi_website/assets/eventImages/skyzone.png', '/aepi_website/assets/eventImages/IMG_5028.jpg', 
    '/aepi_website/assets/eventImages/IMG_5052.JPG', '/aepi_website/assets/eventImages/IMG_5408.jpg', '/aepi_website/assets/eventImages/IMG_5415.jpg', 
    '/aepi_website/assets/eventImages/IMG_5473.JPG', '/aepi_website/assets/eventImages/IMG_5796.jpg', '/aepi_website/assets/eventImages/IMG_5808.jpg', 
    '/aepi_website/assets/eventImages/IMG_5817.jpg', '/aepi_website/assets/eventImages/IMG_5825.jpg', '/aepi_website/assets/eventImages/IMG_5828.PNG', 
    '/aepi_website/assets/eventImages/IMG_5875.JPG', '/aepi_website/assets/eventImages/IMG_5876.JPG', '/aepi_website/assets/eventImages/IMG_5883.JPG', '/aepi_website/assets/eventImages/IMG_5885.JPG']; 

    blurb: string;


    constructor(private firebaseService: FirebaseService, private http: HttpClient) { }

    ngOnInit(): void {
        

        this.firebaseService.getBrotherhood().then((snapshot: any)=>{
            let data = snapshot.val();

            this.blurb = data.blurb;

            Object.keys(data.events).map(id=>{
                if(data.events[id].imageLink != ""){
                    this.eventImages.push(data.events[id]); 
                } 
                this.events.push(data.events[id].event);
            });
        });
    }

    onBlur(element){
        this.blurb = element.textContent;
    }

    onSaveChanges(){
        this.firebaseService.setBrotherhoodBlurb(this.blurb);
    }

}


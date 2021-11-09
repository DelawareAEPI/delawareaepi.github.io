import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';



@Component({
    selector: 'app-brotherhood',
    templateUrl: './brotherhood.component.html',
    styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

    events: string[] = [];
    eventImages: {event: string, description: string, imageLink: string}[] = [];

    files = ['/assets/eventImages/apple.JPG', '/assets/eventImages/apple_picking2.jpg', '/assets/eventImages/eta_initiation.JPG', 
    '/assets/eventImages/guysbeingdudes.jpg', '/assets/eventImages/philly1.jpeg', '/assets/eventImages/philly2.jpeg', 
    '/assets/eventImages/philly3.JPG', '/assets/eventImages/skyzone.png', '/assets/eventImages/IMG_5028.jpg', 
    '/assets/eventImages/IMG_5052.JPG', '/assets/eventImages/IMG_5408.jpg', '/assets/eventImages/IMG_5415.jpg', 
    '/assets/eventImages/IMG_5473.JPG', '/assets/eventImages/IMG_5796.jpg', '/assets/eventImages/IMG_5808.jpg', 
    '/assets/eventImages/IMG_5817.jpg', '/assets/eventImages/IMG_5825.jpg', '/assets/eventImages/IMG_5828.PNG', 
    '/assets/eventImages/IMG_5875.JPG', '/assets/eventImages/IMG_5876.JPG', '/assets/eventImages/IMG_5883.JPG', '/assets/eventImages/IMG_5885.JPG']; 

    blurb: string;


    constructor(private boardService: BoardService, private http: HttpClient) { }

    ngOnInit(): void {
        

        this.boardService.getBrotherhood().then((snapshot: any)=>{
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
        this.boardService.setBrotherhoodBlurb(this.blurb);
    }

}


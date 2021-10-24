import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoardService } from '../services/board.service';
import { BrotherModalComponent } from '../brother-modal/brother-modal.component';

@Component({
    selector: 'app-brotherhood',
    templateUrl: './brotherhood.component.html',
    styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

    events: string[] = [];
    eventImages: {event: string, description: string, imageLink: string}[] = [];

    blurb: string;


    constructor(private boardService: BoardService, private modalService: NgbModal) { }

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


    open(number: number) {
        const modalRef = this.modalService.open(BrotherModalComponent);
        modalRef.componentInstance.brother_name = 'Ben Raymon';
        modalRef.componentInstance.major = 'Computer Science';
        modalRef.componentInstance.year = 'Junior';
        modalRef.componentInstance.image = 'https://static.wixstatic.com/media/0d4090_e77edcaac70345eb9896b9165132c218~mv2.png/v1/fill/w_92,h_139,al_c,q_85,usm_0.66_1.00_0.01/beigs_heic.webp';
      }

}

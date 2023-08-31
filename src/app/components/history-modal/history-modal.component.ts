import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
    selector: 'app-history-modal',
    templateUrl: './history-modal.component.html',
    styleUrls: ['./history-modal.component.css']
})
export class HistoryModalComponent implements OnInit {

    isSectionHeader: boolean = true;
    title: string = "";
    content: string = "";
    year: string = "";

    @Input() lastYear: number;
    thisYear: number = new Date().getFullYear();
    

    constructor(public activeModal: NgbActiveModal, private firebaseService: FirebaseService) { }

    ngOnInit(): void {
    }

    onRadioSwitch(test:any){
        this.isSectionHeader = test.currentTarget.id == "flexRadioDefault1" ? true : false;  
        console.log(this.isSectionHeader);
        if(this.isSectionHeader){
            this.year = "";
            this.content = "";
        }
    }

    yearValidation(event: any){

        if(this.year && this.year.length != 4 || parseInt(this.year).toString() != this.year || parseInt(this.year) > this.thisYear ||  parseInt(this.year) < this.lastYear){
            event.srcElement.classList.add("is-invalid");
        } else {
            event.srcElement.classList.remove("is-invalid");
        }
        
    }


    onSubmit(){
        //call history service add event
        if(!this.title){
            alert("Please enter a title");
        } else {
            if(!this.isSectionHeader && !this.content){
                alert("Please do not leave content blank.");
            } else {
                let data = {period: this.isSectionHeader, content: this.content, year: this.year, title: this.title};
                this.firebaseService.addHistoryEvent(data);
                this.activeModal.dismiss('Submit Event');
            }
            
        }
    }

}

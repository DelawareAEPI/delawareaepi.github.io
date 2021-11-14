import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-history-modal',
    templateUrl: './history-modal.component.html',
    styleUrls: ['./history-modal.component.css']
})
export class HistoryModalComponent implements OnInit {

    isSectionHeader: boolean = true;
    title: string;
    content: string;
    year: string;
    

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
    }

    onRadioSwitch(test:any){
        this.isSectionHeader = test.path[0].id == "flexRadioDefault1" ? true : false;  
        console.log(this.isSectionHeader);
        if(this.isSectionHeader){
            this.year = "";
            this.content = "";
        }
    }

    yearValidation(event: any){

        if(this.year && this.year.length != 4 || parseInt(this.year).toString() != this.year || parseInt(this.year) > new Date().getFullYear()){
            event.srcElement.classList.add("is-invalid");
        } else {
            event.srcElement.classList.remove("is-invalid");
        }
        
    }


    onSubmit(){
        //call history service add event
        let data = {period: this.isSectionHeader, content: this.content, year: this.year, title: this.title};
    }

}

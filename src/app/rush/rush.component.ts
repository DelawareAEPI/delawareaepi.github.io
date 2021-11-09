import { Component, OnInit } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { BoardService } from '../services/board.service';

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

    constructor(private boardService: BoardService) { }

    ngOnInit(): void {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.boardService.getRush().then((snapshot: any)=>{
            let data = snapshot.val();

            this.rushCardImage = data.rushcard; 

            Object.keys(data.blurb).map(id=>{
                this.rushBlurb.set(id, data.blurb[id]);    
            });
        });
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


    onBlur(element){
        this.rushBlurb.set(element.id, element.textContent);
    }

    onSaveChanges(){
        this.boardService.setRushBlurb(Object.fromEntries(this.rushBlurb));
    }

    onAddParagraph(){
        this.rushBlurb.set((this.rushBlurb.size + 1).toString(), "new paragraph - edit me");
    }

    onRemoveParagraph(){
        this.rushBlurb.delete(this.rushBlurb.size.toString());
    }

}

import { Component, OnInit } from '@angular/core';

import { BoardService } from '../services/board.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    board: { name: string, position: string, image:string }[] = [];
    aboutus = new Map();
    udanceLink: string;

    isMobile: boolean;
    
    constructor(private boardService: BoardService) { }

    ngOnInit(): void {

        //this.boardService.testMethod2();

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.boardService.getBoard().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.board.push(data[id]);    
            });
        });

        this.boardService.getHome().then((snapshot: any)=>{
            let data = snapshot.val();

            this.udanceLink = data.udance.link;

            Object.keys(data.aboutus.blurb).map(id=>{
                this.aboutus.set(id, data.aboutus.blurb[id]);    
            });
        });

    }

    onBlur(element){
        this.aboutus.set(element.id, element.textContent);
        console.log(this.aboutus);
        //this.boardService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onSaveChanges(){
        this.boardService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onAddParagraph(){
        this.aboutus.set((this.aboutus.size + 1).toString(), "new paragraph - edit me");
    }

    onRemoveParagraph(){
        this.aboutus.delete(this.aboutus.size.toString());
    }

}

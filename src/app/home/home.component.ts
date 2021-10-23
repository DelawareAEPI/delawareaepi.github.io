import { Component, OnInit } from '@angular/core';

import { BoardService } from '../services/board.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    board: { name: string, position: string, image:string }[] = [];
    aboutus: {text: string, id: string}[] = [];
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
                this.aboutus.push({'text': data.aboutus.blurb[id].text, 'id': id});    
            });
        });

    }

}

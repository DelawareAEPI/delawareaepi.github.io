import { Component, OnInit } from '@angular/core';

import { BoardService } from '../services/board.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    board: { name: string, position: string, image:string }[] = [];

    constructor(private boardService: BoardService) { }

    ngOnInit(): void {

        this.boardService.getBoard().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.board.push(data[id]);    
            });
        });

    }

}

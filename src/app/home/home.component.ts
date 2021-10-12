import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    board: { name: string, position: string, image:string }[] = [];

    constructor() { }

    ngOnInit(): void {
        for(let i = 0; i < 8; i++){
            this.board.push({'name':'Alex Bagel', 'position':'Master', 'image':'https://static.wixstatic.com/media/0d4090_e77edcaac70345eb9896b9165132c218~mv2.png/v1/fill/w_92,h_139,al_c,q_85,usm_0.66_1.00_0.01/beigs_heic.webp'})
        }
    }

}

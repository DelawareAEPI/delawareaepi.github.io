import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

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
    
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {

        //let test = new RegExp('data-fund-current="\\d+\\.\\d+');
        //partid=\d+

        //this.firebaseService.test().subscribe(
        //          data => {console.log(data.match(test));},
        //    );

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobile = true;
        }

        this.firebaseService.getBoard().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.board.push(data[id]);    
            });
        });

        this.firebaseService.getHome().then((snapshot: any)=>{
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
        //this.firebaseService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onSaveChanges(){
        this.firebaseService.setAboutUs(Object.fromEntries(this.aboutus));
    }

    onAddParagraph(){
        this.aboutus.set((this.aboutus.size + 1).toString(), "new paragraph - edit me");
    }

    onRemoveParagraph(){
        this.aboutus.delete(this.aboutus.size.toString());
    }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    historyData: {"period": boolean, "year":string, "title":string, "content":string}[] = [];

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {

        this.firebaseService.getHistory().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.historyData.push(data[id]);    
            });
        });
    }

}

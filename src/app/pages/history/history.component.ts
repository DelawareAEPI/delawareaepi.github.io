import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';

import { HistoryModalComponent } from '../../components/history-modal/history-modal.component';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    historyData: {"period": boolean, "year":string, "title":string, "content":string}[] = [];

    constructor(private firebaseService: FirebaseService, private modalService: NgbModal) { }

    ngOnInit(): void {

        this.firebaseService.getHistory().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.historyData.push(data[id]);    
            });
        });
    }

    newEvent(){
        const modalRef = this.modalService.open(HistoryModalComponent);
    }

}

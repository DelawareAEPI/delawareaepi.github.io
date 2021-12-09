import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';

import { HistoryModalComponent } from '../../components/history-modal/history-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    historyData: {"period": boolean, "year":string, "title":string, "content":string}[] = [];

    isAdmin: boolean = false;

    constructor(private firebaseService: FirebaseService, private modalService: NgbModal, private authService: AuthenticationService) { }

    ngOnInit(): void {

        this.firebaseService.getHistory().then((snapshot: any)=>{
            let data = snapshot.val();

            Object.keys(data).map(id=>{
                this.historyData.push(data[id]);    
            });

            //check user but has to be in this async because it doesn't work right away
            //this check is for navigating back to this page while being signed in
            if(this.authService.getUser()){
                this.authService.isAdmin().then(ss=>{ 
                    //if the user does not exist, make a new user
                    if(ss.val() != null){
                        this.isAdmin = ss.val().admin;
                        console.log(this.isAdmin);
                    }
                });
            }
        });

        //this check is to update the admin status whenever the user signs in or signs out
        this.authService.getCurrentAdminStatus().subscribe(data => {
            this.isAdmin = data;
        });
        
    }

    newEvent(){
        const modalRef = this.modalService.open(HistoryModalComponent);
        modalRef.componentInstance.lastYear = parseInt(this.historyData[this.historyData.length - 1].year);
    }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { merge } from 'jquery';

import {environment} from "src/environments/environment"

@Component({
    selector: 'app-philanthropy',
    templateUrl: './philanthropy.component.html',
    styleUrls: ['./philanthropy.component.css'],
    providers: [NgbCarouselConfig] 
})


export class PhilanthropyComponent implements OnInit {

    udanceTeam: any[]= [];
    udanceTotal: number;
    udanceEventTag: string; 
    udanceTeamID: number = 4333;
    udanceGoal: number = 55000.00;

    percentGoal: number;
    showTeam: boolean = true;

    allEvents: {'images': string[], 'name':string, 'desc':string}[] = [];
    testObs$: Observable<string[]>;

    loading: boolean = true;
    isAdmin: boolean = false;

    hero: string[] = [];


    constructor(private firebaseService: FirebaseService, config: NgbCarouselConfig, private authService: AuthenticationService) { 
        config.interval = 4000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }

    ngOnInit(): void {
        this.loadPhilanthropyData();

        this.udanceEventTag = "ud" + this.getYear();
        console.log(this.udanceEventTag);

        this.authService.getCurrentAdminStatus().subscribe(data => {
            this.isAdmin = data;
        });

        this.firebaseService.getFolderContents(environment.philanthropyDriveID).subscribe((data:any)=>{
            data.files.forEach(element => {
                if(element.mimeType != "application/vnd.google-apps.folder"){
                    this.hero.push(element.id);
                }
            });
        });
    }

    loadPhilanthropyData(){
        this.firebaseService.getPhilanthropy().then((snapshot: any)=>{
            let data = snapshot.val();

            this.udanceTeamID = data.udance.teamID;

            this.udanceTotal = Math.round(data.udance.total);
            Object.keys(data.udance.team).map(id=>{
                this.udanceTeam.push(data.udance.team[id]);    
            });

            this.percentGoal = Math.round(this.udanceTotal/this.udanceGoal * 100);

            Object.keys(data.events).map(id=>{
                this.allEvents.push(data.events[id]);    
            });

            this.loading = false;
        });
    }

    //Set everything including the events
    setPhilanthropyData(){
        this.firebaseService.setPhilanthropy({'udance': {'team': this.udanceTeam, 'total': this.udanceTotal}, 'events':this.allEvents});
    }

    //only update the udance team info
    setUdanceData(){
        this.firebaseService.setUdance({'team': this.udanceTeam, 'total': this.udanceTotal});
        this.percentGoal = Math.round(this.udanceTotal/this.udanceGoal * 100);
    }


    calcRightDeg(){
        if(this.percentGoal > 50){
            return 180;
        } else {
            return (this.percentGoal) / 100 * 360;
        }
    }

    calcLeftDeg(){
        if(this.percentGoal > 50){
            return (this.percentGoal - 50) / 100 * 360;
        } else {
            return 0;
        }
    }

    addCommas(input){
        if(input){
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else return input;
    }


    loadUdanceReport(event) {
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
            this.loading = true;

            this.udanceTeam = [];
            let csvToRowArray = e.target.result.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
                let row = csvToRowArray[index].split('","');
                
                if(row[21]){
                    row[21] = row[21].toString().replaceAll('"', "");
                    row[21] = row[21].replace("$", "");
                    row[21] = row[21].replace(",", "");
                }

                if(row[14]){
                    row[14] = row[14].replaceAll('"', "");
                    row[14] = row[14].replace("$", "");
                    row[14] = row[14].replace(",", "");
                }

                if(row[21]){
                    if(!row[2])
                        this.udanceTotal = parseFloat(row[21]);
                    else
                        this.udanceTeam.push({'name': row[1] + " " + row[2], 'raised': Math.round(parseFloat(row[21])), 'goal': parseFloat(row[14]),'pageid':row[22]});
                }
                
                this.udanceTeam.sort((a, b) => (a.raised > b.raised) ? -1 : 1);
            }
            this.setUdanceData();
            this.loading = false;
        };
        
        reader.readAsText(event.target.files[0]);
    }

    getYear(){
        let d = new Date();
        return d.getMonth() < 8 ? d.getFullYear() : d.getFullYear() + 1;
    }
    


}

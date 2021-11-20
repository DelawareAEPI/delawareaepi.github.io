import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
    selector: 'app-philanthropy',
    templateUrl: './philanthropy.component.html',
    styleUrls: ['./philanthropy.component.css']
})


export class PhilanthropyComponent implements OnInit {

    udanceTeam: any[]= [];
    udanceTotal: number;
    udanceTeamID: number = 3717;
    udanceEventTag: string = "ud2022"; 
    udanceGoal: number = 55000.00;

    percentGoal: number;
    showTeam: boolean = true;

    loading: boolean = true;

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        this.loadUdanceData();
    }

    previewFile(event) {
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
                        this.udanceTeam.push({'name': row[1] + " " + row[2], 'raised': parseFloat(row[21]), 'goal': parseFloat(row[14]),'pageid':row[22]});
                }
                
                this.udanceTeam.sort((a, b) => (a.raised > b.raised) ? -1 : 1);
            }
            this.updateFirebase();
            this.loading = false;
        };
        
        reader.readAsText(event.target.files[0]);
    }

    loadUdanceData(){
        this.firebaseService.getUdance().then((snapshot: any)=>{
            let data = snapshot.val();

            this.udanceTotal = data.total;
            Object.keys(data.team).map(id=>{
                this.udanceTeam.push(data.team[id]);    
            });

            this.percentGoal = Math.round(this.udanceTotal/this.udanceGoal * 100);

            this.loading = false;
        });
    }

    updateFirebase(){
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
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    


}

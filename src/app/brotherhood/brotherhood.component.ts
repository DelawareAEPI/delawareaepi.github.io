import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brotherhood',
  templateUrl: './brotherhood.component.html',
  styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

  events: string[] = ["DC Trip", "Philly Trip","Barbecues","Formal","Paintball","Movie Trips","Bowling","Intramural Sports","Much More!"];
  
  constructor() { }

  ngOnInit(): void {
  }

}

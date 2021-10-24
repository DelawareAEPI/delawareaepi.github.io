import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-brother-modal',
  templateUrl: './brother-modal.component.html',
  styleUrls: ['./brother-modal.component.css']
})
export class BrotherModalComponent implements OnInit {

  @Input() brother_name: string;
  @Input() major: string;
  @Input() year: string;
  @Input() image: string;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

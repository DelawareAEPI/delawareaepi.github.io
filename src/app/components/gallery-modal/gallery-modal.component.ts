import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-gallery-modal',
	templateUrl: './gallery-modal.component.html',
	styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {

	@Input() images: string[];
	@Input() activeImage: string;

	constructor() { }

	ngOnInit(): void {
	}

}

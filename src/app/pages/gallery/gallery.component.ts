import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	files: string[] = [];
	year: string = '';

	constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

	ngOnInit(): void {

		this.route.paramMap.subscribe((params : ParamMap)=> {
			let yearParam = params.get('year');
			if (yearParam){
				this.year = yearParam;
				this.getImages();
			}
		});  

	}

	getImages(){
		this.firebaseService.getHistorianGallery(this.year).subscribe((data: any) => {
			if (data){
				data.files.forEach(element => {
					this.files.push("https://drive.google.com/uc?export=view&id=" + element.id);
				});
			}
        });
	}

}

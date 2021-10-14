import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rush',
    templateUrl: './rush.component.html',
    styleUrls: ['./rush.component.css']
})

export class RushComponent implements OnInit {

constructor() { }

ngOnInit(): void {
    document.querySelectorAll('.input2').forEach((item)=>{
    item.addEventListener('blur', ()=>{

        if((<HTMLInputElement>item).value != "") {
            (item).classList.add('has-val');
        }
        else {
            (item).classList.remove('has-val');
        }
    })    
})

}

}

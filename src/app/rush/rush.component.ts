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

        //on blur add or remove has-val class
        item.addEventListener('blur', ()=>{

            if((<HTMLInputElement>item).value != "") {
                (item).classList.add('has-val');

                //Check validation for email
                if(item.getAttribute('name') == 'email'){
                    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if((<HTMLInputElement>item).value.match(regexp)){
                        item.parentElement?.children[1].classList.remove('no-validate');
                        item.parentElement?.children[1].setAttribute('data-placeholder', 'EMAIL');
                    } else {
                        item.parentElement?.children[1].classList.add('no-validate');
                        item.parentElement?.children[1].setAttribute('data-placeholder', 'EMAIL: Please enter valid email');
                    }
                }
            }
            else {
                (item).classList.remove('has-val');
            }
        });    
    });

}

}

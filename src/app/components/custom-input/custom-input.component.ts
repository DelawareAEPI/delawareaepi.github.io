import { Component, ElementRef, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.css']
})

export class CustomInputComponent implements OnInit {

    constructor() { }

    @Input() inputModel: string;  
    @Input() type: string;  

    @Output() inputModelChange = new EventEmitter<string>();  
    @Output() validEmail = new EventEmitter<boolean>();  


    @ViewChild('input') input: ElementRef<HTMLInputElement>;
    @ViewChild('inputLabel') label: ElementRef<HTMLInputElement>;

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        console.log(this.type);
        this.label.nativeElement.setAttribute('data-placeholder', this.type.toUpperCase());
    }

    onChange(){
        this.inputModelChange.emit(this.inputModel);
        
        if(this.inputModel == ""){
            this.input.nativeElement.classList.remove('has-val');

            if(this.type == "email"){
                this.label.nativeElement.classList.remove('no-validate');
                this.label.nativeElement.setAttribute('data-placeholder', 'EMAIL');
            }
        } else {
            this.input.nativeElement.classList.add('has-val');

            if(this.type == "email"){
                this.validEmail.emit(this.validateEmail());
            }
        }

    }


    validateEmail(): boolean{

        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
        if(this.input.nativeElement.value.match(regexp)){
            this.label.nativeElement.classList.remove('no-validate');
            this.label.nativeElement.setAttribute('data-placeholder', 'EMAIL');
            return true;
        } else {
            this.label.nativeElement.classList.add('no-validate');
            this.label.nativeElement.setAttribute('data-placeholder', 'EMAIL: Please enter valid email');
            return false;
        }

    }

}

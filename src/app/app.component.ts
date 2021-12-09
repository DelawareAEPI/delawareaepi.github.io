import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    
    title = 'aepi';
    pages=['home', 'rush', 'brother', 'history', 'contact', 'newsletter'];
    signIn: string = "Sign In";

    constructor(private authService: AuthenticationService){}

    ngOnInit(){  
        var pathname = window.location.pathname;
        document.querySelectorAll('.nav-item').forEach((item, index)=>{
            if(pathname.includes(this.pages[index])) 
                item.children[0].classList.add('active');
            else
                if (item.children[0].classList.contains('active')) item.classList.remove('active');
        });
    }

    navigate(page: string){
        document.querySelectorAll('.nav-item').forEach((item, index)=>{
            if(page.includes(this.pages[index])) 
                item.children[0].classList.add('active');
            else
                item.children[0].classList.remove('active');
        });
    }

    userSignIn(){
        if(this.signIn == "Sign In"){
            this.authService.signUserIn()?.then((result) => {
                const user = result.user;
                this.authService.createUser(user);
                this.signIn = "Sign Out: " + user.email?.substring(0, user.email?.indexOf("@"));
            }).catch((error) => {console.log(error)});
        } else {
            this.signIn="Sign In";
            this.authService.signUserOut();
        }
    }
}

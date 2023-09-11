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

        this.authService.authListener();
        // Admin status is updated whenever a user signs in or out
        this.authService.getCurrentAdminStatus().subscribe(data=> {
            this.updateUserStatus();
        })
    }

    navigate(page: string){
        document.querySelectorAll('.nav-item').forEach((item, index)=>{
            if(page.includes(this.pages[index])) 
                item.children[0].classList.add('active');
            else
                item.children[0].classList.remove('active');
        });
    }

    updateUserStatus(){
        const user = this.authService.getUser();
        if (user){
            this.signIn = "Sign Out: " + user.email?.substring(0, user.email?.indexOf("@"));
        } else {
            this.signIn = "Sign In";
        }
    }

    userSignIn(){
        if (this.authService.getUser() != null){
            // User is already signed in
            this.authService.signUserOut();
        } else {
            this.authService.signUserIn();
        }
    }
}

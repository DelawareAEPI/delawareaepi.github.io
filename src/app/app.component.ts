import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    
    title = 'aepi';
    pages=['home', 'rush', 'brotherhood', 'academic', 'contact', 'newsletter'];

    ngOnInit(){  
        var pathname = window.location.pathname;
        document.querySelectorAll('.nav-item').forEach((item, index)=>{
            if(pathname.includes(this.pages[index])) 
                item.classList.add('active');
            else
                if (item.classList.contains('active')) item.classList.remove('active');
        });
    }

}

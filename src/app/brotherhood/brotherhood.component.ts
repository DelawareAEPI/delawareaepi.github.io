import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-brotherhood',
    templateUrl: './brotherhood.component.html',
    styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

    events: string[] = ["Barbecues","Formal","Paintball","Intramural Sports", "Bonfires", "Echostage", "DC Trip", "Philly Trip","Movie Trips","Bowling","Much More!"];
    descs: string[] = ["Barbecues are a great way for us to get outside and come together for a great meal. On Family Weekend we host all our parents and siblings and on Homecoming Weekend we get to welcome back our amazing alumni. No matter the occasion, a BBQ with the boys is a crowd-pleaser.",
                        "At the end of every Spring semester, we spend an entire weekend on the beach in Ocean City, Maryland. From sports in the sand, swimming in the ocean and a huge party, Formal Weekend is one of our favorite times of the year.",
                        "Each semester we go for a day of paintball at a local range. It’s a great way to spend a Saturday and to take a break from everything going on to just blow off some steam and get active.",
                        "We love participating in intramural sports. From soccer to wiffleball, we love to get active, to play together… and win too. Fantasy sports, watching football games, video game tournaments and intramurals are just some of the ways we use sports to get closer and to have a great time together.",
                        "Sometimes it’s nice to end a busy day hanging out around a bonfire with your closest friends. These casual bonfires are a great chance to destress, spend time with a smaller group of brothers and relax around the fire for as long as you want.",
                        "Sometimes it’s nice to end a busy day hanging out around a bonfire with your closest friends. These casual bonfires are a great chance to destress, spend time with a smaller group of brothers and relax around the fire for as long as you want."]

    images: string[] = ["https://static.wixstatic.com/media/0d4090_0e4f4e492b47492597ea7ebcb61c9501~mv2.jpg/v1/fill/w_947,h_710,al_c,q_85,usm_0.66_1.00_0.01/0d4090_0e4f4e492b47492597ea7ebcb61c9501~mv2.webp",
                        "https://static.wixstatic.com/media/0d4090_6e3b3a6d5e204331bf9d8cb60c830ef1~mv2.jpeg/v1/fill/w_947,h_710,al_c,q_85,usm_0.66_1.00_0.01/0d4090_6e3b3a6d5e204331bf9d8cb60c830ef1~mv2.webp",
                        "https://static.wixstatic.com/media/0d4090_97bfb4b5b61c487eb71c1808ea6b0010~mv2.png/v1/fill/w_944,h_710,al_c,q_90,usm_0.66_1.00_0.01/0d4090_97bfb4b5b61c487eb71c1808ea6b0010~mv2.webp",
                        "https://static.wixstatic.com/media/0d4090_cd8ea362a318461290abc50f6808f73f~mv2.jpg/v1/fill/w_947,h_710,al_c,q_85,usm_0.66_1.00_0.01/0d4090_cd8ea362a318461290abc50f6808f73f~mv2.webp",
                        "https://static.wixstatic.com/media/0d4090_0921dbad2329433e866f2bd8f90332c1~mv2.jpg/v1/fill/w_724,h_543,al_c,q_85/0d4090_0921dbad2329433e866f2bd8f90332c1~mv2.webp",
                        "https://static.wixstatic.com/media/0d4090_0e4f4e492b47492597ea7ebcb61c9501~mv2.jpg/v1/fill/w_947,h_710,al_c,q_85,usm_0.66_1.00_0.01/0d4090_0e4f4e492b47492597ea7ebcb61c9501~mv2.webp"]

    eventImages: {eventName: string, eventDesc: string, imageLink: string}[] = [];

    constructor() { }

    ngOnInit(): void {
        for(let i = 0; i < 6; i++){
            this.eventImages.push({eventName:this.events[i], eventDesc: this.descs[i], imageLink:this.images[i]});
        }
    }

}

import { Injectable } from '@angular/core';

import { getDatabase, ref, get, push, set, DataSnapshot } from "firebase/database";
import { initializeApp }  from 'firebase/app';
import { environment } from "src/environments/environment";

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'responseType': 'text',
    "x-iq-image-response-type":"url",
    "Accept":"*/*",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' })
};

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {

    db: any;
    theBoard: Object[] = [];

    constructor(private http:HttpClient) { 
        initializeApp(environment.firebaseConfig),
        this.db = getDatabase();
    }

    test() {
        //test = new RegExp('data-fund-current="\\d+\\.\\d+')

        //return this.http.get('/api/bpos_teampage.aspx?eventtag=ud2022&teamid=3717')
        //      .pipe(map((response: any) => response));

        return this.http.get('/api/', {responseType: 'text'});
    }

    getBoard(): Promise<DataSnapshot>{
        let boardMembers = ref(this.db, "/boardMembers/");
        return get(boardMembers);
    }

    getHome(): Promise<DataSnapshot>{
        let home = ref(this.db, "/home/");
        return get(home);
    }

    setAboutUs(data){
        let home = ref(this.db, "/home/aboutus/blurb");
        set(home, data);
    }

    getRush(): Promise<DataSnapshot>{
        let rush = ref(this.db, "/rush/");
        return get(rush);
    }

    setRushBlurb(data){
        let rush = ref(this.db, "/rush/blurb");
        set(rush, data);
    }


    getBrotherhood(): Promise<DataSnapshot>{
        let brotherhood = ref(this.db, "/brotherhood/");
        return get(brotherhood);
    }

    setBrotherhoodBlurb(data){
        let brotherhoood = ref(this.db, "/brotherhood/blurb");
        set(brotherhoood, data);
    }

    getHistory(): Promise<DataSnapshot>{
        let history = ref(this.db, "/history/events");
        return get(history);
    }

    addHistoryEvent(data){
        let history = ref(this.db, "/history/events");
        push(history, data);
    }

    testMethod2(){
        //let history = ref(this.db, "/history/events");
        let data = [
            {
                "title":"The Birth of Rho Deuteron",
                "period":true,
                "content":"",
                "year":""
            },
            {
                "period":false,
                "year":"1947",
                "title":"The Beginning",
                "content":"The Rho Deuteron Chapter of Alpha Epsilon Pi was founded in April, 1947 with 42 Brothers. They had a house at 151 West Main St. Many Brothers took leadership roles around campus within the IFC, Student Government, Hillel and the UD Review or were student athletes. "
            },
            {
                "period":false,
                "year":"1962",
                "title":"Expansion",
                "content":"In 1962, they moved to a newly constructed house at 48 West Park Pl. "
            },
            {
                "period":false,
                "year":"1969",
                "title":"The Fall of Rho D",
                "content":"The chapter disbanded in 1969 during a trend of Greek life struggling at UD. These first 22 years of our chapter were highly successful creating a culture of leadership and dedication to high academic performance."
            },
            {
                "title":"Golden Age",
                "period":true,
                "content":"",
                "year":""
            },
            {
                "period":false,
                "year":"1978",
                "title":"Refoundation",
                "content":"In 1978, a group of 10 Jewish students refounded the Rho Deuteron chapter and began a golden age that lasted many years."
            },
            {
                "period":false,
                "year":"1982",
                "title":"A Growing Chapter",
                "content":"In 1982, AEPi moved into a house at 30 E Main St and grew into a big chapter with a close brotherhood and lots of campus involvement."
            },
            {
                "period":false,
                "year":"1986",
                "title":"The Eighties",
                "content":"In 1986, they built a new house at 314 Wyoming St. The 1980s saw a resurgence of Greek Life and our chapter thrived. They maintained a great connection to the Jewish community, had the highest GPA on campus for years and grew to be one of the largest chapters at the University of Delaware."
            },
            {
                "period":false,
                "year":"1990",
                "title":"The Nineties",
                "content":"Heading into the 90s, the Brothers continued their dedication to philanthropy and a thriving social life. By the end of the 90s, after a few incidents, the chapter was disbanded but they left a legacy of brotherhood and building a strong Jewish identity that lasts to this day."
            },
            {
                "title":"A Third Iteration",
                "period":true,
                "content":"",
                "year":""
            },
            {
                "period":false,
                "year":"2005",
                "title":"AEPi Returns",
                "content":"A new group of students decided a few years later to restart the Rho Deuteron chapter in 2005. Initially clinging to their Jewish roots, the Brothers formed a strong brotherhood and performed well in philanthropic causes and in the social scene. The chapter quickly grew to be one of the largest and most well-liked fraternities at UD."
            },
            {
                "period":false,
                "year":"2014",
                "title":"Unfortunate Events",
                "content":"However, it was short-lived after a 2014 allegation caused the chapter to lose recognition."
            },
            {
                "title":"The Current Chapter",
                "period":true,
                "content":"",
                "year":""
            },
            {
                "period":false,
                "year":"2015",
                "title":"AEPi Returns... Again",
                "content":"2015 saw the start of the current iteration of our chapter. 29 founding fathers restarted the chapter hoping to learn from the lessons of the past to create a model chapter valuing leadership, connection to the Jewish community, philanthropy and brotherhood."
            },
            {
                "period":false,
                "year":"2018",
                "title":"Back On Campus",
                "content":"The chapter was welcomed back on campus in October 2018 and since then our chapter has thrived and grown. Though we faced many challenges as we restarted the chapter, our brothers worked hard to overcome them all."
            },
            {
                "period":false,
                "year":"2020",
                "title":"COVID",
                "content":"COVID-19 was another hard challenge but the chapter’s culture of perseverance helped us get through it successfully. In the 2020-2021 school year, the chapter won the Rising Star Award from UDance, the Chapter of the Year Award from AEPi Headquarters and the Fraternity of the Year Award from the University of Delaware. This is just the start of a long and successful chapter staying true to our founding values and delivering a high quality fraternity experience to all our members. "
            },
            {
                "period":false,
                "year":"2021",
                "title":"Outstanding Recognition",
                "content":"In the 2020-2021 school year, the chapter won the Rising Star Award from UDance, the Chapter of the Year Award from AEPi Headquarters and the Fraternity of the Year Award from the University of Delaware. This is just the start of a long and successful chapter staying true to our founding values and delivering a high quality fraternity experience to all our members."
            }
        ]

        
    }


}

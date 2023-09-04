import { Component } from "@angular/core";

@Component ({
    selector: 'app-london',
    templateUrl: "../london/london.component.html",
    styleUrls: ['./london.component.css']
})

export class LondonComponent{
    london: any = [
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyVleWnalXp87UyFat0iKO-GrdstjLs4RkQ&usqp=CAU",
            name: "User 1",
            lv: "Team Lead"
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROelS6bsPjOIKj2kBVdCS_suMV1GE-Cw4ZJMltpIlK9IveeHN22UAmWothUN8qzM7si10&usqp=CAU",
            name: "User 2",
            lv: "Developer"
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO5qAbwVHvN94SlOxYVmd-yrESgkwvrTZZCv7PyRHtchQQ4g2n1rq3NWgA3aLpn_6T1A&usqp=CAU",
            name: "User 3",
            lv: "Developer"
        }
    ]
}
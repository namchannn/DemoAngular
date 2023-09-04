import { Component } from "@angular/core";

@Component ({
    selector: 'rome',
    templateUrl: "../rome/rome.component.html",
    styleUrls: ['./rome.component.css']
})

export class RomeComponent{
    rome: any = [
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpPJ6HNGzAm2h3I322AXCcBoUfNdDNAZpOg&usqp=CAU",
            name: "User 7",
            lv: "Team Lead"
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql1L2nDunnwamDIr29dCtgnF9TMIVm9hjgw&usqp=CAU",
            name: "User 8",
            lv: "Developer"
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-iLLkRu1-TA8mSXt3oX2m4-QVsdPxcIinw&usqp=CAU",
            name: "User 9",
            lv: "Developer"
        } 
    ]
}
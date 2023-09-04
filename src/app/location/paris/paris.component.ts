import { Component } from "@angular/core";

@Component ({
    selector: 'paris',
    templateUrl: "../paris/paris.component.html",
    styleUrls: ['./paris.component.css']
})

export class ParisComponent {
    paris: any = [
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABgD8cvk4YIfdIvKjq75zzfwr6fkGy65hT33xecfDEVyQID9xNA6A6LjbIwE4yf-6JQ8&usqp=CAU",
            name: "User 4",
            lv: "Team Lead"
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfjwfDEn0i-CSnR_Q3H6j0hcte9zsZR-cDDexlDjIkeo42pMC5WY2Vwm1KmKjKtdoAx0&usqp=CAU",
            name: "User 5",
            lv: "Developer"
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiyjOFnU_CMQq2RVqfDgL4H0W9FMwGl9rMtQRpzHPu6z-hEd93wsmaRlgUFM9NUK3ChQ&usqp=CAU",
            name: "User 6",
            lv: "Developer"
        }
    ]
}
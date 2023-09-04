import { Component } from "@angular/core";

@Component ({
    selector: 'app-allemployee',
    templateUrl: "./allemployee.component.html",
    styleUrls: ["./allemployee.component.css"]
})

export class allEmployeeComponent {
    emp: any = [
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyVleWnalXp87UyFat0iKO-GrdstjLs4RkQ&usqp=CAU",
            name: "User 1",
            lv: "Team Lead",
            birth: "01/01/0001",
            city: "paris",
            phone: 1111111111
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROelS6bsPjOIKj2kBVdCS_suMV1GE-Cw4ZJMltpIlK9IveeHN22UAmWothUN8qzM7si10&usqp=CAU",
            name: "User 2",
            lv: "Developer",
            birth: "02/02/0002",
            city: "paris",
            phone: 2222222222
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO5qAbwVHvN94SlOxYVmd-yrESgkwvrTZZCv7PyRHtchQQ4g2n1rq3NWgA3aLpn_6T1A&usqp=CAU",
            name: "User 3",
            lv: "Developer",
            birth: "03/03/0003",
            city: "paris",
            phone: 3333333333
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABgD8cvk4YIfdIvKjq75zzfwr6fkGy65hT33xecfDEVyQID9xNA6A6LjbIwE4yf-6JQ8&usqp=CAU",
            name: "User 4",
            lv: "Team Lead",
            birth: "04/04/0004",
            city: "london",
            phone: 4444444444
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfjwfDEn0i-CSnR_Q3H6j0hcte9zsZR-cDDexlDjIkeo42pMC5WY2Vwm1KmKjKtdoAx0&usqp=CAU",
            name: "User 5",
            lv: "Developer",
            birth: "05/05/0005",
            city: "london",
            phone: 5555555555
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiyjOFnU_CMQq2RVqfDgL4H0W9FMwGl9rMtQRpzHPu6z-hEd93wsmaRlgUFM9NUK3ChQ&usqp=CAU",
            name: "User 6",
            lv: "Developer",
            birth: "06/06/0006",
            city: "london",
            phone: 6666666666
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpPJ6HNGzAm2h3I322AXCcBoUfNdDNAZpOg&usqp=CAU",
            name: "User 7",
            lv: "Team Lead",
            birth: "07/07/0007",
            city: "rome",
            phone: 777777777
        },
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql1L2nDunnwamDIr29dCtgnF9TMIVm9hjgw&usqp=CAU",
            name: "User 8",
            lv: "Developer",
            birth: "08/08/0008",
            city: "rome",
            phone: 8888888888
        }, 
        {
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-iLLkRu1-TA8mSXt3oX2m4-QVsdPxcIinw&usqp=CAU",
            name: "User 9",
            lv: "Developer",
            birth: "09/09/0009",
            city: "rome",
            phone: 9999999999
        }
    ]

    selectedEmp: any;

    showDetails(employee: any) {
        this.selectedEmp = employee;
    }
}
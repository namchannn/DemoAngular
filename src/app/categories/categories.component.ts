import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
    forecast: any = [];
    inputValue = "";

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getForecast("hanoi");
    }

    getForecast(city: String) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        this.http.get<any>(url).subscribe(data => {
            this.forecast = data.list;
        })
    }

    findWeather() {
        this.getForecast(this.inputValue);
    }
}
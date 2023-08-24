import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
    weatherData: any[] = [];
    
    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.weather();
    }

    weather() {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        this.http.get<any>(url).subscribe(data => {
            const list = data.list;

            list.forEach((e: any) => {
                const time = e.dt_txt;
                const temp = e.main.temp;
                const desc = e.weather[0].description;
                const icon = e.weather[0].icon;

                const cardData = {
                    time: time,
                    temp: temp,
                    desc: desc,
                    icon: `https://openweathermap.org/img/wn/10d@2x.png`
                };

                this.weatherData.push(cardData);
            });
        });
    }
}
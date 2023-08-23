import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
    constructor(private http: HttpClient) {

    }


}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})

export class CollectionComponent {
    albums: any = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.showCollection();
    }

    showCollection() {
        const url = `https://dummyjson.com/products?limit=100&skip=0`;
        this.http.get<any>(url).subscribe(data => {
            this.albums = data.products;
        })
    }


}
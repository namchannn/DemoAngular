import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseHostBindings } from '@angular/compiler';

@Component ({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
    products: any = [];
    total = 100;
    limit = 8;
    page = 1;
    max_page = 1;
    pages: Number[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.search();
    }

    paginate() {
        let n = (this.total / this.limit).toString();
        this.max_page = this.total % this.limit == 0 ? parseInt(n) : parseInt(n) + 1;
        for (var i = 1; i <= this.max_page; i++) {
            this.pages.push(i);
        }
    }

    search() {
        const url = `https://dummyjson.com/products?limit=8&skip=0`;
        this.http.get<any>(url).subscribe(data => {
            this.products = data.products;

        })
    }
}
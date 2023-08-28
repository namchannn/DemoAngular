import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})

export class CollectionComponent {
    albums: any = [];
    currentPage = 1;
    skip = 0;
    limit = 8;
    total = 100;
    pages: Number[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.showCollection();
    }

    showCollection() {
        const url = `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`;
        this.http.get<any>(url).subscribe(data => {
            this.albums = data.products;
            this.total = data.total;
            var n = this.total%this.limit == 0 ? this.total/this.limit : this.total/this.limit + 1;
            for(var i = 1; i <= n; i++) {
                this.pages.push(i);
            }
        })
    }

    changePage(page: number) {
        this.currentPage = page;
        this.skip = (page - 1) * this.limit;
        this.showCollection();
    }


}
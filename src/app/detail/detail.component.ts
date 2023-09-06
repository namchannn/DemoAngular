import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent {
    id = 0;
    product: any = {};

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getProduct();
        });
    }

    getProduct() {
        const url = `https://dummyjson.com/products/${this.id}`;
        this.http.get<any>(url).subscribe(data => {
            this.product = data;
        });
    }

    changeImg(urlImg: string) {
        this.product.thumbnail = urlImg;
    }
}
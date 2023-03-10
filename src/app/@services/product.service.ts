import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private httpService: HttpClient) {}
    
    getAllProducts() {
        return this.httpService.get<any[]>("http://localhost:8070/ecommerce/products");
    }

}
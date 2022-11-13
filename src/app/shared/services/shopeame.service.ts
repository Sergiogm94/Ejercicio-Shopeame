import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopeameService {

  url = 'http://localhost:3000/products';

  product = {
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  }

  products? = [];

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url);
  }

  postProduct(product: any){
    return this.http.post(this.url, product);
  }

  getProductById(id: any){
    return this.http.get(this.url + '/' + id);
  }

  putProduct(product: any){
    return this.http.put(this.url + '/' + product.id, product);
  }

  deleteProduct(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}

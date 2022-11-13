import { Component, OnInit } from '@angular/core';
import { ShopeameService } from 'src/app/shared/services/shopeame.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products?: any = [];
  constructor(private shopeameService: ShopeameService, private router: Router) { }



  ngOnInit(): void {
    this.shopeameService.getProducts().subscribe((res: any) => {
      this.products = res;
    })
  }

}

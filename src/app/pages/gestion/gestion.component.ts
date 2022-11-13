import { ShopeameService } from 'src/app/shared/services/shopeame.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  newProduct!: FormGroup;
  isSubmit: boolean = false;
  id: string = '';
  products: any = [];
  product: any = {};

  constructor(private formBuilder: FormBuilder, private shopeameService: ShopeameService) { }


  ngOnInit(): void {this.newProduct = this.formBuilder.group(
    {
      image: ["",[Validators.required]],
      description: ["",[Validators.required]],
      price: ["",[Validators.required]],
      name: ["",[Validators.required]],
      stars: ["",[Validators.required]]

  })
}

enviar(){
  this.isSubmit = true;
  console.log(this.newProduct);
  console.log(this.newProduct.value);
  this.shopeameService.postProduct(this.newProduct.value).subscribe(product => this.products.push(product))

  this.newProduct.reset();
  this.isSubmit = false;
}
}


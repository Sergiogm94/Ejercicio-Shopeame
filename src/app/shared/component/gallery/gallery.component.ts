import { ShopeameService } from 'src/app/shared/services/shopeame.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() index: number = -1;
  @Input() products: any = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }
  constructor(private shopeameService: ShopeameService) { }

  ngOnInit(): void {
  }

  put(id: string){
    this.shopeameService.getProductById(id).subscribe((res: any) => {
      this.shopeameService.product = res;
    });
  }

  delete(id: string) {
    this.shopeameService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }
}

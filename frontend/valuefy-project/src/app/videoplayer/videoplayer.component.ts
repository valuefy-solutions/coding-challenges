import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../videoservices.service';
import { first } from 'rxjs/operators';
import { Product } from '../model/products';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input()
  url: string = "";
  urlSafe: SafeResourceUrl;
  constructor(private _msgServices: VideoService, public sanitizer: DomSanitizer) {
  }
  public products: Product;
  ngOnInit() {
    this._msgServices.product()
      .pipe(first())
      .subscribe((resp: any) => {
        const products = resp.body;
        this._msgServices.productSubject.next(products);
        this._msgServices.productValue.subscribe(proData => this.products = proData);
        this.url = this.products[0].trailer;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      },
        error => {
          console.log(error);
        });
  }
  changeUrl(value: any) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(value.trailer);
  }
}

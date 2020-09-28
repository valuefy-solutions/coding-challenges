import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../videoservices.service';


@Component({
  selector: 'app-videolist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlayListComponent implements OnInit {
  @Output() onSrcValue = new EventEmitter<string>();

  constructor(private _msgServices: VideoService) {
  }
  public products: any;
  ngOnInit() {
    this._msgServices.productValue.subscribe(proData => this.products = proData);
  }
  sendData(value: any) {
    this.onSrcValue.emit(value);
  }
}

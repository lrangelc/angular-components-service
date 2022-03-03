import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
    console.error('error on load image...');
  }

  imgLoaded() {
    console.log('image loaded...');
    this.loaded.emit(this.img);
  }

}

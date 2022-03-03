import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/images/default.png';

  constructor() {
    // before render
    // no run async methods -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before, during render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before render
    // async -- fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    // handle children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
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

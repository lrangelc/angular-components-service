import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  // @Input()
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    // code
    console.log(`change just img =>`, this.img);
  }
  // @Input() img: string = '';
  @Input() alt: string = '';
  @Input() width: number = 200;

  @Output() loaded = new EventEmitter<string>();

  imageDefault = './../../../assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // before render
    // no run async methods -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before, during render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async -- fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);

    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log(`run counter`);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handle children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
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

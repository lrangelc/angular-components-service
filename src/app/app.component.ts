import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-components-service';
  // imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  // imgParent = 'https://picsum.photos/200';
  imgParent = '';

  onLoaded(img:string) {
    console.log(`log padre ${img}`);
  }
}

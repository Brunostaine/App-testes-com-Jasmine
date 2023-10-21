import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-jasmine';
  text!: string;
  boolean: boolean = false;

  onClick() {
    console.log('Clicked!')
  }
}

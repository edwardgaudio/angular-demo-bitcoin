import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('state', [
      state('small', style({
        fontSize: '20px',
      })),
      state('large',   style({
        fontSize: '26px',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'Broadridge Financial';
  state = 'small';

  toggleState() {
    this.state = this.state === 'large' ? 'small' : 'large';
  }
}

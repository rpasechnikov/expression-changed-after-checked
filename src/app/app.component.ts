import { Component } from '@angular/core';

/** https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4 */
@Component({
  selector: 'app-root',
  template: `
    <div>{{ text }}</div>
    <app-child [text]="childText"></app-child>
  `,
})
export class AppComponent {
  text = 'Parent text content';
  childText = 'Child text content';
}

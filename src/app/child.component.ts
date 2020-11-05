import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-child',
  template: '<span>{{text}}</span>',
})
export class ChildComponent implements OnInit {
  @Input() text: string;

  constructor(private parent: AppComponent) {}

  ngOnInit(): void {
    this.parent.text = 'Parent text content (updated)';
  }
}

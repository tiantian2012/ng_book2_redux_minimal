import { Component, provide } from '@angular/core';

import { CounterComponent } from './CounterComponent'


@Component({
  selector: 'my-app',
  directives: [CounterComponent],
  template: `
    <div>
      <counter-component>
      </counter-component>
    </div>
  `
})
export class AppComponent {

}
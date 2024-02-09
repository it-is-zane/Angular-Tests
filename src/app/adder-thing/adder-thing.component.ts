import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-adder-thing',
  templateUrl: './adder-thing.component.html',
  styleUrl: './adder-thing.component.css'
})
export class AdderThingComponent {
  count = 0;
  sqrt(value: number) {
    return Math.sqrt(value);
  }
}


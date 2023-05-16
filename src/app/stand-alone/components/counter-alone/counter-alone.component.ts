import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
})
export class CounterAloneComponent {

  @Input()
  public counter: number = 10;

}

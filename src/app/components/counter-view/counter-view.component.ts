import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'counter-view',
  imports: [],
  template: `<hr> <h1>Vista contador</h1>
    <h2>Contador: {{ counter() }}</h2>`,
  styleUrl: './counter-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterViewComponent {
  // Exponemos el valor del signal para usarlo en el template
  counter: Signal<number>;

  constructor(private readonly _stateService: StateService) {
    this.counter = this._stateService.counter;
  }
}

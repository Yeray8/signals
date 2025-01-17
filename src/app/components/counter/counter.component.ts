import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'counter',
  imports: [],
  template: `
    <div>
      <h1>Componente Contador</h1>
      <h2>Contador: {{ counter() }}</h2>
      <button (click)="increment()">Incrementar</button>
      <button (click)="decrement()">Decrementar</button>
      <button (click)="reset()">Resetear</button>
    </div>
  `,
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  // Exponemos el valor del signal para usarlo en el template
  counter: Signal<number>;

  constructor(private readonly _stateService: StateService) {
    this.counter = this._stateService.counter;
  }

  increment() {
    this._stateService.increment();
  }

  decrement() {
    this._stateService.decrement();
  }

  reset() {
    this._stateService.reset();
  }
}

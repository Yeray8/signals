import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'counter-form',
  imports: [FormsModule],
  template: `
    <hr />
    <h1>Formulario del Contador</h1>
    <form (ngSubmit)="updateCounter()">
      <label for="counterValue">Establecer valor del contador:</label>
      <input
        id="counterValue"
        type="number"
        name="counterValue"
        required
        min="0"
        [(ngModel)]="inputValue"
      />
      <button type="submit">Actualizar</button>
    </form>
    <p>Valor actual del contador: {{ counter() }}</p>
  `,
  styleUrl: './counter-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterFormComponent {
  inputValue = 0;
  counter: Signal<number>;

  constructor(private readonly _stateService: StateService) {
    this.counter = this._stateService.counter;
  }

  updateCounter() {
    this.inputValue = Math.max(this.inputValue, 0);
    this._stateService['_history'].update((currentHistory) => [...currentHistory, this.inputValue]);
    this._stateService['_counter'].set(this.inputValue); // Actualizamos directamente
  }
}

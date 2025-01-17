import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // Creamos un signal para almacenar el estado compartido
  private readonly _counter = signal(0);

  // Creamos un signal para almacenar el historial de cambios
  private readonly _history = signal<number[]>([]);

  // Exponemos el signal como una propiedad computada para acceder a su valor
  readonly counter = computed(() => this._counter());
  readonly history = computed(() => this._history());

  // Métodos para modificar el valor del signal
  increment() {
    this._counter.update((value) => {
      const newValue = value + 1;
      this._addToHistory(newValue);
      return newValue;
    });
  }

  decrement() {
    this._counter.update((value) => {
      const newValue = Math.max(value - 1, 0);
      this._addToHistory(newValue);
      return newValue;
    });
  }

  reset() {
    this._counter.set(0);
    this._addToHistory(0);
  }

  private _addToHistory(value: number) {
    this._history.update((currentHistory) => [...currentHistory, value]);
  }
}

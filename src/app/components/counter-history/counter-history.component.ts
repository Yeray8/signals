import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'counter-history',
  imports: [],
  template: `<hr />
    <div>
      <h2>Historial de cambios</h2>
      <ul>
        @for (item of history(); track i; let i = $index) {
        <li>{{ item }}</li>
        } @empty {
        <li>There are no items.</li>
        }
      </ul>
    </div>`,
  styleUrl: './counter-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterHistoryComponent {
  history: Signal<number[]>;

  constructor(private readonly _stateService: StateService) {
    this.history = this._stateService.history;
  }
}

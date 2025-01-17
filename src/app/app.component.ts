import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CounterViewComponent } from "./components/counter-view/counter-view.component";
import { CounterFormComponent } from "./components/counter-form/counter-form.component";
import { CounterHistoryComponent } from "./components/counter-history/counter-history.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CounterViewComponent, CounterFormComponent, CounterHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

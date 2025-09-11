import { Component, signal } from '@angular/core';
import { WidgetParent } from './components/widget-parent/widget-parent';

@Component({
  selector: 'app-root',
  imports: [WidgetParent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('school-timetable-widget');
}

import { Component, inject } from '@angular/core';
import { Currentdayservice } from '../../services/currentdayservice';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.scss'
})
export class Widget {
  public currentdayservice = inject(Currentdayservice)

  date = this.currentdayservice.update()
}

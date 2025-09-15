import { Component } from '@angular/core';
import { Widget } from "../widget/widget";
import { Agenda } from "../agenda/agenda";

@Component({
  selector: 'app-widget-parent',
  imports: [Widget, Agenda],
  templateUrl: './widget-parent.html',
  styleUrl: './widget-parent.scss'
})
export class WidgetParent {

}

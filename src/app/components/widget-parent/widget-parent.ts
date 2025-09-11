import { Component } from '@angular/core';
import { Widget } from "../widget/widget";

@Component({
  selector: 'app-widget-parent',
  imports: [Widget],
  templateUrl: './widget-parent.html',
  styleUrl: './widget-parent.scss'
})
export class WidgetParent {

}

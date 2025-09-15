import { Component, inject } from '@angular/core';
import { Agendaservice } from '../../services/agendaservice';
import { Currentdayservice } from '../../services/currentdayservice';

@Component({
  selector: 'app-agenda',
  imports: [],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss'
})
export class Agenda {
  agendaservice = inject(Agendaservice)
  currentdayservice = inject(Currentdayservice)
}

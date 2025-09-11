import { computed, Injectable, signal } from '@angular/core';
import { DAYSLIST } from '../constants/schoolDaysList';

@Injectable({
  providedIn: 'root'
})
export class Currentdayservice {
  schoolDays = signal(DAYSLIST)
  currentDay = 1
  date = new Date()

  // currentNextClass = this.schoolDays()[this.currentDay-1].classesList
  currentNextClass = this.date

  nextClassCalculator(day: number, date: Date){
    const classlist = this.schoolDays()[day-1].classesList
  }
}

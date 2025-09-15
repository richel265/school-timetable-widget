import { Injectable, signal } from '@angular/core';
import { DAYSLIST } from '../constants/schoolDaysList';

@Injectable({
  providedIn: 'root'
})
export class Agendaservice {
  schooldays = signal(DAYSLIST)

  classPeriodCalculator(day: number, schoolclass: unknown){
    const dayObject = this.schooldays()[day-1]
    const classlist = dayObject.classesList

    return classlist.indexOf(schoolclass)+1
  }

  classPeriodTimeCalculator(period: number){
    if (period == 1) return ["9:00","10:00"]
    if (period == 2) return ["10:10","11:10"] 
    if (period == 3) return ["11:25","12:25"] 
    if (period == 4) return ["13:55","14:55"] 
    if (period == 5) return ["15:05","16:05"]

    return ["0:00", "0:00"]
  }
  
  classTimesCalculator(day: number, schoolclass: unknown){
    const period = this.classPeriodCalculator(day,schoolclass)

    return this.classPeriodTimeCalculator(period)
  }
}

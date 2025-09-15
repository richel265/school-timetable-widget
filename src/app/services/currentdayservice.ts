import { computed, Injectable, signal } from '@angular/core';
import { DAYSLIST } from '../constants/schoolDaysList';

@Injectable({
  providedIn: 'root'
})
export class Currentdayservice {
  schoolDays = signal(DAYSLIST)
  currentDay = 6
  date = new Date()

  // currentNextClass = this.schoolDays()[this.currentDay-1].classesList
  currentNextClass = this.nextClassCalculator(this.currentDay, this.date)
  currentNextClassStart = ""
  currentNextClassEnd = ""
  currentNextClassPeriod = this.nextClassPeriodCalculator(this.currentDay)

  timeStringSplitter(timestring: string){
    const [h,m,restoftime] = timestring.split(":")
    const [s, indicator] = restoftime.split(" ")
    return [h,m,s,indicator]
  }

  nextClassCalculator(day: number, date: Date){
    const dayObject = this.schoolDays()[day-1]
    const classlist = dayObject.classesList
    const time = date.toLocaleTimeString()

    const [, minutes, seconds] = this.timeStringSplitter(time)
    const hours = +this.timeStringSplitter(time)[0]+12
    const hoursminutes = hours+'||'+minutes
    
   

    if (dayObject.halfDay) {
        if (hours >= 0 && hours <= 9) {
          return classlist[0]
      }
      if (hours >= 9) {
          return classlist[1]
      }
      if (hours >= 10) {
          return classlist[2]
      }
    }

    if (!dayObject.halfDay){
      if (hours >= 0 && hours <= 9) {
          return classlist[0]
      }
      if (hours >= 9) {
          return classlist[1]
      }
      if (hours >= 10) {
          return classlist[2]
      }
    }

    return `${hours}:${minutes}:${seconds}`
  }

  nextClassPeriodCalculator(day: number){
    const dayObject = this.schoolDays()[day-1]
    const classlist = dayObject.classesList

    return classlist.indexOf(this.currentNextClass)+1
  }

}

import { computed, Injectable, signal } from '@angular/core';
import { DAYSLIST } from '../constants/schoolDaysList';
import type { SchoolDay } from '../classes/school-day';

@Injectable({
  providedIn: 'root'
})
export class Currentdayservice {
  schoolDays = signal(DAYSLIST)
  currentDay: number = 9
  date = new Date()

  update(): void {

    setInterval(() => {
      this.date = new Date()
      this.nextClassCalculator(this.currentDay)
    }, 1000)

  }

  // currentNextClass = this.schoolDays()[this.currentDay-1].classesList
  currentNextClass = this.nextClassCalculator(this.currentDay)
  currentNextClassStart: string = ""
  currentNextClassEnd: string = ""
  currentNextClassPeriod: number = this.nextClassPeriodCalculator(this.currentDay)
  currentFormatEndTimeString: string = `${this.classTimeRemainingCalculator()} minutes`
  currentDayMessage: string = this.schoolDays()[this.currentDay-1].message

  timeStringSplitter(timestring: string) {
    const [h, m, restoftime] = timestring.split(":")
    const [s, indicator] = restoftime.split(" ")

    var h24

    if (+h > 12) {
      h24 = h
    } else {
      h24 = h+12
    }
    return [+h, +m, +s, indicator, +h24]
  }

  timeTableLogic(classlist: unknown[], hours: number, minutes: number, dayObject: SchoolDay): string | unknown {
    if (dayObject.halfDay) {
      if (hours >= 0 && hours <= 9) return classlist[0]
      if (hours >= 9 && hours <= 10) return classlist[1]
      if (hours >= 10) return classlist[2]
    }

    if (!dayObject.halfDay) {
      if (hours >= 0 && hours <= 9) return classlist[0]
      if (hours >= 9 && hours <= 10 && minutes >= 10) return classlist[1]
      if (hours >= 10 && hours <= 11) return classlist[2]
      if (hours >= 11 && hours <= 14) return classlist[3]
      if (hours >= 14 && hours <= 16) return classlist[4]
      if (hours >= 16) return `None, enjoy your time at home!`
    }
    return `bro idk`
  }

  nextClassCalculator(day: number) {
    const date = this.date
    const dayObject = this.schoolDays()[day - 1]
    const classlist = dayObject.classesList
    const time = date.toLocaleTimeString()

    const [hours, minutes,, indicator, hours24] = this.timeStringSplitter(time)
    const hoursminutes = hours + '||' + minutes

    console.log(this.timeTableLogic(classlist, +hours24, +minutes, dayObject))
    console.log(hours, minutes, indicator, hours24, hoursminutes)


    return this.timeTableLogic(classlist, +hours24, +minutes, dayObject)
  }

  nextClassPeriodCalculator(day: number) {
    const dayObject = this.schoolDays()[day - 1]
    const classlist = dayObject.classesList

    return classlist.indexOf(this.currentNextClass) + 1
  }

  getClassEndMinutes(schoolclass: unknown, classlist: unknown[]) {
    if (classlist.indexOf(schoolclass) == 0) return 0
    if (classlist.indexOf(schoolclass) == 1) return 10
    if (classlist.indexOf(schoolclass) == 2) return 25
    if (classlist.indexOf(schoolclass) == 3) return 55
    if (classlist.indexOf(schoolclass) == 4) return 5
    return -1
  }

  classTimeRemainingCalculator() {
    const dayObject = this.schoolDays()[this.currentDay - 1]
    const classlist = dayObject.classesList
    const currentClass = classlist.indexOf(this.currentNextClass) - 1
    const classEndMinutes = this.getClassEndMinutes(classlist[currentClass], classlist)

    const [, minutes] = this.timeStringSplitter(this.date.toLocaleTimeString())

    if (+minutes > classEndMinutes) {
      return classEndMinutes + 60 - +minutes
    }

    return classEndMinutes - +minutes
  }

  

  ngOnInit() {
    // idk what to put here brhhhh
  }

}

export class SchoolDay {
    dayNumber: number
    classesList: unknown[]
    halfDay: boolean

    constructor(day: number, classlist: unknown[], half: boolean){
        this.dayNumber = day
        this.classesList = classlist
        this.halfDay = half
    }
}

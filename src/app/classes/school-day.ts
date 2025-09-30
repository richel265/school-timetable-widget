export class SchoolDay {
    dayNumber: number
    classesList: unknown[]
    halfDay: boolean
    message: string

    constructor(day: number, classlist: unknown[], half: boolean, msg: string){
        this.dayNumber = day
        this.classesList = classlist
        this.halfDay = half
        this.message = msg
    }
}

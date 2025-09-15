import { SchoolDay } from "../classes/school-day";
import { POSSIBLECLASSES } from "../constants/possibleClasses"

export const DAYSLIST = [
    new SchoolDay(1,[POSSIBLECLASSES.get("en"), POSSIBLECLASSES.get('sci1'), POSSIBLECLASSES.get("physed")],true),
    new SchoolDay(2,[''],true),
    new SchoolDay(3,[''],false),
    new SchoolDay(4,[''],false),
    new SchoolDay(5,[''],false),
    new SchoolDay(6,[POSSIBLECLASSES.get("fr"),POSSIBLECLASSES.get("mus"),POSSIBLECLASSES.get('math'),POSSIBLECLASSES.get("su"),POSSIBLECLASSES.get("en")],false),
    new SchoolDay(7,[''],false),
    new SchoolDay(8,[''],false),
    new SchoolDay(9,[''],false),
    new SchoolDay(10,[''],false),
]
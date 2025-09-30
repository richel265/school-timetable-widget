import { SchoolDay } from "../classes/school-day";
import { POSSIBLECLASSES } from "../constants/possibleClasses"

export const DAYSLIST = [
    new SchoolDay(1,[POSSIBLECLASSES.get("en"), POSSIBLECLASSES.get('sci1'), POSSIBLECLASSES.get("pe")],true,""),
    new SchoolDay(2,[''],true,""),
    new SchoolDay(3,[''],false,""),
    new SchoolDay(4,[''],false,""),
    new SchoolDay(5,[''],false,""),
    new SchoolDay(6,[POSSIBLECLASSES.get("fr"),POSSIBLECLASSES.get("music"),POSSIBLECLASSES.get('math'),POSSIBLECLASSES.get("su"),POSSIBLECLASSES.get("en")],false,"PAA is located in French class."),
    new SchoolDay(7,[''],false,""),
    new SchoolDay(8,[''],false,""),
    new SchoolDay(9,[POSSIBLECLASSES.get("pe"),POSSIBLECLASSES.get("fr"),POSSIBLECLASSES.get("music"),POSSIBLECLASSES.get("sci1"),POSSIBLECLASSES.get("en"),],false,"TESTING 123"),
    new SchoolDay(10,[''],false,"PAA is in room 137"),
]
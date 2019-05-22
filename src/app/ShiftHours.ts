import{ WeekDays } from 'src/app/classes/WeekDays'
export class ShiftHours {
    startTime: number;
    endTime: number;
    weekDays: WeekDays;
    numberOfEmployes: number;
    userid: number;

    constructor(startTime: number, endTime: number, weekDays: WeekDays, numberOfEmployees: number, userid: number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.weekDays = weekDays;
        this.numberOfEmployes = numberOfEmployees;
        this.userid = userid;
    }
}

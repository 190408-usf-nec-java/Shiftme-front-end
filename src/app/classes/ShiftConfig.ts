import { WeekDays } from 'src/app/classes/WeekDays';
export class ShiftHours {
    userId: number;
    startTime: number;
    endTime: number;
    weekDays: WeekDays;
    numberOfEmployees: number;

    constructor(id: number, startTime: number, endTime: number, weekDays: WeekDays, numberOfEmployees: number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.weekDays = weekDays;
        this.numberOfEmployees = numberOfEmployees;
        this.userId = id;
    }
}

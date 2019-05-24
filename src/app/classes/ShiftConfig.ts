import { WeekDays } from 'src/app/classes/WeekDays';
import { Users } from './users';
export class ShiftConfig {
    users: Users;
    startTime: number;
    endTime: number;
    weekdays: WeekDays;
    numberOfEmployees: number;

    constructor(user: Users, startTime: number, endTime: number, weekDays: WeekDays, numberOfEmployees: number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.weekdays = weekDays;
        this.numberOfEmployees = numberOfEmployees;
        this.users = user;
    }
}

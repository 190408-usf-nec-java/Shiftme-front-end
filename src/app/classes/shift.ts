import { User } from './user';

export class Shift {
    startTime: number;
    endTime: number;
    employees: Array<User>;
    constructor(startTime: number, endTime: number, employees: Array<User>) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.employees = employees;
    }
}

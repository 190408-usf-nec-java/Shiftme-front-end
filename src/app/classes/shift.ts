import { User } from './user';

export class Shift {
    shiftId: number;
    startTime: number;
    endTime: number;
    employees: Array<User>;
    isEmptyShift: boolean;
    numberOfEmployees: number;
    constructor(shiftId: number, startTime: number, endTime: number, employees: Array<User>, numberOfEmployees: number,
                isEmptyShift = false) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.employees = employees;
        this.isEmptyShift = isEmptyShift;
        this.shiftId = shiftId;
        this.numberOfEmployees = numberOfEmployees;
    }
}

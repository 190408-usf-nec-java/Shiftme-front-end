import { Users } from './users';
import { Credentials } from './credentials';

export class Shift {
    shiftId: number;
    startHour: number;
    endHour: number;
    employees: Array<Credentials> = [];
    isEmptyShift: boolean;
    numberOfEmployees: number;
    constructor(shiftId: number, startTime: number, endTime: number, employees: Array<Credentials>, numberOfEmployees: number,
                isEmptyShift = false) {
        this.startHour = startTime;
        this.endHour = endTime;
        this.employees = employees;
        this.isEmptyShift = isEmptyShift;
        this.shiftId = shiftId;
        this.numberOfEmployees = numberOfEmployees;
    }
}

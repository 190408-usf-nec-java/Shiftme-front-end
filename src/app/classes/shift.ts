import { Users } from './users';
import { Credentials } from './credentials';

export class Shift {
    shiftId: number;
    startTime: number;
    endTime: number;
    employees: Array<Credentials>;
    isEmptyShift: boolean;
    numberOfEmployees: number;
    constructor(shiftId: number, startTime: number, endTime: number, employees: Array<Credentials>, numberOfEmployees: number,
                isEmptyShift = false) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.employees = employees;
        this.isEmptyShift = isEmptyShift;
        this.shiftId = shiftId;
        this.numberOfEmployees = numberOfEmployees;
    }
}

import { Shift } from './shift';

export class Day {
    shifts: Array<Shift>;
    date: Date;
    constructor(date: Date, shifts: Array<Shift>) {
        this.date = date;
        this.shifts = shifts;
    }
}

import { Shift } from './shift';

export class Day {
    shifts: Array<Shift>;
    date: Date;
    name: string;
    constructor(date: Date, shifts: Array<Shift>, name: string) {
        this.date = date;
        this.shifts = shifts;
        this.name = name;
    }
}

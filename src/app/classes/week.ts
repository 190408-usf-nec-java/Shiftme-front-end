import { Day } from './day';

export class Week {
    days = new Array<Day>();
    id: number;
    startDate: Date;
    constructor(days: Array<Day>, id: number, startDate: Date) {
        this.days = days;
        this.id = id;
        this.startDate = startDate;
    }
}

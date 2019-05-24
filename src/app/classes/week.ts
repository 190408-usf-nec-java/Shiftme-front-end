import { Day } from './day';

export class Week {
    days = new Map<string, Day>();
    id: number;
    startDate: Date;
    constructor(days: Map<string, Day>, id: number, startDate: Date) {
        this.days = days;
        this.id = id;
        this.startDate = startDate;
    }
}

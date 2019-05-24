export class WeekDays {
id: number;
monday: boolean;
tuesday: boolean;
wednesday: boolean;
thursday: boolean;
friday: boolean;
saturday: boolean;
sunday: boolean;

constructor(Monday:boolean,Tuesday:boolean, Wednesday:boolean,Thursday:boolean,Friday:boolean,Saturday:boolean, Sunday:boolean, id=0){
    this.monday = Monday;
    this.tuesday= Tuesday;
    this.wednesday= Wednesday;
    this.thursday= Thursday;
    this.friday= Friday;
    this.saturday= Saturday;
    this.sunday= Sunday;
    this.id = id;
}
}
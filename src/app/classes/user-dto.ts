import { Credentials } from './credentials';

export class UserDTO {
    employees: Array<Credentials>;
    constructor(employees: Array<Credentials>){
        this.employees = employees;
    }
}

export class Users {
    firstName: string;
    lastName: string;
    email: string;
    role: number;
    id: number;
    constructor(firstname: string, lastname: string, email: string, role: number, id: number) {
        this.firstName = firstname;
        this.email = email;
        this.lastName = lastname;
        this.role = role;
        this.id = id;
    }
}

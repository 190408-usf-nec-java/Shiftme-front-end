export class Users {
    firstName: string;
    lastName: string;
    email: string;
    role: number;
    userId: number;
    token: string;
    constructor(firstname: string, lastname: string, email: string, role: number, id: number, token: string = null) {
        this.firstName = firstname;
        this.email = email;
        this.lastName = lastname;
        this.role = role;
        this.userId = id;
        this.token = token;
    }
}

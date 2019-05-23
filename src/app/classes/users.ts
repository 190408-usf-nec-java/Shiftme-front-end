import { Credentials } from './credentials';

export class Users {
    credentials: Credentials;
    firstname: string;
    lastname: string;
	email: string;
    role: string;
    id: number;
    constructor(firstname: string, lastname: string, email: string, role: string, id: number, credentials: Credentials) {
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.role = role;
        this.id = id;
        this.credentials = credentials;
    }
}

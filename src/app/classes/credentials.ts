import { Users } from './users';

export class Credentials {
    password: string;
    hashedPassword: string;
    username: string;
    user: Users;
    constructor(password: string, hashedPassword: string, username: string, user: Users) {
        this.password = password;
        this.hashedPassword = hashedPassword;
        this.username = username;
        this.user = user;
    }
}

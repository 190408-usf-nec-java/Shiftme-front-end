import { Users } from './users';

export class Credentials {
    id: number;
    password: string;
    username: string;
    user: Users;
    constructor(id: number, password: string, username: string, user: Users) {
        this.password = password;
        this.username = username;
        this.user = user;
        this.id = id;
    }
}

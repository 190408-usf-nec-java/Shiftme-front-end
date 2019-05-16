export class Credentials {
    password: string;
    hashedPassword: string;
    username: string;
    constructor(password: string, hashedPassword: string, username: string) {
        this.password = password;
        this.hashedPassword = hashedPassword;
        this.username = username;
    }
}

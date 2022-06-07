export default class Model {
    constructor() {
        this.isAuth = false;
    }

    logIn({email, password}) {
        const user = JSON.parse(localStorage.getItem('appUser'));
        debugger
        this.isAuth = user?.email === email && user?.password === password;
    }
}
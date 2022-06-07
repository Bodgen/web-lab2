export default class Model {
    constructor() {
        this.isAuth = false;
    }

    signUp(user) {
        if (Object.values(user).some(item => !item)) {
            this.isAuth = false;
            return;
        }
        console.log(user)
        const info = JSON.stringify(user);
        localStorage.setItem('appUser', info);
        this.isAuth = true;
    }
}
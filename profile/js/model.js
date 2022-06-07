export default class Model {
    constructor() {
    }

    get userInfo() {
        return JSON.parse(localStorage.getItem('appUser')) ?? {}
    }

    get isAuth() {
        return Object.values(JSON.parse(localStorage.getItem('appUser')) ?? {}).length
    }
}
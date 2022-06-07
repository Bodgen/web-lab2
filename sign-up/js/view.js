import defaultView from '../../utils.js';

export default class View extends defaultView {
    constructor(model) {
        super();
        this.model = model;
        this.form = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.password = null;
        this.sex = null;
        this.birth = null;
        this.elements();
        this.listeners();
    }

    elements() {
        this.form = this.query('form')
        this.firstName = this.query('#firstName')
        this.lastName = this.query('#lastName')
        this.email = this.query('#email')
        this.password = this.query('#password')
        this.sex = this.query('#sex')
        this.birth = this.query('#birth_date')
        this.redirectLink = this.query('#redirect_link')
    }

    initController(controller) {
        this.formController = controller;
    }

    listeners() {
        this.setEvent(this.form, 'submit', (e) => {
            e.preventDefault();
            if (this.model.isAuth) {
                this.redirectLink.click()
            }
        })
    }

    signUp() {
        this.formController({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
            sex: this.sex.value,
            birth: this.birth.value,
        })
    }
}
import controllerDefault from "../../utils.js"

export default class Controller extends controllerDefault {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.signUpBtn = null;
        this.view.initController(this.signUp)
        this.elements();
        this.listeners();
    }

    elements() {
        this.signUpBtn = this.query('#sign_up_button')
    }

    listeners() {
        this.setEvent(this.signUpBtn, 'click', () => {
            this.view.signUp()
        })
    }

    signUp(credentials) {
        this.model.signUp({...credentials, blog: []})
    }
}
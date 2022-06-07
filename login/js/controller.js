import defaultController from '../../utils.js';

export default class Controller extends defaultController{
    constructor(view,model) {
        super();
        this.view=view;
        this.model=model;
        this.loginBtn = null;
        this.view.initController(this.logIn)
        this.elements();
        this.listeners();
    }
    elements(){
        this.loginBtn = this.query('#login_button')
    }

    listeners(){
        this.setEvent(this.loginBtn,'click',()=>{
            this.view.logIn()
        })
    }

    logIn(credentials){
        this.model.logIn(credentials)
    }

}
import defaultView from '../../utils.js'

export default class View extends defaultView{
    constructor(model) {
        super();
        this.model=model;
        this.user=this.model.userInfo;
        this.name=null;
        this.email=null;
        this.sex=null;
        this.birthDate = null;
        this.initView();
    }

    initView (){
        this.initElements();
        this.showUserInfo();
    }

    initElements(){
        this.name=this.query('#name');
        this.email=this.query('#email');
        this.sex=this.query('#sex');
        this.birthDate=this.query('#birth');
    }

    showUserInfo(){
        this.name.innerHTML = `${this.user.firstName} ${this.user.lastName}`;
        this.email.innerHTML = this.user.email;
        this.sex.innerHTML = this.user.sex;
        this.birthDate.innerHTML=this.user.birth;
    }

}
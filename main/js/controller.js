import BaseController from '../../utils.js'

export default class Controller extends BaseController{
    constructor(view,model) {
        super();
        this.view = view;
        this.model = model;
        this.savePostBtn = null;
        this.redirectLink = null;
        this.view.initControllers({
            add:this.onAdd,
            remove:this.onRemove
        })
        this.init();
    }

    init(){
        this.initElements();
        this.initListeners();
    }

    initElements(){
        this.savePostBtn = this.query("#save-post-btn")
        this.redirectLink = this.query("#redirectLink")
    }

    initListeners(){
        this.setEvent(this.savePostBtn, 'click', () => this.view.onAdd())
    }

    onAdd(post){
        this.model.addItem(post);
    }
    onRemove(id){
        this.model.removeItem(id)
    }
}
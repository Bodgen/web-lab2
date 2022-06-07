import {postItemModel} from "./postItemModel.js";


export default class Model{
    constructor() {
        this.isAuth = false;
        this.posts=[];
        this.fetchItems()
    }

    fetchItems(){
        const user = JSON.parse(localStorage.getItem('appUser'));
        this.posts = user.blog || [];
    }

    addItem (blogItem){
        const item = new postItemModel(blogItem.title,blogItem.description);
        const user = JSON.parse(localStorage.getItem('appUser'));
        this.posts.push(item);

        localStorage.setItem('appUser',JSON.stringify({...user,blog:this.posts}));
    }

    removeItem (id){
        const index = this.posts.findIndex(element=>element.id===id);
        const user = JSON.parse(localStorage.getItem('appUser'));
        this.posts.splice(index,1)

        localStorage.setItem('appUser',JSON.stringify({...user,blog:this.posts}))
    }
}
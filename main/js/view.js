import defaultView from '../../utils.js'

export default class View extends defaultView {
    constructor(model) {
        super();
        this.model = model;
        this.form = null;
        this.titleInput = null;
        this.descriptionInput = null;
        this.postsContainer = null;
        this.addPostController = null;
        this.removePostController = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
        this.renderPosts();
    }

    initElements() {
        this.form = this.query('form');
        this.titleInput = this.query('#add_title_post');
        this.descriptionInput = this.query('#post-text-input');
        this.postsContainer = this.query('#posts-container');
    }

    initListeners() {
        this.setEvent(this.form, 'submit', (e) => e.preventDefault());
    }

    initControllers(controller) {
        this.addPostController = controller.add;
        this.removePostController = controller.remove;
    }

    onAdd() {
        this.addPostController({
            title: this.titleInput.value,
            description: this.descriptionInput.value
        });

        this.titleInput.value = '';
        this.descriptionInput.value = '';

        this.renderPosts();
    }

    onRemove(id){
        debugger
        this.removePostController(+id);
        this.renderPosts();
    }

    renderPosts(){
        this.postsContainer.innerHTML = '';
        this.model.posts.forEach(post=>{
            this.postsContainer.insertAdjacentHTML('beforeend',this.getPostHtml(post.title,post.description,post.id))
        })
        this.queryAll('.remove-btn').forEach(btn=>{
            btn.addEventListener('click',()=>this.onRemove(btn.getAttribute('data-post-id')))
        })
    }

    getPostHtml(title,description,id){
        return `
        <div class="card blog-item">
            <div class="card-header">
                <h2 class="bold">${title}</h2>
            </div>
            <div class="card-body ">
                <p class="card-text">${description}</p>
                <div class="buttons">
                    <button type="button" class="button" data-post-id="${id}" id="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                    <button class="button remove-btn" type="button" id="remove-post-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <button class="btn btn-outline-secondary">Add comment</button>
                </div>
            </div>
        `
    }
}

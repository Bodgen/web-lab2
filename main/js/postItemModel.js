export class postItemModel {
    constructor(title, description) {
        this.title = title
        this.description = description;
        this.id = Math.floor(Math.random() * 1000)
    }
}
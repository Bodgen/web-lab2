export default class Utils{
    constructor() {}

    query(selector){
        return document.querySelector(selector)
    }

    queryAll (selector){
        return document.querySelectorAll(selector)
    }

    setEvent(element,event,callback){
        return element.addEventListener(event,callback)
    }

    authGuard (redirectLink, isAuth){
        if (!isAuth){
            redirectLink.click()
        }
    }
}
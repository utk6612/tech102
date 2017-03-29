export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

export function addComment(){
    return{
        type:'ADD_COMMENT'
    }
}

export function removeComment(){
    return{
        type:'REMOVE_COMMENT',
        index
    }
}


//functions which returns object
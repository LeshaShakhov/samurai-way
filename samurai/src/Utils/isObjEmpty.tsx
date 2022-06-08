
const isObjEmpty = (obj:Object):boolean => {
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

export default isObjEmpty;
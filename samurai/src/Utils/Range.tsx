const Range  = (start:number, end:number) => {
    let arr:Array<number> = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
export default Range;
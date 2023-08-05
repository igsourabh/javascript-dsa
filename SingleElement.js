let arr= [1,1,2,3,3,4,4,8,8]

function SingleElement(array) {
    let result={}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (result[element]) {
            delete result[element]
        }
        else{
            result[element]=element
        }
        
    }
    return Object.values(result)
}

console.log(SingleElement(arr));



function getvalue(numbers) {
    let left=0
    let right=numbers.length-1
    while(left<right)
    {
        sum=numbers[left]+numbers[right]
        if (sum===0) {
            console.log("if")
            return [numbers[left],numbers[right]]
        }
        else if(sum>0){
            right --
            console.log("else if")
        }
        else{
            left ++
        }
        
    }
}



const data=getvalue([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(data)

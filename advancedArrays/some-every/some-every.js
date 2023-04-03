function some(arr, func){
    for(let i in arr){
        if(func(arr[i], i, arr)) return true;
    }
    return false;
}

some([4,5,6], function(n){
    return n>5
})

function every(arr, func){
    for(let i in arr){
        if(!func(arr[i], i, arr)) return false;
    }
    return true;
}

some([4,5,6], function(n){
    return n>5
})

/////oddNumber/////

function hasOddNumber(arr){
    return arr.some(function(number){
        return number % 2 !== 0;
    });
}

//check for 0's////
function hasAZero(num){
    let numArr = num.toString.split("");
    numArr.some(function(number){
        return number === 0;
    })
}

/////ONLY ODD NUMBERS////

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num % 2 !== 0;
    })
}

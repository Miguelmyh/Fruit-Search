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

//////NO DUPLICATES/////

function hasNoDuplicates(arr){
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })
}

/////has certain key /////

function hasCertainKey(arr, key){
    return arr.every(function(object){
        return key in object;
    })
}

//////has certain value /////

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(value){
        return value[key] === searchValue;
    })
}



////

function myfind(arr, func){
    for(let i in arr){
        if(func(arr[i]) === true) return arr[i];
    }
}
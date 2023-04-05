const nums = [0,1,2,3,4];

const total = nums.reduce(function(accumulator, currentVal){
    return accumulator + currentVal;
},0);

const total2 = nums.reduce(function(sum, num){
    return sum + num;
},0);

// const nums = [0,1,2,3,4];
nums.reduce(function(max, currentVal){
    if(currentVal > max){
        return currentVal;
    }
    return max;
});

nums.reduce(function(min, currentVal){
    if(currentVal < min){
        return currentVal;
    }
    return min;
});

//////////////
///////////creates object that generates 
// object with the amount of people for certain age///

const people = [{

}];////////array of objects


const peopleAges = people.reduce(function(ages, currentPerson){
    const age = currentPerson.age;
    if(ages[age] == null){
        ages[age] = 1;
    } else{
        ages[age] +=1;
    }
    return ages;
}, {}); ///starts as empty object, current person 
// refers to {name :"name", age:age}
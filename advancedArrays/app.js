// window.addEventListener('DOMContentLoaded', function(){
    function holler(){
        console.log("hey you");
    }

    const whisper = function(){
        console.log('psst');

    }
    function add(x, y){
        return x + y;
    }
    function substract(x, y){
        return x - y;
    }
    function divide(x, y){
        return x / y;
    }
    function multiply(x, y){
        return x * y;
    }
// })
const mathFuncts = [add, substract, divide, multiply];

function doAllMath(a, b, mathFuncts){
    for (func of mathFuncts){
        console.log(func(a,b));
    }
}
/////////////////////////////// for each /////////////////
const colors = ['blue','gray', 'red'];

colors.forEach(function(val){
    // console.log(val.toUpperCase())
});

///////////////own for each/////////////

function myForEach(arr, func){
    for(i in arr){
        func(arr[i], i);
    }
};


myForEach(colors, function(color, i){
console.log(i + color.toUpperCase());
});

//////////////////Map//////////////

const numbers = [21, 50, 5, 7];
const negatives = numbers.map(function(num){
    return num * -1;
});

const todos = [
    {
        id : 1,
        text : 'hello',
        priority : 'medium'
    },
    {
        id : 2,
        text : 'bye',
        priority : 'low'
    }
];

const todoText = todos.map(function(todo, i){
    return todo.text;
});

//////////turn nodelist("array taken with dom") into actual array/////
// let links = document.querySelectorAll();
// Array.from(links);
// const urls = links.map(function(a){
//     return a.href;
// })

////////////////////OWN MAP VERSION//////////


function myMap(arr, func){
    const newMap = [];
    for(num in arr){
        const val = func(arr[num], num, arr);
        newMap.push(val);
    }
    return newMap;
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
});

const repeated = myMap(['a','b', 'c'], function(str,idx){
    return str.repeat(idx);
});


///////////////filter////////////////////

// const longWords = words.filter(function(word){
//     return word.length >=20;
// });
//  const containsVowels = words.filter(containsVowel)
//  const noVowels = words.filter(function(){
//     return !containsVowel(word);
// })
// const containsVowel(word){
//     for(let char of word){
//        if(isVowel(char)) return true;
//     }
//     return false; //meaning there is no vowel
// }
// const isVowel = function(){
//     return 'aeiou'.indexOf(char) !== -1;  //indexOf gives -1 if char is not part of the string
// }


const allCheckBoxes = document.querySelectorAll('input[type = "checkbox"]');
// 1.Always hungry
function alwaysHungry(arr) {
    var food = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] =="food") {
            food++;
            console.log("yummy");
        }
    }
    if (food == 0) {
            console.log("I'm hungry")
        }
        }
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i =0; i <arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    var ave =0;
    for (var i =0; i < arr.length; i++) {
        sum = arr[i]+sum;
    }
    ave = sum/arr.length
    var count = 0
    for (var i=0; i < arr.length; i++) {
        if (arr[i]>ave) {
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse 
function reverse(arr) {
    for (var i=0; i<arr.length/2; i++) {
        var x=0;
        x = arr[i];
        arr[i]=arr[(arr.length-i)-1];
        arr[(arr.length-i)-1] = x;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=0; i < n; i++) {
        var newnum = fibArr[i] +fibArr[i+1];
        fibArr.push(newnum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var newnum =0;
        newnum = fibArr[fibArr.length-1]+fibArr[fibArr.length-2];
        fibArr.push(newnum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



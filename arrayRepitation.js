/**
### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

 */


//Writing the function
function repeatedValues(array){
    let occurrences = {};
    // let value = array[0];
    
    for(let value of array){
        if(occurrences[value]){
            occurrences[value]++;
        }
        else{
            occurrences[value] = 1;
        }
    }
    return occurrences;
}

let numbers = [1, 2, 1, 5, 8, 5, 7, 1, 8, 100, 1, 100];
let repetition = repeatedValues(numbers);
console.log(repetition);
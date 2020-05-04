# Whiteboarding and Big O

## How this is gonna go down
1. I need volunteers for each letter. Be brave, be ready to unmute and maybe take remote access of my computer 0.o, and be ready to seem super smart and cool to all of the other folks on the call yeaaaaahhh!
- [ ] R - Ozzy & Sam
- [ ] E - Mike & Adit
- [ ] A - Lou & Jake 
- [ ] C - Joey & Matt
- [ ] T - April 
- [ ] O - Caryn & Brian!!!!

2. We'll talk about a process for handling whiteboarding problems.

3. We'll break down a sample problem using that method

4. When we get to a certain part of that process, we'll talk optimizations and Big O. 




# Lets do this!!

## Repeat - YOUR OWN WORDS AND BE DETAILED. 
You want me to write a function that calls an array and 
finds two numbers in the array that add up to the target number and return it.

Clarification: All possible pairs.

## Examples - ask about edge cases, ask about other possible inputs and outputs to get clarity
What if first arg has same num twice ==> you can use the same num twice if it appears twice
Input array contents ==> only integers -infinity to +infinity
If no solution ==> empty array. Array of arrays or empty array
Only pairs? ==> yes only pairs, not triplets and not even the individual number (unless theres a zero)
sorted array? ==> not guaranteed... optimization? 
memory limitations ==> nope!
array length per scenario? ==> any length 0 to infinity
returning a new array ==> yes, not mutating the original array
sorted return array ==> nope!
duplicate pairs allowed in answer array? ==> nope!

hasTargetSum([], 5) => []
hasTargetSum([-1, 3, 5, 12, 4, 5, 7], 10) ==>  [[5,5], [3, 7]]


## Approach 
hasTargetSum = (arry, num) => {
    create an empty array or a set 
    iterate through the array twice - nested loop
    hold on to one of the values  (firstVal)
    within nest add the following element to firstVal and compare to target
        make sure it's skipping itself (start second loop at next ind)
    if they equal ten, add to the array or set
    return the answers array
}


## Code
```
const hasTargetSum = (arr, target) => {             Time: O(n^2)   
    let answers = []                              Time:  O(1)     
    for(let i = 0; i < arr.length; i++){            Time: O(n)
        for(let j = i + 1 ; j < arr.length; j++){     Time: O(n)
            let sum = arr[i] + arr[j]            Time:  O(1)  
            if(sum === target) {                 Time:  O(1)  
                answers.push([arr[i], arr[j]])       Time:  O(1)  
            }
        }
    }
    return answers       Time:  O(1)  
}
```

### Constant Time O (1)
- O(1)
- doesn't matter how big your data gets, the computations won't change
- Mathematical operations: addition, subtraction, division, multiplication
- checking equality is constant 
- arr[i] is constant 

### Linear Time O(n)
- grows proportionally to the amount of data you have
- arr.find(), .map(() => {})

###  Time O(n^2)
- NO GOOD RED ZONE

## Test
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]
do get the duplicates here :(  ==> update j to start at i + 1 and we're gravy 



## Optimize
Strategies for optimizing : 
- recursion
- memoization / using objects/hashes
while arr.find() is linear... object[findThisKey] is constant

```
[-1, 3, 8, 12, 4, 11, 7], 10
const hasTargetSum = (arr, target) => {            
    let answers = [] 
    let seenNums = {} // being more space intensive will take up n keys space

    for(let i = 0; i < arr.length; i++){ 
        console.log('current seenNums', seenNums)
        console.log('current Number', arr[i])
        let compliment = target - arr[i]
        if(seenNums[compliment]){
            answers.push([arr[i], compliment])
        }
        seenNums[arr[i]] = true   
        console.log('answers', answers)      
    }
    return answers        
}
```




# Example Problem
```
Write a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add up to the target number.
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

```



## Convo Time
- What is an algorithm? 
Mathematical equation 
Set of instructions to arrive at a solution (or to execute some behavior)
A way to organize data structures 
everyday life!! brushing your teeth, making coffee 











- How do we measure time? Complexity? 
Millisecond, seconds, minutes, hours, days
Not correlated to the input size :(
Machine speed 
Computations as the size of the data increases 







- What cases are we concerned with?
Best Case
Avg Case 
Worst Case    10000000000000000000000000000000000000000000000000000000000000 





- How to write our Big O Notation 
- Types of Big O to cover 
  - Constant O(1) 
  - Logarithmic O(log(n))
  - Linear O(n) 
  - Quadratic O(n^2) 
  - Exponential O(2^n) 
    ... ie recursive fibonacci 
  - Factorial O(n!) 
    ... ie traveling salesman problem



- Lists & Objects && Big O Notation
  - TL;DR: know the Big O of list methods (like map, sort, find, etc) and utilize objects for constant time look up


# Before we go, some advice
1. Build this into your practice 
2. Do this in community 


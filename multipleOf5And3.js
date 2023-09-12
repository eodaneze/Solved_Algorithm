function solution(number){
    if(number < 0){
        return 0
    }
    
    let sum = 0;
    for(let i = 0; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
          sum += i
        }
    }
    return sum;
  }

//   algorithm to get the sum of multiples of 5 and 3 below a given number
  const num = 20;
const result = solution(num);
console.log(`The sum of multiples of 3 or 5 below ${num} is ${result}`);
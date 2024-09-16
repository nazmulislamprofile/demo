function findAverage(numbers){
    if(numbers.length===0){
        return 0;
    }
    
    let sum= numbers.reduce((accumulator,num)=>accumulator+num,0)
    return sum/numbers.length;

    
}
let numbers=[1,23,18,45,26,27,28]
let averageNumber=findAverage(numbers);
console.log(averageNumber);
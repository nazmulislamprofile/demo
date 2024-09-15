function sortArrayDescending(numbers){

      return ascendingNumbers=numbers.sort((a,b)=>a-b).reverse();
}
let numbers=[1,23,20,24,26,3,5,7,20,34];
let result=sortArrayDescending(numbers);
console.log(result);



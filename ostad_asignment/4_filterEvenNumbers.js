function filterEvenNumbers(array){
    return array.filter((item)=>{
           return item%2===0;
        })
}

let array=[1,23,54,24,3,7,9,15,3,4,6,10];
let evenNumber=filterEvenNumbers(array);
console.log(evenNumber);
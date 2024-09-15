function lowercaseFirstLetter(str){
    if(!str){
        return "please enter valid word"
    }else{
        return str.charAt(0).toLowerCase()+str.slice(1);
    }   
}

let str="Hello Word";
console.log(lowercaseFirstLetter(str));

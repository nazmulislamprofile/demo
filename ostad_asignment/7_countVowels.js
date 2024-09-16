function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let str = "Programming is Awesome";
let vowelCount = countVowels(str);
console.log(vowelCount);

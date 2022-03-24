let str = "hom nay la thu nam";
let arr = str.split("");

const countTheNumberOfVowelCharacters = (arr) => {
    let count = 0;
    let vowelArray = ['a', 'o', 'u', 'e', 'i'];
    for (let element of arr) {
        for (let character of vowelArray) {
            if (element == character) {
                count++;
            }
        }
    }
    return (count != 0) ? count : false;
};

console.log(countTheNumberOfVowelCharacters(arr));


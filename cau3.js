let str = "hom nay lA thU nam";
let arr = str.split("");

const countTheNumberOfVowelCharacters = (arr) => {
    let count = 0;
    let vowelArray = ['a', 'o', 'u', 'e', 'i'];
    for (let element of arr) {
        for (let character of vowelArray) {
            if (element.toLowerCase() == character) {
                count++;
            }
        }
    }
    return (count != 0) ? count : false;
};

console.log(countTheNumberOfVowelCharacters(arr));


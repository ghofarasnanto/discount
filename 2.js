const arrOfString = ["saya", "belajar", "javascript"];
const changeArrayElement = (arr) => {
    const newArray = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        newArray[i] = arr[arrLength - (i + 1)];
    }
    return newArray;
};

const newString = changeArrayElement(arrOfString);
console.log(newString);
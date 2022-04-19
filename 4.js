// input = 555670435143026
// 1 = 55567 sort => 55567
// 2 = 435143 sort => 13345
// 3 = 26 sort => 26
// combine 1, 2, 3
const divideAndSort = (number) => {
    let result = [];
    // pisah number by 0
    const splitNumberArr = number.toString().split(0);
    // looping number split
    splitNumberArr.forEach((item) => {
        // split each item into array
        const arrNumber = item.split("");
        const sortedNumber = arrNumber.sort(function(a, b) { return a - b }).join("");
        result.push(sortedNumber);
    });
    // join array to string then parseInt
    console.log(parseInt(result.join("")));
}

divideAndSort(555670435143026);
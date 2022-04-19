const check = (item) => item.toLowerCase();
const isPalindrom = (item) => {
    if (typeof(item) !== 'string') {
        return 'Data Harus String';
    }
    const checkStr = check(item);
    for (let i = 0; i < checkStr.length / 2; i++) {
        if (checkStr[i] !== checkStr[checkStr.length - 1 - i]) {
            return ('is not palindrom');
        }
    }

    return ('is palindrom');
}
const palindrom = isPalindrom("malam")
console.log(palindrom)
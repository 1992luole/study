function jssort(myArr) {
    for (let i = 0; i < myArr.length - 1; i++) {
        for (let j = 0; j < myArr.length - i - 1; j++) {
            let tmp = ''
            if (myArr[j] > myArr[j + 1]) {
                tmp = myArr[j]
                myArr[j] = myArr[j + 1]
                myArr[j + 1] = tmp
            }
        }
    }
    return myArr
}
console.log(jssort([2, 1, 4, 3]));
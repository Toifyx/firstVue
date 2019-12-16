function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function cloneArr(arr) {
    // 从第一个字符就开始 copy
    // slice(start,end) 方法可从已有的数组中返回选定的元素。
    return arr.slice(0);
}
function shuffle(arr, flag = false) {
    // console.log('arr',arr)
    let newArr = [];
    flag ? (newArr = arr) : (newArr = cloneArr(arr))

    for (let i = 0; i < newArr.length; i++) {
        let j = getRandom(0, i)
        let temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
    }
    // console.log('arr',arr,newArr)

    return newArr
}
export {
    shuffle
}
const getInvCount = (arr, n) => {
    let invCount = 0
    for (let i = 0; i < n * n - 1; i++) {
        for (let j = i + 1; j < n * n; j++) {
            if (arr[j] && arr[i] && arr[i] > arr[j]) {invCount++}
        }
    }
    return invCount
}
const findXPosition = (arr, n) => {
    const matrix = arr.reduce((rows, key, index) => (index % n === 0 ? rows.push([key]) : 
        rows[rows.length-1].push(key)) && rows, [])
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] == 0) {return n - i}
        }
    }            
}
const isSolvable = (arr, n) => {
    const invCount = getInvCount(arr, n)
    const zeroPos = findXPosition(arr, n)
    if (n % 2 !== 0) {
        return invCount % 2 === 0
    } else {
        if (zeroPos % 2 === 0) {return invCount % 2 !== 0}
        else {return invCount % 2 === 0}
    }
}
const solvableArr = (n) => {
    const nums = new Set();
    while(nums.size !== n * n) {
        nums.add(Math.floor(Math.random() * n * n - 1) + 1);
    }
    const resArr = [...nums]
    console.log('arr:', resArr)
    console.log('0 pos:', findXPosition(resArr, n))
    console.log('invertions:', getInvCount(resArr, n))
    console.log('solvable:', isSolvable(resArr, n))
    if (!isSolvable(resArr, n)) {
        return solvableArr(n)
    } else {
        return resArr
    }
}

export {solvableArr}
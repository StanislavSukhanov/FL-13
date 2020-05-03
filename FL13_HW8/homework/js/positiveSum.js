function positiveSum(arr) {
    return arr.reduce((acc, item) => {
        if (item > 0) {
            acc += item;
        }
        return acc;
    })
}

positiveSum([2,4,6,8]);

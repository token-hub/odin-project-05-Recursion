function merge_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex);

    const leftArrayVal = merge_sort(leftArray);
    const rightArrayVal = merge_sort(rightArray);

    let leftPointer = 0;
    let rightPointer = 0;
    const mergeArray = [];
    const finalArray = [];

    while (leftPointer < leftArrayVal.length && rightPointer < rightArrayVal.length) {
        if (leftArrayVal[leftPointer] > rightArrayVal[rightPointer]) {
            mergeArray.push(rightArrayVal[rightPointer]);
            rightPointer++;
        } else {
            mergeArray.push(leftArrayVal[leftPointer]);
            leftPointer++;
        }
    }

    finalArray.push(...mergeArray);

    // push the remaining values
    if (rightPointer < rightArrayVal.length) {
        finalArray.push(...rightArrayVal.slice(rightPointer));
    }
    // push the remaining values
    if (leftPointer < leftArrayVal.length) {
        finalArray.push(...leftArrayVal.slice(leftPointer));
    }

    return finalArray;
}

console.log("** MERGE SORT **");
console.log(merge_sort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(merge_sort([105, 79, 100, 110]));

let arr = [2,4,-5,8,-7,9];

const findIndexElementOfArr = (number,arr) => {
    for (let index in arr) {
        if(arr[index] == number) {
            return index;
        }
    }
    return -1;
    //   -1 có nghĩa là không tồn tại số nguyên đó ở trong mảng
};


console.log(findIndexElementOfArr(9,arr));
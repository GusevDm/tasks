const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num %2 === 0;
};

function filterArray(mixedArray, isEven) {
    let evenArray = [];

    mixedArray.forEach(element => {
       if(isEven(element)) {
        evenArray.push(element);
       }
    });

    return evenArray;
}

console.log(filterArray(mixedArray, isEven));
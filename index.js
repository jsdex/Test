const numbersOne = [1,30,2400,432,553]; // 2
const numbersTwo = [-23,10342,45,210,0,1123,230]; // 1
const numbersThree = [0,1,2,3,4,5,10,-13]; // 6

function getIndexOfMaxItem(num) {
    let index = 0;

    for(let i = 1; i < num.length; i++) {
        if(num[index] < num[i]) {
            index = i;
        } 
    }
            
    return index;
}
console.log(getIndexOfMaxItem(numbersOne));
console.log(getIndexOfMaxItem(numbersTwo));
console.log(getIndexOfMaxItem(numbersThree));
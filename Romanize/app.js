const roman = ['I', 'VI', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function findRoman(num){

    let current = num;
    let romanized = '';
    if(numbers.indexOf(num) === -1){
        while(current){
            nearIndex = findClosest(current);
            baseNumber = numbers[nearIndex];
            current -= baseNumber;
            Rom += roman[nearIndex];
        }        
    }
    else{
        romanized = roman[numbers.indexOf(num)];
    }
    console.log(romanized);
}

function findClosest(num){
    let len = numbers.length;
    let mid ;
    let start = 0;
    let end = len-1;
    while(end  - start >1){
        mid = Math.floor((start + end)/2);
        console.log(`${start} ${mid} ${end}`);
        if(numbers[mid] > num ){
            end = mid;            
        }
        else{
            start = mid;
        }
    }
    if(numbers[end] < num){
        return end;
    }
    return start;
}


console.log(findRoman(994));
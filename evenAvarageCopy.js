function evenAvarage(numbers){
    let evenNumbers=[];
    for(let Number of numbers){
        if(Number%2==0){
            evenNumbers.push(Number);

        }

    }
    let result=0;
    for (let sum of evenNumbers){
        result +=sum;
    }
    console.log("Sum of the even numbers", result);

    let count=evenNumbers.length;
    avarage=result/count;
    // return avarage;
    
    console.log("Avarage of the even numbers", avarage);
}
let numbers = [10,20,33,11,22,55,77,90];
const evenAvar = evenAvarage(numbers);
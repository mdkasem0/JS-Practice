function evenAv(numbers){
    let evenNumbers = [];
    for(number of numbers){
        if(number %2===0){
            evenNumbers.push(number); 
        }
    }
    let sum=0;
    let count= evenNumbers.length;
    for(even of evenNumbers){
        sum = sum+even;
    }
    evenAV=sum/count;
    console.log(evenAV)
}
let numbers = [1,2,3,6,10,16,50,33];
evenAv(numbers);



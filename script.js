function
  calculateSumAndAvreage(numbers) {
    const totalSum = 
    numbers.reduce(( sum , number) => sum + number, 0 ) ; 
    const average = totalSum / numbers.length ; 
    return {
        totalSum : totalSum ,
        average : average 
    } ;
}
// مثال 
const numbers = [ 1,2,3,4,5 ] ; 
const result =     calculateSumAndAvreage(numbers) ; 
console.log ( 
{ resulttotalSum },
{ resultaverage } 
);
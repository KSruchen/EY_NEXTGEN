// //spread operator
// const arr=["one","two","three"];
// const newArray=["four",...arr];// used to add multiple arrays
// console.log(newArray);
console.log("this is firstline of code")

const myFunction=()=>{
    let sum=0;
 for(let i=1;i<=1000;i++){
    sum=sum+i;
 }
 console.log(sum);
}
myFunction();

console.log("this is secondline of code")//synchronise --> Sequential flow of Execution of programs

console.log("this is firstline of code")

const myFunction1=()=>{
    let sum=0;
 for(let i=1;i<=1000000;i++){
    sum=sum+i;
 }
 console.log(sum);
}
myFunction1();

console.log("this is secondline of code")
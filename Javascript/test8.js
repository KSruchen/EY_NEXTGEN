// // foreach:
// x=[10,20,30,40];
// for(let i of x)
// {
//     console.log(i);
// }
// function displayInfo(){ // Function Definition
//     console.log("This is a display Function");
// }
// displayInfo(); //Function Calling
// const displayInfo=()=>//function definition
// {
//     console.log("hi this is display function");
// }
// displayInfo();//function calling
// const displayInfo=(a,b)=>{
//     console.log('sum of two numbers is :'+(a+b))

// }
// displayInfo(100,230)
const displayInfo=(a,b=20)=>//function definition// arrow function
{
    console.log("sum of two numbers is="+(a+b));
}
displayInfo(10);//function calling
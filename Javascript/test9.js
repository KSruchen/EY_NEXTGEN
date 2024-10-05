// function add(x,y){ //Rest Arguments
//     console.log("The sum is "+(x+y))
// }
// add(10,20,30,40,50) //Even though more arguments provided it uses the first two(specified) values

function rest(...args){
    let result=0;
    for( let arg of args)
    {
        result=result+arg;
    }
    console.log("the final result is="+result)
    }
    rest(10,20,30,40,50);
    
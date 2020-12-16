var a=8
// part 1
function factorial(factor){
   temp1=factor
   for(a=factor-1;a>=1;a--){
        temp1=temp1*a
   }
   console.log(temp1)
}
factorial(a)

// part 2
function fact(number){
    n=1
    for(i=2;i<=number;i+=1){
        temp2=n*=i
        console.log(i)
    }
    return temp2
}
console.log(fact(5))

//part 3
function fact2(number){
    if(number==0){
        return 1
    }
    else{
        return number*fact2(number-1)
    }
}

console.log(fact2(6))
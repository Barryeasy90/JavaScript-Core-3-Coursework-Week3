# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```
Explain why line 4 and line 6 output different numbers.

The console.log on line 5 will output 2 and the console.log on line 7 will output 1 because the variables x are completly on different and most have different memory address

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

This code will not pass because console.log(y) is not defined, therefore it will not pass and this code will output 10 and undefined because console.log(x) x is global so x can be seeing in the function f1()

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); // 10
console.log(x); // 9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);//11
console.log(y);//11
```

What will be the output of this code. Explain your answer in 50 words or less.
x is added 1 on f1 so it is 10 now console.log(x) will stay the same because no manupalatution has been done
 
 On f2(y);// 11 because x is added 1 on f1 and it was assign to y and added again 

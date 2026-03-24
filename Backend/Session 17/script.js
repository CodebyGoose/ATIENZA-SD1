//console.log("Hello, World!");


//  SECTION Repetition Control Structure
// do loop

/*
SYNTAX:

while(condition){

// code  block
// iteration


}


>>1st Iteration
let count = 0;

while(count < 5){
    console.log("DO LOOP: " + count);
    count++;

}

>>2nd Iteration
let count = 0;
while(count < 5){
    console.log("DO LOOP: " + count);
    count++;
}





*/


// 2. do-while loop

/*
SYNTAX:
do{

// code block
// iteration
}while(condition);
>>1st Iteration
let count = 0;
do{
    console.log("DO-WHILE LOOP: " + count);
    count++;
}while(count < 5);

>>2nd Iteration
let count = 0;
do{
    console.log("DO-WHILE LOOP: " + count);
    count++;
}while(count < 5);

*/




let score = 0;

do{
    console .log("DO-WHILE LOOP: " + score);
    score++;
}while(score < 5);

// 3. for loop

/*
SYNTAX:
for(initialization; condition; iteration){
// code block
}

>>1st Iteration
for(let count = 0; count < 5; count++){
    console.log("FOR LOOP: " + count);
}
>>2nd Iteration
for(let count = 0; count < 5; count++){
    console.log("FOR LOOP: " + count);
}
*/

for(let count = 0; count < 5; count++){
    console.log("FOR LOOP: " + count);
}

for(let i = 0; i < 10; i++){
    if(i % 3 === 0){
        console.log("COUNT: " + i + " is divisible by 3");
    }else{
        console.log("COUNT: " + i);
    }
}


// continue & break

for(let count = 0; count < 20; count++){
    if(count == 18){
        break; // exit the loop immediately
    }
    console.log("COUNT: " + count);
}


for(let count = 0; count < 20; count++){
    if(count == 15){
        console.log('Hello, it is me!');
        continue; // skip the rest of the code block and move to the next iteration
    }
    console.log("COUNT: " + count);
}



let isRunning = true;
let isAccountLocked = 0;
let isLogin = false;
let password = "1234";

while(isRunning) {
    if(isAccountLocked != 3){
        let input = prompt("Enter your password: ");
            if(input != password){
                console.log("Incorrect password. Chances left: " + (2 - isAccountLocked));
                isAccountLocked++;
            }else{
                isLogin = true;
                alert ("Welcome back!");
            }
        }else{
            alert("Your account is locked. Please contact support.");
            isRunning = false;
        }
}

let input = parseInt(prompt("Please Enter a number: "));

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("COUNT: " + i + " COCO");
    } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("COUNT: " + i + " MELON");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("COUNT: " + i + " COCO MELON");
    } else {
        console.log("COUNT: " + i);
    }
}

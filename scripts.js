var sum1 = 0;
var sum2 = 0;
// document.querySelectorAll('click').innerHTML = "";

function rollTheDice() {
        const num1 = Math.floor(Math.random()*6)+1
        const num2 = Math.floor(Math.random()*6)+1
        console.log(num1);
        console.log(num2);
        const diceImage1 = "pictures/dice" + num1 + ".png";
        const diceImage2 = "pictures/dice" + num2 + ".png";
        
        document.querySelectorAll('img')[0].setAttribute('src',diceImage1);
        document.querySelectorAll('img')[1].setAttribute('src',diceImage2);
    
    sum1 = sum1 + num1;
    sum2 = sum2 + num2;
    console.log("Sum1: " + sum1);
    console.log("Sum2: " + sum2);
    
    document.querySelectorAll('p')[1].innerHTML = "The sum of player 1 is "+sum1;
    document.querySelectorAll('p')[2].innerHTML = "The sum of player 2 is "+sum2;
    

    if(sum1 > 20 && sum2 < 20 && sum1 > sum2){
        document.querySelectorAll('p')[3].innerHTML = "Congratulations player 1 you won!";
        sum1 = 0;
        sum2 = 0;
    }
    else if(sum1 < 20 && sum2 > 20 && sum1 < sum2){
        document.querySelectorAll('p')[3].innerHTML = "Congratulations player 2 you won!";
        sum1 = 0;
        sum2 = 0;
    }
    else if(sum1 > 20 && sum2 > 20 && sum1 == sum2){
        document.querySelectorAll('p')[3].innerHTML = "Draw";
        sum1 = 0;
        sum2 = 0;
    }
    else if(sum1 ==1 && sum2 ==1){
        document.querySelectorAll('p')[3].innerHTML = "1 both of you? That's rare! You both lose!";
        sum1 = 0;
        sum2 = 0;
    }
    else if(num1 == 1){
        document.querySelectorAll('p')[3].innerHTML = "Player 1 you lose";
        sum1 = 0;
        sum2 = 0;
    }
    else if(num2 == 1){
        document.querySelectorAll('p')[3].innerHTML = "Player 2 you lose";
        sum1 = 0;
        sum2 = 0;
    }
}
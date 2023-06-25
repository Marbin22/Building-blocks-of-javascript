var total = 0;// this is the variable to the total or sum or the two random numbers

function Play() {//this is the main function that is used when you click to play
    num1 = document.getElementById("number1").innerHTML = Math.floor(Math.random() * (7 - 1) + 1);
    // this is the random number generator for the first number and also updates it on the webpage
    num2 = document.getElementById("number2").innerHTML = Math.floor(Math.random() * (7 - 1) + 1);
      // this is the random number generator for the second number and also updates it on the webpage
    total = num1 + num2;// addition of random number 1 and 2
    document.getElementById("total").innerHTML = total;//this updates the total number on the webpage
    if (total % 2 == 0) //this finds out if the number is even by dividing it by two and seeing if theirs a remainder
    {
        document.getElementById("status").innerHTML = "Winner" // if the total is even then it displays status as winner
    }
    else //else statement that if the number is n0t even then do this
    {
        document.getElementById("status").innerHTML = "Loser"//if the total is not even then update status to loser
    }
}
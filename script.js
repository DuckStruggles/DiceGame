randomNumber1 = Math.floor((Math.random() * 6) + 1);
randomNumber2 = Math.floor((Math.random() * 6) + 1);

img1 = document.querySelector(".img1");
img2 = document.querySelector(".img2");

for ( i=1; i<=6; i++ )
{
    if( randomNumber1 === i )
    {
        img1.setAttribute("src", "./images/dice"+i+".png" );
    }
}

for ( i=1; i<=6; i++ )
{
    if( randomNumber2 === i )
    {
        img2.setAttribute("src", "./images/dice"+i+".png" );
    }
}

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h3").innerHTML = "Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h3").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h3").innerHTML="Both Players are at a draw, try again."
}
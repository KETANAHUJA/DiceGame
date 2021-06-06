var key1,key2;
var num1 = document.querySelector('.img1')
{
    key1 = Math.floor(Math.random()*6)+1;
    if(key1==1)
    num1.src="images/dice1.png";
    else if(key1==2)
    num1.src="images/dice2.png";
    else if(key1==3)
    num1.src="images/dice3.png";
    else if(key1==4)
    num1.src="images/dice4.png";
    else if(key1==5)
    num1.src="images/dice5.png";
    else if(key1==6)
    num1.src="images/dice6.png";
}

var num2 = document.querySelector('.img2')
{
     key2 = Math.floor(Math.random()*6)+1;
    if(key2==1)
    num2.src="images/dice1.png";
    else if(key2==2)
    num2.src="images/dice2.png";
    else if(key2==3)
    num2.src="images/dice3.png";
    else if(key2==4)
    num2.src="images/dice4.png";
    else if(key2==5)
    num2.src="images/dice5.png";
    else if(key2==6)
    num2.src="images/dice6.png";
}


var text = document.getElementById('t-c');
if(key1>key2)
{
    text.innerHTML = "PlAYER 1 WINS";
}
else if(key1<key2)
{
    text.innerHTML = "PlAYER 2 WINS";
}
else
{
    text.innerHTML = "Draw";
}

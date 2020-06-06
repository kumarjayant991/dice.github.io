var randnumberOne=Math.random();
randnumberOne=randnumberOne*6;
randnumberOne=Math.floor(randnumberOne)+1;
console.log(randnumberOne);//for dice one

var randomImgOne="dice"+randnumberOne+".png";
var imagesourceOne="images/"+randomImgOne ;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imagesourceOne);//for dice image changing

var randnumberTwo=Math.random();
randnumberTwo=randnumberTwo*6;
randnumberTwo=Math.floor(randnumberTwo)+1;
console.log(randnumberTwo);//for dice 2

var randomImgTwo="dice"+randnumberTwo+".png";
var imagesourceTwo="images/"+randomImgTwo ;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imagesourceTwo);//for dice image changing

if(randnumberOne>randnumberTwo)
{
  document.querySelector("h1").innerHTML="💘Player1 Wins";
}
else if(randnumberTwo>randnumberOne)
{
  document.querySelector("h1").innerHTML="💘Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML="💘DRAW";
}

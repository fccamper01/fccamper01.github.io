let quoteButton = document.querySelectorAll("button");
let quote=document.getElementById("quote");
let quoteBase = ["It is never too late to be what you might have been.", "You must do the things you think you cannot do.", "Happiness is not by chance, but by choice.", "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", "Some people look for a beautiful place. Others make a place beautiful."];
let i=0;
let x;
quoteButton[0].addEventListener("click", function(){
    console.log("click test");
if(i<quoteBase.length){
    x= quoteBase[i++];
}
quote.innerHTML=x;
    //random
    /*let random=Math.floor(Math.random()*5);
quote.innerHTML=quoteBase[random];*/
//loop
  /* for(let i=0; i<quoteBase.length; i++){
quote.innerHTML=i;
} */

});

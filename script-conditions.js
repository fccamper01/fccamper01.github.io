//Conditions page
let array=[];
let generateButton = document.getElementById("generate");
let i;

//Old code

let result =document.getElementById("result");

generateButton.addEventListener("mousedown", function(){

  let expiryDate = document.querySelector("input").value;



//Reset button
let reset=document.querySelector("#reset");

reset.addEventListener("mousedown", function(){
    window.location.reload();
})

//End of reset button


//Pre-request scripts for Postman



let userLinks =document.querySelector("#inputUrls").value;

array =userLinks.split(" ");

//loop
for(i=0; i<array.length; i++){
    let textnode;
   
    if(i<array.length-1){
  
 textnode = document.createTextNode('"'+array[i]+'",');

} else {
     textnode = document.createTextNode('"'+array[i]+'"');
}
document.querySelector("#postmanUrls").appendChild(textnode);


//expiryDate
let currentValue=document.querySelector("#expiryDate").value;
let expiryDate = document.querySelector("#postmanExpiryDate").innerHTML=currentValue;
} //End of for loop

let rawlLinks=document.querySelector("#postmanUrls").textContent;
for(k=0; k<rawlLinks.length; k++) {

if(rawlLinks.includes("https://www.")){
rawlLinks=rawlLinks.replace("https://www.", "");
console.log(rawlLinks);
document.querySelector("#postmanUrls").innerHTML=rawlLinks;
} else if (rawlLinks.includes("https://")){
    rawlLinks=rawlLinks.replace("https://", "");
    console.log(rawlLinks);
    document.querySelector("#postmanUrls").innerHTML=rawlLinks;
}
}//end of for loop

//change color
document.querySelector("#postmanUrls").style.color = "red";
document.querySelector("#postmanUrls").style.fontWeight="900";

}); //end of button click event listener

//select pre


(function() {
    function selectText(element) {
        var doc = document
            , text = element
            , range, selection
        ;
        if (doc.body.createTextRange) { //ms
            range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { //all others
            selection = window.getSelection();
            range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    preTags = document.getElementsByTagName('pre');
    for(var i=0;i<preTags.length;i++) {
        preTags[i].onclick = function() {selectText(this)};
    }
})();

//End of select pre

//End of conditions page

//Tags page
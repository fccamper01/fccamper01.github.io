let generateButton = document.getElementById("generate");
//Code snippets
let inputTags =document.querySelector("#inputTags");
let tags=document.querySelector("#tags");
//inputTagsValue=document.querySelector("#inputTags").value;

//SC number
let inputSC = document.querySelector("#inputSC");
let scNumber = document.querySelector("#scNumber");
//Expiry date
let inputDate =document.querySelector("#inputDate");
let expiryDate=document.querySelector("#expiryDate");
//End of SC number
generateButton.addEventListener("mousedown", function(){

let res=document.querySelector("#inputTags").value.split('<img src=""');
res=res[1].split("?");
console.log(res[0]);

//Floodlight
let imgCreate= "var pxl = document.createElement('IMG'); pxl.setAttribute('src','";
let tagURL=res[0];
let tagAttr = "?'); pxl.setAttribute('width', '1'); pxl.setAttribute('height', '1'); pxl.setAttribute('alt', ''); document.body.appendChild(pxl); console.log('pixel fires');"


//Input tag
let array=document.querySelector("#inputTags").value.split('" "');

//test
//let userLinks =document.querySelector("#inputUrls").value;

//array =userLinks.split(" ");

//loop
for(i=0; i<array.length; i++){
    let textnode;
   
    if(i<array.length-1){
  
 textnode = document.createTextNode('"'+array[i]+'",');

} else {
     textnode = document.createTextNode('"'+array[i]+'"');
}
document.querySelector("#tags").appendChild(textnode);
}
//end of test


//tags.innerHTML="[\""+imgCreate+tagURL+tagAttr+"\"]";
tags.style.color="red";
tags.style.fontWeight ="900";
//End of input tag

//SC number
scNumber.innerHTML='"SC#'+inputSC.value+'"';
scNumber.style.color="red";
scNumber.style.fontWeight ="900";
//End of SC number

//Expiry date

expiryDate.innerHTML='"'+inputDate.value+'"';
expiryDate.style.color="red";
expiryDate.style.fontWeight ="900";

//End of expiry date
});

//Reset button
let reset=document.querySelector("#reset");

reset.addEventListener("mousedown", function(){
    window.location.reload();
})

//End of reset button


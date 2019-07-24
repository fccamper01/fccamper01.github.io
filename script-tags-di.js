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

//let res=document.querySelector("#inputTags").value.split('<img src=""');
//res=res[1].split("?");
//let tagURL=res[0];

//Floodlight
let imgCreate= "var pxl = document.createElement('IMG'); pxl.setAttribute('src','";
let tagAttr = "'); pxl.setAttribute('width', '1'); pxl.setAttribute('height', '1'); pxl.setAttribute('alt', ''); document.body.appendChild(pxl); console.log('pixel fires');"


//Input tag
/*let array=document.querySelector("#inputTags").value.split('" "');

//loop

for(i=0; i<array.length; i++){
    let textnode;
   
    if(i<array.length-1){
  
 textnode = document.createTextNode('"'+array[i]+'",');

} else {
     textnode = document.createTextNode('"'+array[i]+'"');
}
document.querySelector("#tags").appendChild(textnode);
}*/

//end of test

let array=document.querySelector("#inputTags").value.split('" "');


for(i=0; i<array.length; i++){

    let textnode;

   let res=document.querySelector("#inputTags").value.split('<img src=""');
    console.log(res);
   res=res[i+1].split("?");
   //console.log(res);
array[i]=res[0];
//console.log(array[i]);
    
    if(i<array.length-1){
  
 textnode = document.createTextNode('"'+imgCreate+array[i]+tagAttr+'",');

} else {
     textnode = document.createTextNode('"'+imgCreate+array[i]+tagAttr+'"');
}
document.querySelector("#tags").appendChild(textnode);

//tags.appendChild("\""+imgCreate+tagURL+tagAttr+"\"");
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

//tagName

let tagName=document.querySelector("#tagName");
let tagNode

if(i<array.length-1){
    tagNode=document.createTextNode('"Floodlight'+i+'",');
} else {
    tagNode=document.createTextNode('"Floodlight'+i+'"');
}

tagName.appendChild(tagNode);

//End of tagName

}; //End of for loop
});

//Reset button
let reset=document.querySelector("#reset");

reset.addEventListener("mousedown", function(){
    window.location.reload();
});

//End of reset button

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

//Spaces
let spaceId = document.querySelector("#spaceId");
let prod = document.querySelector("#prod");
let global =document.querySelector("#global");
let hcp3prod =document.querySelector("#hcp3prod");
let hcp3dev=document.querySelector("#hcp3dev");

prod.addEventListener("mousedown", function(){
    spaceId.innerHTML=3561;
})

global.addEventListener("mousedown", function(){
    spaceId.innerHTML=8987;
})

hcp3prod.addEventListener("mousedown", function(){
    spaceId.innerHTML=23973;
})

hcp3dev.addEventListener("mousedown", function(){
    spaceId.innerHTML=23972;
})
//End of spaces

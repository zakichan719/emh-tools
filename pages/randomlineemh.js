
function randomline(){
 
 function copy(){
   var copyText = document.getElementById('textarearandomline').value;
   navigator.clipboard.writeText(copyText);
    document.getElementById('randomline').innerHTML="AutoCopy"
}

  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
/*
const param = [
'Message-ID: <ZF3lf1bGTw-Ct-Y9ADdP[EID]Hg-[ip]@[5LA].dcccd.edu>' ,
'References: <[MID]@mail-[DOO].io>' ,
'From: "[FR]" <info_[EID]@[DOO]>' ,
'Content-Type: multipart/digest; boundary="[BND]"'  ,
'Subject: [s]',
'Date: [DATE]',
'Feedback-ID: 325-anexp#nret-fa:account-notifier',
'In-Reply-To: <CADT5qSj0REQQpwKiW6P5cL27kFYMN9CK[eid]m46NH1Cu5OuqVwXww@[3LA].[8LA].org>',
'MIME-Version: 2.0',
'To: <[FNAME]@aol.com>',
'CC:<[FNAME]@aol.com>',
'List-ID: [LID] <[LID].7289367.xt.local>',
];
*/
 var stringArray = document.getElementById('textarearandomline').value.split('\n');
 var area =document.getElementById('textarearandomline').value;
 var strArray;
/*
if(stringArray.length<=1) 
strArray = shuffle(param) 
else
strArray = shuffle(stringArray) 
*/

strArray = shuffle(stringArray) 
 

document.getElementById('textarearandomline').value="";
 document.getElementById('randomline').innerHTML="Shuffle"
 for (let i = 0; i < strArray.length; i++) {
 
  if(i==strArray.length-1)
  document.getElementById('textarearandomline').value+=strArray[i] ;
  else
  document.getElementById('textarearandomline').value+=strArray[i]+"\n" ;


} 

copy();
//document.getElementById('textarearandomline').value=shuffle(stringArray).tostring;
 
}
// let textArea=document.getElementById("textArea").value;
let btn=document.getElementById("btn");
// let resultMsg=document.getElementById("resultMsg");

const vowelCounter=()=>{
    let textArea=document.getElementById("textArea").value;
    let resultMsg=document.getElementById("resultMsg");
    let vowel=["a","e","i","o","u","A","E","I","O","U"];
    let voualCount=0;
    for(i=0; i<textArea.length; i++){
        for(j=0; j<vowel.length; j++){
            if(textArea[i]===vowel[j]){
                voualCount++;
            }
        }
    resultMsg.innerHTML=voualCount.toString();
    }
}
btn.addEventListener("click",vowelCounter,()=>{
    
});








const findHighestMark=() =>{
    const markString=document.getElementById("input").value;
    const markArray=markString.split(",").map(Number);
    let highestMark=0;

    for (let i = 0; i < markArray.length; i++){
        if(markArray[i]>highestMark){
            highestMark=markArray[i];
        }

    }
    document.getElementById("result").innerHTML=`The Heighest mark is ${highestMark}`;
}
submitBtn.addEventListener("click",findHighestMark,()=>{
    document.getElementById("result").innerHTML=`The Heighest mark is ${highestMark}`;
});

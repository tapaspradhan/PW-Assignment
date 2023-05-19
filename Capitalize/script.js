
let btn=document.getElementById("btn");
let message=document.getElementById("message");


btn.addEventListener("click",()=>{
    name()
})
function name(){
    let nameInput=document.getElementById("input").value;
    if(nameInput){
        let result=nameInput;

        if(result.length > 0 && result[0] === result[0].toLowerCase()){
         message.innerHTML=(result[0].toUpperCase() + result.slice(1));
        }else {
        message.innerHTML=result;
        }
    }else{
        message.innerHTML="Write Your Name";
    }

}


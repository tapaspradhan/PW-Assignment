console.log("sub",document.getElementById('submitBtn'));
let submitBtn=document.getElementById("submitBtn");
let result=document.getElementById("result");



const colorMixture=()=>{
    const color1=document.getElementById("color1").value;
    const color2=document.getElementById("color2").value;
    const op=operator;
    const color=color1+color2
    console.log(color);
    switch (color) {
        case "RedBlue":
        case "BlueRed":
            result.textContent="Puple";
            break;
        case "BlueGreen":
        case "GreenBlue":
            result.textContent="Yellow";
            break;
       case "BlueYellow":
        case "YellowBlue":
            result.textContent="Green";
            break;    
    
        default:
            result.textContent="Orange";
            break;
    }
}
submitBtn.addEventListener("click",colorMixture);

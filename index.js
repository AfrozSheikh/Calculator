let inputDisplay = document.querySelector(".display-input") 

let resultDisplay = document.querySelector(".display-result")
let string= "" ;
let buttons = document.querySelectorAll(".btn") ; 

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "=") {
            string= eval(string) ; 
            inputDisplay.value= string;
        }
        else if(e.target.innerHTML == "AC") {
            string="" ;
            inputDisplay.value= string;

        }
        else if (e.target.innerHTML == "r"){
                 string =string.substring(0,string.length-1) ;
                 inputDisplay.value= string;
        }
        else{
        string = string + e.target.innerHTML ; 
        inputDisplay.value= string;}
    }) 

})
 
 



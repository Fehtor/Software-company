let nums = document.querySelectorAll("#num-btn")
let str = document.querySelector("#calculate-string")
let buffer = ""
let actionBuffer = ""
function numClick(event){
    let value = event.currentTarget.getAttribute("value")
    if(value.indexOf("num") != -1){
        let num = value[value.length - 1]
        if(str.innerHTML.indexOf(".") == -1 && num == "." && str.innerHTML != ""){
            str.innerHTML += num;
        }
        else if(num != "."){
            str.innerHTML += num;
        }
        str.scrollLeft = str.scrollWidth
    }
    else if(value.indexOf("action") != -1){
        let actionType = value.slice(value.indexOf("-") + 1, value.length)
        if(str.innerHTML != ""){
            switch(actionType){
                case "mul":
                    break;
                case "minus":
                    if(buffer == ""){
                        buffer = str.innerHTML
                        str.innerHTML = ""
                        actionBuffer = actionType
                    }
                    else if(actionBuffer != ""){
                        doAction()
                        actionBuffer = actionType

                    }
                    break;
                case "plus":
                    break;
                case "equally":
                    break;
                case "flaw":
                    break;
                case "clear":
                    str.innerHTML = "";
                    break;
                case "percent":
                    break;
                case "div":
                    break;
                case "backspace":
                    str.innerHTML = str.innerHTML.slice(0, str.innerHTML.length - 1)
                    actionBuffer = ""
                    buffer = ""
                    break;
            }
        }
        
    }
}

function doAction(){
    switch(actionBuffer){
        case "mul":
            
            break;
        case "minus":
            str.innerHTML = Number(buffer) - Number(str.innerHTML)
            buffer =  str.innerHTML
            break;
        case "plus":
            break;
        case "flaw":
            break;
        case "percent":
            break;
        case "div":
            break;
}
}

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", numClick)
}

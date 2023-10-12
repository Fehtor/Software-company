let nums = document.querySelectorAll("#num-btn")
let str = document.querySelector("#calculate-string")
let buffer = ""
let actionBuffer = ""
let wasAction = false

function debug() {
    console.log("buffer: " +  buffer +  "actionBuffer: " + actionBuffer)
}

function numClick(event){
    let value = event.currentTarget.getAttribute("value")
    if(wasAction == true){
        str.innerHTML = ""
        wasAction = false
    }
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
                    if(buffer == ""){
                        buffer = str.innerHTML
                        str.innerHTML = ""
                        actionBuffer = actionType
                    }
                    else if(actionBuffer != ""){
                        doAction(actionType)
                    }
                    break;
                case "minus":
                    if(buffer == ""){
                        buffer = str.innerHTML
                        // не заходит в эту проверку, хотя buffer в equally делается равным ""
                        // пример 6 x 6 = 36 - 9 ...
                        str.innerHTML = ""
                        actionBuffer = actionType
                        debug()
                        console.log("minus")
                    }
                    else if(actionBuffer != ""){
                        doAction(actionType)
                        debug()
                    }
                    break;
                case "plus":
                    if(buffer == ""){
                        buffer = str.innerHTML
                        str.innerHTML = ""
                        actionBuffer = actionType
                        debug()

                    }
                    else if(actionBuffer != ""){
                        doAction(actionType)
                        debug()

                    }
                    break;
                case "equally":
                    if(actionBuffer != ""){
                        doAction(actionBuffer)
                        actionBuffer = ""
                        buffer = ""
                        debug()
                    }
                    break;
                case "flaw":
                    
                    break;
                case "clear":
                    str.innerHTML = ""
                    actionBuffer = ""
                    buffer = ""
                    break;
                case "percent":
                    break;
                case "div":
                    if(buffer == ""){
                        buffer = str.innerHTML
                        str.innerHTML = ""
                        actionBuffer = actionType
                    }
                    else if(actionBuffer != "" && str.innerHTML != "0"){
                        doAction(actionType)
                    }
                    break;
                case "backspace":
                    str.innerHTML = str.innerHTML.slice(0, str.innerHTML.length - 1)
                    
                    break;
            }
            //wasAction = true
        }
        
    }
}

function doAction(actionType){
    switch(actionBuffer){
        case "mul":
            str.innerHTML = Number(buffer) * Number(str.innerHTML)
            buffer = str.innerHTML
            actionBuffer = actionType
            break;
        case "minus":
            str.innerHTML = Number(buffer) - Number(str.innerHTML)
            buffer =  str.innerHTML
            actionBuffer = actionType
            debug()
            break;
        case "plus":
            str.innerHTML = Number(str.innerHTML) + Number(buffer)
            buffer = str.innerHTML
            actionBuffer = actionType
            break;
        case "flaw":
            break;
        case "percent":
            break;
        case "div":
            str.innerHTML = Number(buffer) / Number(str.innerHTML)
            buffer = str.innerHTML
            actionBuffer = actionType
            break;
    }
    wasAction = true
}

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", numClick)
}

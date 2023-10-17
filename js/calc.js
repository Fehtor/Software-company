let nums = document.querySelectorAll("#num-btn")
let str = document.querySelector("#calculate-string")
let buffer = ""
let actionBuffer = ""
let wasAction = false
let calculator = document.querySelector(".calculator")
let menu = document.querySelector(".menu")

let curState = "calc"


function debug() {
    console.log("buffer: " +  buffer +  "actionBuffer: " + actionBuffer)
}

function numClick(event){
    let value = event.currentTarget.getAttribute("value")
    event.currentTarget.style.animationName = "button-click"
    setTimeout((target) => {
        target.style.animationName = "none"
    }, 300, event.currentTarget)
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
                        wasAction = false
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

let calcBtn = document.querySelector("#calc-btn")
let menuBtn = document.querySelector("#menu-btn")


function touchStart(event){
//    event.preventDefault()
   startX = event.changedTouches[0]["screenX"]
   console.log("touchStart")
   console.log(startX)
}

function touchEnd(event){
    endX = event.changedTouches[0]["screenX"]
    console.log("touchEnd")
    console.log(endX)
    if(startX < endX){
        calcClick()
    }
    else if(startX > endX){
        menuClick()
    }
}

let startX
let endX
document.querySelector("body").addEventListener("touchstart", touchStart)
document.querySelector("body").addEventListener("touchend", touchEnd)


function calcClick(){
    if(curState == "menu"){
        menu.classList.remove("show-to-left")
        calculator.classList.remove("hide-to-left")
        calculator.classList.add("show-to-right")
        menu.classList.add("hide-to-right")
        
        curState = "calc"
    }
}

function menuClick(){
    if(curState == "calc"){
        menu.classList.add("show-to-left")
        calculator.classList.add("hide-to-left")
        calculator.classList.remove("show-to-right")
        menu.classList.remove("hide-to-right")

        curState = "menu"
    }
}




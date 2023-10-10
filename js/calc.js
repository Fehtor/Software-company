let nums = document.querySelectorAll("#num-btn")
let str = document.querySelector("#calculate-string")
function numClick(event){
    let value = event.currentTarget.getAttribute("value")
    if(value.indexOf("num") != -1){
        let num = value[value.length - 1]
        console.log(num)
        str.innerHTML += num;

    }
    else if(value.indexOf("action") != -1){
        let actionType = value.slice(value.indexOf("-") + 1, value.length)
        
    }
}

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", numClick)
}
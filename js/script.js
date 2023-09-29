console.log("Hello world")

let typeProductInput = document.querySelector("#type-product")
let typeWebsiteInput = document.querySelector("#type-website")
let typeMobileInput = document.querySelector("#type-mobile")

function TypeClick(event){
    let id = event.currentTarget.getAttribute("id")
    switch(id){
        case "type-product":
            typeProductInput.classList.add("form-chapter-active")
            typeMobileInput.classList.remove("form-chapter-active")
            typeWebsiteInput.classList.remove("form-chapter-active")
        break

        case "type-website":
            typeProductInput.classList.remove("form-chapter-active")
            typeMobileInput.classList.remove("form-chapter-active")
            typeWebsiteInput.classList.add("form-chapter-active")
        break

        case "type-mobile":
            typeProductInput.classList.remove("form-chapter-active")
            typeMobileInput.classList.add("form-chapter-active")
            typeWebsiteInput.classList.remove("form-chapter-active")
        break
    }  
}

typeMobileInput.addEventListener("click", TypeClick)
typeWebsiteInput.addEventListener("click", TypeClick)
typeProductInput.addEventListener("click", TypeClick)


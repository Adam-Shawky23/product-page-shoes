const photo1 = document.getElementById("photo1")
const photo2 = document.getElementById("photo2")
const photo3 = document.getElementById("photo3")
const photo4 = document.getElementById("photo4")
const photo6 = document.getElementById("photo6")
const photo7 = document.getElementById("photo7")
const photo8 = document.getElementById("photo8")
const photo9 = document.getElementById("photo9")
const before = document.getElementById("before")
const after = document.getElementById("after")
const newphoto1 = document.getElementById("newphoto")
const newphoto2 = document.getElementById("newphoto1")
const newphoto3 = document.getElementById("newphoto2")
const newphoto4 = document.getElementById("newphoto3")
const small1 = document.getElementById("small1")
const small2 = document.getElementById("small2")
const small3 = document.getElementById("small3")
const small4 = document.getElementById("small4")
const plus = document.getElementById("plus")
const number = document.getElementById("number")
const minus = document.getElementById("minus")
const cart = document.getElementById("cart")
const body = document.body
const main = document.getElementById("main")
const section = document.getElementById("section")
const closed = document.getElementById("close")
const popup = document.getElementById("popup")
const noitems = document.getElementById("noitems")
const item = document.getElementById("item")
const trash = document.getElementById("trash")
const money = document.getElementById("money")
const addcart = document.getElementById("addcart")
let total = 0
let added = false
let phnum = 1

addcart.addEventListener("click",()=>{
    added = true
})

small1.addEventListener("click",()=>{
    small1.style.opacity = "0.5"
    small1.style.border = "2px solid red"
    small2.style.opacity = "1"
    small2.style.border = "none"
    small3.style.opacity = "1"
    small3.style.border = "none"
    small4.style.opacity = "1"
    small4.style.border = "none"
    photo1.style.display = "block"
    photo2.style.display = "none"
    photo3.style.display = "none"
    photo4.style.display = "none"
})
small2.addEventListener("click",()=>{
    small2.style.opacity = "0.5"
    small2.style.border = "2px solid red"
    small1.style.opacity = "1"
    small1.style.border = "none"
    small3.style.opacity = "1"
    small3.style.border = "none"
    small4.style.opacity = "1"
    small4.style.border = "none"
    photo1.style.display = "none"
    photo2.style.display = "block"
    photo3.style.display = "none"
    photo4.style.display = "none"
})
small3.addEventListener("click",()=>{
    small3.style.opacity = "0.5"
    small3.style.border = "2px solid red"
    small1.style.opacity = "1"
    small1.style.border = "none"
    small2.style.opacity = "1"
    small2.style.border = "none"
    small4.style.opacity = "1"
    small4.style.border = "none"
    photo1.style.display = "none"
    photo2.style.display = "none"
    photo3.style.display = "block"
    photo4.style.display = "none"
})
small4.addEventListener("click",()=>{
    small4.style.opacity = "0.5"
    small4.style.border = "2px solid red"
    small1.style.opacity = "1"
    small1.style.border = "none"
    small3.style.opacity = "1"
    small3.style.border = "none"
    small2.style.opacity = "1"
    small2.style.border = "none"
    photo1.style.display = "none"
    photo2.style.display = "none"
    photo3.style.display = "none"
    photo4.style.display = "block"
})
photo1.addEventListener("click", ()=>{
    main.style.opacity = "0.5"
    section.style.display = "block"
    newphoto1.style.display = "block"
    newphoto2.style.display = "none"
    newphoto3.style.display = "none"
    newphoto4.style.display = "none"

})
photo2.addEventListener("click", ()=>{
    main.style.opacity = "0.5"
    section.style.display = "block"
    newphoto2.style.display = "block"
    newphoto1.style.display = "none"
    newphoto3.style.display = "none"
    newphoto4.style.display = "none"

})
photo3.addEventListener("click", ()=>{
    main.style.opacity = "0.5"
    section.style.display = "block"
    newphoto3.style.display = "block"
    newphoto2.style.display = "none"
    newphoto1.style.display = "none"
    newphoto4.style.display = "none"

})
photo4.addEventListener("click", ()=>{
    main.style.opacity = "0.5"
    section.style.display = "block"
    newphoto4.style.display = "block"
    newphoto2.style.display = "none"
    newphoto3.style.display = "none"
    newphoto1.style.display = "none"
})
closed.addEventListener("click", ()=>{
    main.style.opacity = "1"
    section.style.display = "none"
})
plus.addEventListener("click", ()=>{
    number.innerText ++
})
minus.addEventListener("click", ()=>{
    if (number.innerText > 0){
        number.innerText --
    }else{
        alert("Can't have a negative number")
    }
})
cart.addEventListener("click", ()=>{
    popup.classList.toggle("h")
    if (number.innerText == 0){
        noitems.style.display = "block"
        item.style.display = "none"
    }
    if (number.innerText > 0 && added == true){
        noitems.style.display = "none"
        item.style.display = "flex"
        total = number.innerText * 125.00
        console.log(total)
        money.innerText = "$125.00 * " + number.innerText + " = $" + total
    }
})
trash.addEventListener("click",()=>{
    noitems.style.display = "block"
    item.style.display = "none"
    added = false
})
after.addEventListener("click", ()=>{
    phnum ++
    if (phnum > 4 ){
        phnum = 1
    }
    if (phnum == 1){
        photo6.style.display = "block"
        photo7.style.display = "none"
        photo8.style.display = "none"
        photo9.style.display = "none"
    }
    if (phnum == 2){
        photo6.style.display = "none"
        photo7.style.display = "block"
        photo8.style.display = "none"
        photo9.style.display = "none"
    }
    if (phnum == 3){
        photo6.style.display = "none"
        photo7.style.display = "none"
        photo8.style.display = "block"
        photo9.style.display = "none"
    }
    if (phnum == 4){
        photo6.style.display = "none"
        photo7.style.display = "none"
        photo8.style.display = "none"
        photo9.style.display = "block"
    }
})
before.addEventListener("click", ()=>{
    phnum --
    if (phnum < 1){
        phnum = 4
    }
    if (phnum == 1){
        photo6.style.display = "block"
        photo7.style.display = "none"
        photo8.style.display = "none"
        photo9.style.display = "none"
    }
    if (phnum == 2){
        photo6.style.display = "none"
        photo7.style.display = "block"
        photo8.style.display = "none"
        photo9.style.display = "none"
    }
    if (phnum == 3){
        photo6.style.display = "none"
        photo7.style.display = "none"
        photo8.style.display = "block"
        photo9.style.display = "none"
    }
    if (phnum == 4){
        photo6.style.display = "none"
        photo7.style.display = "none"
        photo8.style.display = "none"
        photo9.style.display = "block"
    }
})
console.log(phnum)

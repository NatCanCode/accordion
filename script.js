// HTML/CSS & JavaScript accordion //
let items = document.querySelectorAll(".accordion .item");

for(let i=0; i<items.length; i++){
    items[i].addEventListener("click", function(){
        if(items[i].classList.contains("active")){
            items[i].classList.remove("active")
        }
        else{
            let activeNode = null;
            try{
                activeNode = document.querySelector(".accordion .active")
            }
            catch(msg){}
            items[i].classList.add("active")
            if(activeNode){
                activeNode.classList.remove("active")
            }
        }
    })
}

// Simpler HTML/CSS & JavaScript accordion //
let header = document.querySelectorAll(".header");

for(let i=0; i<header.length; i++){
    header[i].addEventListener("click", function(){
        let accordion = this.nextElementSibling;
        accordion.classList.toggle("active")

        if(this.firstElementChild.innerText === "+"){
             this.firstElementChild.innerText = "-"
        }
        else{
            this.firstElementChild.innerText = "+"
        }
    })
}

// Prestashop custom JS //
// let desc = document.querySelectorAll(".desc-title");

// for(let i=0; i<header.length; i++){
//     desc[i].addEventListener("click", function(){
//         let accordion = this.nextElementSibling;
//         accordion.classList.toggle("active")

//         if(this.firstElementChild.innerText === "+"){
//              this.firstElementChild.innerText = "-"
//         }
//         else{
//             this.firstElementChild.innerText = "+"
//         }
//     })
// }
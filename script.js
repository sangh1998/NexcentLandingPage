const nav = document.querySelector(".nav");
const button = document.querySelector("button");
const ancher = document.querySelectorAll(".ancher a");


button.addEventListener("click",function(){
    button.style.backgroundColor = "#1b5e1fc8";
});


ancher.forEach(element => {
    element.addEventListener("click" , function(e){
        
    })
});








// ancher.forEach(link=>{
//     link.addEventListener("click",function(e){
//         e.preventDefault();

//         const mySelected = document.querySelector(".ancher a.active");
//         if(mySelected){
//             mySelected.classList.remove("active");
//         }

//         this.classList.add("active");
//     })
    
// })



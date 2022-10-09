let gridContainer = document.getElementById("imageGallery");

let gridBoxes = document.querySelectorAll(".gridImage");

let count = gridBoxes.length;


let items = ["cat","random","random","random","random"];


function randomImageGenerate(){
    gridBoxes.forEach((elem,index)=>{
        let i = Math.floor(Math.random() * items.length);
        elem.style.backgroundImage=`url(https://source.unsplash.com/random/50×50/?${items[i]}&sig=${index})`;
    })
}

randomImageGenerate();






let refreshBtn = document.getElementById("refreshBtn");
let submitBtn = document.getElementById("submitBtn");

refreshBtn.addEventListener("click",(e)=>{
    refreshBtn.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        randomImageGenerate();
        refreshBtn.innerHTML=`<i class="fa-sharp fa-solid fa-arrow-rotate-right"></i>`;
    }, 5000);
})
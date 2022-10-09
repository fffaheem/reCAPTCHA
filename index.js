let gridContainer = document.getElementById("imageGallery");

let gridBoxes = document.querySelectorAll(".gridImage");

let count = gridBoxes.length;


let items = ["cat","random","random","random","random"];
let correctPlaces = [];
let selectedPlaces = [];

function randomImageGenerate(){
    correctPlaces = [];
    gridBoxes.forEach((elem,index)=>{
        let i = Math.floor(Math.random() * items.length);
        if(i==0){
            correctPlaces.push(index);
        }
        elem.style.backgroundImage=`url(https://source.unsplash.com/random/50×50/?${items[i]}&sig=${index})`;
    })
}

randomImageGenerate();


// selecting an image
gridBoxes.forEach((elem,index)=>{
    elem.addEventListener("click",(e)=>{
        elem.classList.toggle("selected");             
    })
})



let refreshBtn = document.getElementById("refreshBtn");
let submitBtn = document.getElementById("submitBtn");

refreshBtn.addEventListener("click",(e)=>{
    refreshBtn.innerHTML = "<div class='loader'></div>";

    gridBoxes.forEach(elem=>{
        elem.classList.remove("selected");        
    })

    setTimeout(() => {
        randomImageGenerate();
        refreshBtn.innerHTML=`<i class="fa-sharp fa-solid fa-arrow-rotate-right"></i>`;
    }, 1000);

})



submitBtn.addEventListener("click",(e)=>{
    selectedPlaces = [];
    let selected = document.querySelectorAll(".selected");
    if(selected.length == 0){
        alert("Please select atleast one");
    }else{
        selected.forEach((elem)=>{
            let i = elem.getAttribute("data-sno");
            selectedPlaces.push(parseInt(i));
        })

        // console.log("correct",correctPlaces);
        // console.log(selectedPlaces);

        if(correct()=="true"){            
            gridBoxes.forEach(elem=>{
                elem.classList.remove("selected");        
            })
            randomImageGenerate();

            alert("Done");

            // or any of your code


        }else{
            gridBoxes.forEach(elem=>{
                elem.classList.remove("selected");        
            })
            randomImageGenerate();

            alert("wrong");

        }

    }

    
})


function correct(){
  if(correctPlaces.length!=selectedPlaces.length){
    return "false";
  }else{
    if(JSON.stringify(correctPlaces) == JSON.stringify(selectedPlaces)){
        return "true";
    }else{
        return "false";
    }
  }
}
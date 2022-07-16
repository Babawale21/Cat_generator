// function generateCat(){
//     let image = document.createElement("img");
//     let div = document.querySelector(".flex-box-container");
//     image.src = "/download.webp"
//     div.appendChild(image);
// }

let genButton = document.querySelector("#cat-gen");

genButton.addEventListener("click", function(){
    let image = document.createElement("img")
    let div = document.querySelector(".flex-box-container");
    image.src = "/download.webp"
    div.appendChild(image)
})



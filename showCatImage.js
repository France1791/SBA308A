import {request} from './fetchData.js';

export async function showCatImage(){
    const catImagectn = document.getElementById("catImageCtn");
    const catImageGenerator = document.getElementById("catImageGenerator");

    catImageGenerator.addEventListener("click", async function(){
        const newImage = await request();
        console.log(newImage);
        newImage.urls.forEach(function(cat){
            const newCatElement = document.createElement("img");
            newCatElement.src = cat.url;
            catImagectn.append(newCatElement);
        })
        
    } )
}
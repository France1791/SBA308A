



async function fetchCat() {
    try{
        const response = await fetch(
             " https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_QUYvukpeaK9btLoQl2wbcvL71jpAEi2xHFPTChaz3E4CJBKOCBugFKVcOslFMOw2"
         );
         const data = await response.json();
         console.log(data);
    }catch (error){
        console.log(error);
    }

}

 //fetchCat();



//  function breedList(breedList){
//     document.getElementById("breed").innerHTML = `
//         <select>
//      <option>Choose a dog breed</option>
//       ${Object.keyss(imageList).map(function(dogImage){
//                 return `<option>${dogImage}</option>
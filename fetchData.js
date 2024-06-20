const catApi = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_QUYvukpeaK9btLoQl2wbcvL71jpAEi2xHFPTChaz3E4CJBKOCBugFKVcOslFMOw2";

export const request = async () => {
    try{
        const response = await fetch(catApi);
         const data = await response.json();
         console.log(data);

         const imgbox = document.getElementById('catImageCtn');

         let htlmContent = '<ul>';
         data.forEach(images => {
            const imgEl = document.createElement('img');
            imgEl.src = images.url;
            imgEl.alt = images.description || 'request';
            htlmContent += `<li>${images.url}`;
            
            imgbox.appendChild(imgEl)
         });
         htlmContent += '</ul>';

    }catch (error){
        console.log(error);
    }

}

!function(){const t=document.querySelector("#random");(async(t,e,i=10)=>{const a=await fetch(`${t}?api_key=${e}&limit=${i}`);return await a.json()})("https://api.giphy.com/v1/gifs/trending","AGsk1t182PoJY4eVTiFGNXa2Blc0idb8",45).then(e=>{e.data.map(t=>t.images).map(t=>t.fixed_height_still).map(e=>{let i=document.createElement("img");i.setAttribute("src",e.url),t.appendChild(i)})}).catch(t=>console.log(t))}();
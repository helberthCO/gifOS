const API_URL="https://api.giphy.com/v1/gifs",KEY="AGsk1t182PoJY4eVTiFGNXa2Blc0idb8",RANDOM=document.querySelector("#random"),apiCall=async(t,e,a,i=10)=>{const c=await fetch(`${t}/${a}?api_key=${e}&limit=${i}`);return await c.json()};apiCall(API_URL,KEY,"trending",45).then(t=>{t.data.map(t=>t.images).map(t=>t.fixed_height).map(t=>{let e=document.createElement("img");e.setAttribute("src",t.url),RANDOM.appendChild(e)})}).catch(t=>console.log(t));
import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="53655759-0bde0e69f13e467ced1016ab6";function h(o){const s=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const m=document.querySelector(".gallery"),g=new d(".gallery-link",{captionsData:"alt",captionDelay:250,disableScroll:!0}),p=o=>{const s=o.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="item-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="main-content">
          <ul class="card-list">
            <li class="card-list-li">
              <h3>Likes</h3>
              <p>${e.likes}</p>
            </li>
            <li class="card-list-li">
              <h3>Views</h3>
              <p>${e.views}</p>
            </li>
            <li class="card-list-li">
              <h3>Comments</h3>
              <p>${e.comments}</p>
            </li>
            <li class="card-list-li">
              <h3>Downloads</h3>
              <p>${e.downloads}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",s),g.refresh()},f=document.querySelector(".input"),y=document.querySelector(".gallery"),c=document.querySelector(".form"),n=document.querySelector(".loader");c.addEventListener("submit",o=>{o.preventDefault();const s=f.value.trim();if(s===""){a.show({title:"❌",message:"Please enter the appropriate search query!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}n.classList.remove("is-hidden"),y.innerHTML="",h(s).then(e=>{if(e.hits.length===0){a.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",backgroundColor:"orange",position:"topRight"});return}p(e.hits),c.reset()}).catch(e=>a.show({title:"❌",message:e.message,messageColor:"black",backgroundColor:"red",position:"topRight"})).finally(()=>{n.classList.add("is-hidden")})});
//# sourceMappingURL=index.js.map

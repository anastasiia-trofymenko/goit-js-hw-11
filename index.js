import{a as d,S as f,i as o}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const h="53655759-0bde0e69f13e467ced1016ab6",m="https://pixabay.com/api/";async function p(i){const s={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:s})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250,disableScroll:!0});function y(i){const s=i.map(e=>`
      <li class="gallery-item">
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
      </li>
      `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const w=document.querySelector(".input"),u=document.querySelector(".form");o.settings({timeout:4e3,position:"topRight",transitionIn:"fadeInRight",transitionOut:"fadeOutRight"});u.addEventListener("submit",v);function v(i){i.preventDefault();const s=w.value.trim();if(s===""){o.error({title:"Error",message:"Please enter a search query"});return}L(),S(),p(s).then(e=>{if(!e||!Array.isArray(e.hits)||e.hits.length===0){o.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),u.reset()}).catch(e=>{console.error(e),o.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map

function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},l=n.parcelRequirecbc0;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},n.parcelRequirecbc0=l),l.register("kyEFX",(function(t,n){var a,r;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var l={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},r=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("kyEFX").register(JSON.parse('{"bHX8u":"library.72553b0f.js","6QC5f":"noimg.9467229c.jpg","63qS6":"grandma.62956977.jpg","fRoIN":"library.d65a7dfa.js"}')),l("j3p24"),l("gfuoZ"),l("7bYU0");var i,s=l("krGWQ"),o=l("7rYDH");i=new URL(l("kyEFX").resolve("63qS6"),import.meta.url).toString();var d;d=new URL(l("kyEFX").resolve("6QC5f"),import.meta.url).toString();var c=l("b5rV1"),u=l("gjiCh");const f=async()=>{try{u.default.show(s.default.loader);const e=c.default.watched,n=await o.default.getMoviesById(e);u.default.hide(s.default.loader),v(n),s.default.libraryGallery.style.justifyContent="flex-start",s.default.btnWatched.classList.contains("active-btn")||(s.default.btnWatched.classList.add("active-btn"),s.default.btnQueue.classList.remove("active-btn")),c.default.watched.length||(s.default.libraryGallery.innerHTML=`<li class="grandma"><img src="${t(i)}" alt="Grandma, there's nothing here" /></li>`,s.default.libraryGallery.style.justifyContent="center")}catch(e){console.error(e.stack)}};f(),s.default.btnWatched.addEventListener("click",f);const b=async()=>{try{u.default.show(s.default.loader);const e=c.default.queue,n=await o.default.getMoviesById(e);u.default.hide(s.default.loader),v(n),s.default.libraryGallery.style.justifyContent="flex-start",s.default.btnQueue.classList.contains("active-btn")||(s.default.btnQueue.classList.add("active-btn"),s.default.btnWatched.classList.remove("active-btn")),c.default.queue.length||(s.default.libraryGallery.innerHTML=`<li class="grandma"><img src="${t(i)}" alt="Grandma, there's nothing here" /></li>`,s.default.libraryGallery.style.justifyContent="center")}catch(e){console.error(e.stack)}};function v(e){const n=e.map((({id:e,title:n,original_title:a,release_date:r,first_air_date:l,poster_path:i,genres:s})=>{const o=window.devicePixelRatio>1?"original":"w500",c=i?`https://image.tmdb.org/t/p/${o}/${i}`:t(d),u=r?r.slice(0,4):l?l.slice(0,4):"Unknown year",f=n||a;let b=s.map((e=>e.name));return b=b.length>0?b.length>2?b.slice(0,2).join(", ")+" (...)":b.join(", "):"Unknown genre",`<li class="movie-container__card" data-id="${e}">\n            <div class="poster"><img class="poster__img" src="${c}" alt="${n} poster" loading="lazy" /></div>\n            <div class="movieInfo">\n               <p class="movieInfo__item movieInfo--title">${f}</p>\n               <p class="movieInfo__item">\n                     ${b} | ${u}\n              </p>\n            </div>\n          </li>`})).join("");s.default.libraryGallery.innerHTML=n}s.default.btnQueue.addEventListener("click",b),s.default.addToWatchedBtn.addEventListener("click",(()=>{if(s.default.btnWatched.classList.contains("active-btn"))return f();b()})),s.default.addToQueueBtn.addEventListener("click",(()=>{if(s.default.btnWatched.classList.contains("active-btn"))return f();b()})),l("37v9V");
//# sourceMappingURL=library.72553b0f.js.map
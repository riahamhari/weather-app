(()=>{"use strict";const e=e=>{const n=e.name.toUpperCase(),i=e.sys.country,r=e.weather[0].description.toUpperCase(),c=Math.round(e.main.temp),o=Math.round(e.main.feels_like),a=Math.round(3.6*e.wind.speed),d=e.main.humidity;return t(n,i,r,c,o,a,d)},t=(e,t,n,i,r,c,o)=>({name:e,country:t,conditions:n,temperature:i,feelsLike:r,wind:c,humidity:o}),n=document.querySelector("button"),i=document.querySelector("input"),r=config.API_KEY;n.addEventListener("click",(()=>{document.querySelector(".weatherInfo").innerHTML="",async function(){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${i.value}&units=metric&appid=${r}`,{mode:"cors"}),n=await t.json();(e=>{const t=document.createElement("h2");t.setAttribute("id","cityName"),t.innerText=`${e.name}, ${e.country}`;const n=document.createElement("p");n.setAttribute("id","conditions"),n.innerText=e.conditions;const i=document.createElement("span");i.setAttribute("id","temperature"),i.innerText=`${e.temperature}°C`;const r=document.createElement("p");r.setAttribute("id","feelsLike"),r.innerText=`FEELS LIKE: ${e.feelsLike}°C`;const c=document.createElement("p");c.setAttribute("id","wind"),c.innerText=`WIND: ${e.wind} KM/H`;const o=document.createElement("p");o.setAttribute("id","humidity"),o.innerText=`HUMIDITY: ${e.humidity}%`;const a=document.createElement("div");a.classList.add("column-1");const d=document.createElement("div");d.setAttribute("id","currentWeather");const u=document.createElement("div");u.setAttribute("id","weatherDetails"),u.append(r,c,o),d.append(i,u),a.append(t,n,d),document.querySelector(".weatherInfo").appendChild(a)})(e(n))}(),i.value=""}))})();
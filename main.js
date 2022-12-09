(()=>{"use strict";const e=e=>{const n=e.name.toUpperCase(),i=e.sys.country,r=e.weather[0].main.toUpperCase(),c=Math.round(e.main.temp),a=Math.round(e.main.feels_like),o=Math.round(3.6*e.wind.speed),d=e.main.humidity;return t(n,i,r,c,a,o,d)},t=(e,t,n,i,r,c,a)=>({name:e,country:t,conditions:n,temperature:i,feelsLike:r,wind:c,humidity:a}),n=document.querySelector("button"),i=document.querySelector("input");n.addEventListener("click",(()=>{document.querySelector(".weatherInfo").innerHTML="",async function(){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${i.value}&units=metric&appid=3df8a87758f9170b7460a19f89b1958b`,{mode:"cors"}),n=await t.json();(e=>{const t=document.createElement("h2");t.setAttribute("id","cityName"),t.innerText=`${e.name}, ${e.country}`;const n=document.createElement("p");n.setAttribute("id","conditions"),n.innerText=e.conditions;const i=document.createElement("span");i.setAttribute("id","temperature"),i.innerText=`${e.temperature}°C`;const r=document.createElement("p");r.setAttribute("id","feelsLike"),r.innerText=`FEELS LIKE: ${e.feelsLike}°C`;const c=document.createElement("p");c.setAttribute("id","wind"),c.innerText=`WIND: ${e.wind} KM/H`;const a=document.createElement("p");a.setAttribute("id","humidity"),a.innerText=`HUMIDITY: ${e.humidity}%`;const o=document.createElement("div");o.classList.add("column-1");const d=document.createElement("div");d.setAttribute("id","currentWeather");const u=document.createElement("div");u.setAttribute("id","weatherDetails"),u.append(r,c,a),d.append(i,u),o.append(t,n,d),document.querySelector(".weatherInfo").appendChild(o)})(e(n))}(),i.value=""}))})();
const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
const emojis={happy:"☀️",calm:"☁️",love:"♡",sad:"☂️",anxious:"〰️",angry:"✳️",tired:"🌙",empty:"◇"};
let selected=null,entries=JSON.parse(localStorage.getItem("moodbook-entries")||"[]");
const $=s=>document.querySelector(s);
$("#date").textContent=new Date().toLocaleDateString("ru-RU",{weekday:"short",day:"numeric",month:"long"});
document.querySelectorAll(".moods button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".moods button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selected=b.dataset.mood}));
$("#note").addEventListener("input",()=>$("#count").textContent=$("#note").value.length+" / 1200");
function toast(s){$("#toast").textContent=s;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),2000)}
function render(){ $("#total").textContent=entries.length;if(!entries.length){$("#entries").innerHTML='<p class="muted">Здесь появятся твои записи. Начни с маленького момента.</p>';return}
$("#entries").innerHTML=entries.slice(0,8).map(e=>`<article class="entry"><span>${emojis[e.mood]}</span><div><p>${escapeHtml(e.text||"Без текста")}</p><small>${new Date(e.date).toLocaleString("ru-RU")} · ${e.public?"Публично":"Приватно"}</small></div></article>`).join("")}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("#save").addEventListener("click",()=>{if(!selected){toast("Сначала выбери настроение");return}entries.unshift({mood:selected,text:$("#note").value.trim(),public:$("#public").checked,date:new Date().toISOString()});localStorage.setItem("moodbook-entries",JSON.stringify(entries));$("#note").value="";$("#count").textContent="0 / 1200";$("#public").checked=false;document.querySelectorAll(".moods button").forEach(x=>x.classList.remove("selected"));selected=null;render();toast("Запись сохранена")});
$("#lang").addEventListener("click",()=>toast("Английский интерфейс добавим следующим этапом"));
render();
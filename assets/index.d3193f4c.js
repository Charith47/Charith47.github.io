(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const r={top:Popcorn("#player-main"),bottom:Popcorn("#player-glow")};let a=0,d="play pause timeupdate seeking".split(/\s+/g);Popcorn.forEach(r,function(i,o){i.on("canplayall",function(){this.emit("sync")}).on("sync",function(){++a==2&&d.forEach(function(n){r.top.on(n,function(){if(n==="timeupdate"){if(!this.media.paused)return;r.bottom.emit("timeupdate");return}n==="seeking"&&r.bottom.currentTime(this.currentTime()),(n==="play"||n==="pause")&&r.bottom[n]()})})})});function c(){r.bottom.media.readyState===4&&r.bottom.currentTime(r.top.currentTime()),requestAnimationFrame(c)}c();const u=document.getElementById("player-glow"),f=document.getElementById("intensity-slider"),m=document.getElementById("spread-slider");f.addEventListener("input",function(i){const o=i.target.value;u.style.opacity=`${o}%`});m.addEventListener("input",function(i){const o=i.target.value;u.style.filter=`blur(${o}px)`});

const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;t.addEventListener("click",(function(n){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(n){clearInterval(d),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3f2c1550.js.map

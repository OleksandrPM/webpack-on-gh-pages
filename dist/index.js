(()=>{"use strict";function e(e){return""===e.value.trim()?e.value:+e.value}const t=document.getElementById("Number1"),n=document.getElementById("Number2"),r=document.getElementById("Operation"),l=document.getElementById("SubmitButton"),u=document.getElementById("ErrorMessage"),o=document.getElementById("ResultText"),s=document.getElementById("ResultValue");u.style.display="none",o.style.display="none",l.addEventListener("click",(()=>{let l=e(t),a=e(n),i=r.value;try{let e;switch(function(e,t,n){if("number"!=typeof e)throw new Error("Nezadal jsi první číslo.");if("number"!=typeof t)throw new Error("Nezadal jsi druhé číslo.");if("DELENI"===n&&0===t)throw new Error("Nulou dělit nelze.")}(l,a,i),i){case"SCITANI":e=function(e,t){return e+t}(l,a);break;case"ODECITANI":e=function(e,t){return e-t}(l,a);break;case"DELENI":e=function(e,t){return e/t}(l,a);break;case"NASOBENI":e=function(e,t){return e*t}(l,a)}s.innerText=e,o.style.display="block",u.style.display="none"}catch(e){u.innerText=e.message,u.style.display="block",o.style.display="none"}}))})();
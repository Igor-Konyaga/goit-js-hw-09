!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');function c(e,n){var o=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){o?t({position:e,delay:n}):c({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(r){r.preventDefault();for(var a=n.value,u=o.value,i=t.value,l=1;l<=i;l++)c(l,a).then((function(e){var n=e.position,o=e.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(o," ms"))})).catch((function(e){var n=e.position,o=e.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),a+=u;e.reset()}))}();
//# sourceMappingURL=03-promises.c73b7590.js.map

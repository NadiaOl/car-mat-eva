const e=document.querySelector(".form"),t=document.querySelector(".popup"),a=document.querySelector(".popupError"),s=document.querySelector(".jsClosePopup");e.addEventListener("submit",(function(s){s.preventDefault();const r=s.target.elements,c=r.kind.value,n=r.edging.value,u=r.material.value,i=`${r.auto.value} ${r.model.value}`,o=r.feedback.value;let l="";switch(c){case"complectPrice":l="Повний комплект (передні та задні)";break;case"frontPrice":l="Передній комплект (водійський та пасажирський)";break;case"driverPrice":l="Один водійський";break;case"passangerPrice":l="Один пасажирський";break;case"trunkPrice":l="Багажник";break;default:l="Помилка, зателефонуйте покупцю"}const d={name:r.username.value,phone:r.tel.value,message:`Замолення на ${l}, колір килима: ${u}, колір канту: ${n}, авто: ${i}. Коментар: ${o}`};emailjs.send("service_du5psi9","template_227kgxf",d).then((function(a){t.classList.remove("hide"),setTimeout((()=>{t.classList.add("hide")}),5e3),e.reset()}),(function(t){a.classList.remove("hide"),e.reset()}))})),s.addEventListener("click",(function(){a.classList.add("hide")}));
//# sourceMappingURL=index.733aba20.js.map

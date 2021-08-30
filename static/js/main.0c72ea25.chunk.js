(this["webpackJsonpkids-routine"]=this["webpackJsonpkids-routine"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),i=a.n(c),l=a(8),r=a(2),o=(a(13),a(0)),j=function(e){var t=["Bra!","Fantastiskt","Heja!","Wow","Snyggt","Du \xe4r b\xe4st","Fint!","Toppen!"],a=t[Math.floor(Math.random()*t.length)];return Object(o.jsx)("div",{className:"card",onClick:e.onClick,children:Object(o.jsxs)("div",{className:"card-inner",children:[Object(o.jsxs)("div",{className:"card-front",children:[Object(o.jsx)("img",{src:e.src,alt:e.alt,className:"icon"}),Object(o.jsx)("h3",{children:e.title})]}),Object(o.jsxs)("div",{className:"card-back",children:[Object(o.jsx)("img",{src:"images/star.png",alt:"star",className:"icon"}),Object(o.jsx)("h3",{children:a})]})]})})},b=function(e){return Object(o.jsx)("div",{className:"cards-container",children:e.newMorningCards.map((function(t){return Object(o.jsx)(j,{onClick:e.onClick,alt:t.title,src:t.image,title:t.title},t.id)}))})},d=function(e){return Object(o.jsx)("header",{children:Object(o.jsxs)("h1",{children:["God morgon ",e.name]})})},h=function(e){return Object(o.jsx)("button",{className:"icon-button ".concat(e.className),id:e.id,onClick:e.onClick,children:Object(o.jsx)("img",{src:e.src,alt:e.alt,width:"65",height:"65"})})},u=function(e){return Object(o.jsxs)("div",{className:"container",style:e.style,children:[Object(o.jsx)("h2",{children:"V\xe4lkommen"}),Object(o.jsx)("p",{children:"Klara av alla morgon och kv\xe4llsuppgifter p\xe5 ett kul och lekfullt s\xe4tt. V\xe4lj vilka uppgifter som passar dig b\xe4st och samla s\xe5 m\xe5nga stj\xe4rnor du kan. Lycka till!"}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["Detta \xe4r ett Hyper Island skolprojekt som \xe4r utvecklat av Elin Amr\xe9n, mer information hittar du p\xe5"," ",Object(o.jsx)("a",{href:"https://github.com/elinamren/goodmorning",children:"Github"}),"."]}),Object(o.jsx)("br",{}),Object(o.jsx)("h4",{children:"CRED"}),Object(o.jsxs)("p",{children:["Iconer designade av"," ",Object(o.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," ","fr\xe5n"," ",Object(o.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"Flaticon"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:e.onClick,children:"St\xe4ng"})]})},g=function(e){return Object(o.jsxs)("div",{className:"container",style:e.style,children:[Object(o.jsx)("h2",{children:"Stj\xe4rnor"}),Object(o.jsxs)("p",{children:["Bra jobbat ",e.name,", du har samlat ",e.star," stj\xe4rnor."]}),Object(o.jsx)("div",{className:"star-board",children:e.starDisplay}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:e.onClick,children:"Tillbaka"})]})},m=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"checkbox",type:"checkbox",name:e.name,onChange:e.handleCheckbox,value:e.name,defaultChecked:e.checked}),Object(o.jsx)("label",{htmlFor:e.name,children:e.name})]})},O=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"V\xe4lj morgonuppgifter, 6st."}),Object(o.jsx)(m,{name:"G\xe5 upp i tid",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"G\xe5 p\xe5 toa",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Kl\xe4 p\xe5 dig",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"\xc4t frukost",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Duka av bordet",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Borsta t\xe4nder",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Borsta h\xe5ret",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"B\xe4dda s\xe4ngen",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Packa v\xe4skan",handleCheckbox:e.handleCheckbox}),Object(o.jsx)(m,{name:"Kl\xe4 p\xe5 ytterkl\xe4der",handleCheckbox:e.handleCheckbox})]})},x=function(e){return Object(o.jsxs)("div",{className:"container settings",style:e.style,children:[Object(o.jsx)("h2",{children:"Inst\xe4llningar"}),Object(o.jsx)("p",{children:"H\xe4r kan du \xe4ndra namn, vilka uppgifter som ska synas osv."}),Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"name",children:"Namn: "}),Object(o.jsx)("input",{type:"text",name:"name",onChange:e.onChange}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{handleCheckbox:e.handleCheckbox}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["Du har ",e.stars," insamlade stj\xe4rnor. Vill du b\xf6rja om fr\xe5n noll?"]}),Object(o.jsx)("button",{className:"small-button",onClick:e.deleteStars,children:"Ja"})]}),Object(o.jsx)("button",{onClick:e.handleSettingsModal,children:"Tillbaka"}),Object(o.jsx)("button",{onClick:e.handleSave,children:"Spara"})]})},k=function(e){return Object(o.jsx)("img",{src:"images/star.png",alt:"star",width:"50",height:"50",className:"star-blink",style:e.style})},p=function(e){var t=(new Date).getHours(),a=Object(n.useState)(""),s=Object(r.a)(a,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){i(t>12?"morgon":"kv\xe4ll")}),[t]),Object(o.jsxs)("div",{className:"container",style:e.style,children:[Object(o.jsxs)("h2",{children:["Bra jobbat ",e.name,"!"]}),Object(o.jsx)(k,{}),Object(o.jsx)(k,{style:{animationDelay:"0.2s"}}),Object(o.jsx)(k,{style:{animationDelay:"1.4s"}}),Object(o.jsx)(k,{}),Object(o.jsx)(k,{style:{animationDelay:"0.5s"}}),Object(o.jsx)(k,{style:{animationDelay:"1s"}}),Object(o.jsxs)("p",{children:["Du Har hittils samlat ihop ",e.star," stj\xe4rnor. Du har klarat alla uppgifter som finns just nu. Kom tillbaka igen i ",c,"."]}),Object(o.jsx)("button",{onClick:e.handleWinnerModal,children:"TEST MODE"})]})},f=[{id:"1",title:"G\xe5 upp i tid",image:"images/sleep.png"},{id:"2",title:"G\xe5 p\xe5 toa",image:"images/toilet.png"},{id:"3",title:"Kl\xe4 p\xe5 dig",image:"images/clothes.png"},{id:"4",title:"\xc4t frukost",image:"images/breakfast.png"},{id:"5",title:"Duka av bordet",image:"images/dish.png"},{id:"6",title:"Borsta t\xe4nder",image:"images/toothbrush.png"},{id:"7",title:"Borsta h\xe5ret",image:"images/hair-brush.png"},{id:"8",title:"B\xe4dda s\xe4ngen",image:"images/bed.png"},{id:"9",title:"Packa v\xe4skan",image:"images/backpack.png"},{id:"10",title:"Kl\xe4 p\xe5 ytterkl\xe4der",image:"images/shoes.png"}],S=a(7);var C=function(){var e=Object(S.useMediaQuery)({query:"(max-width: 650px)"});Object(n.useEffect)((function(){se(),ce()}),[]);var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(!1),j=Object(r.a)(i,2),m=j[0],O=j[1],k=Object(n.useState)(!1),C=Object(r.a)(k,2),v=C[0],y=C[1],N=Object(n.useState)(!1),K=Object(r.a)(N,2),D=K[0],w=K[1];function I(){c((function(e){return!e}))}function L(){O((function(e){return!e}))}function M(){_([]),y((function(e){return!e}))}var R=Object(n.useState)(""),J=Object(r.a)(R,2),B=J[0],E=J[1],F=Object(n.useState)(""),G=Object(r.a)(F,2),H=G[0],T=G[1],V=Object(n.useState)(0),W=Object(r.a)(V,2),P=W[0],A=W[1],q=Object(n.useState)([]),Q=Object(r.a)(q,2),z=Q[0],U=Q[1];function X(e){return Math.floor(Math.random()*e+1)}Object(n.useEffect)((function(){6===P&&(console.log("Winner"),w(!0))}),[P]);var Y=Object(n.useState)(["G\xe5 p\xe5 toa","Kl\xe4 p\xe5 dig","\xc4t frukost","Borsta t\xe4nder","Packa v\xe4skan","Kl\xe4 p\xe5 ytterkl\xe4der"]),Z=Object(r.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)([]),te=Object(r.a)(ee,2),ae=te[0],ne=te[1];function se(){if($.length>6||$.length<6)alert("Du f\xe5r v\xe4lja 6 olika uppgifter");else if(6===$.length){var e=f.filter((function(e){return $.includes(e.title)}));ne(e)}console.log(ae)}var ce=function(){if(null===localStorage.getItem("KidsRoutineNameLocalStorage"))localStorage.setItem("KidsRoutineNameLocalStorage",JSON.stringify(""));else{var e=JSON.parse(localStorage.getItem("KidsRoutineNameLocalStorage"));T(e)}if(null===localStorage.getItem("KidsRoutineStarsLocalStorage"))localStorage.setItem("KidsRoutineStarsLocalStorage",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("KidsRoutineStarsLocalStorage"));U(t)}if(null===localStorage.getItem("KidsRoutineCardsLocalStorage")){var a=f.filter((function(e){return $.includes(e.title)}));localStorage.setItem("KidsRoutineCardsLocalStorage",JSON.stringify(a))}else{var n=JSON.parse(localStorage.getItem("KidsRoutineCardsLocalStorage"));ne(n)}};return Object(n.useEffect)((function(){localStorage.setItem("KidsRoutineNameLocalStorage",JSON.stringify(H)),localStorage.setItem("KidsRoutineCardsLocalStorage",JSON.stringify(ae)),localStorage.setItem("KidsRoutineStarsLocalStorage",JSON.stringify(z))}),[H,z,ae]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{name:H}),Object(o.jsx)(b,{onClick:function(e){e.target.classList.contains("flipped")||(U((function(e){return[].concat(Object(l.a)(e),[e.length+1])})),e.target.classList.add("flipped"),A((function(e){return e+1})),console.log(P))},newMorningCards:ae}),Object(o.jsx)(h,{src:"images/info.png",alt:"info",id:"info-button",onClick:I}),Object(o.jsx)(h,{src:"images/settings.png",alt:"settings",id:"settings-button",onClick:M}),Object(o.jsx)(h,{src:"images/star.png",alt:"star",id:"star-button",onClick:L}),Object(o.jsx)(u,{onClick:I,style:{display:s?"block":"none"}}),Object(o.jsx)(g,{onClick:L,style:{display:m?"block":"none"},name:H,star:z.length,starDisplay:z.map((function(t){return Object(o.jsx)("img",{className:"star-blink",src:"images/star.png",alt:"star",width:"50",height:"50",style:{position:"absolute",top:X(290),left:X(e?230:870),animationDelay:X(5)+"s"}},t)}))}),Object(o.jsx)(x,{handleSettingsModal:M,style:{display:v?"block":"none"},onChange:function(e){E(e.target.value)},handleSave:function(){T(B),se()},deleteStars:function(){U([])},handleCheckbox:function(e){if(e.target.checked)$.push(e.target.value);else if(!e.target.checked){var t=$.splice($.indexOf(e.target.value),1);_(t)}console.log($)},value:H,stars:z.length}),Object(o.jsx)(p,{name:H,star:z.length,style:{display:D?"block":"none"},handleWinnerModal:function(){w((function(e){return!e}))}})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0c72ea25.chunk.js.map
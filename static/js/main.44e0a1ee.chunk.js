(this["webpackJsonpkids-routine"]=this["webpackJsonpkids-routine"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(6),c=a.n(s),r=a(8),l=a(2),o=(a(13),a(0)),j=function(e){var t=["Bra!","Fantastiskt","Heja!","Wow","Snyggt","Du \xe4r b\xe4st","Fint!","Toppen!"],a=t[Math.floor(Math.random()*t.length)];return Object(o.jsx)("div",{className:"card",onClick:e.onClick,children:Object(o.jsxs)("div",{className:"card-inner",children:[Object(o.jsxs)("div",{className:"card-front",children:[Object(o.jsx)("img",{src:e.src,alt:e.alt,className:"icon"}),Object(o.jsx)("h3",{children:e.title})]}),Object(o.jsxs)("div",{className:"card-back",children:[Object(o.jsx)("img",{src:"images/star.png",alt:"star",className:"icon"}),Object(o.jsx)("h3",{children:a})]})]})})},d=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){e.isMorning?s(e.newMorningCards):s(e.newNightCards)}),[e.isMorning,e.newNightCards,e.newMorningCards]),Object(o.jsx)("div",{className:"cards-container",children:i.map((function(t){return Object(o.jsx)(j,{onClick:e.onClick,alt:t.title,src:t.image,title:t.title},t.id)}))})},g=function(e){return Object(o.jsx)("header",{children:Object(o.jsxs)("h1",{style:{color:e.isMorning?"black":"white"},children:["God ",e.isMorning?"morgon":"kv\xe4ll"," ",e.name]})})},b=function(e){return Object(o.jsx)("button",{className:"icon-button ".concat(e.className),id:e.id,onClick:e.onClick,children:Object(o.jsx)("img",{src:e.src,alt:e.alt,width:"65",height:"65"})})},u=function(e){return Object(o.jsxs)("div",{className:"modal-container ".concat(e.className),style:e.style,children:[Object(o.jsx)("h2",{children:"V\xe4lkommen"}),Object(o.jsx)("p",{children:"Klara av alla morgon och kv\xe4llsuppgifter p\xe5 ett kul och lekfullt s\xe4tt. V\xe4lj vilka uppgifter som passar dig b\xe4st och samla s\xe5 m\xe5nga stj\xe4rnor du kan. Lycka till!"}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["Detta \xe4r ett Hyper Island skolprojekt som \xe4r utvecklat av Elin Amr\xe9n, mer information hittar du p\xe5"," ",Object(o.jsx)("a",{href:"https://github.com/elinamren/kids-routine",children:"Github"}),"."]}),Object(o.jsx)("br",{}),Object(o.jsx)("h4",{children:"CRED"}),Object(o.jsxs)("p",{children:["Iconer designade av"," ",Object(o.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," ","fr\xe5n"," ",Object(o.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"Flaticon"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"return-button-container",children:Object(o.jsx)("button",{onClick:e.onClick,children:"St\xe4ng"})})]})},m=function(e){return Object(o.jsxs)("div",{className:"modal-container ".concat(e.className),children:[Object(o.jsx)("h2",{children:"Stj\xe4rnor"}),Object(o.jsxs)("p",{children:["Bra jobbat ",e.name,", du har samlat ",e.star," stj\xe4rnor."]}),Object(o.jsx)("div",{className:"star-board",children:e.starDisplay}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"return-button-container",children:Object(o.jsx)("button",{onClick:e.onClick,children:"Tillbaka"})})]})},h=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"checkbox",type:"checkbox",name:e.name,onChange:e.handleCheckbox,value:e.name,checked:e.checked,id:e.id}),Object(o.jsx)("label",{htmlFor:e.name,children:e.name})]})},O=[{id:"11",title:"H\xe4ng upp jackan",image:"images/jacket.png"},{id:"12",title:"G\xf6r l\xe4xor",image:"images/homework.png"},{id:"13",title:"Duka av bordet",image:"images/dish.png"},{id:"14",title:"St\xe4da leksaker",image:"images/toys.png"},{id:"15",title:"St\xe4da rummet",image:"images/vacuum.png"},{id:"16",title:"L\xe4sa",image:"images/book.png"},{id:"17",title:"Bada",image:"images/bath.png"},{id:"18",title:"Borsta t\xe4nder",image:"images/toothbrush.png"},{id:"19",title:"G\xe5 p\xe5 toa",image:"images/toilet.png"},{id:"20",title:"Kl\xe4 av dig",image:"images/clothes.png"}],f=function(e){return Object(o.jsxs)("div",{className:"settings-container flexbox",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"V\xe4lj kv\xe4llsuppgifter, 6st."}),O.map((function(t){return Object(o.jsx)(h,{name:t.title,handleCheckbox:e.handleCheckboxNight,id:t.id},t.id)}))]}),Object(o.jsx)("button",{className:"small-button",onClick:e.saveNight,children:"Spara"})]})},x=[{id:"1",title:"G\xe5 upp i tid",image:"images/sleep.png"},{id:"2",title:"G\xe5 p\xe5 toa",image:"images/toilet.png"},{id:"3",title:"Kl\xe4 p\xe5 dig",image:"images/clothes.png"},{id:"4",title:"\xc4t frukost",image:"images/breakfast.png"},{id:"5",title:"Duka av bordet",image:"images/dish.png"},{id:"6",title:"Borsta t\xe4nder",image:"images/toothbrush.png"},{id:"7",title:"Borsta h\xe5ret",image:"images/hair-brush.png"},{id:"8",title:"B\xe4dda s\xe4ngen",image:"images/bed.png"},{id:"9",title:"Packa v\xe4skan",image:"images/backpack.png"},{id:"10",title:"Kl\xe4 p\xe5 ytterkl\xe4der",image:"images/shoes.png"}],p=function(e){return Object(o.jsxs)("div",{className:"settings-container flexbox",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"V\xe4lj morgonuppgifter, 6st."}),x.map((function(t){return Object(o.jsx)(h,{name:t.title,handleCheckbox:e.handleCheckboxMorning,id:t.id},t.id)}))]}),Object(o.jsx)("button",{className:"small-button",onClick:e.saveMorning,children:"Spara"})]})},k=function(e){return Object(o.jsxs)("div",{className:"settings-container flexbox",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Namn: "}),Object(o.jsx)("input",{id:"name-input",type:"text",name:"name",onChange:e.onChange,value:e.value})]}),Object(o.jsx)("button",{className:"small-button",onClick:e.saveName,children:"Spara"})]})},v=function(e){return Object(o.jsxs)("div",{className:"settings-container flexbox",children:[Object(o.jsxs)("p",{children:["Du har ",e.stars," insamlade stj\xe4rnor. ",Object(o.jsx)("br",{}),"Vill du b\xf6rja om fr\xe5n noll?"]}),Object(o.jsx)("button",{className:"small-button",onClick:e.deleteStars,children:"Ja"})]})},N=function(e){return Object(o.jsxs)("div",{className:"modal-container settings ".concat(e.className),children:[Object(o.jsx)("h2",{children:"Inst\xe4llningar"}),Object(o.jsx)("p",{children:"H\xe4r kan du \xe4ndra namn, vilka uppgifter som ska synas osv."}),Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)(k,{onChange:e.onChange,saveName:e.saveName}),Object(o.jsx)(p,{handleCheckboxMorning:e.handleCheckboxMorning,saveMorning:e.saveMorning}),Object(o.jsx)(f,{handleCheckboxNight:e.handleCheckboxNight,saveNight:e.saveNight}),Object(o.jsx)(v,{stars:e.stars,deleteStars:e.deleteStars})]}),Object(o.jsx)("button",{onClick:e.handleSettingsModal,children:"Tillbaka"})]})},S=function(e){return Object(o.jsx)("img",{src:"images/star.png",alt:"star",width:"50",height:"50",className:"star-blink",style:e.style})},C=function(e){return Object(o.jsxs)("div",{className:"modal-container ".concat(e.className),children:[Object(o.jsxs)("h2",{children:["Bra jobbat ",e.name,"!"]}),Object(o.jsx)(S,{}),Object(o.jsx)(S,{style:{animationDelay:"0.2s"}}),Object(o.jsx)(S,{style:{animationDelay:"1.4s"}}),Object(o.jsx)(S,{}),Object(o.jsx)(S,{style:{animationDelay:"0.5s"}}),Object(o.jsx)(S,{style:{animationDelay:"1s"}}),Object(o.jsxs)("p",{children:["Grattis till 6 nya stj\xe4rnor. Du har hittils samlat ihop ",e.star," ","stj\xe4rnor. Du har klarat alla uppgifter som finns just nu, kom tillbaka igen i ",e.isMorning?"kv\xe4ll":"morgon","."]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:e.handleWinnerModal,children:"TEST MODE"})]})},y=a(7);var M=function(){var e=Object(y.useMediaQuery)({query:"(max-width: 650px)"});Object(n.useEffect)((function(){pe(),ke(),ye()}),[]);var t=new Audio("sound/winner.mp3"),a=new Audio("sound/star.mp3"),i=Object(n.useState)(!1),s=Object(l.a)(i,2),c=s[0],j=s[1],h=Object(n.useState)(!1),f=Object(l.a)(h,2),p=f[0],k=f[1],v=Object(n.useState)(!1),S=Object(l.a)(v,2),M=S[0],w=S[1],I=Object(n.useState)(!1),D=Object(l.a)(I,2),J=D[0],E=D[1];function B(){j((function(e){return!e}))}function F(){k((function(e){return!e}))}function K(){re([]),de([]),w((function(e){return!e}))}var L=Object(n.useState)(!1),G=Object(l.a)(L,2),T=G[0],H=G[1],R=(new Date).getHours();Object(n.useEffect)((function(){H(R<15)}),[R]),Object(n.useEffect)((function(){E(!1)}),[T]);var V=Object(n.useState)(""),A=Object(l.a)(V,2),W=A[0],q=A[1],P=Object(n.useState)(""),Q=Object(l.a)(P,2),z=Q[0],U=Q[1],X=Object(n.useState)(0),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],_=Object(n.useState)([]),ee=Object(l.a)(_,2),te=ee[0],ae=ee[1];function ne(e){return Math.floor(Math.random()*e+1)}Object(n.useEffect)((function(){6===Z&&(console.log("Winner"),setTimeout((function(){E(!0),t.play()}),1700))}),[Z]);var ie=Object(n.useState)(["2","3","4","6","9","10"]),se=Object(l.a)(ie,2),ce=se[0],re=se[1],le=Object(n.useState)(["11","13","14","18","19","20"]),oe=Object(l.a)(le,2),je=oe[0],de=oe[1],ge=Object(n.useState)([]),be=Object(l.a)(ge,2),ue=be[0],me=be[1],he=Object(n.useState)([]),Oe=Object(l.a)(he,2),fe=Oe[0],xe=Oe[1];function pe(){if(ce.length>6||ce.length<6)alert("Du f\xe5r v\xe4lja 6 olika uppgifter");else if(6===ce.length){var e=x.filter((function(e){return ce.includes(e.id)}));me(e)}console.log(ue)}function ke(){if(je.length>6||je.length<6)alert("Du f\xe5r v\xe4lja 6 olika uppgifter");else if(6===je.length){var e=O.filter((function(e){return je.includes(e.id)}));xe(e)}console.log(fe)}var ve="KidsRoutineNameLocalStorage",Ne="KidsRoutineStarsLocalStorage",Se="KidsRoutineMorningCardsLocalStorage",Ce="KidsRoutineNightCardsLocalStorage",ye=function(){if(null===localStorage.getItem(ve))localStorage.setItem(ve,JSON.stringify(""));else{var e=JSON.parse(localStorage.getItem(ve));U(e)}if(null===localStorage.getItem(Ne))localStorage.setItem(Ne,JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem(Ne));ae(t)}if(null===localStorage.getItem(Se))localStorage.setItem(Se,JSON.stringify(ue));else{var a=JSON.parse(localStorage.getItem(Se));me(a)}if(null===localStorage.getItem(Ce))localStorage.setItem(Ce,JSON.stringify(fe));else{var n=JSON.parse(localStorage.getItem(Ce));xe(n)}};return Object(n.useEffect)((function(){localStorage.setItem(ve,JSON.stringify(z)),localStorage.setItem(Ne,JSON.stringify(te)),localStorage.setItem(Se,JSON.stringify(ue)),localStorage.setItem(Ce,JSON.stringify(fe))}),[z,te,ue,fe]),Object(o.jsxs)("div",{className:"App",style:{backgroundImage:T?"linear-gradient(rgb(255, 209, 216) 50%, rgb(255, 204, 110))":"linear-gradient(rgb(13, 12, 79) 50%, rgb(81, 145, 219))"},children:[Object(o.jsx)(g,{name:z,isMorning:T}),Object(o.jsx)(d,{onClick:function(e){e.target.classList.contains("flipped")||(ae((function(e){return[].concat(Object(r.a)(e),[e.length+1])})),e.target.classList.add("flipped"),$((function(e){return e+1})),console.log(Z),a.play())},newMorningCards:ue,newNightCards:fe,isMorning:T}),Object(o.jsx)(b,{src:"images/info.png",alt:"info",id:"info-button",onClick:B}),Object(o.jsx)(b,{src:"images/settings.png",alt:"settings",id:"settings-button",onClick:K}),Object(o.jsx)(b,{src:"images/star.png",alt:"star",id:"star-button",onClick:F}),Object(o.jsx)(u,{onClick:B,className:c?"fade-in":"fade-out"}),Object(o.jsx)(m,{onClick:F,className:p?"fade-in":"fade-out",name:z,star:te.length,starDisplay:te.map((function(t){return Object(o.jsx)("img",{className:"star-blink",src:"images/star.png",alt:"star",width:"50",height:"50",style:{position:"absolute",top:ne(e?300:290),left:ne(e?230:870),animationDelay:ne(5)+"s"}},t)}))}),Object(o.jsx)(N,{handleSettingsModal:K,className:M?"fade-in":"fade-out",onChange:function(e){q(e.target.value)},deleteStars:function(){ae([])},saveMorning:pe,handleCheckboxMorning:function(e){if(e.target.checked)ce.push(e.target.id);else if(!e.target.checked){var t=ce.splice(ce.indexOf(e.target.id),1);re(t)}console.log(ce)},saveNight:ke,handleCheckboxNight:function(e){if(e.target.checked)je.push(e.target.id);else if(!e.target.checked){var t=je.splice(je.indexOf(e.target.id),1);de(t)}console.log(je)},value:z,saveName:function(){U(W),q("")},stars:te.length}),Object(o.jsx)(C,{name:z,star:te.length,handleWinnerModal:function(){E((function(e){return!e}))},className:J?"fade-in":"fade-out",isMorning:T})]})};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.44e0a1ee.chunk.js.map
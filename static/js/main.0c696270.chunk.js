(this["webpackJsonpplant-lookup"]=this["webpackJsonpplant-lookup"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),r=n.n(s),l=n(9),i=n.n(l),o=n(13),d=n(6),j=n(3),u=n(14),p=n(0),b=function(){return Object(p.jsxs)("header",{className:"text-center text-light",children:[Object(p.jsxs)("h2",{children:[" ",Object(p.jsx)("span",{style:{color:"#FFAC4A"},children:"Plant"}),Object(p.jsx)("span",{style:{color:"#E9576F"},children:" vs"}),Object(p.jsx)("span",{style:{color:"#BC63D6"},children:" Undead"}),Object(p.jsx)("span",{style:{color:"#FFAC4A"},children:" Hub"})]}),Object(p.jsx)("h6",{children:"Guide for your NFT garden"})]})},m=function(e){var t=e.title,n=e.description,a=e.buttonName,c=e.color,s=e.link;return Object(p.jsxs)("div",{className:"card col-12 col-md-5 col-lg-4 mb-3 p-0 me-2",style:{minHeight:"240px"},children:[Object(p.jsx)("span",{style:{height:"60px"},className:"placeholder col-12 card-img-top bg-".concat(c)}),Object(p.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(p.jsx)("h5",{className:"card-title",children:t}),Object(p.jsx)("p",{className:"card-text",children:n}),Object(p.jsx)(u.b,{className:"btn btn-primary align-self-end mt-auto",to:s,children:a})]})]})},h=function(){return Object(p.jsxs)("div",{className:"row col-10 mx-auto d-flex justify-content-center mt-5",children:[Object(p.jsx)(m,{title:"Plant lookup",description:"Some quick example text to build on the card title and make up the\r bulk of the card's content.",buttonName:"Lookup",color:"warning",link:"/plant-lookup"}),Object(p.jsx)(m,{title:"Garden simulator",description:"Simulate your garden",buttonName:"Simulate",color:"primary",link:"/garden-simulator"})]})},x=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)(h,{})]})},O=n(10);function f(e){return{type:"CHANGE_PLANT",payload:e}}var y=function(){var e=Object(O.c)((function(e){return e.plant})),t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(O.b)();return Object(p.jsxs)("div",{className:"d-flex m-auto",style:{backgroundColor:"#EEEEEE"},children:[Object(p.jsx)("input",{className:"form-control",type:"text",value:c,placeholder:"Plant id",onChange:function(e){return s(e.target.value.trim())}}),Object(p.jsx)("button",{className:"ms-1 btn btn-primary col-3",onClick:function(){s(c),c.match("[0-2]{3}[0-9]{2}[1-3]{1}[0-9]{2}[0-9]{2,6}")?r(f(c)):r(f(""))},children:"Look up"})]})},g=n(20);var E=Object(g.a)({plant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2009039914",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PLANT":return t.payload;default:return e}}}),v=Object(g.b)(E,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),N=n(27),L=[{id:"0",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"1",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"2",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"3",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"4",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"5",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"6",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"7",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"8",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"9",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"10",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"11",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"12",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"13",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"14",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"15",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"16",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"17",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"18",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"19",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"20",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"21",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"22",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"23",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"24",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"25",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"26",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"27",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"28",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"29",element:"Ice",baseLE:[800,850,911,1151],hour:"96",step:"1",type:"Plant"},{id:"30",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"31",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"32",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"33",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"34",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"35",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"36",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"37",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"38",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"39",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"90",element:"Fire",baseLE:[750,1040,1211,1401],hour:"48",step:"5",type:"Mother tree"},{id:"91",element:"Light",baseLE:[1400,1690,1851,2021],hour:"240",step:"5",type:"Mother tree"},{id:"92",element:"Ice",baseLE:[1050,1340,1511,1701],hour:"96",step:"5",type:"Mother tree"},{id:"93",element:"Dark",baseLE:[2600,2890,3061,3201],hour:"216",step:"5",type:"Mother tree"}],P={LE:250,hour:"72",img:"sapling",plantID:"sapling",type:"Sapling"},k={LE:850,hour:"144",img:"mama",plantID:"mama",type:"mama"},w=function(e){if(isNaN(e))return"sapling"===e?P:k;var t=function(e){var t=e.toString().split("");return{id:parseInt("".concat(t[3]).concat(t[4])),img:"".concat(t[5]),rarity:"".concat(t[6]).concat(t[7])}}(e),n=t.id,a=t.img,c=t.rarity,s=Object.assign(function(e){return L.filter((function(t){return t.id==e}))[0]}(n),{img:a,rarity:c,LE:"",plantID:e},function(e){var t="",n="",a=0,c=parseInt(e);return c>=0&&c<=59?(t="Common",a=0,n="#198754"):c>=60&&c<=88?(t="Uncommon",a=1,n="#0d6efd"):c>=89&&c<=98?(t="Rare",a=2,n="#dc3545"):99===c&&(t="Mythic",a=3,n="#6610f2"),{rarityType:t,rarityNum:a,color:n}}(c));s.LE=function(e,t,n,a){var c;switch(t){case 0:c=0;break;case 1:c=60;break;case 2:c=89;break;case 3:c=99}return e[t]+c+(n-c)*a}(s.baseLE,s.rarityNum,s.rarity,s.step);var r=Object(N.a)({},s);return delete r.baseLE,delete r.step,r},F=function(e){return Array.isArray(e)?e.map((function(e){return w(e)})):w(e)},S=function(e){if(59==e||88==e||98==e)return Object(p.jsxs)("p",{children:["(Most value) ",Object(p.jsx)("div",{class:"badge rounded-pill bg-dark tip",children:"?"})]})},D=function(e){return Object(p.jsx)("img",{className:"w-25 h-25 me-4",src:""+"/pvu/assets/img/".concat(e.id,"_").concat(e.imgType,".png"),alt:e.id})},C=function(e){var t=Object(O.c)((function(e){return e.plant})),n=F(t),a=n.img,c=n.id,s=n.color,r=n.rarityType,l=n.rarity,i=n.LE,o=n.type,d=n.element,j=n.hour,u=i/j*.95,b=24*u;return""===t?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{className:"text-center h3 mt-4",children:"Wrong input"})}):Object(p.jsxs)("div",{className:"d-flex m-auto mt-4 justify-content-center",children:[Object(p.jsx)(D,{id:c,imgType:a}),Object(p.jsxs)("div",{className:"ms-3",children:[Object(p.jsxs)("p",{children:["Type: ",o]}),Object(p.jsxs)("p",{children:["Rarity: ",Object(p.jsx)("span",{style:{color:"".concat(s)},children:r})]}),Object(p.jsxs)("p",{children:["Element: ",d]}),Object(p.jsxs)("p",{children:["LE: ",i,"/",j," hours"," ",Object(p.jsx)("span",{style:{color:"".concat(s)},children:S(l)})]}),Object(p.jsxs)("p",{children:["Le por hora: ",e.fixFunc(u,1)," -"," ",e.fixFunc(u/150,1)," PVU (~ ",e.fixFunc(e.price*u/150,2),"$)"]}),Object(p.jsxs)("p",{children:["Le por dia: ",e.fixFunc(b,1)," -"," ",e.fixFunc(b/150,1)," PVU (~ ",e.fixFunc(e.price*b/150,2),"$)"]}),Object(p.jsx)("p",{children:"(include 5% tax)"})]})]})},I=(n(43),n(19)),A=n.n(I);function T(e,t){var n=Math.pow(10,t||0);return String(Math.round(e*n)/n)}var M=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(d.a)(s,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(T(n.data.price,2)),j(A()(n.updated_at).fromNow());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{style:{color:"#EEEEEE"},className:"h1 text-center",children:"Plant Lookup"}),Object(p.jsx)("div",{className:"shadow p-3 mb-2 bg-body rounded col-12 col-md-6 mx-auto fs-6",children:Object(p.jsxs)(O.a,{store:v,children:[Object(p.jsx)(y,{}),Object(p.jsx)(C,{price:n,fixFunc:T})]})}),Object(p.jsxs)("div",{className:"text-light d-flex justify-content-center rate col-12 mx-lg-0",children:[Object(p.jsxs)("div",{className:"p-2 me-2",children:[Object(p.jsx)("p",{children:"PVU token"}),Object(p.jsxs)("p",{children:["Price: ",n,"$"]}),Object(p.jsxs)("p",{children:["Updated ",l]})]}),Object(p.jsxs)("div",{className:"p-2",children:[Object(p.jsx)("p",{children:"Light Energy(LE) rate"}),Object(p.jsx)("p",{children:"1 PVU = 105 LE"}),Object(p.jsx)("p",{children:"150 LE = 1 PVU"}),Object(p.jsx)("p",{children:"(Not include 5% tax)"})]})]}),Object(p.jsx)("div",{className:"mt-3",style:{color:"#FFD369"}}),Object(p.jsxs)("p",{className:"d-none",align:"left",children:[" ",Object(p.jsx)("img",{src:"https://komarev.com/ghpvc/?username=baolongt&label=Profile%20views&color=0e75b6&style=flat",alt:"baolongt"})," "]})]})},_=n(11);n(24),n(45);function U(e,t){var n=Math.pow(10,t||0);return String(Math.round(e*n)/n)}var H=function(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(0),l=Object(d.a)(r,2),j=l[0],u=l[1];Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(U(n.data.price,2)),u(A()(n.updated_at).fromNow());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var b=e.data,m=.95*b.totlaLEPerHour,h=m/150,x=h*c;return Object(p.jsx)("div",{style:{fontSize:"16px"},className:"mt-2 row mx-auto col-12 col-lg-4 text-light d-flex p-3",children:Object(p.jsxs)("div",{style:{minHeight:"100px"},className:"col-12 col-md-10 mx-auto text-start fw-bold",children:[Object(p.jsxs)("p",{children:["LE Por Hora:",Object(p.jsxs)("span",{children:[" ",U(m,2)]})," -"," ",Object(p.jsxs)("span",{style:{color:"#20c997"},children:[U(h,2)," PVU"," "]})," ","~ ",Object(p.jsxs)("span",{style:{color:"#20c997"},children:[U(x,2),"$"]})]}),Object(p.jsxs)("p",{children:["LE por dia:",Object(p.jsxs)("span",{children:[" ",U(24*m,2)]})," -",Object(p.jsxs)("span",{style:{color:"#20c997"},children:[U(24*h,2)," PVU"]})," ","~ ",Object(p.jsxs)("span",{style:{color:"#20c997"},children:[U(24*x,2),"$"]})]}),Object(p.jsx)("p",{className:"fw-normal",children:"(include tax 5%)"}),Object(p.jsxs)("p",{children:["Total: ",b.totalPlant-b.totalSapling-b.totalMama," NFT -"," ",b.totalSapling," sapling, ",b.totalMama," mama"]}),Object(p.jsxs)("p",{children:["PVU = ",c,"$ updated ",j]})]})})},V=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1],r=function(t){e.addPlantFunc(F(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"d-flex m-auto col-10 col-lg-4 mt-3",children:[Object(p.jsx)("input",{className:"form-control",type:"text",value:c,placeholder:"Plant id",onChange:function(e){return s(e.target.value.trim())}}),Object(p.jsx)("button",{className:"ms-1 btn btn-primary col-3",onClick:function(){isNaN(c)||(e.addPlantFunc(F(c)),s(""))},children:"Add"})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-center col-12 col-lg-12 mt-2",children:[Object(p.jsx)("button",{className:"ms-1 btn btn-success col-4 col-md-2 col-lg-1",onClick:function(){return r("sapling")},children:"Adcionar Sappling"}),Object(p.jsx)("button",{className:"ms-1 btn btn-warning col-4 col-md-2 col-lg-1",onClick:function(){return r("mama")},children:"Adcionar Mama"})]})]})},W=function(e){var t=e.data;return Object(p.jsx)("div",{className:"col-lg-3 col-12 mb-2",style:{minHeight:"160px"},children:Object(p.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.2)",minHeight:"100%"},className:"d-flex",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("div",{className:"w-50 h-50 mx-auto mt-3",children:Object(p.jsx)(G,{id:t.id,imgType:t.img})})}),Object(p.jsxs)("div",{className:"col-6 text-white mt-4 pt-1",children:[Object(p.jsx)("p",{className:"text-capitalize",children:t.plantID}),Object(p.jsxs)("p",{children:["LE: ",t.LE,"/",t.hour," hours"]})]}),Object(p.jsx)("div",{className:"col-2 d-flex flex-row-reverse",children:Object(p.jsx)("button",{type:"button",className:"btn-close btn-close-white","aria-label":"Close",onClick:function(){return e.removeFunc(e.index)}})})]})})},$=function(e){var t=e.data;return Object(p.jsx)("div",{className:"col-lg-3 col-12 mb-2",children:Object(p.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.2)",minHeight:"100%"},className:"d-flex",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("div",{className:"w-50 h-50 mx-auto mt-3",children:Object(p.jsx)(G,{id:t.id,imgType:t.img})})}),Object(p.jsxs)("div",{className:"col-6 text-white mt-2",children:[Object(p.jsxs)("p",{children:["ID: ",t.plantID]}),Object(p.jsxs)("p",{children:["Rarity:"," ",Object(p.jsx)("span",{style:{color:"".concat(t.color)},children:t.rarityType})]}),Object(p.jsxs)("p",{children:["LE: ",t.LE,"/",t.hour," hours"]}),Object(p.jsxs)("p",{children:["Element: ",t.element]})]}),Object(p.jsx)("div",{className:"col-2 d-flex flex-row-reverse",children:Object(p.jsx)("button",{type:"button",className:"btn-close btn-close-white","aria-label":"Close",onClick:function(){return e.removeFunc(e.index)}})})]})})},G=function(e){return isNaN(e.id)?Object(p.jsx)("img",{className:"w-100 plant me-4 mt-3",src:""+"/pvu/assets/img/".concat(e.imgType,".png"),alt:e.id}):Object(p.jsx)("img",{className:"w-100 plant me-4 mt-3",src:""+"/pvu/assets/img/".concat(e.id,"_").concat(e.imgType,".png"),alt:e.id})},J=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({totlaLEPerHour:0,totlaLEPerDay:0,totalPlant:0}),r=Object(d.a)(s,2),l=r[0],i=r[1],o=function(e){var t=Object(_.a)(n),a=t.splice(0,e),s=t.splice(e,t.length-1);c([].concat(Object(_.a)(a),Object(_.a)(s))),localStorage.setItem("team",JSON.stringify([].concat(Object(_.a)(a),Object(_.a)(s))))};return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("team"));Array.isArray(e)?c(e):c([])}),[]),Object(a.useEffect)((function(){i(function(e){var t=e.length,n=e.filter((function(e){return"sapling"===e.plantID})).length,a=e.filter((function(e){return"mama"===e.plantID})).length,c=0;return e.forEach((function(e){c+=e.LE/e.hour})),{totalSapling:n,totalMama:a,totlaLEPerHour:c,totlaLEPerDay:24*c,totalPlant:t}}(n))}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"text-light text-center",children:"Garden simulator"}),Object(p.jsx)(V,{addPlantFunc:function(e){if(e){var t=Object(_.a)(n);t.push(e),c(t),localStorage.setItem("team",JSON.stringify(t))}}}),Object(p.jsx)(H,{data:l}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{className:"row mx-auto",style:{minHeight:"160px"},children:n.map((function(e,t){return isNaN(e.plantID)?Object(p.jsx)(W,{data:e,index:t,removeFunc:o},t):Object(p.jsx)($,{data:e,index:t,removeFunc:o},t)}))})]})},R=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.countapi.xyz/hit/baolongt.github.io/PVU-plant-lookup");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.value);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{minHeight:"85vh"},children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/plant-lookup",children:Object(p.jsx)(M,{})}),Object(p.jsx)(j.a,{path:"/garden-simulator",children:Object(p.jsx)(J,{})}),Object(p.jsx)(j.a,{path:"/team-simulator",children:Object(p.jsx)(J,{})}),Object(p.jsx)(j.a,{path:"/",children:Object(p.jsx)(x,{})})]})}),Object(p.jsxs)("div",{className:"text-warning",children:[Object(p.jsxs)("p",{className:"text-center",children:["Visit count: ",n]}),Object(p.jsx)("p",{className:"text-center",children:"contact via telegram @long2401"}),Object(p.jsx)("p",{className:"text-center",children:"Donate 0x4eAA5f182AcA60A9560b480FE737bc7bC9E33fcB (Binance Smart Chain)"})]})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0c696270.chunk.js.map
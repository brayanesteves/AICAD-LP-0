(function(t){function e(e){for(var s,l,n=e[0],c=e[1],o=e[2],u=0,m=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"30f8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("cabecera"),a("navegacion"),a("router-view"),a("footerweb")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navegacion"},[a("header",{staticClass:"header"},[a("div",{staticClass:"container no-padding text-left"},[t._m(0),a("div",{staticClass:"col-lg-1 col-md-1 col-sm-1 col-xs-4 no-padding-left no-padding-right button_menu text-center pull-right"},[a("button",{staticClass:"nav-expander fixed pull-right hidden-xs",attrs:{id:"nav-expander",href:"#"},on:{click:function(e){return e.preventDefault(),t.menuSlider(1,0)}}},[a("i",{staticClass:"fa fa-bars"})]),a("button",{staticClass:"navbar-toggle collapsed nav-expander fixed pull-right",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.menuSlider(1,2)}}},[a("i",{staticClass:"fa fa-bars"})])]),t._m(1),t._m(2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6 col-md-6 col-sm-5 col-xs-7 no-padding-right text-left"},[a("a",{staticClass:"hidden-xs logo-aicad",attrs:{href:"https://www.aicad.es/",title:"AICAD"}},[a("img",{staticClass:"img-responsive pull-left",attrs:{src:"img/comunes/aicad_header.png",alt:"",title:""}})]),a("a",{staticClass:"hidden-xs logo-aicad",attrs:{href:"http://www.aicad.es/",title:"AICAD"}},[a("img",{staticClass:"img-responsive logo-aicad pull-left",attrs:{src:"img/comunes/pc_header.png",alt:"",title:""}})]),a("div",{staticClass:"col-xs-12 visible-xs"},[a("a",{attrs:{href:"https://www.aicad.es/",title:"AICAD"}},[a("img",{staticClass:"img-responsive",attrs:{src:"img/comunes/aicad_header.png",alt:"",title:""}})])]),a("div",{staticClass:"col-xs-12 visible-xs"},[a("a",{attrs:{href:"http://www.aicad.es/",title:"AICAD"}},[a("img",{staticClass:"img-responsive logo-aicad hidden-xs",attrs:{src:"img/comunes/pc_header.png",alt:"",title:""}}),a("img",{staticClass:"img-responsive logo-icad hidden-sm hidden-md hidden-lg",attrs:{src:"img/comunes/pc_header.png",alt:"",title:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-5 col-md-5 col-sm-6 col-xs-5 no-padding-right no-padding-left"},[a("ul",{staticClass:"navbar-nav nav pull-right top_links"},[a("li",{staticClass:"hidden-xs"},[a("a",[t._v("Síguenos")])]),a("li",{staticClass:"hidden-xs"},[a("a",{attrs:{href:"https://twitter.com/abusinessschool",title:"Twitter AICAD"}},[a("i",{staticClass:"fab fa-twitter-square"})])]),a("li",{staticClass:"hidden-xs"},[a("a",{attrs:{href:"https://www.facebook.com/AICADBUSINESSSCHOOL/",title:"Facebook AICAD"}},[a("i",{staticClass:"fab fa-facebook-square"})])]),a("li",{staticClass:"hidden-xs"},[a("a",{attrs:{href:"https://plus.google.com/+AicadEslaspalmas/about",title:"Google pluss AICAD"}},[a("i",{staticClass:"fab fa-google-plus-square"})])]),a("li",{staticClass:"hidden-xs"},[a("a",{attrs:{href:"https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw",title:"Youtube AICAD"}},[a("i",{staticClass:"fab fa-youtube-square"})])]),a("li",{staticClass:"hidden-xs"},[a("a",{attrs:{href:"https://www.instagram.com/aicad/",title:"Instagram AICAD"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("li",{staticClass:"hidden"},[a("a",{attrs:{href:"",title:""}},[t._v("ES")])]),a("li",{staticClass:"margin-left"},[a("a",{attrs:{href:"/aicad/"}},[t._v("ES")])]),a("li",[a("span",[t._v("|")])]),a("li",{staticClass:"last"},[a("a",{attrs:{href:""}},[t._v("EN")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 menu_movil hidden-sm hidden-md hidden-lg"},[a("nav",{staticClass:"navbar-default",attrs:{role:"navigation"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"visible-xs active"},[a("a",{attrs:{href:"/aicad/",title:""}},[t._v("Inicio")])]),a("li",{staticClass:"visible-xs"},[a("a",{attrs:{href:"/aicad/acceso-miembros",title:""}},[a("u",[t._v("Acceso miembros")])])]),a("li",{staticClass:"visible-xs "},[a("a",{attrs:{href:"/aicad/faqs",title:""}},[t._v("Faq´s")])]),a("li",{staticClass:"dropdown",attrs:{cursor:"pointer"}},[a("a",{staticClass:"dropdown-toggle "},[t._v("¿QUÉ ES?")]),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"/aicad/que-es/informacion"}},[t._v("INFORMACIÓN")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/ventajas-de-participar"}},[t._v("VENTAJAS DE PARTICIPAR")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/metodo-de-competicion"}},[t._v("MÉTODO DE COMPETICIÓN")])]),a("li",[a("a",{attrs:{target:"_blank",href:""}},[t._v("BASES")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/empresas-colaboradoras"}},[t._v("EMPRESAS COLABORADORAS")])])])]),a("li",[a("a",{attrs:{href:"/aicad/quienes-pueden-participar",title:""}},[t._v("¿QUIÉNES PUEDEN PARTICIPAR?")])]),a("li",{staticClass:"dropdown",attrs:{cursor:"pointer"}},[a("a",{staticClass:"dropdown-toggle "},[t._v("¿CÓMO PARTICIPAR?")]),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"/aicad/como-participar/informacion"}},[t._v("INFORMACIÓN")])]),a("li",[a("a",{attrs:{href:"/aicad/como-participar/fases-de-la-competicion"}},[t._v("FASES")])])])]),a("li",[a("a",{attrs:{href:"/aicad/los-premios",title:""}},[t._v("LOS PREMIOS")])]),a("li",[a("a",{attrs:{href:"/aicad/global-experience",title:""}},[t._v("GLOBAL EXPERIENCE")])]),a("li",{staticClass:"inscribete "},[a("a",{attrs:{href:"/aicad/inscribete",title:""}},[t._v("INSCRÍBETE"),a("img",{attrs:{src:""}})])]),a("li",{staticClass:"last "},[a("a",{attrs:{href:"/aicad/sobre-aicad",title:""}},[t._v("SOBRE AICAD")])])])])])])])}],c={name:"navegacion",data:function(){return{Activar:!1}},methods:{menuSlider:function(t,e){var a;switch(t){case 0:break;case 1:switch(e){case 0:document.getElementById("nav-expander"),a=(innerWidth-document.getElementsByClassName(".container").width)/2+document.getElementsByClassName(".nav-expander").width,a>100&&(document.querySelector("body").getAttribute("class")==document.getElementsByClassName("nav-expanded")?document.querySelector(".nav-menu").setAttribute("style","width:-20em"):document.querySelector(".nav-menu").getAttribute("style","width:"+a+"px")),document.querySelector("body").classList.toggle("nav-expanded");break;case 1:document.getElementById("nav-close"),document.querySelector("body").classList.remove("nav-expanded"),document.querySelector("body").removeAttribute("class"),document.querySelector("body").getAttribute("style","width:-20em");break;case 2:1==this.Activar?(this.Activar=!1,document.querySelector("#bs-example-navbar-collapse-1").classList.add("collapse")):(this.Activar=!0,document.querySelector("#bs-example-navbar-collapse-1").classList.remove("collapse"));break;default:alert("Opción inexistente");break}break}}}},o=c,d=a("2877"),u=Object(d["a"])(o,l,n,!1,null,"415b37e2",null),m=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu"}},[a("nav",{staticClass:"nav-menu hidden-xs"},[a("ul",{staticClass:"list-unstyled main-menu"},[a("li",{staticClass:"text-right first"},[a("a",{attrs:{href:"",id:"nav-close"},on:{click:function(e){return e.preventDefault(),t.menuSlider(1,1)}}},[a("i",{staticClass:"fa fa-times"})])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown"},[a("a",{attrs:{href:""}},[t._v("¿QUÉ ES?")]),a("ul",[a("li",[a("a",{attrs:{href:"/aicad/que-es/informacion"}},[t._v("INFORMACIÓN")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/ventajas-de-participar"}},[t._v("VENTAJAS DE PARTICIPAR")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/metodo-de-competicion"}},[t._v("MÉTODO DE COMPETICIÓN")])]),a("li",[a("a",{attrs:{target:"_blank",href:"archivos/pdf/bases_competicion_GMKC_2019.pdf"}},[t._v("BASES")])]),a("li",[a("a",{attrs:{href:"/aicad/que-es/empresas-colaboradoras"}},[t._v("EMPRESAS COLABORADORAS")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/aicad/quienes-pueden-participar",title:""}},[t._v("¿QUIÉNES PUEDEN PARTICIPAR?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown"},[a("a",[t._v("¿CÓMO PARTICIPAR?")]),a("ul",[a("li",[a("a",{attrs:{href:"/aicad/como-participar/informacion"}},[t._v("INFORMACIÓN")])]),a("li",[a("a",{attrs:{href:"/aicad/como-participar/fases-de-la-competicion"}},[t._v("FASES")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/aicad/los-premios",title:""}},[t._v("LOS PREMIOS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/aicad/global-experience",title:""}},[t._v("GLOBAL EXPERIENCE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"inscribete"},[a("a",{attrs:{href:"/aicad/inscribete",title:""}},[t._v("\n          INSCRÍBETE\n          "),a("img",{attrs:{src:"img/comunes/marca_inscribete.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/aicad/sobre-aicad",title:""}},[t._v("SOBRE AICAD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"last"},[a("a",{attrs:{href:"/aicad/contactanos",title:" Contáctanos"}},[t._v("CONTÁCTANOS")])])}],p={name:"menu0",methods:{menuSlider:function(t,e){var a;switch(t){case 0:break;case 1:switch(e){case 0:document.getElementById("nav-expander"),a=(innerWidth-document.getElementsByClassName(".container").width)/2+document.getElementsByClassName(".nav-expander").width,a>100&&(console.log(document.querySelector("body").getAttribute("class")),document.querySelector("body").getAttribute("class")==document.getElementsByClassName("nav-expanded")?document.querySelector(".nav-menu").setAttribute("style","width:-20em"):document.querySelector(".nav-menu").getAttribute("style","width:"+a+"px")),document.querySelector("body").classList.toggle("nav-expanded");break;case 1:document.getElementById("nav-close"),document.querySelector("body").classList.remove("nav-expanded"),document.querySelector("body").removeAttribute("class"),document.querySelector("body").getAttribute("style","width:-20em");break}break}}}},h=p,g=Object(d["a"])(h,f,v,!1,null,null,null),C=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerweb"},[a("footer",[a("div",{staticClass:"footer"},[t._m(0),a("svg",{staticClass:"kampas",staticStyle:{"background-color":"#f3f3f3","margin-bottom":"20px",height:"100px",width:"100%",transform:"scale(1, -1)"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"white",points:"0,100 100,0 0,0"}})]),a("a",{staticClass:"angleUp"},[a("svg",{staticClass:"doubleUpIcon svg-inline--fa fa-angle-double-up fa-w-10",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-double-up",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[a("path",{attrs:{"data-v-3f5dbf4e":"",fill:"currentColor",d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"}})])]),t._m(1)])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainFooter"},[a("div",{staticClass:"container container-footer"},[a("div",{staticClass:"col-6 col-lg-4 footThreeCols oficinas"},[a("div",[a("div",{staticClass:"d-flex"},[a("h1",[a("img",{attrs:{src:"img/iconos/office.png",alt:""}}),t._v(" Oficinas\n                ")])]),a("div",{staticClass:"col-6 col-lg-6",staticStyle:{display:"inline-block"}},[a("ul",{staticClass:"officinas"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/granada/"}},[t._v("Granada")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/malaga/"}},[t._v("Málaga")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/valladolid/"}},[t._v("Valladolid")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/larioja/"}},[t._v("La Rioja")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/alicante/"}},[t._v("Alicante")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/coruna/"}},[t._v("Coruña")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/barcelona/"}},[t._v("Barcelona")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/lugones/"}},[t._v("Lugones-Asturias")])])])]),a("div",{staticClass:"col-6 col-lg-6",staticStyle:{display:"inline-block"}},[a("ul",{staticClass:"officinas"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/tenerife/"}},[t._v("Tenerife")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicadbilbao.com/"}},[t._v("Bilbao")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/castellon/"}},[t._v("Castellón")])]),a("li",[a("a",{attrs:{target:"_blank",href:"http://www.aicad-madrid.es/"}},[t._v("Madrid Juan-Bravo")])]),a("li",[a("a",{attrs:{target:"_blank",href:"http://www.aicad.do/"}},[t._v("Rep. Dominicana")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/cuenca/"}},[t._v("Cuenca")])]),a("li",[a("a",{attrs:{target:"_blank",href:"http://aicad.cr/"}},[t._v("Costa Rica")])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/madrid/"}},[t._v("Madrid")])])])])])]),a("div",{staticClass:"col-lg-4 footThreeCols noSmallCall"},[a("div",{staticStyle:{height:"100px"}})]),a("div",{staticClass:"col-10 col-sm-6 col-md-6 col-lg-4 footThreeCols contacts",staticStyle:{"text-align":"left","vertical-align":"top"}},[a("div",{staticClass:"footerCols",staticStyle:{"margin-right":"0px"},attrs:{id:"contactCol"}},[a("div",[a("a",{attrs:{target:"_blank",href:"https://twitter.com/abusinessschool"}},[a("i",{staticClass:"fab fa-twitter twitter socialIcon"})]),a("a",{attrs:{target:"_blank",href:"https://www.facebook.com/AICADBUSINESSSCHOOL/"}},[a("i",{staticClass:"fab fa-facebook facebook socialIcon"})]),a("a",{attrs:{target:"_blank",href:"https://es.linkedin.com/school/aicad-business-school/"}},[a("i",{staticClass:"fab fa-linkedin linkedin socialIcon"})]),a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw"}},[a("i",{staticClass:"fab fa-youtube youtube socialIcon"})])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+5218112593552"}},[t._v("+5218112593552")]),a("span",[t._v("MÉXICO")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+18496242332"}},[t._v("849 624 2332")]),a("span",[t._v("REPÚBLICA DOMINICANA")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:5023315492"}},[t._v("+502 33154792")]),a("span",[t._v("GUATEMALA")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+593983062916"}},[t._v("+593 98 306 2916")]),a("span",[t._v("ECUADOR")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+50660287700"}},[t._v("+506 6028 7700")]),a("span",[t._v("COSTA RICA")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+390256569394"}},[t._v("+39 02 5656 9394")]),a("span",[t._v("ITALIA")])]),a("div",{staticClass:"phoneDiv"},[a("a",{staticClass:"footerNumber",attrs:{href:"tel:+4915773344100"}},[t._v("+49 15 77 33 44 100")]),a("span",[t._v("ALEMANIA")])]),a("div",{staticClass:"btnEnviar formPie"},[a("a",{attrs:{href:"#formulario"}},[t._v("\n                  Contacto\n                  "),a("i",{staticClass:"fa fa-phone"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subFooter"},[a("div",{staticClass:"beforeFooterEnd",staticStyle:{"margin-bottom":"30px"}},[a("div",{staticStyle:{width:"50%",margin:"auto"}},[a("div",{staticClass:"twoCols"},[a("div",{staticClass:"title-effect"},[a("span",{staticClass:"first",staticStyle:{display:"block","text-transform":"uppercase",color:"#333","font-size":"36px","line-height":"25px"}},[t._v("Get")]),a("div",{staticClass:"rw-words rw-words-1",staticStyle:{"letter-spacing":"normal",color:"#333","text-transform":"uppercase","font-weight":"700","line-height":"44px","font-size":"48px",display:"inline"}},[a("span",{staticStyle:{position:"absolute","animation-delay":"0s"}},[t._v("more")]),a("span",{staticStyle:{position:"absolute","animation-delay":"2s"}},[t._v("the best")]),a("span",{staticStyle:{position:"absolute","animation-delay":"4s"}},[t._v("the best")])]),a("hr",{staticStyle:{"margin-top":"25px",visibility:"hidden","margin-bottom":"0px"}}),a("span",{staticClass:"title-effect-sub",staticStyle:{"line-height":"2.4em","font-size":"22px","text-transform":"lowercase",color:"#666","font-weight":"400","white-space":"nowrap"}},[t._v("of human talent")])])]),a("div",{staticClass:"twoCols",staticStyle:{"text-align":"right"}},[a("img",{attrs:{src:"img/assets/footLogos.png"}})])])]),a("div",{staticClass:"footerEnd"},[a("div",{staticStyle:{width:"60%",margin:"auto",display:"flex","flex-wrap":"wrap"}},[a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/aviso-legal-privacidad/"}},[t._v("Política de privacidad")]),a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/delegaciones/"}},[t._v("Delegaciones")]),a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/condiciones-de-contratacion/"}},[t._v("Condiciones generales")]),a("a",{attrs:{target:"_blank",href:"https://www.aicad.es/politica-de-cookies/"}},[t._v("Política de cookies")])])])])}],w={components:{}},A=w,E=(a("67ec"),Object(d["a"])(A,_,b,!1,null,"722e92dc",null)),S=E.exports,y={name:"app",components:{cabecera:m,navegacion:C,footerweb:S}},x=y,I=(a("034f"),Object(d["a"])(x,i,r,!1,null,null,null)),O=I.exports,D=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-center"},[a("section0"),a("div",{staticClass:"inscribete_home"},[a("div",{staticClass:"seccion_tiempo"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"countdown text-center",attrs:{id:"countdown"}},[a("ul",t._l(t.times,function(e,s){return a("li",{key:s},[a("p",{class:e.class_},[t._v(t._s(e.time))]),a("p",{class:e._class},[t._v(t._s(e.text))])])}),0)])])])])])])],1)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 text-center countdown-anuncio"},[a("h3",[t._v("\n                AICAD BUSINESS SCHOOL TE ABRE LAS PUERTAS\n                "),a("br"),a("span",[t._v("A PRÁCTICAS EN EMPRESAS ALREDEDOR DEL MUNDO")])]),a("p",{staticClass:"texto text-center"},[t._v("EMPIEZA EN")])])}],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner_principal"},[a("div",{staticClass:"slideshow"}),a("div",{staticClass:"content",on:{"&scroll":function(e){return t.mediaQueries()}}},[a("div",{staticClass:"cont_logo"},[a("div",{staticClass:"container"},[a("div",{staticClass:"col-xs-12 col-sm-3 col-md-4 col-lg-4 no-padding hidden-xs logo_aicad"},[a("img",{staticClass:"img-responsive pull-left",attrs:{src:"img/home/aicad.png",alt:"AICAD",title:"AICAD"}})]),a("div",{staticClass:"col-xs-12 col-sm-3 col-md-4 col-lg-4 no-padding visible-xs logo_aicad"},[a("img",{staticClass:"img-responsive",staticStyle:{"margin-top":"75px"},attrs:{src:"img/home/aicad.png",alt:"AICAD",title:"AICAD"}})])])]),t._m(0),t._m(1),t._m(2)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 text-center"},[a("h1",[t._v("\n            PRACTICAS EN EMPRESAS\n            "),a("br"),t._v("Prácticas en empresas\n            "),a("strong",[a("span",[t._v("Madrid")])])])])]),a("div",{staticClass:"row cont_circulos text-center"},[a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("+10000")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("ALUMNOS")])])]),a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("+2500")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("EMPRESAS")])])]),a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("200")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("\n                UNIVERSIDADES\n                "),a("br"),t._v("EN EUROPA\n              ")])])]),a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("5")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("CONTINENTES")])])]),a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("120")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("PAISES")])])]),a("li",{staticClass:"circulo"},[a("p",[a("strong",[t._v("15000")]),a("br"),a("span",{staticClass:"descripcion"},[t._v("PROGRAMAS")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seccion_gaming"},[a("div",{staticClass:"container"},[a("h2",[t._v("¿Buscas oportunidades de formación con prácticas en empresas?")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"participar text-center"},[a("div",{staticClass:"container"},[a("a",{staticClass:"btn btn-default",attrs:{href:"/aicad/inscribete",title:""}},[t._v("QUIERO MATRICULARME AHORA")])])])}],M={name:"section0",methods:{mediaQueries:function(){if(innerWidth<=414){for(var t=document.getElementsByClassName("elementos"),e=document.getElementsByClassName("item"),a=0;a<t.length;a++)t[a].classList.remove("slider"),t[a].classList.add("slider-movil");for(a=0;a<e.length;a++)e[a].classList.remove("slide"),e[a].classList.add("slide-movil")}else{for(t=document.getElementsByClassName("elementos"),e=document.getElementsByClassName("item"),a=0;a<t.length;a++)t[a].classList.remove("slider-movil"),t[a].classList.add("slider");for(a=0;a<e.length;a++)e[a].classList.remove("slide-movil"),e[a].classList.add("slide")}}},created:function(){window.addEventListener("resize",this.mediaQueries()),this.mediaQueries()},destroyed:function(){window.addEventListener("resize",this.mediaQueries())}},T=M,L=(a("cd97"),Object(d["a"])(T,N,P,!1,null,"1346c1e1",null)),B=L.exports,q={name:"inicio",components:{section0:B},data:function(){return{empresa:"AICAD",deadline:"",Fecha:new Date,startTime:String((new Date).getMonth()+" "+(new Date).getDay()+", "+(new Date).getFullYear()+" 23:18:59"),endTime:"10 01, 2019 23:18:53",times:[{id:0,class_:"days",_class:"timeRefDays",text:"Días",time:1},{id:1,class_:"hours",_class:"timeRefHours",text:"Horas",time:1},{id:2,class_:"minutes",_class:"timeRefMinutes",text:"Min",time:1},{id:3,class_:"seconds",_class:"timeRefSeconds",text:"Seg",time:1}],progress:100,timeinterval:void 0}},methods:{updateTimer:function(){this.times[3].time>0||this.times[2].time>0||this.times[1].time>0||this.times[0].time>0?(this.getTimeRemaining(),this.updateProgressBar()):(clearTimeout(this.timeinterval),this.progress=0)},getTimeRemaining:function(){var t=Date.parse(new Date(this.endTime))-Date.parse(new Date);t>=0?(this.times[3].time=Math.floor(t/1e3%60),this.times[2].time=Math.floor(t/1e3/60%60),this.times[1].time=Math.floor(t/36e5%24),this.times[0].time=Math.floor(t/864e5)):(this.times[3].time=this.times[2].time=this.times[1].time=this.times[0].time=0,this.progress=0)},updateProgressBar:function(){var t=Date.parse(new Date(this.startTime)),e=Date.parse(new Date),a=Date.parse(new Date(this.endTime)),s=parseFloat((e-t)/(a-t)*100).toFixed(2);this.progress=100-s}},created:function(){this.updateTimer(),this.timeinterval=setInterval(this.updateTimer,1e3)}},U=q,$=(a("f9dd"),Object(d["a"])(U,k,R,!1,null,"e65fd58a",null)),j=$.exports;s["a"].use(D["a"]);var F=new D["a"]({mode:"history",base:"/",routes:[{path:"/",name:"inicio",component:j}]}),Q=a("ecee"),G=a("c074"),z=a("ad3d");Q["c"].add(G["a"]),s["a"].component("font-awesome-icon",z["a"]),s["a"].config.productionTip=!1,new s["a"]({router:F,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,a){},"67ec":function(t,e,a){"use strict";var s=a("30f8"),i=a.n(s);i.a},7522:function(t,e,a){},cd97:function(t,e,a){"use strict";var s=a("feee"),i=a.n(s);i.a},f9dd:function(t,e,a){"use strict";var s=a("7522"),i=a.n(s);i.a},feee:function(t,e,a){}});
//# sourceMappingURL=app.685907b0.js.map
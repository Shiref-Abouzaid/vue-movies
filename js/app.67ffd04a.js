(function(e){function t(t){for(var c,a,i=t[0],u=t[1],l=t[2],f=0,b=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2276:function(e,t,n){"use strict";n("b36e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["f"])("h1",null,[Object(c["f"])("span",null,"Vue"),Object(c["e"])(" Movies ")],-1),o=Object(c["f"])("footer",null,[Object(c["f"])("p",null,[Object(c["e"])("Sherif AbouZaid © "),Object(c["f"])("a",{href:"https://github.com/Shiref-Abouzaid",target:"_blank"},"Github")])],-1);function a(e,t){var n=Object(c["u"])("router-link"),a=Object(c["u"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["f"])("header",null,[Object(c["f"])(n,{to:"/"},{default:Object(c["A"])((function(){return[r]})),_:1})]),Object(c["f"])(a),o],64)}n("d070");const i={};i.render=a;var u=i,l=n("6c02"),s=(n("ac1f"),n("841c"),{class:"home"}),f={class:"feature-card"},b=Object(c["f"])("img",{src:"https://images-na.ssl-images-amazon.com/images/I/41lptS8kIjL._AC_.jpg",alt:"bojack horseman poster",class:"featured-img"},null,-1),p=Object(c["f"])("div",{class:"detail"},[Object(c["f"])("h3",null,"Bojack Horseman"),Object(c["f"])("p",null,"Anime Poster BoJack Horseman BoJack Poster Decorative Painting Canvas Wall Art Living Room Posters Bedroom Painting")],-1),j=Object(c["f"])("input",{type:"submit",value:"Search"},null,-1),O={class:"movies-list"},d={class:"product-image"},v={class:"detail"},m={class:"year"};function h(e,t,n,r,o,a){var i=Object(c["u"])("router-link");return Object(c["p"])(),Object(c["d"])("div",s,[Object(c["f"])("div",f,[Object(c["f"])(i,{to:"/movie/tt3398228"},{default:Object(c["A"])((function(){return[b,p]})),_:1})]),Object(c["f"])("form",{onSubmit:t[2]||(t[2]=Object(c["C"])((function(){return r.searchMovies&&r.searchMovies.apply(r,arguments)}),["prevent"])),class:"search-box"},[Object(c["B"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e}),placeholder:"What are you looking for?"},null,512),[[c["y"],r.search]]),j],32),Object(c["f"])("div",O,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["t"])(r.movies,(function(e){return Object(c["p"])(),Object(c["d"])("div",{class:"movie",key:e.imdbID},[Object(c["f"])(i,{clas:"movie-link",to:"/movie/".concat(e.imdbID)},{default:Object(c["A"])((function(){return[Object(c["f"])("div",d,[Object(c["f"])("img",{src:e.Poster,alt:e.Title},null,8,["src","alt"])]),Object(c["f"])("div",v,[Object(c["f"])("p",m,Object(c["w"])(e.Year),1),Object(c["f"])("h3",null,Object(c["w"])(e.Title),1)])]})),_:2},1032,["to"])])})),128))])])}n("d3b7"),n("99af");var y={apikey:"1a92642a"},g={name:"Home",setup:function(){var e=Object(c["s"])(""),t=Object(c["s"])([]),n=function(){""!=e.value&&fetch("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(y.apikey,"&s=").concat(e.value)).then((function(e){return e.json()})).then((function(n){t.value=n.Search,e.value=""}))};return{search:e,movies:t,searchMovies:n}}};n("2276");g.render=h;var w=g,k={class:"movie-details"},P={class:"year"};function _(e,t,n,r,o,a){return Object(c["p"])(),Object(c["d"])("div",k,[Object(c["f"])("h2",null,Object(c["w"])(r.movie.Title),1),Object(c["f"])("p",P,Object(c["w"])(r.movie.Year),1),Object(c["f"])("img",{src:r.movie.Poster,alt:r.movie.Title,class:"featured-image"},null,8,["src","alt"]),Object(c["f"])("p",null,Object(c["w"])(r.movie.Plot),1)])}var S={setup:function(){var e=Object(c["s"])({}),t=Object(l["c"])();return Object(c["m"])((function(){fetch("http://www.omdbapi.com/?apikey=".concat(y.apikey,"&i=").concat(t.params.id,"&plot=full")).then((function(e){return e.json()})).then((function(t){e.value=t}))})),{movie:e,route:t}}};n("82c4");S.render=_;var M=S,x=[{path:"/",name:"Home",component:w},{path:"/movie/:id",name:"Movie",component:M}],A=Object(l["a"])({history:Object(l["b"])("/"),routes:x}),T=A;Object(c["c"])(u).use(T).mount("#app")},"79d5":function(e,t,n){},"82c4":function(e,t,n){"use strict";n("cf23")},b36e:function(e,t,n){},cf23:function(e,t,n){},d070:function(e,t,n){"use strict";n("79d5")}});
//# sourceMappingURL=app.67ffd04a.js.map
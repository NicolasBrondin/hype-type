(function(e){function t(t){for(var i,o,u=t[0],c=t[1],l=t[2],a=0,p=[];a<u.length;a++)o=u[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.is_ended?e._e():n("div",{staticStyle:{width:"100%",position:"relative"}},[n("h1",[e._v("Tape ces mots le plus vite possible")]),n("h2",[e._v(e._s(e.time/1e3)+"s")]),n("input",{attrs:{id:"main-input",type:"text"},domProps:{value:e.user_text},on:{input:function(t){e.user_text=t.target.value}}}),n("p",[e._v(e._s(e.user_text)),n("span",[e._v(e._s(e.to_be_written))])])]),e.is_ended?n("h1",[e._v("Jeu terminé en "+e._s(e.time/1e3)+"s, "),n("br"),e._v(" belle journée à toi !")]):e._e()])},s=[],o=(n("c975"),n("ac1f"),n("1276"),{name:"App",data:function(){return{sentences:["je suis une belle personne.","aujourd'hui est une bonne journée.","j'ai le droit au bohneur.","je mérite les bonnes choses qui m'arrivent.","je vais surmonter les obstacles de la vie.","je fais de mon mieux.",":)"],word:null,sentence_index:0,word_index:0,user_text:"",timer:null,time:0,is_ended:!1}},mounted:function(){this.word=this.sentences[this.sentence_index].split(" ")[this.word_index],setTimeout((function(){document.querySelector("#main-input").click(),document.querySelector("#main-input").focus(),document.body.ontouchend=function(){document.querySelector("#main-input").click(),document.querySelector("#main-input").focus()}}),100),document.querySelector("#main-input").addEventListener("blur",(function(){setTimeout((function(){document.querySelector("#main-input").click(),document.querySelector("#main-input").focus()}),0)})),this.timer=setInterval(function(){this.time+=100}.bind(this),100)},computed:{to_be_written:function(){return this.word?this.word.substr(this.user_text.length):""}},watch:{user_text:function(){console.log(this.user_text),this.user_text=this.user_text.toLowerCase(),0!==this.word.toLowerCase().indexOf(this.user_text)?this.user_text=this.user_text.substr(0,this.user_text.length-1):0===this.word.indexOf(this.user_text)&&this.word.length===this.user_text.length&&(this.word_index===this.sentences[this.sentence_index].split(" ").length-1&&(this.sentence_index===this.sentences.length-1?(this.is_ended=!0,clearInterval(this.timer)):(this.sentence_index++,this.word_index=-1)),this.word=this.sentences[this.sentence_index].split(" ")[++this.word_index],this.user_text="")}},components:{}}),u=o,c=(n("034f"),n("2877")),l=Object(c["a"])(u,r,s,!1,null,null,null),d=l.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.91177a41.js.map
!function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";var t=n(1),r=n(5),u=n(6),s=n(7),i=n(8),o=n(9),c=n(10);n(11);var l=document.querySelector(".input-text"),h=document.querySelector(".output-container"),p={chandasOutput:h.querySelector(".chandas > p"),chandasTypeOutput:h.querySelector(".chandas-type > p"),examplesOutput:h.querySelector(".examples > div"),ganasCountOutput:h.querySelector(".ganas-count > p"),ganasOutput:h.querySelector(".ganas > p"),output:h,syllablesCountOutput:h.querySelector(".syllables-count > p")},d={notify:(0,u.notifier)(".alert-box"),vc:(0,s.vChandas)(),vtranslit:(0,i.vTranslit)([o.vTranslitSchemeDeva,c.vTranslitSchemeItrn])};(0,r.initEventListeners)(l,(0,t.handleOutput)(p,d))},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleOutput=void 0;var t=n(2),r=n(3),u=n(4);e.handleOutput=function(a,e){return function(n){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a.output,o=e.notify,c=e.vc,l=e.vtranslit,h=function(a,e){var n=a.chandasTypeOutput,s=a.chandasOutput,i=a.examplesOutput,o=a.ganasCountOutput,c=a.ganasOutput,l=a.output,h=a.syllablesCountOutput,p=e.vtranslit.init("Itrn","Deva");return function(a){var e=(0,r.getChandasDetails)(a);o.innerHTML=p((0,u.getGanasCount)(a.matras.split(",")).join(",")),h.innerHTML=p(a.syllables.length.toString()),n.innerHTML=p(e.type),s.innerHTML=p(e.name),e.examples.forEach(function(a){i.innerHTML+="<p>"+p(a)+"</p>"}),c.innerHTML="",c.appendChild((0,t.createTable)([["names",p(a.ganas.ganas).split(",")],["matras",(0,t.makeChunks)(p(a.matras).split(","),3)],["syllables",(0,t.makeChunks)(p(a.syllables).split(","),3)]])),l.style.display="block"}}(a,e),p=l.find(n),d=c("Deva"===p?l.init(p,"Itrn")(n):n,s);d.syllables.length?h(d):(i.style.display="none",o("Please enter proper devanagari character(s) only."))}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createTable=function(a){var e=document.createElement("table"),n=document.createElement("tbody");return a.forEach(function(a){var e=document.createElement("tr");a[1].forEach(function(n){var t=document.createElement("td");t.appendChild(document.createTextNode(n)),e.classList.add(a[0]),e.appendChild(t)}),n.appendChild(e)}),e.appendChild(n),e},e.makeChunks=function(a,e){for(var n=[],t=0,r=a.length;t<r;t+=e)n.push(a.slice(t,t+e).join(","));return n}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getChandasDetails=function(a){var e=a.chandas;return e||{examples:[],name:"Chandas na upalabdhaH",type:"-"}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getGanasCount=function(a){return[Math.floor(a.length/3),a.length%3]}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.initEventListeners=function(a,e){var n=document.querySelector(".ignoreLastLaghuCB");a.addEventListener("keydown",function(t){13===t.keyCode&&""!==a.value&&e(a.value,n.checked)})}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a){return function(){a.innerHTML="",a.style.display="none"}};e.notifier=function(a){return function(a){return function(e){a.innerHTML="<b>{!} Error: </b>"+e,a.style.display="block",setTimeout(t(a),5e3)}}(document.querySelector(a))}},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.vChandas=void 0;var t=n(1),r=n(2),u=n(3),s=n(4),i=n(5),o=n(6),c=n(7),l=n(8),h=n(10),p=n(11);e.vChandas=function(){var a=(0,l.prepareChandasList)(),e=(0,c.makeSchemeTree)(p.vTranslitSchemeItrn),n=e.schemeTree,d=e.maxTokenLength;return function(e){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=(0,h.vTokenize)((0,t.cleanString)(e),d,(0,i.getSliceDetails)(n)),p=(0,t.removeSpaces)(l),f=(0,o.getSyllables)(p),m=(0,s.getMatras)(p,c),y=(0,r.getGanas)(m),v=(0,r.makeGanasKey)(y);return{chandas:(0,u.getChandas)(v,a),ganas:y,ganasKey:v,matras:m.join(","),syllables:f.join(",")}}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cleanString=function(a){return a.slice(0).trim().replace(/\s\s*/g," ")},e.removeSpaces=function(a){return a.filter(function(a){return"space"!==a.type})}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={"ga,ga,ga":"ma","ga,ga,la":"ta","ga,la,ga":"ra","ga,la,la":"bha","la,ga,ga":"ya","la,ga,la":"ja","la,la,ga":"sa","la,la,la":"na"};e.getGanas=function(a){var e=[],n="";return function(a){for(var e=[],n=0,t=a.length;n<t;n+=3)e.push(a.slice(n,n+3).join(","));return e}(a).forEach(function(a){var r=t[a];r?e.push(r):n=a}),{ganas:e.join(","),looseMatras:n}},e.makeGanasKey=function(a){return a.ganas.length&&a.looseMatras?a.ganas+"|"+a.looseMatras:""+a.ganas+a.looseMatras}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getChandas=function(a,e){var n=e[a];return n||null}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a){var e=[];return a.forEach(function(a){"unknown"!==a.type&&e.push(function(a){var e={ayogavaha:3,deadConsonants:0,symbols:-1,vowels:2}[a.type];return"vowels"===a.type&&["a","i","u","RRi","LLi"].includes(a.akshara)&&(e=1),Object.assign({},a,{matra:e})}(a))}),e};e.getMatras=function(a,e){var n=[],r=t(a);return e&&(r[r.length-1].matra=2),r.forEach(function(a,e){var t=function(a,e){return e>0?a[e-1]:{matra:null,type:"strStart"}}(r,e),u=function(a,e){return e<a.length-1?a[e+1]:{matra:null,type:"strEnd"}}(r,e),s=function(a){return a.length?a.length-1:0}(n);(function(a,e,n){return 0===e.matra&&"vowels"===a.type&&(0===n.matra||"strEnd"===n.type)||3===e.matra})(t,a,u)&&(n[s]="ga"),1===a.matra?n.push("la"):2===a.matra&&n.push("ga")}),n}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getSliceDetails=function(a){return function(e){var n=a[e];return n||(" "===e?{akshara:e,type:"space"}:{akshara:"",type:"unknown"})}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getSyllables=function(a){var e=[];return a.forEach(function(n,t){var r=t>0?a[t-1]:{type:"strStart"},u=t===a.length-1;"deadConsonants"===n.type?u||"deadConsonants"===r.type?e[e.length-1]+=n.akshara:e.push(n.akshara):"ayogavaha"===n.type&&"vowels"===r.type?e[e.length-1]+=n.akshara:"vowels"===n.type&&("deadConsonants"===r.type?e[e.length-1]+=n.akshara:e.push(n.akshara))}),e}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a,e,n,t,r){a&&(n[a]={akshara:a,aksharaIndex:e,type:t},r.push(a.length))},r=function(a,e,n){var r={};return a.data[e].forEach(function(a,u){Array.isArray(a)?a.forEach(function(a){t(a,u,r,e,n)}):t(a,u,r,e,n)}),r};e.makeSchemeTree=function(a){var e=[],n=Object.assign({},r(a,"deadConsonants",e),r(a,"vowels",e),r(a,"symbols",e),r(a,"ayogavaha",e));return{maxTokenLength:Math.max.apply(Math,e),schemeTree:n}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.prepareChandasList=void 0;var t=n(9);e.prepareChandasList=function(){var a={};return t.chandasList.forEach(function(e){var n=e.ganas;a[n]=e}),a}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.chandasList=[{caesura:"",definition:"guH",examples:["shrIshaH | pAyAt ||"],ganas:"ga",name:"shrIH",type:"uktA"},{caesura:"",definition:"gau strI",examples:["shrImAn viShnuH | nityaM dhyeyaH ||"],ganas:"ga,ga",name:"strI",type:"atyuktA"},{caesura:"",definition:"mO nArI",examples:["nArINAM kalyANI | mAM pAyAtsA vANI ||"],ganas:"ma",name:"nArI",type:"madhyA"},{caesura:"",definition:"rO mRRigIH",examples:["sA mRRigIlOchanI | rAdhikA shrIpatEH ||"],ganas:"ra",name:"mRRigI",type:"madhyA"},{caesura:"",definition:"mgau cetkanyA",examples:["bhAsvatkanyA saikA dhanyA | yasyAH kUlE kRRiShNO.akhElat ||"],ganas:"ma|ga",name:"kanyA",type:"pratiShTA"},{caesura:"",definition:"bhgau giti pa~NktiH",examples:["bhAsvatkanyA saikA dhanyA | yasyAH kUlE kRRiShNO.akhElat ||"],ganas:"ma|ga,ga",name:"pa~NktiH",type:"supratiShTA"},{caesura:"",definition:"tyau stastanumadhyA",examples:["mUrtirmurashatrOratyadbhutarUpA | AstAM mama cittE nityaM tanumadhyA ||","nashyanti dadarsha vRRindAni kapIndraH | hArINyabalAnAM hArINyabalAnAm ||"],ganas:"ma|ga",name:"tanumadhyA",type:"gAyatrI"},{caesura:"",definition:"shashivadanA nyau",examples:["shashivadanAnAM vrajataruNInAm | dadhighaTabhedaM madhuripuraichchhat ||"],ganas:"na|ya",name:"shashivadanA",type:"gAyatrI"},{caesura:"",definition:"vidyullEkhA mO maH",examples:["varShAkAlE kAlE mEghAchchhannAkAshE | vidyullEkhA bhAntyAH sarvairAlOkhyantE ||"],ganas:"ma|ma",name:"vidyullEkhA",type:"gAyatrI"},{caesura:"",definition:"tsau chedvasumatI",examples:["sAstE vasumatI yAstE vasumatI | puNyAkaravatI puNyAkarabhavA ||"],ganas:"ta|sa",name:"vasumatI",type:"gAyatrI"},{caesura:"",definition:"msau gaH syAnmadalEkhA",examples:["ra~NgE bAhuvirugNAt dantIndrAnmadalEkhA | lagnAbhUtmurashatrau kastUrIrasacharchA ||"],ganas:"ma,sa|ga",name:"madalEkhA",type:"uShNik"},{caesura:"",definition:"kumAralalitA jsau g",examples:["murAritanuvallI kumAralalitA sA | vrajaiNanayanAnAM tatAna mudamuchchaiH ||"],ganas:"ja,sa|ga",name:"kumAralalitA",type:"uShNik"},{caesura:"",definition:"saragai haMsamAlA",examples:["dhavalA haMsamAlA sukhapUrvaM vishAlA | vimalAmbhastaDAkE bhayahInA nidadrau ||"],ganas:"sa,ra|ga",name:"haMsamAlA",type:"uShNik"},{caesura:"",definition:"bhau giti citrapadA gaH",examples:["yAmunasaikatadEshE gOpavadhUjalakElau | kaMsaripOrgalIlA chitrapadA jagadavyAt ||"],ganas:"bha,bha|ga,ga",name:"chitrapadA",type:"anuShTup"},{caesura:"4,4",definition:"mO mO gO gO vidyunmAlA",examples:["vidyunmAlAlOlAn bhOgAn muktvA muktau yatnaM kuryAt | dhyAnOtpannaM niHsAmAnyaM saukhyaM bhOktum yadyAkA~NkShEt ||"],ganas:"ma,ma|ga,ga",name:"vidyunmAlA",type:"anuShTup"},{caesura:"4,4",definition:"mANavakam bhAttalagAH",examples:["mANavakakrIditakaM yaH kurutE vRRiddhavayAH | hAsyamasau yAti janE bhikShuriva strIchapalaH ||"],ganas:"bha,ta|la,ga",name:"mANavakam",type:"anuShTup"},{caesura:"",definition:"mnau gau haMsarutamEtat",examples:["abhyAgAmishashilakShmIma~njIrakvaNitatulyam | tIrE rajati nadInAM ramyaM haMsarutamEtat ||"],ganas:"ma,na|ga,ga",name:"haMsarutam",type:"anuShTup"},{caesura:"",definition:"rjau samAnikA galau cha",examples:["yasya kRRiShNapAdapadmamasti hRRittaDAgasadma | dhIH samAnikA parENa nocitA.atra matsarENa ||"],ganas:"ra,ja|ga,la",name:"samAnikA",type:"anuShTup"},{caesura:"",definition:"pramANikA jarau lagau",examples:["punAtu bhaktirachyutA sadAchyutA~NghripadmayOH | shrutismRRitipramANikA bhavAmburAshitArikA ||"],ganas:"ja,ra|la,ga",name:"pramANikA",type:"anuShTup"},{caesura:"3,6",definition:"rAnnasAviha halamukhI",examples:["gaNDayOratishayakRRishaM yanmukham prakaTadarshanaM | AyataM kalahanirataM tAM striyaM tyaja halamukhIm ||"],ganas:"ra,na,sa",name:"halamukhI",type:"bRRihatI"},{caesura:"7,2",definition:"bhujagashashibhRRitA nau maH",examples:["hradataTanikaTakShONI bhujagashashibhRRitA yAsIt | muraripudalitE nAgE vrajajanasukhadA sAbhUt ||"],ganas:"na,na,ma",name:"bhujagashashibhRRitA",type:"bRRihatI"},{caesura:"",definition:"msau jgau shuddhavirADidaM matam",examples:["vishvaM tiShTati kukShikOtarE vaktrE yasya sarasvatI sadA | asmadvaMshapitAmahO gururbrahmA shuddhavirAD punAtu naH ||"],ganas:"ma,sa,ja|ga",name:"shuddhavirAD",type:"pa~Nkti"},{caesura:"5,5",definition:"mnau ygau cEti paNavanAmEdam",examples:["mImAMsArasamamRRitaM pItvA shAstrOktiH paTuritarA bhAti | EvaM saMsadi viduShAM jalpAmO jayapaNabandhanAt ||"],ganas:"ma,na,ya|ga",name:"paNavaH",type:"pa~Nkti"},{caesura:"",definition:"rjau ragau mayUrasAriNI syAt",examples:["yA vanAntarANyupaiti rantuM yA bhuja~NgabhOgamuktacittA | yA drutaM prayAti sannatAMsA tAM mayUrasAriNIM vijahyAt ||"],ganas:"ra,ja,ra|ga",name:"mayUrasAriNI",type:"pa~Nkti"},{caesura:"5,5",definition:"bhmau sagayuktau rukmavatIyam",examples:["pAdatalE padmOdaragaurE rAjati yasyA UrdhvarEkhA | sA bhavati strIlakShaNayuktA rukmavatI saubhAgyavatI ca ||"],ganas:"bha,ma,sa|ga",name:"rukmavatI",type:"pa~Nkti"},{caesura:"4,6",definition:"j~nEyA mattA mabhasagayuktA",examples:["pItvA mattA madhu madhupAlI kAlindIyE taTavanaku~njE | uddIvyantI vrajajanarAmAH prEmAviShTA madhujiti chakrE ||"],ganas:"ma,bha,sa|ga",name:"mattA",type:"pa~Nkti"},{caesura:"",definition:"narajagairbhavEnmanOramA",examples:["taraNijAtaTE vihAriNI vrajavilAsinIvilAsataH | muraripOstanuH punAtu vaH sukRRitashAlinAM manOramAH ||"],ganas:"na,ra,ja|ga",name:"manOramA",type:"pa~Nkti"},{caesura:"2,8",definition:"tjau jau guruNEyamupasthitA",examples:["EShA jagadEkamanOharA kanyA kanakOjjvaladIdhitiH | lakShmIriva dAnavasUdanaM puNyairnaranAthamupasthitA ||"],ganas:"ta,ja,ja|ga",name:"upasthitA",type:"pa~Nkti"},{caesura:"",definition:"guH",examples:["shrIshaH | pAyAt ||"],name:"shrIH",type:"uktA"}]},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a,e,n,t){return a===e||t===n.length-1},r=function(a,e){return e>-1?{foundIndex:e,token:a[e]}:{foundIndex:0,token:a[0]}},u=function(a){return"unknown"!==a.type};e.vTokenize=function(a,e,n){for(var s=a.slice(0,a.length),i=e,o=[],c=0,l="",h=[],p=[],d=0,f=s.length;d<f;d+=1){c+=1;var m=n(l+=s[d]);if(h.push(m),p.push(u(m)),t(c,i,s,d)){var y=p.lastIndexOf(!0),v=r(h,y);y=v.foundIndex,o.push(v.token),d-=c-1-y,c=0,l="",h=[],p=[]}}return o}}])},a.exports=t()},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.vTranslitSchemeItrn={about:{code:"Itrn",name:"ITRANS",type:"roman",unicodeBlock:"0020-007F"},data:{ayogavaha:[["M",".m"],["H",".h"]],consonants:["ka","kha","ga","gha",["~Na","N^a"],"cha","Cha","ja","jha",["~na","JNa"],"Ta","Tha","Da","Dha","Na","ta","tha","da","dha","na","^na","pa","pha","ba","bha","ma","ya","ra","Ra","la","La","zha",["va","wa"],"sha",["Sha","Sa","shha"],"sa","ha"],deadConsonants:["k","kh","g","gh",["~N","N^"],"ch","Ch","j","jh",["~n","JN"],"T","Th","D","Dh","N","t","th","d","dh","n","^n","p","ph","b","bh","m","y","r","R","l","L","zh",["v","w"],"sh",["Sh","S","shh"],"s","h"],symbols:["0","1","2","3","4","5","6","7","8","9","|","||",["OM","AUM"],".a",".N"],vowelMarks:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"],vowels:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"]}}}])},a.exports=t()}])},a.exports=t()},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.vTranslit=void 0;var t=n(1),r=n(2),u=n(3),s=n(8),i=n(9),o=n(10);e.vTranslit=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!a.length)throw new Error("Function vTranslit requires vtranslit schemes in an array format.");var e,n=(0,u.manageSchemes)(a);return{find:n.find,init:(e=n.get,function(a,n){if(a===n)return function(a){return a};var u=e(a),c=e(n),l=(0,t.makeFromSchemeTree)(u),h=l.fromSchemeTree,p=l.maxTokenLength,d=(0,t.makeToSchemeTree)(c);return function(a){var e=(0,o.vTokenize)(a,p,(0,r.getCharDetails)(h)),n=(0,s.processTokens)(e,h,c),t=n.processedTokens,u=n.tokensType;return(0,i.translitTokens)(t,u,d).join("")}}),list:n.list}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a){return Array.isArray(a)?a[0]:a},r=function(a,e,n,t,r,u){a&&(t[a]={aksharaIndex:r+"#"+e,alternateIndex:n,char:a,type:r},u.push(a.length))},u=function(a,e,n){var t={};return"roman"===a.about.type&&"consonants"===e?t:(a.data[e].forEach(function(a,u){Array.isArray(a)?a.forEach(function(a,s){r(a,u,s,t,e,n)}):r(a,u,0,t,e,n)}),t)},s=function(a,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return a.data[e].forEach(function(u,s){!function(a,e,n,r,u,s){var i={char:{},type:u};if(s){var o=n.data[s][e];i.char[s]=t(o)}i.char[u]=t(a),r[u+"#"+e]=i}(u,s,a,r,e,n)}),r};e.makeFromSchemeTree=function(a){var e=[];return{fromSchemeTree:Object.assign({},u(a,"deadConsonants",e),u(a,"consonants",e),u(a,"vowels",e),u(a,"vowelMarks",e),u(a,"ayogavaha",e),u(a,"symbols",e)),maxTokenLength:Math.max.apply(Math,e)}},e.makeToSchemeTree=function(a){var e={};return e=Object.assign({},e,s(a,"deadConsonants","consonants"),s(a,"consonants","deadConsonants"),s(a,"vowels","vowelMarks"),s(a,"vowelMarks","vowels"),s(a,"ayogavaha"),s(a,"symbols"))}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getCharDetails=function(a){return function(e){var n=a[e];return" "===e?{char:e,type:"pause"}:"_"===e?{char:e,type:"skip"}:n||{char:e,type:"unknown"}}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.manageSchemes=void 0;var t=n(4),r=n(6),u=n(7);e.manageSchemes=function(a){return{find:(0,t.findScheme)(a),get:(0,r.getScheme)(a),list:(0,u.listAvailableSchemes)(a)}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.findScheme=void 0;var t=function(){return function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return function(a,e){var n=[],t=!0,r=!1,u=void 0;try{for(var s,i=a[Symbol.iterator]();!(t=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);t=!0);}catch(a){r=!0,u=a}finally{try{!t&&i.return&&i.return()}finally{if(r)throw u}}return n}(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=n(5);e.findScheme=function(a){return function(e){if(!e||"string"!=typeof e)throw new Error("Function requires a string to find its scheme");var n=[];return e.slice(0,10).split("").forEach(function(e){var r=function(a){return function(e){return a.find(function(a){var n=a.about.unicodeBlock.split("-").map(function(a){return parseInt(a,16)}),r=t(n,2),u=r[0],s=r[1],i=e.charCodeAt(0);return i>=u&&i<=s})}}(a)(e);r&&n.push(r.about.code)}),(0,r.maxOcurrance)(n)}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.maxOcurrance=function(a){var e={},n=0,t=null;return a.forEach(function(a){void 0===e[a]?e[a]=1:e[a]+=1,e[a]>n&&(n=e[a],t=a)}),t}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getScheme=function(a){return function(e){var n=a.find(function(a){return a.about.code===e});if(n)return n;throw new Error("No Scheme found with the given schemeCode: '"+e+"'")}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.listAvailableSchemes=function(a){return function(){var e=[];return a.forEach(function(a){e.push({code:a.about.code,name:a.about.name})}),e}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.processTokens=function(a,e,n){for(var t=a.slice(),r=[],u=0;u<t.length;u+=1){var s=t[u],i=u<t.length-1?t[u+1]:{type:"strEnd"},o=u>0?t[u-1]:{type:"strStart"},c=s.type;"brahmic"===n.about.type?"deadConsonants"===c&&"vowelMarks"===i.type?c="consonants":"vowels"===c&&"deadConsonants"===o.type?c="vowelMarks":"vowelMarks"===c&&"deadConsonants"!==o.type&&(c="vowels"):"roman"===n.about.type&&"consonants"===c&&"vowelMarks"===i.type&&(c="deadConsonants"),r.push(c)}return{processedTokens:t,tokensType:r}}},function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.translitTokens=function(a,e,n){var t=[];return a.forEach(function(a,r){var u=e[r];"unknown"===u?t.push(a.char):"pause"===u?t.push(a.char):"skip"===u?t.push(""):t.push(n[a.aksharaIndex].char[u])}),t}},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(a,e,n,t){return a===e||t===n.length-1},r=function(a,e){return e>-1?{foundIndex:e,token:a[e]}:{foundIndex:0,token:a[0]}},u=function(a){return"unknown"!==a.type};e.vTokenize=function(a,e,n){for(var s=a.slice(0,a.length),i=e,o=[],c=0,l="",h=[],p=[],d=0,f=s.length;d<f;d+=1){c+=1;var m=n(l+=s[d]);if(h.push(m),p.push(u(m)),t(c,i,s,d)){var y=p.lastIndexOf(!0),v=r(h,y);y=v.foundIndex,o.push(v.token),d-=c-1-y,c=0,l="",h=[],p=[]}}return o}}])},a.exports=t()}])},a.exports=t()},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.vTranslitSchemeDeva={about:{code:"Deva",name:"Devanagari",type:"brahmic",unicodeBlock:"0900-097F"},data:{ayogavaha:["ं","ः"],consonants:["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","","प","फ","ब","भ","म","य","र","","ल","ळ","","व","श","ष","स","ह"],deadConsonants:["क्","ख्","ग्","घ्","ङ्","च्","छ्","ज्","झ्","ञ्","ट्","ठ्","ड्","ढ्","ण्","त्","थ्","द्","ध्","न्","","प्","फ्","ब्","भ्","म्","य्","र्","","ल्","ळ्","","व्","श्","ष्","स्","ह्"],symbols:["०","१","२","३","४","५","६","७","८","९","।","॥","ॐ","ऽ","ँ"],vowelMarks:["","ा","ि","ी","ु","ू","ृ","ॄ","ॢ","ॣ","","े","ै","","ो","ौ"],vowels:["अ","आ","इ","ई","उ","ऊ","ऋ","ॠ","ऌ","ॡ","","ए","ऐ","","ओ","औ"]}}}])},a.exports=t()},function(a,e,n){var t;"undefined"!=typeof self&&self,t=function(){return function(a){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.vTranslitSchemeItrn={about:{code:"Itrn",name:"ITRANS",type:"roman",unicodeBlock:"0020-007F"},data:{ayogavaha:[["M",".m"],["H",".h"]],consonants:["ka","kha","ga","gha",["~Na","N^a"],"cha","Cha","ja","jha",["~na","JNa"],"Ta","Tha","Da","Dha","Na","ta","tha","da","dha","na","^na","pa","pha","ba","bha","ma","ya","ra","Ra","la","La","zha",["va","wa"],"sha",["Sha","Sa","shha"],"sa","ha"],deadConsonants:["k","kh","g","gh",["~N","N^"],"ch","Ch","j","jh",["~n","JN"],"T","Th","D","Dh","N","t","th","d","dh","n","^n","p","ph","b","bh","m","y","r","R","l","L","zh",["v","w"],"sh",["Sh","S","shh"],"s","h"],symbols:["0","1","2","3","4","5","6","7","8","9","|","||",["OM","AUM"],".a",".N"],vowelMarks:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"],vowels:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"]}}}])},a.exports=t()},function(a,e){}]);
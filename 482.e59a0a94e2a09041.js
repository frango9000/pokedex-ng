"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[482],{1967:(Z,b,i)=>{i.d(b,{z:()=>s});var D=i(655),O=i(9933),t=i(1135),I=i(3900),r=i(4004),n=i(2219),e=i(4650);function f(c,p){if(1&c&&e._UZ(0,"pokedex-ng-types-pill",6),2&c){const _=p.ngIf,m=e.oxw(2);e.Q6J("clickable",m.clickableTitle)("types",_)("size",18)}}function y(c,p){if(1&c&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",18),e._uU(4),e.qZA()()()),2&c){const _=p.$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("clickable",m.clickableEntries)("type",_.name)("inline",!1),e.xp6(3),e.hij("x",_.multiplier,"")}}function M(c,p){if(1&c&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",19),e._uU(4),e.qZA()()()),2&c){const _=p.$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("clickable",m.clickableEntries)("type",_.name)("inline",!1),e.xp6(3),e.hij("x",_.multiplier,"")}}function k(c,p){if(1&c&&(e.ynx(0,7),e.TgZ(1,"div",8)(2,"div",9),e._uU(3),e.ALo(4,"transloco"),e.qZA(),e.TgZ(5,"div",10)(6,"div",11)(7,"h6",12),e._uU(8),e.ALo(9,"transloco"),e.qZA(),e._UZ(10,"span",13),e.qZA(),e.YNc(11,y,5,4,"div",14),e.qZA(),e.TgZ(12,"div",10)(13,"div",11)(14,"h6",12),e._uU(15),e.ALo(16,"transloco"),e.qZA(),e._UZ(17,"span",13),e.qZA(),e.YNc(18,M,5,4,"div",14),e.qZA()(),e.BQk()),2&c){const _=e.oxw().ngIf;e.xp6(3),e.Oqu(e.lcZ(4,5,"UI.TYPE_DAMAGES.CONTEXT.ATTACKING")),e.xp6(5),e.Oqu(e.lcZ(9,7,"UI.TYPE_DAMAGES.WEAKNESSES")),e.xp6(3),e.Q6J("ngForOf",_.attacking.weaknesses),e.xp6(4),e.Oqu(e.lcZ(16,9,"UI.TYPE_DAMAGES.STRENGTHS")),e.xp6(3),e.Q6J("ngForOf",_.attacking.strengths)}}function U(c,p){1&c&&e._UZ(0,"div",1)}function h(c,p){if(1&c&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",18),e._uU(4),e.qZA()()()),2&c){const _=p.$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("clickable",m.clickableEntries)("type",_.name)("inline",!1),e.xp6(3),e.hij("x",_.multiplier,"")}}function E(c,p){if(1&c&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",21),e._uU(4),e.qZA()()()),2&c){const _=p.$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("clickable",m.clickableEntries)("type",_.name)("inline",!1),e.xp6(3),e.hij("x",_.multiplier,"")}}function l(c,p){if(1&c&&(e.ynx(0),e.YNc(1,U,1,0,"div",20),e.TgZ(2,"div",8)(3,"div",9),e._uU(4),e.ALo(5,"transloco"),e.qZA(),e.TgZ(6,"div",10)(7,"div",11)(8,"h6",12),e._uU(9),e.ALo(10,"transloco"),e.qZA(),e._UZ(11,"span",13),e.qZA(),e.YNc(12,h,5,4,"div",14),e.qZA(),e.TgZ(13,"div",10)(14,"div",11)(15,"h6",12),e._uU(16),e.ALo(17,"transloco"),e.qZA(),e._UZ(18,"span",13),e.qZA(),e.YNc(19,E,5,4,"div",14),e.qZA()(),e.BQk()),2&c){const _=e.oxw().ngIf,m=e.oxw();e.xp6(1),e.Q6J("ngIf",m.showAttacking&&(null==_?null:_.attacking)),e.xp6(3),e.Oqu(e.lcZ(5,6,"UI.TYPE_DAMAGES.CONTEXT.DEFENDING")),e.xp6(5),e.Oqu(e.lcZ(10,8,"UI.TYPE_DAMAGES.WEAKNESSES")),e.xp6(3),e.Q6J("ngForOf",_.defending.weaknesses),e.xp6(4),e.Oqu(e.lcZ(17,10,"UI.TYPE_DAMAGES.RESISTANCES")),e.xp6(3),e.Q6J("ngForOf",_.defending.resistances)}}function g(c,p){if(1&c&&(e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,f,1,3,"pokedex-ng-types-pill",3),e.ALo(4,"async"),e.qZA()(),e.YNc(5,k,19,11,"ng-container",4),e.YNc(6,l,20,12,"ng-container",0),e._UZ(7,"div",5),e.BQk()),2&c){const _=p.ngIf,m=e.oxw();e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,m.types$)),e.xp6(2),e.Q6J("ngIf",m.showAttacking&&(null==_?null:_.attacking)),e.xp6(1),e.Q6J("ngIf",m.showDefending&&(null==_?null:_.defending))}}let s=class{constructor(p){this.typeService=p,this._typeDamages$=new t.X(null),this.showDefending=!1,this.showAttacking=!1,this.clickableTitle=!1,this.clickableEntries=!1}ngOnInit(){this.types$.pipe((0,O.t)(this),(0,I.w)(p=>this.typeService.getAll().pipe((0,r.U)(_=>this.generateTypeDamages(p,_))))).subscribe()}getTypeDamages$(){return this._typeDamages$.asObservable()}generateTypeDamages(p,_){const m=p.map(d=>_.find(v=>v.name===d));let P=_.map(d=>({name:d.name,multiplier:1}));m.forEach(d=>{d.damage_relations.double_damage_from.forEach(v=>{const C=P.findIndex(A=>A.name===v);P[C].multiplier*=2}),d.damage_relations.half_damage_from.forEach(v=>{const C=P.findIndex(A=>A.name===v);P[C].multiplier*=.5}),d.damage_relations.no_damage_from.forEach(v=>{const C=P.findIndex(A=>A.name===v);P[C].multiplier*=0})}),P=P.filter(d=>1!==d.multiplier);let x=_.map(d=>({name:d.name,multiplier:1}));m.forEach(d=>{d.damage_relations.double_damage_to.forEach(v=>{const C=x.findIndex(A=>A.name===v);x[C].multiplier*=2}),d.damage_relations.half_damage_to.forEach(v=>{const C=x.findIndex(A=>A.name===v);x[C].multiplier*=.5}),d.damage_relations.no_damage_to.forEach(v=>{const C=x.findIndex(A=>A.name===v);x[C].multiplier*=0})}),x=x.filter(d=>1!==d.multiplier),this._typeDamages$.next({attacking:{weaknesses:x.filter(d=>d.multiplier<1),strengths:x.filter(d=>d.multiplier>1)},defending:{weaknesses:P.filter(d=>d.multiplier>1),resistances:P.filter(d=>d.multiplier<1)}})}};s.\u0275fac=function(p){return new(p||s)(e.Y36(n.S))},s.\u0275cmp=e.Xpm({type:s,selectors:[["pokedex-ng-type-damages"]],inputs:{types$:"types$",showDefending:"showDefending",showAttacking:"showAttacking",clickableTitle:"clickableTitle",clickableEntries:"clickableEntries"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"pt-3"],[1,"m-3","d-flex","justify-content-center"],[3,"clickable","types","size",4,"ngIf"],["class","pt-1",4,"ngIf"],[1,"pb-3"],[3,"clickable","types","size"],[1,"pt-1"],[1,"row","m-1","text-center"],[1,"col-12","font-weight-bold"],[1,"col-12","col-sm-6"],[1,"row"],[1,"col-9"],[1,"col-3"],["class","row my-1",4,"ngFor","ngForOf"],[1,"row","my-1"],[1,"col-9",3,"clickable","type","inline"],[1,"col-3","text-left","px-0","pl-4","pl-sm-2"],[1,"weakness-multiplier"],[1,"strength-multiplier"],["class","pt-3",4,"ngIf"],[1,"resistance-multiplier"]],template:function(p,_){1&p&&(e.YNc(0,g,8,5,"ng-container",0),e.ALo(1,"async")),2&p&&e.Q6J("ngIf",e.lcZ(1,1,_.getTypeDamages$()))},styles:[".weakness-multiplier[_ngcontent-%COMP%]{color:#e70000;font-weight:700}.resistance-multiplier[_ngcontent-%COMP%], .strength-multiplier[_ngcontent-%COMP%]{color:#00e700;font-weight:700}"]}),s=(0,D.gn)([(0,O.c)(),(0,D.w6)("design:paramtypes",[n.S])],s)},9482:(Z,b,i)=>{i.d(b,{Q:()=>f});var D=i(6895),O=i(5380),t=i(9076),I=i(1967),r=i(401),n=i(4348),e=i(4650);let f=(()=>{class y{}return y.\u0275fac=function(k){return new(k||y)},y.\u0275mod=e.oAB({type:y}),y.\u0275inj=e.cJS({imports:[D.ez,O.y4,t.m]}),y})();e.B6R(I.z,[D.sg,D.O5,r.D,n.w],[D.Ov,O.Ot])},401:(Z,b,i)=>{i.d(b,{D:()=>h});var D=i(655),O=i(9933),t=i(2602),I=i(9646),r=i(1967),n=i(4650),e=i(6895),f=i(5380),y=i(8242);const M=function(E,l,g){return{"background-color":E,color:"white","font-size":l,"border-radius":g}},k=function(E,l){return{"rotate-90":E,"inline-type":l}};function U(E,l){if(1&E){const g=n.EpF();n.TgZ(0,"div",1),n.NdJ("click",function(){n.CHM(g);const c=n.oxw();return n.KtG(c.onClick())}),n.ALo(1,"pokeTypeColor"),n._uU(2),n.ALo(3,"uppercase"),n.ALo(4,"transloco"),n.qZA()}if(2&E){const g=n.oxw();n.Q6J("ngStyle",n.kEZ(9,M,n.lcZ(1,3,g.type),g.size+"px",g.size/2+"px"))("ngClass",n.WLB(13,k,g.vertical,g.inline)),n.xp6(2),n.hij(" ",n.lcZ(3,5,n.lcZ(4,7,"TYPE."+g.type+".NAME")),"\n")}}let h=class{constructor(l){this.modalService=l,this.size=16,this.vertical=!1,this.inline=!0,this.clickable=!0,this.showDefending=!0,this.showAttacking=!0}onClick(){this.clickable&&this.modalService.show(r.z,{class:"modal-dialog-centered",data:{showDefending:this.showDefending,showAttacking:this.showAttacking,types$:(0,I.of)([this.type])}})}};h.\u0275fac=function(l){return new(l||h)(n.Y36(t.yU))},h.\u0275cmp=n.Xpm({type:h,selectors:[["pokedex-ng-type-pill"]],inputs:{type:"type",size:"size",vertical:"vertical",inline:"inline",clickable:"clickable",showDefending:"showDefending",showAttacking:"showAttacking"},decls:1,vars:1,consts:[["class","cursor-pointer text-center rounded-lg",3,"ngStyle","ngClass","click",4,"ngIf"],[1,"cursor-pointer","text-center","rounded-lg",3,"ngStyle","ngClass","click"]],template:function(l,g){1&l&&n.YNc(0,U,5,16,"div",0),2&l&&n.Q6J("ngIf",g.type)},dependencies:[e.mk,e.O5,e.PC,e.gd,f.Ot,y.g],styles:["[_nghost-%COMP%]{display:inline}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{padding:2px 6px;font-weight:700}[_nghost-%COMP%]   div.inline-type[_ngcontent-%COMP%]{display:inline}[_nghost-%COMP%]   div.rotate-90[_ngcontent-%COMP%]{padding:6px 0;white-space:nowrap;position:relative;writing-mode:vertical-rl;transform:rotate(180deg);display:inline-block;overflow:visible}"]}),h=(0,D.gn)([(0,O.c)(),(0,D.w6)("design:paramtypes",[t.yU])],h)},4348:(Z,b,i)=>{i.d(b,{w:()=>E});var D=i(9646),O=i(1967),t=i(4650),I=i(2602),r=i(6895),n=i(401),e=i(8242);function f(l,g){if(1&l&&t._UZ(0,"pokedex-ng-type-pill",3),2&l){const s=t.oxw(2);t.Q6J("type",s.types[0])("size",s.size)("clickable",!1)("inline",s.inline)("vertical",s.vertical)}}function y(l,g){if(1&l&&t._UZ(0,"pokedex-ng-type-pill",3),2&l){const s=t.oxw(3);t.Q6J("type",s.types[1])("size",s.size)("clickable",!1)("inline",s.inline)("vertical",s.vertical)}}const M=function(l,g){return{"background-color":l,"border-radius":g}},k=function(l){return{"font-size":l}};function U(l,g){if(1&l&&(t.ynx(0),t.TgZ(1,"div",4),t.ALo(2,"pokeTypeColor"),t._UZ(3,"i",5),t.qZA(),t.YNc(4,y,1,5,"pokedex-ng-type-pill",2),t.BQk()),2&l){const s=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.WLB(7,M,t.Dn7(2,3,s.types[0],!1,s.types[1]),s.size/3+"px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(10,k,.6*s.size+"px")),t.xp6(1),t.Q6J("ngIf",!s.hideSecondType)}}function h(l,g){if(1&l){const s=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.NdJ("click",function(){t.CHM(s);const p=t.oxw();return t.KtG(p.onClick())}),t.YNc(2,f,1,5,"pokedex-ng-type-pill",2),t.YNc(3,U,5,12,"ng-container",0),t.qZA(),t.BQk()}if(2&l){const s=t.oxw();t.xp6(2),t.Q6J("ngIf",!s.hideFirstType),t.xp6(1),t.Q6J("ngIf",s.types.length>1)}}let E=(()=>{class l{constructor(s){this.modalService=s,this.types=[],this.size=16,this.vertical=!1,this.inline=!0,this.clickable=!0,this.hideFirstType=!1,this.hideSecondType=!1}onClick(){this.clickable&&this.modalService.show(O.z,{class:"modal-dialog-centered",data:{showDefending:!0,showAttacking:!1,types$:(0,D.of)([...this.types])}})}}return l.\u0275fac=function(s){return new(s||l)(t.Y36(I.yU))},l.\u0275cmp=t.Xpm({type:l,selectors:[["pokedex-ng-types-pill"]],inputs:{types:"types",size:"size",vertical:"vertical",inline:"inline",clickable:"clickable",hideFirstType:"hideFirstType",hideSecondType:"hideSecondType"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"types-pill",3,"click"],[3,"type","size","clickable","inline","vertical",4,"ngIf"],[3,"type","size","clickable","inline","vertical"],[1,"type-merge",3,"ngStyle"],[1,"fa-solid","fa-shuffle","type-merge-icon",3,"ngStyle"]],template:function(s,c){1&s&&t.YNc(0,h,4,2,"ng-container",0),2&s&&t.Q6J("ngIf",c.types.length)},dependencies:[r.O5,r.PC,n.D,e.g],styles:["[_nghost-%COMP%]{cursor:pointer;display:inline}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]   div.type-merge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;height:100%;margin:0 3px}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]   div.type-merge[_ngcontent-%COMP%]   .type-merge-icon[_ngcontent-%COMP%]{padding:4px;transform:rotate(-90deg);color:#fff}"]}),l})()},8242:(Z,b,i)=>{i.d(b,{g:()=>O});var D=i(4650);let O=(()=>{class t{transform(r,n=!1,e=""){let f=this.getTypeColor(r);if(e?.length){const y=this.getTypeColor(e);f=this.blendColors(f,y)}return n?this.invertColor(f):f}invertColor(r){if(0===r.indexOf("#")&&(r=r.slice(1)),3===r.length&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),6!==r.length)throw new Error("Invalid HEX color.");const n=(255-parseInt(r.slice(0,2),16)).toString(16),e=(255-parseInt(r.slice(2,4),16)).toString(16),f=(255-parseInt(r.slice(4,6),16)).toString(16);return"#"+this.padZero(n)+this.padZero(e)+this.padZero(f)}padZero(r,n){return n=n||2,(new Array(n).join("0")+r).slice(-n)}blendColors(r,n,e=.5){const[f,y,M]=r.match(/\w\w/g).map(s=>parseInt(s,16)),[k,U,h]=n.match(/\w\w/g).map(s=>parseInt(s,16));return"#"+Math.round(f+(k-f)*e).toString(16).padStart(2,"0")+Math.round(y+(U-y)*e).toString(16).padStart(2,"0")+Math.round(M+(h-M)*e).toString(16).padStart(2,"0")}getTypeColor(r){let n="#000";switch(r){case"normal":n="#9C9C63";break;case"fighting":n="#AE2A24";break;case"flying":n="#8E6FEB";break;case"poison":n="#923A92";break;case"ground":n="#DBB54D";break;case"rock":n="#A48F32";break;case"bug":n="#97A51D";break;case"ghost":n="#644E88";break;case"steel":n="#A0A0C0";break;case"fire":n="#ED6D12";break;case"water":n="#4578ED";break;case"grass":n="#69C23D";break;case"electric":n="#F6C913";break;case"psychic":n="#F73670";break;case"ice":n="#7ECECE";break;case"dragon":n="#5D1EF7";break;case"dark":n="#644e40";break;case"fairy":n="#E87890";break;case"unknown":n="#888";break;case"shadow":n="#444"}return n}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=D.Yjl({name:"pokeTypeColor",type:t,pure:!0}),t})()},9933:(Z,b,i)=>{i.d(b,{c:()=>m,t:()=>L});var D=i(7579),O=i(727),r=(i(2076),i(515),i(4650)),e=(i(5577),i(2722));const f=r.GuJ,M=Symbol("__destroy"),k=Symbol("__decoratorApplied");function U(o){return"string"==typeof o?Symbol(`__destroy__${o}`):M}function E(o,a){o[a]||(o[a]=new D.x)}function l(o,a){o[a]&&(o[a].next(),o[a].complete(),o[a]=null)}function g(o){o instanceof O.w0&&o.unsubscribe()}function c(o,a){return function(){if(o&&o.call(this),l(this,U()),a.arrayName&&function s(o){Array.isArray(o)&&o.forEach(g)}(this[a.arrayName]),a.checkProperties)for(const T in this){var u;null!==(u=a.blackList)&&void 0!==u&&u.includes(T)||g(this[T])}}}function m(o={}){return a=>{!function y(o){return!!o[f]}(a)?function p(o,a){o.prototype.ngOnDestroy=c(o.prototype.ngOnDestroy,a)}(a,o):function _(o,a){const u=o.\u0275pipe;u.onDestroy=c(u.onDestroy,a)}(a,o),function h(o){o.prototype[k]=!0}(a)}}function L(o,a){return u=>{const T=U(a);return"string"==typeof a?function S(o,a,u){const T=o[a];E(o,u),o[a]=function(){T.apply(this,arguments),l(this,u),o[a]=T}}(o,a,T):E(o,T),u.pipe((0,e.R)(o[T]))}}Symbol("CheckerHasBeenSet")}}]);
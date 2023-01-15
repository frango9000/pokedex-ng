"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[493],{8808:(W,U,c)=>{c.d(U,{z:()=>K});var O,P=c(655),x=c(9933),s=c(1135),y=c(3900),_=c(4004),p=c(1150),e=c(4650);function Z(h,v){if(1&h&&e._UZ(0,"pokedex-ng-types-pill",6),2&h){const d=v.ngIf,T=e.oxw(2);e.Q6J("clickable",T.clickableTitle)("types",d)("size",18)}}function b(h,v){if(1&h&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",18),e._uU(4),e.qZA()()()),2&h){const d=v.$implicit,T=e.oxw(3);e.xp6(1),e.Q6J("clickable",T.clickableEntries)("type",d.name)("inline",!1),e.xp6(3),e.hij("x",d.multiplier,"")}}function j(h,v){if(1&h&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",19),e._uU(4),e.qZA()()()),2&h){const d=v.$implicit,T=e.oxw(3);e.xp6(1),e.Q6J("clickable",T.clickableEntries)("type",d.name)("inline",!1),e.xp6(3),e.hij("x",d.multiplier,"")}}function B(h,v){if(1&h&&(e.ynx(0,7),e.TgZ(1,"div",8)(2,"div",9),e._uU(3),e.ALo(4,"transloco"),e.qZA(),e.TgZ(5,"div",10)(6,"div",11)(7,"h6",12),e._uU(8),e.ALo(9,"transloco"),e.qZA(),e._UZ(10,"span",13),e.qZA(),e.YNc(11,b,5,4,"div",14),e.qZA(),e.TgZ(12,"div",10)(13,"div",11)(14,"h6",12),e._uU(15),e.ALo(16,"transloco"),e.qZA(),e._UZ(17,"span",13),e.qZA(),e.YNc(18,j,5,4,"div",14),e.qZA()(),e.BQk()),2&h){const d=e.oxw().ngIf;e.xp6(3),e.Oqu(e.lcZ(4,5,"UI.TYPE_DAMAGES.CONTEXT.ATTACKING")),e.xp6(5),e.Oqu(e.lcZ(9,7,"UI.TYPE_DAMAGES.WEAKNESSES")),e.xp6(3),e.Q6J("ngForOf",d.attacking.weaknesses),e.xp6(4),e.Oqu(e.lcZ(16,9,"UI.TYPE_DAMAGES.STRENGTHS")),e.xp6(3),e.Q6J("ngForOf",d.attacking.strengths)}}function R(h,v){1&h&&e._UZ(0,"div",1)}function C(h,v){if(1&h&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",18),e._uU(4),e.qZA()()()),2&h){const d=v.$implicit,T=e.oxw(3);e.xp6(1),e.Q6J("clickable",T.clickableEntries)("type",d.name)("inline",!1),e.xp6(3),e.hij("x",d.multiplier,"")}}function m(h,v){if(1&h&&(e.TgZ(0,"div",15),e._UZ(1,"pokedex-ng-type-pill",16),e.TgZ(2,"div",17)(3,"strong",21),e._uU(4),e.qZA()()()),2&h){const d=v.$implicit,T=e.oxw(3);e.xp6(1),e.Q6J("clickable",T.clickableEntries)("type",d.name)("inline",!1),e.xp6(3),e.hij("x",d.multiplier,"")}}function g(h,v){if(1&h&&(e.ynx(0),e.YNc(1,R,1,0,"div",20),e.TgZ(2,"div",8)(3,"div",9),e._uU(4),e.ALo(5,"transloco"),e.qZA(),e.TgZ(6,"div",10)(7,"div",11)(8,"h6",12),e._uU(9),e.ALo(10,"transloco"),e.qZA(),e._UZ(11,"span",13),e.qZA(),e.YNc(12,C,5,4,"div",14),e.qZA(),e.TgZ(13,"div",10)(14,"div",11)(15,"h6",12),e._uU(16),e.ALo(17,"transloco"),e.qZA(),e._UZ(18,"span",13),e.qZA(),e.YNc(19,m,5,4,"div",14),e.qZA()(),e.BQk()),2&h){const d=e.oxw().ngIf,T=e.oxw();e.xp6(1),e.Q6J("ngIf",T.showAttacking&&(null==d?null:d.attacking)),e.xp6(3),e.Oqu(e.lcZ(5,6,"UI.TYPE_DAMAGES.CONTEXT.DEFENDING")),e.xp6(5),e.Oqu(e.lcZ(10,8,"UI.TYPE_DAMAGES.WEAKNESSES")),e.xp6(3),e.Q6J("ngForOf",d.defending.weaknesses),e.xp6(4),e.Oqu(e.lcZ(17,10,"UI.TYPE_DAMAGES.RESISTANCES")),e.xp6(3),e.Q6J("ngForOf",d.defending.resistances)}}function u(h,v){if(1&h&&(e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,Z,1,3,"pokedex-ng-types-pill",3),e.ALo(4,"async"),e.qZA()(),e.YNc(5,B,19,11,"ng-container",4),e.YNc(6,g,20,12,"ng-container",0),e._UZ(7,"div",5),e.BQk()),2&h){const d=v.ngIf,T=e.oxw();e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,T.types$)),e.xp6(2),e.Q6J("ngIf",T.showAttacking&&(null==d?null:d.attacking)),e.xp6(1),e.Q6J("ngIf",T.showDefending&&(null==d?null:d.defending))}}let K=((O=class{constructor(v){this.typeService=v,this._typeDamages$=new s.X(null),this.showDefending=!1,this.showAttacking=!1,this.clickableTitle=!1,this.clickableEntries=!1}ngOnInit(){this.types$.pipe((0,x.t)(this),(0,y.w)(v=>this.typeService.getAll().pipe((0,_.U)(d=>this.generateTypeDamages(v,d))))).subscribe()}getTypeDamages$(){return this._typeDamages$.asObservable()}generateTypeDamages(v,d){const T=v.map(D=>d.find(w=>w.name===D));let M=d.map(D=>({name:D.name,multiplier:1}));T.forEach(D=>{D.damage_relations.double_damage_from.forEach(w=>{const I=M.findIndex(t=>t.name===w);M[I].multiplier*=2}),D.damage_relations.half_damage_from.forEach(w=>{const I=M.findIndex(t=>t.name===w);M[I].multiplier*=.5}),D.damage_relations.no_damage_from.forEach(w=>{const I=M.findIndex(t=>t.name===w);M[I].multiplier*=0})}),M=M.filter(D=>1!==D.multiplier);let L=d.map(D=>({name:D.name,multiplier:1}));T.forEach(D=>{D.damage_relations.double_damage_to.forEach(w=>{const I=L.findIndex(t=>t.name===w);L[I].multiplier*=2}),D.damage_relations.half_damage_to.forEach(w=>{const I=L.findIndex(t=>t.name===w);L[I].multiplier*=.5}),D.damage_relations.no_damage_to.forEach(w=>{const I=L.findIndex(t=>t.name===w);L[I].multiplier*=0})}),L=L.filter(D=>1!==D.multiplier),this._typeDamages$.next({attacking:{weaknesses:L.filter(D=>D.multiplier<1),strengths:L.filter(D=>D.multiplier>1)},defending:{weaknesses:M.filter(D=>D.multiplier>1),resistances:M.filter(D=>D.multiplier<1)}})}}).\u0275fac=function(v){return new(v||O)(e.Y36(p.S))},O.\u0275cmp=e.Xpm({type:O,selectors:[["pokedex-ng-type-damages"]],inputs:{types$:"types$",showDefending:"showDefending",showAttacking:"showAttacking",clickableTitle:"clickableTitle",clickableEntries:"clickableEntries"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"pt-3"],[1,"m-3","d-flex","justify-content-center"],[3,"clickable","types","size",4,"ngIf"],["class","pt-1",4,"ngIf"],[1,"pb-3"],[3,"clickable","types","size"],[1,"pt-1"],[1,"row","m-1","text-center"],[1,"col-12","font-weight-bold"],[1,"col-12","col-sm-6"],[1,"row"],[1,"col-9"],[1,"col-3"],["class","row my-1",4,"ngFor","ngForOf"],[1,"row","my-1"],[1,"col-9",3,"clickable","type","inline"],[1,"col-3","text-left","px-0","pl-4","pl-sm-2"],[1,"weakness-multiplier"],[1,"strength-multiplier"],["class","pt-3",4,"ngIf"],[1,"resistance-multiplier"]],template:function(v,d){1&v&&(e.YNc(0,u,8,5,"ng-container",0),e.ALo(1,"async")),2&v&&e.Q6J("ngIf",e.lcZ(1,1,d.getTypeDamages$()))},styles:[".weakness-multiplier[_ngcontent-%COMP%]{color:#e70000;font-weight:700}.resistance-multiplier[_ngcontent-%COMP%], .strength-multiplier[_ngcontent-%COMP%]{color:#00e700;font-weight:700}"]}),O);K=(0,P.gn)([(0,x.c)(),(0,P.w6)("design:paramtypes",[p.S])],K)},493:(W,U,c)=>{c.d(U,{Q:()=>O});var P=c(6895),x=c(5380),s=c(6719),y=c(8808),_=c(9168),p=c(7400),e=c(4650);class O{}O.\u0275fac=function(b){return new(b||O)},O.\u0275mod=e.oAB({type:O}),O.\u0275inj=e.cJS({imports:[P.ez,x.y4,s.m]}),e.B6R(y.z,[P.sg,P.O5,_.D,p.w],[P.Ov,x.Ot])},9168:(W,U,c)=>{c.d(U,{D:()=>C});var b,P=c(655),x=c(9933),s=c(2602),y=c(9646),_=c(8808),p=c(4650),e=c(6895),O=c(5380),Z=c(2395);const j=function(m,g,u){return{"background-color":m,color:"white","font-size":g,"border-radius":u}},B=function(m,g){return{"rotate-90":m,"inline-type":g}};function R(m,g){if(1&m){const u=p.EpF();p.TgZ(0,"div",1),p.NdJ("click",function(){p.CHM(u);const h=p.oxw();return p.KtG(h.onClick())}),p.ALo(1,"pokeTypeColor"),p._uU(2),p.ALo(3,"uppercase"),p.ALo(4,"transloco"),p.qZA()}if(2&m){const u=p.oxw();p.Q6J("ngStyle",p.kEZ(9,j,p.lcZ(1,3,u.type),u.size+"px",u.size/2+"px"))("ngClass",p.WLB(13,B,u.vertical,u.inline)),p.xp6(2),p.hij(" ",p.lcZ(3,5,p.lcZ(4,7,"TYPE."+u.type+".NAME")),"\n")}}let C=((b=class{constructor(g){this.modalService=g,this.size=16,this.vertical=!1,this.inline=!0,this.clickable=!0,this.showDefending=!0,this.showAttacking=!0}onClick(){this.clickable&&this.modalService.show(_.z,{class:"modal-dialog-centered",data:{showDefending:this.showDefending,showAttacking:this.showAttacking,types$:(0,y.of)([this.type])}})}}).\u0275fac=function(g){return new(g||b)(p.Y36(s.yU))},b.\u0275cmp=p.Xpm({type:b,selectors:[["pokedex-ng-type-pill"]],inputs:{type:"type",size:"size",vertical:"vertical",inline:"inline",clickable:"clickable",showDefending:"showDefending",showAttacking:"showAttacking"},decls:1,vars:1,consts:[["class","cursor-pointer text-center rounded-lg",3,"ngStyle","ngClass","click",4,"ngIf"],[1,"cursor-pointer","text-center","rounded-lg",3,"ngStyle","ngClass","click"]],template:function(g,u){1&g&&p.YNc(0,R,5,16,"div",0),2&g&&p.Q6J("ngIf",u.type)},dependencies:[e.mk,e.O5,e.PC,e.gd,O.Ot,Z.g],styles:["[_nghost-%COMP%]{display:inline}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{padding:2px 6px;font-weight:700}[_nghost-%COMP%]   div.inline-type[_ngcontent-%COMP%]{display:inline}[_nghost-%COMP%]   div.rotate-90[_ngcontent-%COMP%]{padding:6px 0;white-space:nowrap;position:relative;writing-mode:vertical-rl;transform:rotate(180deg);display:inline-block;overflow:visible}"]}),b);C=(0,P.gn)([(0,x.c)(),(0,P.w6)("design:paramtypes",[s.yU])],C)},7400:(W,U,c)=>{c.d(U,{w:()=>C});var P=c(9646),x=c(8808),s=c(4650),y=c(2602),_=c(6895),p=c(9168),e=c(2395);function O(m,g){if(1&m&&s._UZ(0,"pokedex-ng-type-pill",3),2&m){const u=s.oxw(2);s.Q6J("type",u.types[0])("size",u.size)("clickable",!1)("inline",u.inline)("vertical",u.vertical)}}function Z(m,g){if(1&m&&s._UZ(0,"pokedex-ng-type-pill",3),2&m){const u=s.oxw(3);s.Q6J("type",u.types[1])("size",u.size)("clickable",!1)("inline",u.inline)("vertical",u.vertical)}}const b=function(m,g){return{"background-color":m,"border-radius":g}},j=function(m){return{"font-size":m}};function B(m,g){if(1&m&&(s.ynx(0),s.TgZ(1,"div",4),s.ALo(2,"pokeTypeColor"),s._UZ(3,"i",5),s.qZA(),s.YNc(4,Z,1,5,"pokedex-ng-type-pill",2),s.BQk()),2&m){const u=s.oxw(2);s.xp6(1),s.Q6J("ngStyle",s.WLB(7,b,s.Dn7(2,3,u.types[0],!1,u.types[1]),u.size/3+"px")),s.xp6(2),s.Q6J("ngStyle",s.VKq(10,j,.6*u.size+"px")),s.xp6(1),s.Q6J("ngIf",!u.hideSecondType)}}function R(m,g){if(1&m){const u=s.EpF();s.ynx(0),s.TgZ(1,"div",1),s.NdJ("click",function(h){s.CHM(u);const v=s.oxw();return s.KtG(v.onClick(h))}),s.YNc(2,O,1,5,"pokedex-ng-type-pill",2),s.YNc(3,B,5,12,"ng-container",0),s.qZA(),s.BQk()}if(2&m){const u=s.oxw();s.xp6(2),s.Q6J("ngIf",!u.hideFirstType),s.xp6(1),s.Q6J("ngIf",u.types.length>1)}}class C{constructor(g){this.modalService=g,this.types=[],this.size=16,this.vertical=!1,this.inline=!0,this.clickable=!0,this.hideFirstType=!1,this.hideSecondType=!1}onClick(g){g.preventDefault(),g.stopPropagation(),this.clickable&&this.modalService.show(x.z,{class:"modal-dialog-centered",data:{showDefending:!0,showAttacking:!1,types$:(0,P.of)([...this.types])}})}}C.\u0275fac=function(g){return new(g||C)(s.Y36(y.yU))},C.\u0275cmp=s.Xpm({type:C,selectors:[["pokedex-ng-types-pill"]],inputs:{types:"types",size:"size",vertical:"vertical",inline:"inline",clickable:"clickable",hideFirstType:"hideFirstType",hideSecondType:"hideSecondType"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"types-pill",3,"click"],[3,"type","size","clickable","inline","vertical",4,"ngIf"],[3,"type","size","clickable","inline","vertical"],[1,"type-merge",3,"ngStyle"],[1,"fa-solid","fa-shuffle","type-merge-icon",3,"ngStyle"]],template:function(g,u){1&g&&s.YNc(0,R,4,2,"ng-container",0),2&g&&s.Q6J("ngIf",u.types.length)},dependencies:[_.O5,_.PC,p.D,e.g],styles:["[_nghost-%COMP%]{cursor:pointer;display:inline}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]   div.type-merge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;height:100%;margin:0 3px}[_nghost-%COMP%]   div.types-pill[_ngcontent-%COMP%]   div.type-merge[_ngcontent-%COMP%]   .type-merge-icon[_ngcontent-%COMP%]{padding:4px;transform:rotate(-90deg);color:#fff}"]})},2395:(W,U,c)=>{c.d(U,{g:()=>x});var P=c(4650);class x{transform(y,_=!1,p=""){let e=this.getTypeColor(y);if(p?.length){const O=this.getTypeColor(p);e=this.blendColors(e,O)}return _?this.invertColor(e):e}invertColor(y){if(0===y.indexOf("#")&&(y=y.slice(1)),3===y.length&&(y=y[0]+y[0]+y[1]+y[1]+y[2]+y[2]),6!==y.length)throw new Error("Invalid HEX color.");const _=(255-parseInt(y.slice(0,2),16)).toString(16),p=(255-parseInt(y.slice(2,4),16)).toString(16),e=(255-parseInt(y.slice(4,6),16)).toString(16);return"#"+this.padZero(_)+this.padZero(p)+this.padZero(e)}padZero(y,_){return _=_||2,(new Array(_).join("0")+y).slice(-_)}blendColors(y,_,p=.5){const[e,O,Z]=y.match(/\w\w/g).map(g=>parseInt(g,16)),[b,j,B]=_.match(/\w\w/g).map(g=>parseInt(g,16));return"#"+Math.round(e+(b-e)*p).toString(16).padStart(2,"0")+Math.round(O+(j-O)*p).toString(16).padStart(2,"0")+Math.round(Z+(B-Z)*p).toString(16).padStart(2,"0")}getTypeColor(y){let _="#000";switch(y){case"normal":_="#9C9C63";break;case"fighting":_="#AE2A24";break;case"flying":_="#8E6FEB";break;case"poison":_="#923A92";break;case"ground":_="#DBB54D";break;case"rock":_="#A48F32";break;case"bug":_="#97A51D";break;case"ghost":_="#644E88";break;case"steel":_="#A0A0C0";break;case"fire":_="#ED6D12";break;case"water":_="#4578ED";break;case"grass":_="#69C23D";break;case"electric":_="#F6C913";break;case"psychic":_="#F73670";break;case"ice":_="#7ECECE";break;case"dragon":_="#5D1EF7";break;case"dark":_="#644e40";break;case"fairy":_="#E87890";break;case"unknown":_="#888";break;case"shadow":_="#444"}return _}}x.\u0275fac=function(y){return new(y||x)},x.\u0275pipe=P.Yjl({name:"pokeTypeColor",type:x,pure:!0})},655:(W,U,c)=>{function _(t,r,i,a){var l,n=arguments.length,o=n<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,r,i,a);else for(var E=t.length-1;E>=0;E--)(l=t[E])&&(o=(n<3?l(o):n>3?l(r,i,o):l(r,i))||o);return n>3&&o&&Object.defineProperty(r,i,o),o}function e(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)}c.d(U,{gn:()=>_,w6:()=>e})},9933:(W,U,c)=>{c.d(U,{c:()=>d,t:()=>i});var P=c(7579),x=c(727),_=(c(2076),c(515),c(4650)),e=(c(5577),c(2722));const O=_.GuJ,b=Symbol("__destroy"),j=Symbol("__decoratorApplied");function B(n){return"string"==typeof n?Symbol(`__destroy__${n}`):b}function C(n,o){n[o]||(n[o]=new P.x)}function m(n,o){n[o]&&(n[o].next(),n[o].complete(),n[o]=null)}function g(n){n instanceof x.w0&&n.unsubscribe()}function K(n,o){return function(){if(n&&n.call(this),m(this,B()),o.arrayName&&function u(n){Array.isArray(n)&&n.forEach(g)}(this[o.arrayName]),o.checkProperties)for(const l in this)o.blackList?.includes(l)||g(this[l])}}function d(n={}){return o=>{!function Z(n){return!!n[O]}(o)?function h(n,o){n.prototype.ngOnDestroy=K(n.prototype.ngOnDestroy,o)}(o,n):function v(n,o){const l=n.\u0275pipe;l.onDestroy=K(l.onDestroy,o)}(o,n),function R(n){n.prototype[j]=!0}(o)}}function i(n,o){return l=>{const E=B(o);"string"==typeof o?function r(n,o,l){const E=n[o];C(n,l),n[o]=function(){E.apply(this,arguments),m(this,l),n[o]=E}}(n,o,E):C(n,E);return l.pipe((0,e.R)(n[E]))}}Symbol("CheckerHasBeenSet")}}]);
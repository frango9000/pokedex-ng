"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[592],{2470:(D,d,e)=>{e.d(d,{g:()=>h});var E=e(727),g=e(4128),l=e(9646),_=e(3900),c=e(4004),T=e(3903),A=e(9716),O=e(8342),t=e(4650),M=e(529),I=e(5380);class a extends A.ge{constructor(r,s,p){super("item-attribute",r,s,p),this.http=r,this.translocoService=s,this.languageService=p}_parseOneTranslation(r){return(0,l.of)(T.Jh.mergeMaps([T.Jh.ofSingleResource(r.names,s=>({key:s.language.name,object:{ITEM:{ATTRIBUTE:{[r.name]:{NAME:s.name}}}}})),T.Jh.ofSingleResource(r.descriptions,s=>({key:s.language.name,object:{ITEM:{ATTRIBUTE:{[r.name]:{DESCRIPTION:s.description}}}}}))]))}}a.\u0275fac=function(r){return new(r||a)(t.LFG(M.eN),t.LFG(I.Vn),t.LFG(O.T))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var u=e(4184),n=e(6895),m=e(2361);function i(v,r){if(1&v&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"transloco"),t.qZA()()),2&v){const s=r.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,2,"ITEM.ATTRIBUTE."+s.name+".NAME")),t.xp6(3),t.Oqu(t.lcZ(6,4,"ITEM.ATTRIBUTE."+s.name+".DESCRIPTION"))}}function f(v,r){if(1&v&&(t.TgZ(0,"table",3)(1,"tbody")(2,"tr",4)(3,"td"),t._uU(4),t.ALo(5,"transloco"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"transloco"),t.qZA()(),t.TgZ(9,"tr")(10,"td"),t._uU(11),t.ALo(12,"transloco"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17),t.ALo(18,"transloco"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"transloco"),t.qZA()(),t.YNc(22,i,7,6,"tr",5),t.TgZ(23,"tr",6),t.ALo(24,"transloco"),t.TgZ(25,"td"),t._uU(26),t.ALo(27,"transloco"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"async"),t.ALo(31,"withVersionGroup"),t.qZA()(),t.TgZ(32,"tr",6),t.ALo(33,"transloco"),t.TgZ(34,"td"),t._uU(35),t.ALo(36,"transloco"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.ALo(39,"transloco"),t.qZA()(),t.TgZ(40,"tr",6),t.ALo(41,"transloco"),t.TgZ(42,"td"),t._uU(43),t.ALo(44,"transloco"),t.qZA(),t.TgZ(45,"td"),t._uU(46),t.ALo(47,"transloco"),t.qZA()()()()),2&v){const s=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,16,"UI.ITEM.NAME")),t.xp6(3),t.Oqu(t.lcZ(8,18,"ITEM."+s.item.name+".NAME")),t.xp6(4),t.Oqu(t.lcZ(12,20,"UI.ITEM.COST")),t.xp6(3),t.Oqu(s.item.cost),t.xp6(3),t.Oqu(t.lcZ(18,22,"UI.ITEM.CATEGORY")),t.xp6(3),t.Oqu(t.lcZ(21,24,"ITEM.CATEGORY."+s.item.category.name+".NAME")),t.xp6(2),t.Q6J("ngForOf",s.item.attributes),t.xp6(1),t.s9C("title",t.lcZ(24,26,"UI.ITEM.DESCRIPTION_TITLE")),t.xp6(3),t.Oqu(t.lcZ(27,28,"UI.ITEM.DESCRIPTION")),t.xp6(3),t.hij(" ",t.lcZ(30,30,t.lcZ(31,32,"ITEM."+s.item.name+".FLAVOR_TEXT."))," "),t.xp6(3),t.s9C("title",t.lcZ(33,34,"UI.ITEM.EFFECT_TITLE")),t.xp6(3),t.Oqu(t.lcZ(36,36,"UI.ITEM.EFFECT")),t.xp6(3),t.hij(" ",t.lcZ(39,38,"ITEM."+s.item.name+".EFFECT_ENTRY.EFFECT")," "),t.xp6(2),t.s9C("title",t.lcZ(41,40,"UI.ITEM.EFFECT_TITLE")),t.xp6(3),t.Oqu(t.lcZ(44,42,"UI.ITEM.EFFECT_SHORT")),t.xp6(3),t.hij(" ",t.lcZ(47,44,"ITEM."+s.item.name+".EFFECT_ENTRY.SHORT")," ")}}function o(v,r){1&v&&(t.TgZ(0,"div",7)(1,"div",8)(2,"span",9),t._uU(3),t.ALo(4,"transloco"),t.qZA()()()),2&v&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"LOADING")))}class h{constructor(r,s){this.itemService=r,this.itemAttributeService=s,this.subscriptions=new E.w0}ngOnInit(){this.subscriptions.add(this._subscribeToFetchTranslations())}ngOnDestroy(){this.subscriptions.unsubscribe()}_subscribeToFetchTranslations(){return this.itemService.fetchApiOne(this.itemId).pipe((0,_.w)(r=>(0,g.D)([...r.attributes.map(s=>this.itemAttributeService.fetchApiOne(s.name)),(0,l.of)({})]).pipe((0,c.U)(()=>r)))).subscribe(r=>this.item=r)}}h.\u0275fac=function(r){return new(r||h)(t.Y36(u.e),t.Y36(a))},h.\u0275cmp=t.Xpm({type:h,selectors:[["pokedex-ng-item-detail"]],inputs:{itemId:"itemId"},decls:4,vars:2,consts:[[1,"card","p-1"],["class","table mb-0","aria-describedby","Table of Move Details","aria-hidden","true",4,"ngIf","ngIfElse"],["loading",""],["aria-describedby","Table of Move Details","aria-hidden","true",1,"table","mb-0"],[1,"first-row-border-0"],[4,"ngFor","ngForOf"],[3,"title"],[1,"text-center"],["role","status",1,"spinner-border","m-4",2,"width","3rem","height","3rem"],[1,"sr-only"]],template:function(r,s){if(1&r&&(t.TgZ(0,"div",0),t.YNc(1,f,48,46,"table",1),t.YNc(2,o,5,3,"ng-template",null,2,t.W1O),t.qZA()),2&r){const p=t.MAs(3);t.xp6(1),t.Q6J("ngIf",s.item)("ngIfElse",p)}},dependencies:[n.sg,n.O5,n.Ov,I.Ot,m.T],styles:[".first-row-border-0[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:0}"]})},6370:(D,d,e)=>{e.d(d,{n:()=>T});var E=e(6895),g=e(5380),l=e(2602),_=e(6719),c=e(4650);class T{}T.\u0275fac=function(O){return new(O||T)},T.\u0275mod=c.oAB({type:T}),T.\u0275inj=c.cJS({imports:[E.ez,g.y4,_.m,l.yi.forRoot()]})},6721:(D,d,e)=>{e.d(d,{Z:()=>g});var E=e(4650);class g{constructor(_,c){this.elementRef=_,this.renderer=c}loadFallbackOnError(){this.elementRef.nativeElement.src=this.imgFallback||""}}g.\u0275fac=function(_){return new(_||g)(E.Y36(E.SBq),E.Y36(E.Qsj))},g.\u0275dir=E.lG2({type:g,selectors:[["img","imgFallback",""]],hostBindings:function(_,c){1&_&&E.NdJ("error",function(){return c.loadFallbackOnError()})},inputs:{imgFallback:"imgFallback"}})},4184:(D,d,e)=>{e.d(d,{e:()=>a});var E=e(3903),g=e(9646),l=e(4004),_=e(5698),c=e(4474),T=e(9716),A=e(8342),O=e(45),t=e(4650),M=e(529),I=e(5380);class a extends T.nh{constructor(n,m,i,f,o){super("item",n,m,i),this.http=n,this.translocoService=m,this.languageService=i,this.filterService=f,this.versionGroupService=o}getAllFiltered(){return this.getAll().pipe((0,l.U)(n=>this.filterService.filterByItemPocket(n)),(0,l.U)(n=>this.filterService.filterByItemCategory(n)),(0,l.U)(n=>this.filterService.filterByLocalizedName(n)))}_parseAllTranslations(n){return(0,g.of)(E.Jh.ofMultipleResources(n,"names",(m,i)=>({key:i.language,object:{ITEM:{[m.name]:{NAME:i.name}}}})))}_parseOneTranslation(n){return this.versionGroupService.getAll().pipe((0,_.q)(1),(0,l.U)(m=>{const i=new E.Jh;n.effect_entries.forEach(o=>{i.merge(o.language.name,{ITEM:{[n.name]:{EFFECT_ENTRY:{SHORT:o.short_effect,EFFECT:o.effect}}}})});const f=n.flavor_text_entries.find(o=>"en"===o.language.name)?.text||"ITEM_TRANSLATE_ERROR_001";return m.forEach(o=>{i.merge("en",{ITEM:{[n.name]:{FLAVOR_TEXT:{[o.name]:f}}}})}),n.flavor_text_entries.forEach(o=>{i.merge(o.language.name,{ITEM:{[n.name]:{FLAVOR_TEXT:{[o.version_group.name]:o.text}}}})}),i}))}}a.\u0275fac=function(n){return new(n||a)(t.LFG(M.eN),t.LFG(I.Vn),t.LFG(A.T),t.LFG(c.i),t.LFG(O.H))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},8996:(D,d,e)=>{e.d(d,{q:()=>a});var E=e(3903),g=e(9646),l=e(4004),_=e(5698),c=e(4474),T=e(9716),A=e(8342),O=e(45),t=e(4650),M=e(529),I=e(5380);class a extends T.nh{constructor(n,m,i,f,o){super("move",n,m,i),this.http=n,this.translocoService=m,this.languageService=i,this.versionGroupService=f,this.filterService=o}getAllFiltered(){return this.getAll().pipe((0,l.U)(n=>this.filterService.filterByGeneration(n)),(0,l.U)(n=>this.filterService.filterByType(n)),(0,l.U)(n=>this.filterService.filterByLocalizedName(n)))}_parseAllTranslations(n){const m=new E.Jh;return n.forEach(i=>i.names.forEach(f=>m.merge(f.language,{MOVE:{[i.name]:{NAME:f.name}}}))),(0,g.of)(m)}_parseOneTranslation(n){return this.versionGroupService.getAll().pipe((0,_.q)(1),(0,l.U)(m=>{const i=new E.Jh;n.effect_entries.forEach(o=>{i.merge(o.language.name,{MOVE:{[n.name]:{EFFECT_ENTRY:{SHORT:o.short_effect,EFFECT:o.effect}}}})});const f=n.flavor_text_entries.find(o=>"en"===o.language.name)?.flavor_text||"MOVE_TRANSLATE_ERROR_001";return m.forEach(o=>{i.merge("en",{MOVE:{[n.name]:{FLAVOR_TEXT:{[o.name]:f}}}})}),n.flavor_text_entries.forEach(o=>{i.merge(o.language.name,{MOVE:{[n.name]:{FLAVOR_TEXT:{[o.version_group.name]:o.flavor_text}}}})}),i}))}}a.\u0275fac=function(n){return new(n||a)(t.LFG(M.eN),t.LFG(I.Vn),t.LFG(A.T),t.LFG(O.H),t.LFG(c.i))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},1150:(D,d,e)=>{e.d(d,{S:()=>O});var E=e(3903),g=e(9646),l=e(9716),_=e(8342),c=e(4650),T=e(529),A=e(5380);class O extends l.cm{constructor(M,I,a){super("type",M,I,a),this.http=M,this.translocoService=I,this.languageService=a}_parseAllTranslations(M){const I=new E.Jh;return M.forEach(a=>a.names.forEach(u=>I.merge(u.language,{TYPE:{[a.name]:{NAME:u.name}}}))),(0,g.of)(I)}}O.\u0275fac=function(M){return new(M||O)(c.LFG(T.eN),c.LFG(A.Vn),c.LFG(_.T))},O.\u0275prov=c.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"})}}]);
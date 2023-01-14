"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[592],{2470:(h,I,e)=>{e.d(I,{g:()=>D});var v=e(727),A=e(4128),i=e(9646),f=e(3900),T=e(4004),l=e(3903),u=e(9716),c=e(8342),t=e(4650),O=e(529),g=e(5380);class a extends u.ge{constructor(r,s,p){super("item-attribute",r,s,p),this.http=r,this.translocoService=s,this.languageService=p}_parseOneTranslation(r){return(0,i.of)(l.Jh.mergeMaps([l.Jh.ofSingleResource(r.names,s=>({key:s.language.name,object:{ITEM:{ATTRIBUTE:{[r.name]:{NAME:s.name}}}}})),l.Jh.ofSingleResource(r.descriptions,s=>({key:s.language.name,object:{ITEM:{ATTRIBUTE:{[r.name]:{DESCRIPTION:s.description}}}}}))]))}}a.\u0275fac=function(r){return new(r||a)(t.LFG(O.eN),t.LFG(g.Vn),t.LFG(c.T))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var d=e(4184),n=e(6895),_=e(2361);function E(m,r){if(1&m&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"transloco"),t.qZA()()),2&m){const s=r.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,2,"ITEM.ATTRIBUTE."+s.name+".NAME")),t.xp6(3),t.Oqu(t.lcZ(6,4,"ITEM.ATTRIBUTE."+s.name+".DESCRIPTION"))}}function M(m,r){if(1&m&&(t.TgZ(0,"table",3)(1,"tbody")(2,"tr",4)(3,"td"),t._uU(4),t.ALo(5,"transloco"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"transloco"),t.qZA()(),t.TgZ(9,"tr")(10,"td"),t._uU(11),t.ALo(12,"transloco"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17),t.ALo(18,"transloco"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"transloco"),t.qZA()(),t.YNc(22,E,7,6,"tr",5),t.TgZ(23,"tr",6),t.ALo(24,"transloco"),t.TgZ(25,"td"),t._uU(26),t.ALo(27,"transloco"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"async"),t.ALo(31,"withVersionGroup"),t.qZA()(),t.TgZ(32,"tr",6),t.ALo(33,"transloco"),t.TgZ(34,"td"),t._uU(35),t.ALo(36,"transloco"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.ALo(39,"transloco"),t.qZA()(),t.TgZ(40,"tr",6),t.ALo(41,"transloco"),t.TgZ(42,"td"),t._uU(43),t.ALo(44,"transloco"),t.qZA(),t.TgZ(45,"td"),t._uU(46),t.ALo(47,"transloco"),t.qZA()()()()),2&m){const s=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,16,"UI.ITEM.NAME")),t.xp6(3),t.Oqu(t.lcZ(8,18,"ITEM."+s.item.name+".NAME")),t.xp6(4),t.Oqu(t.lcZ(12,20,"UI.ITEM.COST")),t.xp6(3),t.Oqu(s.item.cost),t.xp6(3),t.Oqu(t.lcZ(18,22,"UI.ITEM.CATEGORY")),t.xp6(3),t.Oqu(t.lcZ(21,24,"ITEM.CATEGORY."+s.item.category.name+".NAME")),t.xp6(2),t.Q6J("ngForOf",s.item.attributes),t.xp6(1),t.s9C("title",t.lcZ(24,26,"UI.ITEM.DESCRIPTION_TITLE")),t.xp6(3),t.Oqu(t.lcZ(27,28,"UI.ITEM.DESCRIPTION")),t.xp6(3),t.hij(" ",t.lcZ(30,30,t.lcZ(31,32,"ITEM."+s.item.name+".FLAVOR_TEXT."))," "),t.xp6(3),t.s9C("title",t.lcZ(33,34,"UI.ITEM.EFFECT_TITLE")),t.xp6(3),t.Oqu(t.lcZ(36,36,"UI.ITEM.EFFECT")),t.xp6(3),t.hij(" ",t.lcZ(39,38,"ITEM."+s.item.name+".EFFECT_ENTRY.EFFECT")," "),t.xp6(2),t.s9C("title",t.lcZ(41,40,"UI.ITEM.EFFECT_TITLE")),t.xp6(3),t.Oqu(t.lcZ(44,42,"UI.ITEM.EFFECT_SHORT")),t.xp6(3),t.hij(" ",t.lcZ(47,44,"ITEM."+s.item.name+".EFFECT_ENTRY.SHORT")," ")}}function o(m,r){1&m&&(t.TgZ(0,"div",7)(1,"div",8)(2,"span",9),t._uU(3),t.ALo(4,"transloco"),t.qZA()()()),2&m&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"LOADING")))}class D{constructor(r,s){this.itemService=r,this.itemAttributeService=s,this.subscriptions=new v.w0}ngOnInit(){this.subscriptions.add(this._subscribeToFetchTranslations())}ngOnDestroy(){this.subscriptions.unsubscribe()}_subscribeToFetchTranslations(){return this.itemService.fetchApiOne(this.itemId).pipe((0,f.w)(r=>(0,A.D)([...r.attributes.map(s=>this.itemAttributeService.fetchApiOne(s.name)),(0,i.of)({})]).pipe((0,T.U)(()=>r)))).subscribe(r=>this.item=r)}}D.\u0275fac=function(r){return new(r||D)(t.Y36(d.e),t.Y36(a))},D.\u0275cmp=t.Xpm({type:D,selectors:[["pokedex-ng-item-detail"]],inputs:{itemId:"itemId"},decls:4,vars:2,consts:[[1,"card","p-1"],["class","table mb-0","aria-describedby","Table of Move Details","aria-hidden","true",4,"ngIf","ngIfElse"],["loading",""],["aria-describedby","Table of Move Details","aria-hidden","true",1,"table","mb-0"],[1,"first-row-border-0"],[4,"ngFor","ngForOf"],[3,"title"],[1,"text-center"],["role","status",1,"spinner-border","m-4",2,"width","3rem","height","3rem"],[1,"sr-only"]],template:function(r,s){if(1&r&&(t.TgZ(0,"div",0),t.YNc(1,M,48,46,"table",1),t.YNc(2,o,5,3,"ng-template",null,2,t.W1O),t.qZA()),2&r){const p=t.MAs(3);t.xp6(1),t.Q6J("ngIf",s.item)("ngIfElse",p)}},dependencies:[n.sg,n.O5,n.Ov,g.Ot,_.T],styles:[".first-row-border-0[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:0}"]})},6370:(h,I,e)=>{e.d(I,{n:()=>l});var v=e(6895),A=e(5380),i=e(2602),f=e(6719),T=e(4650);class l{}l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=T.oAB({type:l}),l.\u0275inj=T.cJS({imports:[v.ez,A.y4,f.m,i.yi.forRoot()]})},4184:(h,I,e)=>{e.d(I,{e:()=>a});var v=e(3903),A=e(9646),i=e(4004),f=e(5698),T=e(4474),l=e(9716),u=e(8342),c=e(45),t=e(4650),O=e(529),g=e(5380);class a extends l.nh{constructor(n,_,E,M,o){super("item",n,_,E),this.http=n,this.translocoService=_,this.languageService=E,this.filterService=M,this.versionGroupService=o}getAllFiltered(){return this.getAll().pipe((0,i.U)(n=>this.filterService.filterByItemPocket(n)),(0,i.U)(n=>this.filterService.filterByItemCategory(n)),(0,i.U)(n=>this.filterService.filterByLocalizedName(n)))}_parseAllTranslations(n){return(0,A.of)(v.Jh.ofMultipleResources(n,"names",(_,E)=>({key:E.language,object:{ITEM:{[_.name]:{NAME:E.name}}}})))}_parseOneTranslation(n){return this.versionGroupService.getAll().pipe((0,f.q)(1),(0,i.U)(_=>{const E=new v.Jh;n.effect_entries.forEach(o=>{E.merge(o.language.name,{ITEM:{[n.name]:{EFFECT_ENTRY:{SHORT:o.short_effect,EFFECT:o.effect}}}})});const M=n.flavor_text_entries.find(o=>"en"===o.language.name)?.text||"ITEM_TRANSLATE_ERROR_001";return _.forEach(o=>{E.merge("en",{ITEM:{[n.name]:{FLAVOR_TEXT:{[o.name]:M}}}})}),n.flavor_text_entries.forEach(o=>{E.merge(o.language.name,{ITEM:{[n.name]:{FLAVOR_TEXT:{[o.version_group.name]:o.text}}}})}),E}))}}a.\u0275fac=function(n){return new(n||a)(t.LFG(O.eN),t.LFG(g.Vn),t.LFG(u.T),t.LFG(T.i),t.LFG(c.H))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},8996:(h,I,e)=>{e.d(I,{q:()=>a});var v=e(3903),A=e(9646),i=e(4004),f=e(5698),T=e(4474),l=e(9716),u=e(8342),c=e(45),t=e(4650),O=e(529),g=e(5380);class a extends l.nh{constructor(n,_,E,M,o){super("move",n,_,E),this.http=n,this.translocoService=_,this.languageService=E,this.versionGroupService=M,this.filterService=o}getAllFiltered(){return this.getAll().pipe((0,i.U)(n=>this.filterService.filterByGeneration(n)),(0,i.U)(n=>this.filterService.filterByType(n)),(0,i.U)(n=>this.filterService.filterByLocalizedName(n)))}_parseAllTranslations(n){const _=new v.Jh;return n.forEach(E=>E.names.forEach(M=>_.merge(M.language,{MOVE:{[E.name]:{NAME:M.name}}}))),(0,A.of)(_)}_parseOneTranslation(n){return this.versionGroupService.getAll().pipe((0,f.q)(1),(0,i.U)(_=>{const E=new v.Jh;n.effect_entries.forEach(o=>{E.merge(o.language.name,{MOVE:{[n.name]:{EFFECT_ENTRY:{SHORT:o.short_effect,EFFECT:o.effect}}}})});const M=n.flavor_text_entries.find(o=>"en"===o.language.name)?.flavor_text||"MOVE_TRANSLATE_ERROR_001";return _.forEach(o=>{E.merge("en",{MOVE:{[n.name]:{FLAVOR_TEXT:{[o.name]:M}}}})}),n.flavor_text_entries.forEach(o=>{E.merge(o.language.name,{MOVE:{[n.name]:{FLAVOR_TEXT:{[o.version_group.name]:o.flavor_text}}}})}),E}))}}a.\u0275fac=function(n){return new(n||a)(t.LFG(O.eN),t.LFG(g.Vn),t.LFG(u.T),t.LFG(c.H),t.LFG(T.i))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},1150:(h,I,e)=>{e.d(I,{S:()=>c});var v=e(3903),A=e(9646),i=e(9716),f=e(8342),T=e(4650),l=e(529),u=e(5380);class c extends i.cm{constructor(O,g,a){super("type",O,g,a),this.http=O,this.translocoService=g,this.languageService=a}_parseAllTranslations(O){const g=new v.Jh;return O.forEach(a=>a.names.forEach(d=>g.merge(d.language,{TYPE:{[a.name]:{NAME:d.name}}}))),(0,A.of)(g)}}c.\u0275fac=function(O){return new(O||c)(T.LFG(l.eN),T.LFG(u.Vn),T.LFG(f.T))},c.\u0275prov=T.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}}]);
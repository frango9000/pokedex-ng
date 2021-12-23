"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[536],{3805:(I,x,s)=>{s.d(x,{Q:()=>X});var e=s(5e3),_=s(9808),m=s(727),v=s(5698),u=s(4474),y=s(9716),F=s(520);let C=(()=>{class r extends y.bQ{constructor(t){super("generation",t),this.http=t}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(F.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var l=s(1393);function O(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"mdb-checkbox",6),e.NdJ("change",function(p){const S=e.CHM(t).$implicit;return e.oxw().onFilterChange(p,S)}),e._uU(1),e.qZA()}if(2&r){const t=d.$implicit;e.Q6J("checked",t.active),e.xp6(1),e.hij("Generation ",t.resource.id,"")}}let f=(()=>{class r{constructor(t,i){this.filterService=t,this.generationService=i,this.selectableGenerations=[],this.subscriptions=new m.w0}ngOnInit(){this.subscriptions.add(this._subscribeToGetAllGenerations())}ngOnDestroy(){this.subscriptions.unsubscribe()}onFilterChange(t,i){i.active=t.checked,this.filterService.setGenerationFilter(this.selectableGenerations.filter(p=>p.active).map(p=>p.resource.id))}_subscribeToGetAllGenerations(){return this.generationService.getAll().pipe((0,v.q)(1)).subscribe(t=>{this.selectableGenerations=t.map(i=>({active:!1,resource:i})),this.subscriptions.add(this._subscribeToGetGenerationFilter())})}_subscribeToGetGenerationFilter(){return this.filterService.getGenerationFilter$().subscribe(t=>{this.selectableGenerations.forEach(i=>{i.active=t.includes(i.resource.id)})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.i),e.Y36(C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-generation-filter"]],decls:7,vars:1,consts:[["mdbDropdown","",1,"btn-group"],["mdbDropdownToggle","","mdbBtn","","color","primary","size","sm","type","button","mdbWavesEffect","",1,"dropdown-toggle","waves-light","p-2"],[1,"dropdown-menu","dropdown-primary"],["class","dropdown-item pr-0",3,"checked","change",4,"ngFor","ngForOf"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","","size","sm",1,"waves-light","p-2",3,"click"],["aria-hidden","true",1,"fas","fa-times"],[1,"dropdown-item","pr-0",3,"checked","change"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2," Generations "),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,O,2,2,"mdb-checkbox",3),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return i.filterService.setGenerationFilter([])}),e._UZ(6,"i",5),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",i.selectableGenerations))},directives:[l.TO,l.Mq,l.mT,l.b6,_.sg,l.bK],styles:[".checkbox-label[_ngcontent-%COMP%]{min-width:120px}mdb-checkbox[_ngcontent-%COMP%]{padding-left:28px}"]}),r})();var b=s(1150),T=s(2395),w=s(2546);function L(r,d){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"mdb-checkbox",7,8),e.NdJ("change",function(p){return e.CHM(t),e.oxw().filterService.setTypesFilterInclusiveness(p.checked)}),e.ALo(3,"async"),e.TgZ(4,"div",9),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"div",10),e.BQk()}if(2&r){const t=e.MAs(2),i=e.oxw();e.xp6(1),e.Q6J("checked",e.lcZ(3,2,i.filterService.getTypesFilterInclusiveness$())),e.xp6(4),e.Oqu(t.checked?"Inclusive":"Exclusive")}}const R=function(r){return{"background-color":r}};function N(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"mdb-checkbox",7),e.NdJ("change",function(p){const S=e.CHM(t).$implicit;return e.oxw().onFilterChange(p,S)}),e.TgZ(1,"div",11),e.ALo(2,"pokeTypeColor"),e._uU(3),e.ALo(4,"uppercase"),e.ALo(5,"transloco"),e.qZA(),e.qZA()}if(2&r){const t=d.$implicit;e.Q6J("checked",t.active),e.xp6(1),e.Q6J("ngStyle",e.VKq(9,R,e.lcZ(2,3,t.resource.name))),e.xp6(2),e.hij(" ",e.lcZ(4,5,e.lcZ(5,7,"TYPE."+t.resource.name+".NAME"))," ")}}let Y=(()=>{class r{constructor(t,i){this.filterService=t,this.typeService=i,this.showTypesExclusivenessToggle=!1,this.selectableTypes=[],this.subscriptions=new m.w0}ngOnInit(){this.subscriptions.add(this._subscribeToGetAllTypes())}ngOnDestroy(){this.subscriptions.unsubscribe()}onFilterChange(t,i){i.active=t.checked,this.filterService.setTypesFilter(this.selectableTypes.filter(p=>p.active).map(p=>p.resource.name))}_subscribeToGetAllTypes(){return this.typeService.getAll().pipe((0,v.q)(1)).subscribe(t=>{this.selectableTypes=t.map(i=>({resource:i,active:!1})),this.subscriptions.add(this._subscribeToGetTypesFilter())})}_subscribeToGetTypesFilter(){return this.filterService.getTypesFilter$().subscribe(t=>{this.selectableTypes.forEach(i=>{i.active=t.some(p=>p===i.resource.name)})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.i),e.Y36(b.S))},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-types-filter"]],inputs:{showTypesExclusivenessToggle:"showTypesExclusivenessToggle"},decls:8,vars:2,consts:[["mdbDropdown","",1,"btn-group"],["mdbDropdownToggle","","mdbBtn","","color","primary","size","sm","type","button","mdbWavesEffect","",1,"dropdown-toggle","waves-light","p-2"],[1,"dropdown-menu","dropdown-primary"],[4,"ngIf"],["class","dropdown-item pr-0",3,"checked","change",4,"ngFor","ngForOf"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","","size","sm",1,"waves-light","p-2",3,"click"],["aria-hidden","true",1,"fas","fa-times"],[1,"dropdown-item","pr-0",3,"checked","change"],["checkbox",""],[1,"checkbox-label","text-center"],[1,"divider","dropdown-divider"],[1,"text-white","px-1","rounded-lg","text-center","checkbox-label",3,"ngStyle"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2," Types "),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,L,7,4,"ng-container",3),e.YNc(5,N,6,11,"mdb-checkbox",4),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return i.filterService.setTypesFilter([])}),e._UZ(7,"i",6),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",i.showTypesExclusivenessToggle),e.xp6(1),e.Q6J("ngForOf",i.selectableTypes))},directives:[l.TO,l.Mq,l.mT,l.b6,_.O5,_.sg,l.bK,_.PC],pipes:[_.Ov,T.g,_.gd,w.Ot],styles:[".checkbox-label[_ngcontent-%COMP%]{min-width:120px}mdb-checkbox[_ngcontent-%COMP%]{padding-left:28px}"]}),r})();var H=s(3735);function M(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"mdb-checkbox",6),e.NdJ("change",function(p){const S=e.CHM(t).$implicit;return e.oxw().onFilterChange(p,S)}),e._uU(1),e.ALo(2,"transloco"),e.qZA()}if(2&r){const t=d.$implicit;e.Q6J("checked",t.active),e.xp6(1),e.Oqu(e.lcZ(2,2,"ITEM.POCKET."+t.resource.name+".NAME"))}}let Z=(()=>{class r{constructor(t,i){this.filterService=t,this.itemPocketService=i,this.selectableItemPockets=[],this.subscriptions=new m.w0}ngOnInit(){this.subscriptions.add(this._subscribeToGetAllItemPockets())}ngOnDestroy(){this.subscriptions.unsubscribe()}onFilterChange(t,i){i.active=t.checked,this.filterService.setItemPocketFilter(this.selectableItemPockets.filter(p=>p.active).map(p=>p.resource.name))}_subscribeToGetAllItemPockets(){return this.itemPocketService.getAll().pipe((0,v.q)(1)).subscribe(t=>{this.selectableItemPockets=t.map(i=>({active:!1,resource:i})),this.subscriptions.add(this._subscribeToGetItemPocketFilter())})}_subscribeToGetItemPocketFilter(){return this.filterService.getItemPocketFilter$().subscribe(t=>{this.selectableItemPockets.forEach(i=>{i.active=t.includes(i.resource.name)})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.i),e.Y36(H.N))},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-item-pocket-filter"]],decls:7,vars:1,consts:[["mdbDropdown","",1,"btn-group"],["mdbDropdownToggle","","mdbBtn","","color","primary","size","sm","type","button","mdbWavesEffect","",1,"dropdown-toggle","waves-light","p-2"],[1,"dropdown-menu","dropdown-primary"],["class","dropdown-item pr-0",3,"checked","change",4,"ngFor","ngForOf"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","","size","sm",1,"waves-light","p-2",3,"click"],["aria-hidden","true",1,"fas","fa-times"],[1,"dropdown-item","pr-0",3,"checked","change"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2," Pockets "),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,M,3,4,"mdb-checkbox",3),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return i.filterService.setItemPocketFilter([])}),e._UZ(6,"i",5),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",i.selectableItemPockets))},directives:[l.TO,l.Mq,l.mT,l.b6,_.sg,l.bK],pipes:[w.Ot],styles:[".checkbox-label[_ngcontent-%COMP%]{min-width:120px}mdb-checkbox[_ngcontent-%COMP%]{padding:4px 4px 4px 28px}"]}),r})();var J=s(2839);function z(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"mdb-checkbox",6),e.NdJ("change",function(p){const S=e.CHM(t).$implicit;return e.oxw().onFilterChange(p,S)}),e._uU(1),e.ALo(2,"transloco"),e.qZA()}if(2&r){const t=d.$implicit;e.Q6J("checked",t.active),e.xp6(1),e.Oqu(e.lcZ(2,2,"ITEM.CATEGORY."+t.resource.name+".NAME"))}}let K=(()=>{class r{constructor(t,i){this.filterService=t,this.itemCategoryService=i,this.selectableItemCategories=[],this.subscriptions=new m.w0}ngOnInit(){this.subscriptions.add(this._subscribeToGetAllItemCategories())}ngOnDestroy(){this.subscriptions.unsubscribe()}onFilterChange(t,i){i.active=t.checked,this.filterService.setItemCategoryFilter(this.selectableItemCategories.filter(p=>p.active).map(p=>p.resource.name))}_subscribeToGetAllItemCategories(){return this.itemCategoryService.getAll().pipe((0,v.q)(1)).subscribe(t=>{this.selectableItemCategories=t.map(i=>({active:!1,resource:i})),this.subscriptions.add(this._subscribeToGetItemCategoryFilter())})}_subscribeToGetItemCategoryFilter(){return this.filterService.getItemCategoryFilter$().subscribe(t=>{this.selectableItemCategories.forEach(i=>{i.active=t.includes(i.resource.name)})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.i),e.Y36(J.F))},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-item-category-filter"]],decls:7,vars:1,consts:[["mdbDropdown","",1,"btn-group"],["mdbDropdownToggle","","mdbBtn","","color","primary","size","sm","type","button","mdbWavesEffect","",1,"dropdown-toggle","waves-light","p-2"],[1,"dropdown-menu","dropdown-primary"],["class","dropdown-item pr-2",3,"checked","change",4,"ngFor","ngForOf"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","","size","sm",1,"waves-light","p-2",3,"click"],["aria-hidden","true",1,"fas","fa-times"],[1,"dropdown-item","pr-2",3,"checked","change"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2," Categories "),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,z,3,4,"mdb-checkbox",3),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return i.filterService.setItemCategoryFilter([])}),e._UZ(6,"i",5),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",i.selectableItemCategories))},directives:[l.TO,l.Mq,l.mT,l.b6,_.sg,l.bK],pipes:[w.Ot],styles:[".checkbox-label[_ngcontent-%COMP%]{min-width:120px}mdb-checkbox[_ngcontent-%COMP%]{padding-left:28px}"]}),r})(),j=(()=>{class r{constructor(t){this.filterService=t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.i))},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-clear-filter"]],decls:2,vars:0,consts:[["mdbBtn","","type","button","color","primary","mdbWavesEffect","","size","sm",1,"px-3","m-0",3,"click"],["aria-hidden","true",1,"fas","fa-times"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.filterService.clearAllFilters()}),e._UZ(1,"i",1),e.qZA())},directives:[l.mT,l.b6],styles:[""]}),r})();function G(r,d){1&r&&e._UZ(0,"pokedex-ng-generation-filter",4)}function Q(r,d){if(1&r&&e._UZ(0,"pokedex-ng-types-filter",5),2&r){const t=e.oxw();e.Q6J("showTypesExclusivenessToggle",t.showTypesExclusivenessToggle)}}function B(r,d){1&r&&e._UZ(0,"pokedex-ng-item-pocket-filter",4)}function V(r,d){1&r&&e._UZ(0,"pokedex-ng-item-category-filter",4)}function $(r,d){1&r&&e._UZ(0,"pokedex-ng-clear-filter")}let X=(()=>{class r{constructor(){this.showTypesFilter=!1,this.showTypesExclusivenessToggle=!1,this.showGenerationFilter=!1,this.showItemPocketFilter=!1,this.showItemCategoryFilter=!1,this.showClearFilter=!0}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["pokedex-ng-filter-toolbar"]],inputs:{showTypesFilter:"showTypesFilter",showTypesExclusivenessToggle:"showTypesExclusivenessToggle",showGenerationFilter:"showGenerationFilter",showItemPocketFilter:"showItemPocketFilter",showItemCategoryFilter:"showItemCategoryFilter",showClearFilter:"showClearFilter"},decls:6,vars:5,consts:[[1,"pokemon-list-filters","d-flex","flex-wrap","align-items-center","justify-content-end","w-100","mb-1"],["class","mr-1",4,"ngIf"],["class","mr-1",3,"showTypesExclusivenessToggle",4,"ngIf"],[4,"ngIf"],[1,"mr-1"],[1,"mr-1",3,"showTypesExclusivenessToggle"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,G,1,0,"pokedex-ng-generation-filter",1),e.YNc(2,Q,1,1,"pokedex-ng-types-filter",2),e.YNc(3,B,1,0,"pokedex-ng-item-pocket-filter",1),e.YNc(4,V,1,0,"pokedex-ng-item-category-filter",1),e.YNc(5,$,1,0,"pokedex-ng-clear-filter",3),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.showGenerationFilter),e.xp6(1),e.Q6J("ngIf",i.showTypesFilter),e.xp6(1),e.Q6J("ngIf",i.showItemPocketFilter),e.xp6(1),e.Q6J("ngIf",i.showItemCategoryFilter),e.xp6(1),e.Q6J("ngIf",i.showClearFilter))},directives:[_.O5,f,Y,Z,K,j],styles:["[_nghost-%COMP%]{width:100%}"]}),r})()},2395:(I,x,s)=>{s.d(x,{g:()=>_});var e=s(5e3);let _=(()=>{class m{transform(u){switch(u){case"normal":return"#9C9C63";case"fighting":return"#AE2A24";case"flying":return"#8E6FEB";case"poison":return"#923A92";case"ground":return"#DBB54D";case"rock":return"#A48F32";case"bug":return"#97A51D";case"ghost":return"#644E88";case"steel":return"#A0A0C0";case"fire":return"#ED6D12";case"water":return"#4578ED";case"grass":return"#69C23D";case"electric":return"#F6C913";case"psychic":return"#F73670";case"ice":return"#7ECECE";case"dragon":return"#5D1EF7";case"dark":return"#644e40";case"fairy":return"#E87890";case"unknown":return"#888";case"shadow":return"#444";default:return"#000"}}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275pipe=e.Yjl({name:"pokeTypeColor",type:m,pure:!0}),m})()},2361:(I,x,s)=>{s.d(x,{T:()=>u});var e=s(3900),_=s(45),m=s(5e3),v=s(2546);let u=(()=>{class y{constructor(C,l){this.gameVersionService=C,this.translateService=l}transform(C){return this.gameVersionService.getActiveVersionGroup$().pipe((0,e.w)(l=>this.translateService.selectTranslate(C+l)))}}return y.\u0275fac=function(C){return new(C||y)(m.Y36(_.H,16),m.Y36(v.Vn,16))},y.\u0275pipe=m.Yjl({name:"withVersionGroup",type:y,pure:!0}),y})()},2839:(I,x,s)=>{s.d(x,{F:()=>C});var e=s(3530),_=s(9646),m=s(9716),v=s(8342),u=s(5e3),y=s(520),F=s(2546);let C=(()=>{class l extends m.cm{constructor(f,b,T){super("item-category",f,b,T),this.http=f,this.translocoService=b,this.languageService=T}_parseAllTranslations(f){return(0,_.of)(e.Jh.ofMultipleResources(f,"names",(b,T)=>({key:T.language,object:{ITEM:{CATEGORY:{[b.name]:{NAME:T.name}}}}})))}}return l.\u0275fac=function(f){return new(f||l)(u.LFG(y.eN),u.LFG(F.Vn),u.LFG(v.T))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3735:(I,x,s)=>{s.d(x,{N:()=>C});var e=s(3530),_=s(9646),m=s(9716),v=s(8342),u=s(5e3),y=s(520),F=s(2546);let C=(()=>{class l extends m.cm{constructor(f,b,T){super("item-pocket",f,b,T),this.http=f,this.translocoService=b,this.languageService=T}_parseAllTranslations(f){return(0,_.of)(e.Jh.ofMultipleResources(f,"names",(b,T)=>({key:T.language,object:{ITEM:{POCKET:{[b.name]:{NAME:T.name}}}}})))}}return l.\u0275fac=function(f){return new(f||l)(u.LFG(y.eN),u.LFG(F.Vn),u.LFG(v.T))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},1150:(I,x,s)=>{s.d(x,{S:()=>C});var e=s(3530),_=s(9646),m=s(9716),v=s(8342),u=s(5e3),y=s(520),F=s(2546);let C=(()=>{class l extends m.cm{constructor(f,b,T){super("type",f,b,T),this.http=f,this.translocoService=b,this.languageService=T}_parseAllTranslations(f){const b=new e.Jh;return f.forEach(T=>T.names.forEach(w=>b.merge(w.language,{TYPE:{[T.name]:{NAME:w.name}}}))),(0,_.of)(b)}}return l.\u0275fac=function(f){return new(f||l)(u.LFG(y.eN),u.LFG(F.Vn),u.LFG(v.T))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8624:(I,x,s)=>{s.d(x,{R:()=>S,X:()=>A});var e=s(5e3),_=s(9646),m=s(4968),v=s(5577),u=s(4004),y=s(8505),F=s(9300),C=s(9468);function l(o,n,c,a){const g=window&&!!window.document&&window.document.documentElement;let h=g&&n?window:c;if(o&&(h=o&&g&&"string"==typeof o?function(o,n,c){return(c?window.document:n).querySelector(o)}(o,c.nativeElement,a):o,!h))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return h}function f(o){return o&&!o.firstChange}const T={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},w={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class L{constructor(n=!0){this.vertical=n,this.propsMap=n?T:w}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function H(o){return["Window","global"].some(c=>Object.prototype.toString.call(o).includes(c))}function M(o,n){return o?n.document.documentElement:null}function Z(o,n){const c=function({container:o,isWindow:n,axis:c}){const{offsetHeightKey:a,clientHeightKey:g}=K(c);return G(o,n,a,g)}(n);return n.isWindow?function(o,n,c){const{axis:a,container:g,isWindow:h}=c,{offsetHeightKey:E,clientHeightKey:D}=K(a),W=o+B(M(h,g),a,h),P=G(n.nativeElement,h,E,D),U=function(o,n,c){const a=n.topKey();if(o.getBoundingClientRect)return o.getBoundingClientRect()[a]+B(o,n,c)}(n.nativeElement,a,h)+P;return{height:o,scrolled:W,totalToScroll:U,isWindow:h}}(c,o,n):function(o,n,c){const{axis:a,container:g}=c;return{height:o,scrolled:g[a.scrollTopKey()],totalToScroll:g[a.scrollHeightKey()],isWindow:!1}}(c,0,n)}function K(o){return{offsetHeightKey:o.offsetHeightKey(),clientHeightKey:o.clientHeightKey()}}function G(o,n,c,a){if(isNaN(o[c])){const g=M(n,o);return g?g[a]:0}return o[c]}function B(o,n,c){const a=n.pageYOffsetKey(),g=n.scrollTopKey(),h=n.offsetTopKey();return isNaN(window.pageYOffset)?M(c,o)[g]:o.ownerDocument?o.ownerDocument.defaultView[a]:o[h]}function V(o,n,c){let a,g;if(o.totalToScroll<=0)return!1;const h=o.isWindow?o.scrolled:o.height+o.scrolled;return c?(a=(o.totalToScroll-h)/o.totalToScroll,g=n.down/10):(a=o.scrolled/(o.scrolled+(o.totalToScroll-h)),g=n.up/10),a<=g}class r{constructor({totalToScroll:n}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,c){this.updateScrollPosition(n),this.updateTotalToScroll(c)}updateTriggeredFlag(n,c){c?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,c){return c?this.triggered.down===n:this.triggered.up===n}}function d(o){const{scrollContainer:n,scrollWindow:c,element:a,fromRoot:g}=o,h=function({windowElement:o,axis:n}){return function(o,n){const c=o.isWindow||n&&!n.nativeElement?n:n.nativeElement;return Object.assign(Object.assign({},o),{container:c})}({axis:n,isWindow:H(o)},o)}({axis:new L(!o.horizontal),windowElement:l(n,c,a,g)}),E=new r({totalToScroll:Z(a,h)}),W={up:o.upDistance,down:o.downDistance};return function(o){let n=(0,m.R)(o.container,"scroll");return o.throttle&&(n=n.pipe((0,C.p)(o.throttle))),n}({container:h.container,throttle:o.throttle}).pipe((0,v.z)(()=>(0,_.of)(Z(a,h))),(0,u.U)(P=>function(o,n,c){const{scrollDown:a,fire:g}=function(o,n,c){const a=function(o,n){return o<n.scrolled}(o,n);return{fire:V(n,c,a),scrollDown:a}}(o,n,c);return{scrollDown:a,fire:g,stats:n}}(E.lastScrollPosition,P,W)),(0,y.b)(({stats:P})=>E.updateScroll(P.scrolled,P.totalToScroll)),(0,F.h)(({fire:P,scrollDown:U,stats:{totalToScroll:q}})=>function(o,n,c){return!!(o&&n||!c&&n)}(o.alwaysCallback,P,E.isTriggeredScroll(q,U))),(0,y.b)(({scrollDown:P,stats:{totalToScroll:U}})=>{E.updateTriggeredFlag(U,P)}),(0,u.U)(k))}function k(o){const{scrollDown:n,stats:{scrolled:c}}=o;return{type:n?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:c}}}let S=(()=>{class o{constructor(c,a){this.element=c,this.zone=a,this.scrolled=new e.vpe,this.scrolledUp=new e.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:c,infiniteScrollDisabled:a,infiniteScrollDistance:g}){const h=f(c),E=f(a),D=f(g),W=!E&&!this.infiniteScrollDisabled||E&&!a.currentValue||D;(h||E||D)&&(this.destroyScroller(),W&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=d({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(c=>this.zone.run(()=>this.handleOnScroll(c)))})}handleOnScroll({type:c,payload:a}){switch(c){case"[NGX_ISE] DOWN":return this.scrolled.emit(a);case"[NGX_ISE] UP":return this.scrolledUp.emit(a);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return o.\u0275fac=function(c){return new(c||o)(e.Y36(e.SBq),e.Y36(e.R0b))},o.\u0275dir=e.lG2({type:o,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[e.TTD]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[],imports:[[]]}),o})()}}]);
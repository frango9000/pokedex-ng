"use strict";(self.webpackChunkpokedex_ng=self.webpackChunkpokedex_ng||[]).push([[640],{7236:(F,d,i)=>{i.r(d),i.d(d,{ItemModule:()=>R});var g=i(6895),u=i(5380),p=i(7296),h=i(2839),n=i(3735),e=i(4184),a=i(6719),s=i(6370),c=i(8153),S=i(515),A=i(262),t=i(4650);let y=(()=>{class o{constructor(r,l){this.itemService=r,this.router=l}resolve(r){return this.itemService.fetchApiOne(r?.params?.item||1).pipe((0,A.K)(()=>(this.router.navigate(["item","1"]),S.E)))}}return o.\u0275fac=function(r){return new(r||o)(t.LFG(e.e),t.LFG(c.F0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Z=i(727),T=i(1135),E=i(6451),v=i(8505),P=i(3900),x=i(4004),b=i(5684),L=i(4474),O=i(8342),k=i(8684),D=i(2470),U=i(3805);function B(o,m){1&o&&t._UZ(0,"pokedex-ng-filter-toolbar",6),2&o&&t.Q6J("showItemPocketFilter",!0)("showItemCategoryFilter",!0)}function $(o,m){if(1&o&&(t.TgZ(0,"tr")(1,"td",12),t._UZ(2,"pokedex-ng-item-detail",13),t.qZA()()),2&o){const r=t.oxw().$implicit;t.xp6(2),t.Q6J("itemId",r.id)}}function N(o,m){if(1&o){const r=t.EpF();t.ynx(0),t.TgZ(1,"tr",7),t.NdJ("click",function(){const I=t.CHM(r).$implicit,C=t.oxw();return t.KtG(C.expandedItem=C.expandedItem===I.id.toString()||C.expandedItem===I.name?"":I.name)}),t.TgZ(2,"td",8),t._uU(3),t.qZA(),t.TgZ(4,"td",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"td",8),t._uU(7),t.ALo(8,"transloco"),t.qZA(),t.TgZ(9,"td",8),t._uU(10),t.qZA(),t.TgZ(11,"td",8),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t.TgZ(14,"td",8),t._uU(15),t.ALo(16,"transloco"),t.qZA()(),t.YNc(17,$,3,1,"tr",11),t.BQk()}if(2&o){const r=m.$implicit,l=t.oxw();t.xp6(3),t.Oqu(r.id),t.xp6(2),t.MGl("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/",r.sprite,"",t.LSH),t.s9C("alt",r.sprite),t.xp6(2),t.Oqu(t.lcZ(8,8,"ITEM."+r.name+".NAME")),t.xp6(3),t.Oqu(r.cost),t.xp6(2),t.Oqu(t.lcZ(13,10,"ITEM.CATEGORY."+r.category+".NAME")),t.xp6(3),t.Oqu(t.lcZ(16,12,"ITEM.POCKET."+r.pocket+".NAME")),t.xp6(2),t.Q6J("ngIf",l.expandedItem===r.id.toString()||l.expandedItem===r.name)}}let M=(()=>{class o{constructor(r,l,f,I,C){this.itemService=r,this.filterService=l,this.languageService=f,this.appNavbarService=I,this.route=C,this.subscriptions=new Z.w0,this._items$=new T.X([]),this._filterChange$=new T.X(!0),this.expandedItem="",this.offset=0,this.increment=72}ngOnInit(){this.route.data.subscribe(r=>{this.expandedItem=r?.item?.name||""}),this.subscriptions.add(this._updateListSubscription()),this.subscriptions.add(this._filterChangesSubscription()),this.appNavbarService.showSearchBar(),this.appNavbarService.showFiltersButton(),this.appNavbarService.showVersionGroupPicker()}ngOnDestroy(){this.subscriptions.unsubscribe(),this.appNavbarService.hideAll(),this.filterService.clearAllFilters()}getItems$(){return this._items$.asObservable()}renderMore(){this._filterChange$.next(!1)}_updateListSubscription(){return this._filterChange$.pipe((0,v.b)(r=>r?this.offset=this.increment:this.offset+=this.increment),(0,P.w)(()=>this.itemService.getAllFiltered()),(0,x.U)(r=>r.slice(0,this.offset))).subscribe(r=>this._items$.next(r))}_filterChangesSubscription(){return(0,E.T)(this.filterService.getQueryFilter$().pipe((0,b.T)(1)),this.filterService.getItemPocketFilter$().pipe((0,b.T)(1)),this.filterService.getItemCategoryFilter$().pipe((0,b.T)(1)),this.languageService.getDisplayLanguage$().pipe((0,b.T)(1))).subscribe(()=>{this._filterChange$.next(!0)})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(e.e),t.Y36(L.i),t.Y36(O.T),t.Y36(k.t),t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["pokedex-ng-item-list"]],decls:22,vars:8,consts:[[1,"item-table-container","w-100","d-flex","flex-column","align-items-center"],["class","item-table",3,"showItemPocketFilter","showItemCategoryFilter",4,"ngIf"],["infiniteScroll","",1,"table-responsive","item-table",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["aria-describedby","Table of Item Details","aria-hidden","true",1,"table","table-hover","table-sm"],["scope","col"],[4,"ngFor","ngForOf"],[1,"item-table",3,"showItemPocketFilter","showItemCategoryFilter"],[3,"click"],[1,"p-0","align-middle"],[1,"align-middle","py-0"],["height","40px",1,"py-0",3,"src","alt"],[4,"ngIf"],["colspan","6"],[3,"itemId"]],template:function(r,l){1&r&&(t.TgZ(0,"div",0),t.YNc(1,B,1,2,"pokedex-ng-filter-toolbar",1),t.ALo(2,"async"),t.TgZ(3,"div",2),t.NdJ("scrolled",function(){return l.renderMore()}),t.TgZ(4,"table",3)(5,"thead")(6,"tr")(7,"th",4),t._uU(8,"Id"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Image"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Cost"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Category"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"Pocket"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,N,18,14,"ng-container",5),t.ALo(21,"async"),t.qZA()()()()),2&r&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,l.appNavbarService.getShowFilters$())),t.xp6(2),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",150),t.xp6(17),t.Q6J("ngForOf",t.lcZ(21,6,l.getItems$())))},dependencies:[g.sg,g.O5,D.g,p.Ry,U.Q,g.Ov,u.Ot],styles:[".item-table[_ngcontent-%COMP%]{max-width:1000px}"]}),o})();const w=[{path:"",component:M},{path:":item",component:M,resolve:{item:y}}];let G=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(w),c.Bz]}),o})(),R=(()=>{class o{constructor(r,l,f){this.itemService=r,this.itemCategoryService=l,this.itemPocketService=f}}return o.\u0275fac=function(r){return new(r||o)(t.LFG(e.e),t.LFG(h.F),t.LFG(n.N))},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,G,s.n,p.Rq,a.m,u.y4]}),o})()},2395:(F,d,i)=>{i.d(d,{g:()=>u});var g=i(4650);let u=(()=>{class p{transform(n,e=!1,a=""){let s=this.getTypeColor(n);if(a?.length){const c=this.getTypeColor(a);s=this.blendColors(s,c)}return e?this.invertColor(s):s}invertColor(n){if(0===n.indexOf("#")&&(n=n.slice(1)),3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),6!==n.length)throw new Error("Invalid HEX color.");const e=(255-parseInt(n.slice(0,2),16)).toString(16),a=(255-parseInt(n.slice(2,4),16)).toString(16),s=(255-parseInt(n.slice(4,6),16)).toString(16);return"#"+this.padZero(e)+this.padZero(a)+this.padZero(s)}padZero(n,e){return e=e||2,(new Array(e).join("0")+n).slice(-e)}blendColors(n,e,a=.5){const[s,c,S]=n.match(/\w\w/g).map(v=>parseInt(v,16)),[A,t,y]=e.match(/\w\w/g).map(v=>parseInt(v,16));return"#"+Math.round(s+(A-s)*a).toString(16).padStart(2,"0")+Math.round(c+(t-c)*a).toString(16).padStart(2,"0")+Math.round(S+(y-S)*a).toString(16).padStart(2,"0")}getTypeColor(n){let e="#000";switch(n){case"normal":e="#9C9C63";break;case"fighting":e="#AE2A24";break;case"flying":e="#8E6FEB";break;case"poison":e="#923A92";break;case"ground":e="#DBB54D";break;case"rock":e="#A48F32";break;case"bug":e="#97A51D";break;case"ghost":e="#644E88";break;case"steel":e="#A0A0C0";break;case"fire":e="#ED6D12";break;case"water":e="#4578ED";break;case"grass":e="#69C23D";break;case"electric":e="#F6C913";break;case"psychic":e="#F73670";break;case"ice":e="#7ECECE";break;case"dragon":e="#5D1EF7";break;case"dark":e="#644e40";break;case"fairy":e="#E87890";break;case"unknown":e="#888";break;case"shadow":e="#444"}return e}}return p.\u0275fac=function(n){return new(n||p)},p.\u0275pipe=g.Yjl({name:"pokeTypeColor",type:p,pure:!0}),p})()},2361:(F,d,i)=>{i.d(d,{T:()=>n});var g=i(3900),u=i(45),p=i(4650),h=i(5380);let n=(()=>{class e{constructor(s,c){this.gameVersionService=s,this.translateService=c}transform(s){return this.gameVersionService.getActiveVersionGroup$().pipe((0,g.w)(c=>this.translateService.selectTranslate(s+c)))}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(u.H,16),p.Y36(h.Vn,16))},e.\u0275pipe=p.Yjl({name:"withVersionGroup",type:e,pure:!0}),e})()}}]);
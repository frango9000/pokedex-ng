(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{IQ7W:function(e,t,r){"use strict";r.d(t,"a",function(){return E});var a=r("2CaP"),n=r("LRne"),i=r("aMbW"),o=r("j3wI"),s=r("lJxs"),c=r("IzEk"),l=r("5+tZ"),f=r("Sirz"),_=r("gOMg"),u=r("fXoL"),g=r("tk/3"),v=r("sYmb");let E=(()=>{class e extends i.b{constructor(e,t,r,a,n){super("item",e,t,r),this.http=e,this.translateService=t,this.languageService=r,this.filterService=a,this.versionGroupService=n}getAllFiltered(){return this.getAll().pipe(Object(s.a)(e=>this.filterService.filterByItemPocket(e)),Object(s.a)(e=>this.filterService.filterByItemCategory(e)),Object(s.a)(e=>this.filterService.filterByLocalizedName(e)))}_parseAllTranslations(e){return Object(n.a)(a.a.ofMultipleResources(e,"names",(e,t)=>({key:t.language,object:{ITEM:{[e.name]:{NAME:t.name}}}})))}_parseOneTranslation(e){return this.languageService.getAllIds$().pipe(Object(c.a)(1),Object(l.a)(t=>this.versionGroupService.getAll().pipe(Object(c.a)(1),Object(s.a)(r=>{const n=new a.a;e.effect_entries.forEach(t=>{n.merge(t.language.name,{ITEM:{[e.name]:{EFFECT_ENTRY:{SHORT:t.short_effect,EFFECT:t.effect}}}})});const i=e.flavor_text_entries.findIndex(e=>"en"===e.language.name),o=i>-1?e.flavor_text_entries[i].flavor_text:"ITEM_TRANSLATE_ERROR_001";return t.forEach(t=>{const a=e.flavor_text_entries.findIndex(e=>e.language.name===t),i=a>-1?e.flavor_text_entries[a].flavor_text:"ITEM_TRANSLATE_ERROR_002";r.forEach(r=>{n.merge(t,{ITEM:{[e.name]:{FLAVOR_TEXT:{[r.name]:a>-1?i:o}}}})})}),e.flavor_text_entries.forEach(t=>{n.merge(t.language.name,{ITEM:{[e.name]:{FLAVOR_TEXT:{[t.version_group.name]:t.flavor_text}}}})}),n}))))}}return e.\u0275fac=function(t){return new(t||e)(u.Xb(g.b),u.Xb(v.d),u.Xb(o.a),u.Xb(f.a),u.Xb(_.a))},e.\u0275prov=u.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
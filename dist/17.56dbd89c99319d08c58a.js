(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/cdV":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){},u=l("ZYCi"),i=function(){function n(n,t){var l=this;this.translate=n,this.router=t,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var e=this.translate.getBrowserLang();this.translate.use(e.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?e:"en"),this.router.events.subscribe(function(n){n instanceof u.d&&window.innerWidth<=992&&l.isToggled()&&l.toggleSidebar()})}return n.prototype.ngOnInit=function(){},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),r=l("A7o+"),a=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Online Interview"])),(n()(),e["\u0275eld"](3,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.toggleSidebar()&&e),e},null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null))],null,null)}var c=l("Ip0R"),d=function(){function n(n,t){var l=this;this.translate=n,this.router=t,this.isActive=!1,this.showMenu="",this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var e=this.translate.getBrowserLang();this.translate.use(e.match(/en|fr|ur|es|it|fa|de/)?e:"en"),this.router.events.subscribe(function(n){n instanceof u.d&&window.innerWidth<=992&&l.isToggled()&&l.toggleSidebar()})}return n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),p=e["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}"]],data:{}});function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,114,"nav",[["class","sidebar"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,c.k,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{sidebarPushRight:0}),(n()(),e["\u0275eld"](3,0,null,null,111,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,8,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e["\u0275nov"](n,5).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),o},null,null)),e["\u0275did"](5,671744,[[2,4]],0,u.n,[u.l,u.a,c.j],{routerLink:[0,"routerLink"]},null),e["\u0275did"](6,1720320,null,2,u.m,[u.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),e["\u0275pad"](9,1),(n()(),e["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-fw fa-dashboard"]],null,null,null,null,null)),(n()(),e["\u0275ted"](11,null,["\xa0"," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](13,0,null,null,8,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e["\u0275nov"](n,14).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),o},null,null)),e["\u0275did"](14,671744,[[4,4]],0,u.n,[u.l,u.a,c.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](15,1),e["\u0275did"](16,1720320,null,2,u.m,[u.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),e["\u0275pad"](19,1),(n()(),e["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-fw fa-table"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0Question "])),(n()(),e["\u0275eld"](22,0,null,null,8,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e["\u0275nov"](n,23).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),o},null,null)),e["\u0275did"](23,671744,[[6,4]],0,u.n,[u.l,u.a,c.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](24,1),e["\u0275did"](25,1720320,null,2,u.m,[u.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,5,{links:1}),e["\u0275qud"](603979776,6,{linksWithHrefs:1}),e["\u0275pad"](28,1),(n()(),e["\u0275eld"](29,0,null,null,0,"i",[["class","fa fa-fw fa-table"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0Keywords "])),(n()(),e["\u0275eld"](31,0,null,null,8,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e["\u0275nov"](n,32).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),o},null,null)),e["\u0275did"](32,671744,[[8,4]],0,u.n,[u.l,u.a,c.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](33,1),e["\u0275did"](34,1720320,null,2,u.m,[u.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,7,{links:1}),e["\u0275qud"](603979776,8,{linksWithHrefs:1}),e["\u0275pad"](37,1),(n()(),e["\u0275eld"](38,0,null,null,0,"i",[["class","fa fa-fw fa-table"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" User "])),(n()(),e["\u0275eld"](40,0,null,null,74,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),e["\u0275eld"](41,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.rltAndLtr()&&e),e},null,null)),(n()(),e["\u0275eld"](42,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](43,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 RTL/LTR"])),(n()(),e["\u0275eld"](45,0,null,null,36,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),e["\u0275eld"](46,0,null,null,5,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.addExpandClass("languages")&&e),e},null,null)),(n()(),e["\u0275eld"](47,0,null,null,4,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](48,0,null,null,0,"i",[["class","fa fa-language"]],null,null,null,null,null)),(n()(),e["\u0275ted"](49,null,["\xa0 "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](51,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),e["\u0275eld"](52,0,null,null,29,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),e["\u0275eld"](53,0,null,null,28,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),e["\u0275eld"](54,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](55,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("en")&&e),e},null,null)),(n()(),e["\u0275ted"](56,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](58,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](59,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("fr")&&e),e},null,null)),(n()(),e["\u0275ted"](60,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](62,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](63,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("ur")&&e),e},null,null)),(n()(),e["\u0275ted"](64,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](66,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](67,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("es")&&e),e},null,null)),(n()(),e["\u0275ted"](68,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](70,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](71,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("it")&&e),e},null,null)),(n()(),e["\u0275ted"](72,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](74,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](75,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("fa")&&e),e},null,null)),(n()(),e["\u0275ted"](76,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](78,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](79,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeLang("de")&&e),e},null,null)),(n()(),e["\u0275ted"](80,null,[" "," "])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](82,0,null,null,32,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),e["\u0275eld"](83,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.addExpandClass("profile")&&e),e},null,null)),(n()(),e["\u0275eld"](84,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](85,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 John Smith"])),(n()(),e["\u0275eld"](87,0,null,null,27,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),e["\u0275eld"](88,0,null,null,26,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),e["\u0275eld"](89,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](90,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),e["\u0275eld"](91,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](92,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),e["\u0275ted"](93,null,[" ",""])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](95,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](96,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),e["\u0275eld"](97,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](98,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(n()(),e["\u0275ted"](99,null,[" ",""])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](101,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](102,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),e["\u0275eld"](103,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](104,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(n()(),e["\u0275ted"](105,null,[" ",""])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](107,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](108,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0,u=n.component;return"click"===t&&(o=!1!==e["\u0275nov"](n,109).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),"click"===t&&(o=!1!==u.onLoggedout()&&o),o},null,null)),e["\u0275did"](109,671744,null,0,u.n,[u.l,u.a,c.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](110,1),(n()(),e["\u0275eld"](111,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](112,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),e["\u0275ted"](113,null,[" ",""])),e["\u0275pid"](131072,r.i,[r.j,e.ChangeDetectorRef])],function(n,t){n(t,1,0,"sidebar",n(t,2,0,t.component.isActive)),n(t,5,0,"/dashboard"),n(t,6,0,n(t,9,0,"router-link-active")),n(t,14,0,n(t,15,0,"/tables")),n(t,16,0,n(t,19,0,"router-link-active")),n(t,23,0,n(t,24,0,"/keywords")),n(t,25,0,n(t,28,0,"router-link-active")),n(t,32,0,n(t,33,0,"/user")),n(t,34,0,n(t,37,0,"router-link-active")),n(t,109,0,n(t,110,0,"/login"))},function(n,t){var l=t.component;n(t,4,0,e["\u0275nov"](t,5).target,e["\u0275nov"](t,5).href),n(t,11,0,e["\u0275unv"](t,11,0,e["\u0275nov"](t,12).transform("Dashboard"))),n(t,13,0,e["\u0275nov"](t,14).target,e["\u0275nov"](t,14).href),n(t,22,0,e["\u0275nov"](t,23).target,e["\u0275nov"](t,23).href),n(t,31,0,e["\u0275nov"](t,32).target,e["\u0275nov"](t,32).href),n(t,49,0,e["\u0275unv"](t,49,0,e["\u0275nov"](t,50).transform("Language"))),n(t,52,0,"languages"===l.showMenu),n(t,56,0,e["\u0275unv"](t,56,0,e["\u0275nov"](t,57).transform("English"))),n(t,60,0,e["\u0275unv"](t,60,0,e["\u0275nov"](t,61).transform("French"))),n(t,64,0,e["\u0275unv"](t,64,0,e["\u0275nov"](t,65).transform("Urdu"))),n(t,68,0,e["\u0275unv"](t,68,0,e["\u0275nov"](t,69).transform("Spanish"))),n(t,72,0,e["\u0275unv"](t,72,0,e["\u0275nov"](t,73).transform("Italian"))),n(t,76,0,e["\u0275unv"](t,76,0,e["\u0275nov"](t,77).transform("Farsi"))),n(t,80,0,e["\u0275unv"](t,80,0,e["\u0275nov"](t,81).transform("German"))),n(t,87,0,"profile"===l.showMenu),n(t,93,0,e["\u0275unv"](t,93,0,e["\u0275nov"](t,94).transform("Profile"))),n(t,99,0,e["\u0275unv"](t,99,0,e["\u0275nov"](t,100).transform("Inbox"))),n(t,105,0,e["\u0275unv"](t,105,0,e["\u0275nov"](t,106).transform("Settings"))),n(t,108,0,e["\u0275nov"](t,109).target,e["\u0275nov"](t,109).href),n(t,113,0,e["\u0275unv"](t,113,0,e["\u0275nov"](t,114).transform("Log Out")))})}var g=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),f=e["\u0275crt"]({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}"]],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,s,a)),e["\u0275did"](1,114688,null,0,i,[r.j,u.l],null,null),(n()(),e["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,null,null,h,p)),e["\u0275did"](3,49152,null,0,d,[r.j,u.l],null,null),(n()(),e["\u0275eld"](4,0,null,null,2,"section",[["class","main-container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](6,212992,null,0,u.p,[u.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(n,t){n(t,1,0),n(t,6,0)},null)}var C=e["\u0275ccf"]("app-layout",g,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,m,f)),e["\u0275did"](1,114688,null,0,g,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),b=l("ebCm"),v=function(){},_=l("C9m0");l.d(t,"LayoutModuleNgFactory",function(){return M});var M=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[C]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.o,c.n,[e.LOCALE_ID,[2,c.w]]),e["\u0275mpd"](4608,b.a,b.a,[]),e["\u0275mpd"](1073742336,c.b,c.b,[]),e["\u0275mpd"](1073742336,u.o,u.o,[[2,u.t],[2,u.l]]),e["\u0275mpd"](1073742336,v,v,[]),e["\u0275mpd"](1073742336,r.g,r.g,[]),e["\u0275mpd"](1073742336,_.a,_.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,u.j,function(){return[[{path:"",component:g,children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"keywords",loadChildren:"./keywords/keywords.module#KeywordsModule"},{path:"user",loadChildren:"./user/user.module#UserModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}]]},[])])})},C1df:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var e=new(function(){function n(){}return n.prototype.getAllStyles=function(n){return window.getComputedStyle(n)},n.prototype.getStyle=function(n,t){return this.getAllStyles(n)[t]},n.prototype.isStaticPositioned=function(n){return"static"===(this.getStyle(n,"position")||"static")},n.prototype.offsetParent=function(n){for(var t=n.offsetParent||document.documentElement;t&&t!==document.documentElement&&this.isStaticPositioned(t);)t=t.offsetParent;return t||document.documentElement},n.prototype.position=function(n,t){var l;void 0===t&&(t=!0);var e={width:0,height:0,top:0,bottom:0,left:0,right:0};if("fixed"===this.getStyle(n,"position"))l=n.getBoundingClientRect();else{var o=this.offsetParent(n);l=this.offset(n,!1),o!==document.documentElement&&(e=this.offset(o,!1)),e.top+=o.clientTop,e.left+=o.clientLeft}return l.top-=e.top,l.bottom-=e.top,l.left-=e.left,l.right-=e.left,t&&(l.top=Math.round(l.top),l.bottom=Math.round(l.bottom),l.left=Math.round(l.left),l.right=Math.round(l.right)),l},n.prototype.offset=function(n,t){void 0===t&&(t=!0);var l=n.getBoundingClientRect(),e=window.pageYOffset-document.documentElement.clientTop,o=window.pageXOffset-document.documentElement.clientLeft,u={height:l.height||n.offsetHeight,width:l.width||n.offsetWidth,top:l.top+e,bottom:l.bottom+e,left:l.left+o,right:l.right+o};return t&&(u.height=Math.round(u.height),u.width=Math.round(u.width),u.top=Math.round(u.top),u.bottom=Math.round(u.bottom),u.left=Math.round(u.left),u.right=Math.round(u.right)),u},n.prototype.positionElements=function(n,t,l,e){var o=e?this.offset(n,!1):this.position(n,!1),u=this.getAllStyles(t),i=t.getBoundingClientRect(),r=l.split("-")[0]||"top",a=l.split("-")[1]||"center",s={height:i.height||t.offsetHeight,width:i.width||t.offsetWidth,top:0,bottom:i.height||t.offsetHeight,left:0,right:i.width||t.offsetWidth};switch(r){case"top":s.top=o.top-(t.offsetHeight+parseFloat(u.marginBottom));break;case"bottom":s.top=o.top+o.height;break;case"left":s.left=o.left-(t.offsetWidth+parseFloat(u.marginRight));break;case"right":s.left=o.left+o.width}switch(a){case"top":s.top=o.top;break;case"bottom":s.top=o.top+o.height-t.offsetHeight;break;case"left":s.left=o.left;break;case"right":s.left=o.left+o.width-t.offsetWidth;break;case"center":"top"===r||"bottom"===r?s.left=o.left+o.width/2-t.offsetWidth/2:s.top=o.top+o.height/2-t.offsetHeight/2}return s.top=Math.round(s.top),s.bottom=Math.round(s.bottom),s.left=Math.round(s.left),s.right=Math.round(s.right),s},n.prototype.getAvailablePlacements=function(n,t){var l=[],e=n.getBoundingClientRect(),o=t.getBoundingClientRect(),u=document.documentElement;return o.width<e.left&&(e.top+e.height/2-t.offsetHeight/2>0&&l.splice(l.length,1,"left"),this.setSecondaryPlacementForLeftRight(e,o,"left",l)),o.height<e.top&&(l.splice(l.length,1,"top"),this.setSecondaryPlacementForTopBottom(e,o,"top",l)),(window.innerWidth||u.clientWidth)-e.right>o.width&&(e.top+e.height/2-t.offsetHeight/2>0&&l.splice(l.length,1,"right"),this.setSecondaryPlacementForLeftRight(e,o,"right",l)),(window.innerHeight||u.clientHeight)-e.bottom>o.height&&(l.splice(l.length,1,"bottom"),this.setSecondaryPlacementForTopBottom(e,o,"bottom",l)),l},n.prototype.setSecondaryPlacementForLeftRight=function(n,t,l,e){var o=document.documentElement;t.height<=n.bottom&&e.splice(e.length,1,l+"-bottom"),(window.innerHeight||o.clientHeight)-n.top>=t.height&&e.splice(e.length,1,l+"-top")},n.prototype.setSecondaryPlacementForTopBottom=function(n,t,l,e){var o=document.documentElement;(window.innerWidth||o.clientWidth)-n.left>=t.width&&e.splice(e.length,1,l+"-left"),t.width<=n.right&&e.splice(e.length,1,l+"-right")},n}());function o(n,t,l,o){var u=Array.isArray(l)?l:[l],i=u.findIndex(function(n){return"auto"===n});i>=0&&["top","right","bottom","left"].forEach(function(n){null==u.find(function(t){return-1!==t.search("^"+n+"|^"+n+"-")})&&u.splice(i++,1,n)});for(var r,a=0,s=0,c=e.getAvailablePlacements(n,t),d=function(l,i){if(null!=c.find(function(n){return n===l})||u.length===i+1){r=l;var d=e.positionElements(n,t,l,o);return a=d.top,s=d.left,"break"}},p=0,h=u.map(function(n,t){return{item:n,index:t}});p<h.length;p++){var g=h[p];if("break"===d(g.item,g.index))break}return t.style.top=a+"px",t.style.left=s+"px",r}},C9m0:function(n,t,l){"use strict";l.d(t,"a",function(){return o}),l("lwpf");var e=l("ebCm"),o=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[e.a]}},n}()},ebCm:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){this.autoClose=!0,this.placement="bottom-left"}},lwpf:function(n,t,l){"use strict";l.d(t,"c",function(){return r}),l.d(t,"b",function(){return a}),l.d(t,"d",function(){return s}),l.d(t,"a",function(){return c});var e,o=l("CcnG"),u=(l("ebCm"),l("C1df")),i=(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])},function(n,t){function l(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}),r=function(){function n(n,t,l){this.dropdown=n,this._elementRef=t,this._renderer=l,this.placement="bottom",this.isOpen=!1}return n.prototype.isEventFrom=function(n){return this._elementRef.nativeElement.contains(n.target)},n.prototype.position=function(n,t){this.applyPlacement(Object(u.a)(n,this._elementRef.nativeElement,t))},n.prototype.applyPlacement=function(n){this._renderer.removeClass(this._elementRef.nativeElement.parentNode,"dropup"),this._renderer.removeClass(this._elementRef.nativeElement.parentNode,"dropdown"),this.placement=n,-1!==n.search("^top")?this._renderer.addClass(this._elementRef.nativeElement.parentNode,"dropup"):this._renderer.addClass(this._elementRef.nativeElement.parentNode,"dropdown")},n}(),a=function(){function n(n,t){this.dropdown=n,this._elementRef=t,this.anchorEl=t.nativeElement}return n.prototype.isEventFrom=function(n){return this._elementRef.nativeElement.contains(n.target)},n}(),s=function(n){function t(t,l){return n.call(this,t,l)||this}return i(t,n),t.prototype.toggleOpen=function(){this.dropdown.toggle()},t}(a),c=function(){function n(n,t){var l=this;this._open=!1,this.openChange=new o.EventEmitter,this.placement=n.placement,this.autoClose=n.autoClose,this._zoneSubscription=t.onStable.subscribe(function(){l._positionMenu()})}return n.prototype.ngOnInit=function(){this._menu&&this._menu.applyPlacement(Array.isArray(this.placement)?this.placement[0]:this.placement)},n.prototype.isOpen=function(){return this._open},n.prototype.open=function(){this._open||(this._open=!0,this._positionMenu(),this.openChange.emit(!0))},n.prototype.close=function(){this._open&&(this._open=!1,this.openChange.emit(!1))},n.prototype.toggle=function(){this.isOpen()?this.close():this.open()},n.prototype.closeFromClick=function(n){this.autoClose&&2!==n.button&&!this._isEventFromToggle(n)&&(!0===this.autoClose?this.close():"inside"===this.autoClose&&this._isEventFromMenu(n)?this.close():"outside"!==this.autoClose||this._isEventFromMenu(n)||this.close())},n.prototype.closeFromOutsideEsc=function(){this.autoClose&&this.close()},n.prototype.ngOnDestroy=function(){this._zoneSubscription.unsubscribe()},n.prototype._isEventFromToggle=function(n){return this._anchor.isEventFrom(n)},n.prototype._isEventFromMenu=function(n){return!!this._menu&&this._menu.isEventFrom(n)},n.prototype._positionMenu=function(){this.isOpen()&&this._menu&&this._menu.position(this._anchor.anchorEl,this.placement)},n}()}}]);
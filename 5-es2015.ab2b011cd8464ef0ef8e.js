(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/2RN":function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return A}));var c=n("9z5Q"),s=n("vkgz"),o=n("Bqtk");class i{}var r=n("fXoL"),a=n("tk/3"),l=n("aceb"),b=n("Mu/K");let p=(()=>{class e extends o.a{constructor(e,t,n){super(e,"employee",t,n),this.nbToaster=t}getAllEmployees(){return this.httpClient.get(`${this.baseUrl}${this.endPoint}/`)}addEmployee(e){const t=new i;return t.name=e,this.httpClient.post(`${this.baseUrl}${this.endPoint}/`,t).pipe(Object(s.a)(()=>{this.nbToaster.success("Created employee.")}))}}return e.\u0275fac=function(t){return new(t||e)(r.ac(a.a),r.ac(l.E),r.ac(b.a))},e.\u0275prov=r.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},providers:[p],imports:[[c.a]]}),e})();var h=n("tyNb"),d=n("lJxs"),f=n("oadg"),m=n("ofXK"),g=n("VGjC"),v=n("3Pt+");function y(e,t){1&e&&r.Sb(0)}function w(e,t){1&e&&r.Sb(0)}let O=(()=>{class e{constructor(e,t,n){this.route=e,this.userService=t,this.postService=n}createChannel(){this.create=this.postService.createChannel({userId:void 0,channelName:this.channelName}).pipe(Object(s.a)(e=>{this.channelName=void 0,this.userService.forceDataRefresh()}))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(h.a),r.Qb(g.a),r.Qb(f.a))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-create-channel"]],decls:16,vars:7,consts:[[4,"ngIf"],[1,"container"],[1,"row"],["nbInput","","type","text",1,"row",3,"ngModel","ngModelChange"],["nbButton","",1,"btn",3,"click"]],template:function(e,t){1&e&&(r.zc(0,y,1,0,"ng-container",0),r.hc(1,"async"),r.zc(2,w,1,0,"ng-container",0),r.hc(3,"async"),r.Wb(4,"nb-card"),r.Wb(5,"nb-card-header"),r.Wb(6,"h6"),r.Bc(7," New Channel "),r.Vb(),r.Vb(),r.Wb(8,"nb-card-body"),r.Wb(9,"div",1),r.Wb(10,"label",2),r.Bc(11,"Channel name:"),r.Vb(),r.Wb(12,"input",3),r.ec("ngModelChange",(function(e){return t.channelName=e})),r.Vb(),r.Wb(13,"div",2),r.Wb(14,"button",4),r.ec("click",(function(){return t.createChannel()})),r.Bc(15,"Create Channel"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&e&&(r.nc("ngIf",r.ic(1,3,t.create)),r.Eb(2),r.nc("ngIf",r.ic(3,5,t.selectedUser)),r.Eb(10),r.nc("ngModel",t.channelName))},directives:[m.m,l.h,l.i,l.g,l.q,v.a,v.e,v.h,l.e],pipes:[m.b],encapsulation:2}),e})();function V(e,t){if(1&e&&(r.Wb(0,"li"),r.Bc(1),r.hc(2,"slice"),r.Vb()),2&e){const e=t.$implicit;r.Eb(1),r.Dc(" ",r.kc(2,1,e.name,0,33)," ")}}function W(e,t){1&e&&r.Sb(0)}let E=(()=>{class e{constructor(e){this.employeeService=e}ngOnInit(){this.getAllEmployees()}getAllEmployees(){this.getEmployeesObservable=this.employeeService.getAllEmployees().pipe(Object(s.a)(e=>{console.log(e)}))}addEmployee(){this.addEmployeeObservable=this.employeeService.addEmployee(this.userName).pipe(Object(s.a)(e=>{console.log(e),this.userName="",this.getAllEmployees()}))}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(p))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-employee-list"]],decls:14,vars:7,consts:[[1,"p-5"],[1,"col","p-3"],[1,"row"],["nbInput","","type","text",3,"ngModel","ngModelChange"],["nbButton","",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(e,t){1&e&&(r.Wb(0,"nb-card",0),r.Wb(1,"h2"),r.Bc(2,"Employee List"),r.Vb(),r.Wb(3,"div",1),r.Wb(4,"div",2),r.Wb(5,"input",3),r.ec("ngModelChange",(function(e){return t.userName=e})),r.Vb(),r.Vb(),r.Wb(6,"div",2),r.Wb(7,"button",4),r.ec("click",(function(){return t.addEmployee()})),r.Bc(8,"Add Employee"),r.Vb(),r.Vb(),r.Vb(),r.Wb(9,"div"),r.zc(10,V,3,5,"li",5),r.hc(11,"async"),r.Vb(),r.Vb(),r.zc(12,W,1,0,"ng-container",6),r.hc(13,"async")),2&e&&(r.Eb(5),r.nc("ngModel",t.userName),r.Eb(5),r.nc("ngForOf",r.ic(11,3,t.getEmployeesObservable)),r.Eb(2),r.nc("ngIf",r.ic(13,5,t.addEmployeeObservable)))},directives:[l.h,l.q,v.a,v.e,v.h,l.e,m.l,m.m],pipes:[m.b,m.t],styles:[""]}),e})();var C=n("eIep"),S=n("IzEk");class I{constructor(e){Object.assign(this,e)}}const j=["modal"];function M(e,t){if(1&e&&(r.Wb(0,"li"),r.Bc(1),r.Vb()),2&e){const e=t.$implicit;r.Eb(1),r.Cc(e.content)}}function N(e,t){if(1&e){const e=r.Xb();r.Wb(0,"nb-card",6),r.Wb(1,"div",7),r.Wb(2,"label"),r.Bc(3,"Content"),r.Vb(),r.Wb(4,"input",8),r.ec("ngModelChange",(function(t){return r.tc(e),r.gc().newPost.content=t})),r.Vb(),r.Vb(),r.Wb(5,"button",9),r.ec("click",(function(){return r.tc(e),r.gc().create()})),r.Bc(6,"Create"),r.Vb(),r.Vb()}if(2&e){const e=r.gc();r.Eb(4),r.nc("ngModel",e.newPost.content)}}function k(e,t){1&e&&r.Sb(0)}let B=(()=>{class e{constructor(e,t){this.postService=e,this.modalService=t,this.newPost=new I}ngOnInit(){this.selectedChannel=this.postService.subjectObservable,this.posts=this.postService.forceRefreshObservable(this.selectedChannel.pipe(Object(C.a)(e=>this.postService.postList({channel:e,user:this.postService.userId}))))}openModal(){this.modalRef=this.modalService.open(this.modal,{context:{}})}create(){this.cr=this.selectedChannel.pipe(Object(S.a)(1),Object(C.a)(e=>this.postService.create(Object.assign(Object.assign({},this.newPost),{channel:e,user:this.postService.userId}))),Object(s.a)(()=>{this.modalRef.close(),this.postService.forceDataRefresh(),this.newPost=new I}))}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(f.a),r.Qb(l.l))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-post-list"]],viewQuery:function(e,t){var n;1&e&&r.Fc(j,!0),2&e&&r.qc(n=r.fc())&&(t.modal=n.first)},decls:14,vars:9,consts:[[1,"d-flex"],[1,"text-capitalize"],["nbButton","",1,"ml-auto","my-0",3,"click"],[4,"ngFor","ngForOf"],["modal",""],[4,"ngIf"],[1,"mw-300","p-4"],[1,"row"],["type","text","nbInput","",3,"ngModel","ngModelChange"],["nbButton","",3,"click"]],template:function(e,t){1&e&&(r.Wb(0,"nb-card"),r.Wb(1,"nb-card-header",0),r.Wb(2,"div",1),r.Bc(3),r.hc(4,"async"),r.Vb(),r.Wb(5,"button",2),r.ec("click",(function(){return t.openModal()})),r.Bc(6,"Add"),r.Vb(),r.Vb(),r.Wb(7,"nb-card-body"),r.zc(8,M,2,1,"li",3),r.hc(9,"async"),r.Vb(),r.Vb(),r.zc(10,N,7,1,"ng-template",null,4,r.Ac),r.zc(12,k,1,0,"ng-container",5),r.hc(13,"async")),2&e&&(r.Eb(3),r.Dc(" ",r.ic(4,3,t.selectedChannel)," Posts "),r.Eb(5),r.nc("ngForOf",r.ic(9,5,t.posts)),r.Eb(4),r.nc("ngIf",r.ic(13,7,t.cr)))},directives:[l.h,l.i,l.e,l.g,m.l,m.m,l.q,v.a,v.e,v.h],pipes:[m.b],encapsulation:2}),e})();function z(e,t){1&e&&r.Rb(0,"app-post-list",2)}const x=[{path:"",component:(()=>{class e{constructor(e){this.channelSelected=e.subjectObservable.pipe(Object(d.a)(e=>null!=e))}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(f.a))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-dashboard"]],decls:5,vars:3,consts:[[1,"row"],["class","col-12 col-lg-6 col-xl-4",4,"ngIf"],[1,"col-12","col-lg-6","col-xl-4"]],template:function(e,t){1&e&&(r.Wb(0,"div",0),r.zc(1,z,1,0,"app-post-list",1),r.hc(2,"async"),r.Rb(3,"app-create-channel",2),r.Rb(4,"app-employee-list",2),r.Vb()),2&e&&(r.Eb(1),r.nc("ngIf",r.ic(2,1,t.channelSelected)))},directives:[m.m,O,E,B],pipes:[m.b],styles:[""]}),e})()}];let P=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[h.g.forChild(x)],h.g]}),e})(),Q=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},providers:[g.a],imports:[[c.a]]}),e})(),R=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[c.a]]}),e})(),A=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},providers:[],imports:[[c.a,P,u,Q,R]]}),e})()}}]);
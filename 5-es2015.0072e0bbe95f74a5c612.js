(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/2RN":function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return g}));var o=n("9z5Q"),s=n("aceb");class r{}var c=n("vkgz"),i=n("fXoL"),l=n("tk/3");let p=(()=>{class e{constructor(e,t){this.httpClient=e,this.nbToaster=t,this.url="https://channel-nest.herokuapp.com/"}getAllEmployees(){return this.httpClient.get(`${this.url}employee/`)}addEmployee(e){const t=new r;return t.name=e,this.httpClient.post(`${this.url}employee/`,t).pipe(Object(c.a)(()=>{this.nbToaster.success("Created employee.")}))}}return e.\u0275fac=function(t){return new(t||e)(i.ac(l.a),i.ac(s.q))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var a=n("tyNb"),b=n("3Pt+"),u=n("ofXK");function m(e,t){if(1&e&&(i.Wb(0,"li"),i.Ac(1),i.Vb()),2&e){const e=t.$implicit;i.Eb(1),i.Cc(" ",e.name," ")}}function d(e,t){1&e&&i.Sb(0)}const y=[{path:"",component:(()=>{class e{constructor(e){this.employeeService=e}ngOnInit(){this.getAllEmployees()}getAllEmployees(){this.getEmployeesObservable=this.employeeService.getAllEmployees().pipe(Object(c.a)(e=>{console.log(e)}))}addEmployee(){this.addEmployeeObservable=this.employeeService.addEmployee(this.userName).pipe(Object(c.a)(e=>{console.log(e),this.userName="",this.getAllEmployees()}))}}return e.\u0275fac=function(t){return new(t||e)(i.Qb(p))},e.\u0275cmp=i.Kb({type:e,selectors:[["app-employee-list"]],decls:14,vars:7,consts:[[1,"p-5"],[1,"col","p-3"],[1,"row"],["nbInput","","type","text",3,"ngModel","ngModelChange"],[1,"row","py-3"],["nbButton","",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(e,t){1&e&&(i.Wb(0,"nb-card",0),i.Wb(1,"h2"),i.Ac(2,"Employee List"),i.Vb(),i.Wb(3,"div",1),i.Wb(4,"div",2),i.Wb(5,"input",3),i.ec("ngModelChange",(function(e){return t.userName=e})),i.Vb(),i.Vb(),i.Wb(6,"div",4),i.Wb(7,"button",5),i.ec("click",(function(){return t.addEmployee()})),i.Ac(8,"Add Employee"),i.Vb(),i.Vb(),i.Vb(),i.Wb(9,"div"),i.yc(10,m,2,1,"li",6),i.hc(11,"async"),i.Vb(),i.Vb(),i.yc(12,d,1,0,"ng-container",7),i.hc(13,"async")),2&e&&(i.Eb(5),i.mc("ngModel",t.userName),i.Eb(5),i.mc("ngForOf",i.ic(11,3,t.getEmployeesObservable)),i.Eb(2),i.mc("ngIf",i.ic(13,5,t.addEmployeeObservable)))},directives:[s.d,s.g,b.a,b.e,b.h,s.b,u.l,u.m],pipes:[u.b],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(y)],a.g]}),e})(),f=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},providers:[p],imports:[[o.a,s.e,h]]}),e})(),g=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},providers:[],imports:[[o.a,f]]}),e})()}}]);
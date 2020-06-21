function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6APc":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployeeListModule",(function(){return E}));var o,c=n("aceb"),i=n("9z5Q"),l=function e(){_classCallCheck(this,e)},r=n("fXoL"),s=n("tk/3"),a=((o=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.allEmployees=[],this.url="https://channel-nest.herokuapp.com/"}return _createClass(e,[{key:"getAllEmployees",value:function(){return this.httpClient.get(this.url)}},{key:"addEmployee",value:function(e){var t=new l;return t.name=e,this.httpClient.post(this.url,t)}}]),e}()).\u0275fac=function(e){return new(e||o)(r.ac(s.a))},o.\u0275prov=r.Mb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),p=n("tyNb"),u=n("vkgz"),b=n("3Pt+"),f=n("ofXK");function h(e,t){if(1&e&&(r.Wb(0,"li"),r.Ac(1),r.Vb()),2&e){var n=t.$implicit;r.Eb(1),r.Cc(" ",n.name," ")}}function y(e,t){1&e&&r.Sb(0)}var m,d,g,v=[{path:"",component:(m=function(){function e(t){_classCallCheck(this,e),this.employeeService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAllEmployees()}},{key:"getAllEmployees",value:function(){this.getEmployeesObservable=this.employeeService.getAllEmployees().pipe(Object(u.a)((function(e){console.log(e)})))}},{key:"addEmployee",value:function(){var e=this;this.addEmployeeObservable=this.employeeService.addEmployee(this.userName).pipe(Object(u.a)((function(t){console.log(t),e.userName="",e.getAllEmployees()})))}}]),e}(),m.\u0275fac=function(e){return new(e||m)(r.Qb(a))},m.\u0275cmp=r.Kb({type:m,selectors:[["app-employee-list"]],decls:13,vars:7,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(e,t){1&e&&(r.Wb(0,"nb-card"),r.Wb(1,"nb-card-header"),r.Wb(2,"h2"),r.Ac(3,"Employee List"),r.Vb(),r.Vb(),r.Wb(4,"div"),r.Wb(5,"input",0),r.ec("ngModelChange",(function(e){return t.userName=e})),r.Vb(),r.Wb(6,"button",1),r.ec("click",(function(){return t.addEmployee()})),r.Ac(7,"Add Employee"),r.Vb(),r.Vb(),r.Wb(8,"div"),r.yc(9,h,2,1,"li",2),r.hc(10,"async"),r.Vb(),r.Vb(),r.yc(11,y,1,0,"ng-container",3),r.hc(12,"async")),2&e&&(r.Eb(5),r.mc("ngModel",t.userName),r.Eb(4),r.mc("ngForOf",r.ic(10,3,t.getEmployeesObservable)),r.Eb(2),r.mc("ngIf",r.ic(12,5,t.addEmployeeObservable)))},directives:[c.c,c.d,b.a,b.e,b.h,f.l,f.m],pipes:[f.b],styles:[""]}),m)}],C=((g=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:g}),g.\u0275inj=r.Nb({factory:function(e){return new(e||g)},imports:[[p.g.forChild(v)],p.g]}),g),E=((d=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:d}),d.\u0275inj=r.Nb({factory:function(e){return new(e||d)},providers:[a],imports:[[i.a,c.e,C]]}),d)}}]);
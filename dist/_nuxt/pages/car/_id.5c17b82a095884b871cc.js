webpackJsonp([1],{"+6eo":function(e,n,i){(e.exports=i("FZ+f")(!1)).push([e.i,"img{max-width:600px}",""])},"3+RQ":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Car"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:null}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"Car"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"make"},arguments:[],directives:[],selectionSet:null},{kind:"Field",alias:null,name:{kind:"Name",value:"model"},arguments:[],directives:[],selectionSet:null},{kind:"Field",alias:null,name:{kind:"Name",value:"photoURL"},arguments:[],directives:[],selectionSet:null},{kind:"Field",alias:null,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:null}]}}]}}],loc:{start:0,end:87}};i.loc.source={body:"query Car($id: ID!) {\n  Car(id: $id) {\n    make\n    model\n    photoURL\n    price\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},HnPA:function(e,n,i){var a=i("+6eo");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("62690cae",a,!1,{sourceMap:!1})},SpE8:function(e,n,i){"use strict";var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return e.Car?i("div",[i("h3",[e._v(e._s(e.Car.make)+" "+e._s(e.Car.model))]),i("p",[e._v(e._s(e.formatCurrency(e.Car.price)))]),i("img",{attrs:{src:e.Car.photoURL,alt:e.Car.model+" photo"}}),i("p",[i("nuxt-link",{attrs:{to:"/"}},[e._v("Home page")])],1)]):e._e()};a._withStripped=!0;var t={render:a,staticRenderFns:[]};n.a=t},"Y+YG":function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i("iewJ"),t=i("SpE8"),r=!1;var l=function(e){r||i("HnPA")},o=i("VU/8")(a.a,t.a,!1,l,null,null);o.options.__file="pages/car/_id.vue",n.default=o.exports},iewJ:function(e,n,i){"use strict";var a=i("3+RQ"),t=i.n(a);n.a={apollo:{Car:{query:t.a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}},methods:{formatCurrency:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e)}},head:function(){return{title:this.Car?this.Car.make+" "+this.Car.model:"Loading"}}}}});
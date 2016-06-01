"use strict";define("minimalin-conf/app",["exports","ember","minimalin-conf/resolver","ember-load-initializers","minimalin-conf/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("minimalin-conf/components/app-version",["exports","ember-cli-app-version/components/app-version","minimalin-conf/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("minimalin-conf/controllers/index",["exports","ember","lodash/lodash"],function(e,t,n){e["default"]=t["default"].Controller.extend({setupPreview:function(){this.get("platform");this.setProperties({dateDisplayed:!0,rainbowMode:!1,rect:!0,round:!1,circleColor:"#AA00FF",hourHandColor:"#AA00FF",minuteHandColor:"#AA00FF",timeColor:"#AA00FF",infoColor:"#AA00FF",dateColor:"#AA00FF",infoText:"z13°"})}.on("init")})}),define("minimalin-conf/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("minimalin-conf/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("minimalin-conf/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","minimalin-conf/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("minimalin-conf/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("minimalin-conf/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("minimalin-conf/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("minimalin-conf/initializers/export-application-global",["exports","ember","minimalin-conf/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("minimalin-conf/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("minimalin-conf/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("minimalin-conf/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("minimalin-conf/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("minimalin-conf/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("minimalin-conf/router",["exports","ember","minimalin-conf/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("minimalin-conf/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("minimalin-conf/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("minimalin-conf/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"minimalin-conf/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("minimalin-conf/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:4,column:4},end:{line:19,column:4}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("g"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("rect");e.setAttribute(a,"x","33.635"),e.setAttribute(a,"y","11.156"),e.setAttribute(a,"width","287.73"),e.setAttribute(a,"height","335.685"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("g"),r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M33.635,177.709h13c1.105,0,2,0.895,2,2s-0.895,2-2,2h-13"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M309.588,255.042l11.777,6.802v-4.599l-9.779-5.664c-0.314-0.181-0.658-0.267-0.997-0.267\n		 c-0.691,0-1.362,0.357-1.733,0.999C308.304,253.268,308.632,254.49,309.588,255.042z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M67.379,163.604v1.887h1.887v28.437h-1.887v1.887H57.9v-1.887h-1.887v-5.705h3.773v3.796h5.705\n		 v-9.456H57.9v-1.909h-1.887V165.49H57.9v-1.887H67.379z M59.787,178.766h5.705v-11.366h-5.705V178.766z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M286.283,230.795h1.887v1.909v11.366v1.887h-1.887v1.909h-7.592v9.456h9.479v3.796h-13.252\n		 v-13.252v-1.909h1.887v-1.887h1.887h5.705v-11.366h-5.705v3.796h-3.773v-5.705h1.887v-1.887h9.479V230.795z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M303.219,228.93v1.909h1.887v28.392h-1.887v1.887h-9.479v-1.887h-1.887v-26.527v-1.864h1.887\n		 v-1.909H303.219z M301.332,257.322v-24.596h-5.705v24.596H301.332z"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=e.childAt(a,[1]),i=e.childAt(a,[3]),l=new Array(2);return l[0]=e.createAttrMorph(r,"fill"),l[1]=e.createAttrMorph(i,"fill"),l},statements:[["attribute","fill",["concat",[["get","backgroundColor",["loc",[null,[6,20],[6,35]]]]]]],["attribute","fill",["concat",[["get","timeColor",["loc",[null,[7,17],[7,26]]]]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:20,column:4},end:{line:36,column:4}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("g"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("circle");e.setAttribute(a,"cx","177.5"),e.setAttribute(a,"cy","177.5"),e.setAttribute(a,"r","177.5"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("g"),r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M318.588,260.24l12.087,6.979c0.671-1.143,1.329-2.295,1.975-3.454l-12.064-6.987\n	       c-0.314-0.181-0.658-0.267-0.997-0.267c-0.691,0-1.362,0.357-1.733,0.999C317.304,258.466,317.632,259.688,318.588,260.24z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M13,177.709H0.003c0.001,1.337,0.02,2.67,0.051,4H13c1.105,0,2-0.895,2-2\n	       S14.105,177.709,13,177.709z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M33.744,163.604v1.887h1.887v28.437h-1.887v1.887h-9.479v-1.887h-1.887v-5.705h3.773v3.796h5.705\n	       v-9.456h-7.592v-1.909h-1.887V165.49h1.887v-1.887H33.744z M26.152,178.766h5.705v-11.366h-5.705V178.766z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M294.366,235.409h1.887v1.909v11.366v1.887h-1.887v1.909h-7.592v9.456h9.479v3.796h-13.252V252.48\n	       v-1.909h1.887v-1.887h1.887h5.705v-11.366h-5.705v3.796h-3.773v-5.705h1.887v-1.887h9.479V235.409z"),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M311.301,233.545v1.909h1.887v28.392h-1.887v1.887h-9.479v-1.887h-1.887v-26.527v-1.864h1.887\n	       v-1.909H311.301z M309.415,261.936V237.34h-5.705v24.596H309.415z"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=e.childAt(a,[1]),i=e.childAt(a,[3]),l=new Array(2);return l[0]=e.createAttrMorph(r,"fill"),l[1]=e.createAttrMorph(i,"fill"),l},statements:[["attribute","fill",["concat",[["get","backgroundColor",["loc",[null,[22,22],[22,37]]]]]]],["attribute","fill",["concat",[["get","timeColor",["loc",[null,[23,17],[23,26]]]]]]]],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:40,column:4},end:{line:44,column:4}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("path");e.setAttribute(n,"d","M171.237,179.985c-0.413-1.477-0.263-3.113,0.55-4.555c1.624-2.885,5.279-3.907,8.163-2.283\n		                             l90.541,50.972c2.885,1.623,3.908,5.28,2.283,8.163c-1.624,2.885-5.279,3.907-8.163,2.283l-90.541-50.972\n		                             C172.627,182.782,171.65,181.462,171.237,179.985z"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(1);return r[0]=e.createAttrMorph(a,"fill"),r},statements:[["attribute","fill",["concat",[["get","minuteHandColor",["loc",[null,[41,20],[41,35]]]]]]]],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:45,column:4},end:{line:55,column:4}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("g"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("path");e.setAttribute(a,"style","fill:#FF0000;"),e.setAttribute(a,"d","M249.613,224.159c-0.412-1.477-0.261-3.113,0.552-4.554c1.625-2.884,5.281-3.905,8.164-2.278\n				     l12.136,6.841c2.884,1.624,3.905,5.282,2.278,8.164c-1.625,2.884-5.281,3.905-8.164,2.278l-12.136-6.841\n				     C251.002,226.957,250.026,225.637,249.613,224.159z"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("rect");e.setAttribute(a,"x","240.663"),e.setAttribute(a,"y","207.633"),e.setAttribute(a,"transform","matrix(-0.491 0.8711 -0.8711 -0.491 557.3557 109.6127)"),e.setAttribute(a,"style","fill:#FF5500;"),e.setAttribute(a,"width","11.987"),e.setAttribute(a,"height","19.989"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("rect");e.setAttribute(a,"x","223.112"),e.setAttribute(a,"y","197.563"),e.setAttribute(a,"transform","matrix(-0.491 0.8711 -0.8711 -0.491 522.5681 110.152)"),e.setAttribute(a,"style","fill:#FFAA00;"),e.setAttribute(a,"width","11.987"),e.setAttribute(a,"height","20.342"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("rect");e.setAttribute(a,"x","204.992"),e.setAttribute(a,"y","186.893"),e.setAttribute(a,"transform","matrix(-0.491 0.8711 -0.8711 -0.491 486.6548 110.7089)"),e.setAttribute(a,"style","fill:#00AA00;"),e.setAttribute(a,"width","11.987"),e.setAttribute(a,"height","21.257"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("rect");e.setAttribute(a,"x","184.363"),e.setAttribute(a,"y","172.842"),e.setAttribute(a,"transform","matrix(-0.491 0.8711 -0.8711 -0.491 445.7671 111.3428)"),e.setAttribute(a,"style","fill:#0055FF;"),e.setAttribute(a,"width","11.987"),e.setAttribute(a,"height","26.104"),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:57,column:4},end:{line:62,column:4}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("g"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("path");e.setAttribute(a,"d","M173.774,215.148v1.885h1.885v1.907v9.447h-1.885v3.792h1.885v11.355v1.907h-1.885v1.885h-9.47v-1.885h-1.885v-5.7h3.77v3.792h5.7V232.18h-5.7v-3.792h5.7v-9.447h-5.7v3.792h-3.77v-5.7h1.885v-1.885H173.774z"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("path");e.setAttribute(a,"d","M181.202,215.148h7.585v32.179h-3.792v-28.386h-3.792V215.148z"),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(1);return r[0]=e.createAttrMorph(a,"fill"),r},statements:[["attribute","fill",["concat",[["get","dateColor",["loc",[null,[58,15],[58,24]]]]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:66,column:0}},moduleName:"minimalin-conf/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"id","preview");var a=e.createTextNode("\n  ");e.appendChild(n,a),e.setNamespace("http://www.w3.org/2000/svg");var a=e.createElement("svg");e.setAttribute(a,"version","1.1"),e.setAttribute(a,"xmlns","http://www.w3.org/2000/svg"),e.setAttribute(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute(a,"x","0px"),e.setAttribute(a,"y","0px"),e.setAttribute(a,"viewBox","0 0 355 355"),e.setAttribute(a,"enable-background","new 0 0 355 355"),e.setAttributeNS(a,"http://www.w3.org/XML/1998/namespace","xml:space","preserve");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("    ");e.appendChild(a,r);var r=e.createElement("text");e.setAttribute(r,"text-anchor","middle"),e.setAttribute(r,"x","177.5"),e.setAttribute(r,"y","123"),e.setAttribute(r,"style","font-family:'nupe'; font-size:46;");var i=e.createComment("");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("path");e.setAttribute(r,"d","M178.826,172.512l-79.34-5.741c-3.301-0.24-6.173,2.244-6.411,5.546\n		c-0.24,3.302,2.243,6.172,5.546,6.411l79.135,5.726C178.007,184.844,179.132,172.162,178.826,172.512z"),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("    ");e.appendChild(a,r);var r=e.createElement("circle");e.setAttribute(r,"cx","177.5"),e.setAttribute(r,"cy","178.499"),e.setAttribute(r,"r","9.991"),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n),e.setNamespace(null);var n=e.createElement("div");e.setAttribute(n,"id","preview_spacer"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=e.childAt(a,[4]),i=e.childAt(a,[6]),l=e.childAt(a,[11]),d=new Array(9);return d[0]=e.createMorphAt(a,1,1),d[1]=e.createMorphAt(a,2,2),d[2]=e.createAttrMorph(r,"fill"),d[3]=e.createMorphAt(r,0,0),d[4]=e.createAttrMorph(i,"fill"),d[5]=e.createMorphAt(a,8,8),d[6]=e.createMorphAt(a,9,9),d[7]=e.createAttrMorph(l,"fill"),d[8]=e.createMorphAt(a,13,13),d},statements:[["block","if",[["get","rect",["loc",[null,[4,10],[4,14]]]]],[],0,null,["loc",[null,[4,4],[19,11]]]],["block","if",[["get","round",["loc",[null,[20,10],[20,15]]]]],[],1,null,["loc",[null,[20,4],[36,11]]]],["attribute","fill",["concat",[["get","infoColor",["loc",[null,[37,57],[37,66]]]]]]],["content","infoText",["loc",[null,[37,112],[37,124]]]],["attribute","fill",["concat",[["get","hourHandColor",["loc",[null,[38,18],[38,31]]]]]]],["block","unless",[["get","rainbowMode",["loc",[null,[40,14],[40,25]]]]],[],2,null,["loc",[null,[40,4],[44,15]]]],["block","if",[["get","rainbowMode",["loc",[null,[45,10],[45,21]]]]],[],3,null,["loc",[null,[45,4],[55,11]]]],["attribute","fill",["concat",[["get","circleColor",["loc",[null,[56,20],[56,31]]]]]]],["block","if",[["get","dateDisplayed",["loc",[null,[57,10],[57,23]]]]],[],4,null,["loc",[null,[57,4],[62,11]]]]],locals:[],templates:[e,t,n,a,r]}}())}),define("minimalin-conf/config/environment",["ember"],function(e){var t="minimalin-conf";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("minimalin-conf/app")["default"].create({name:"minimalin-conf",version:"0.0.0+07fd0553"});
//# sourceMappingURL=minimalin-conf.map
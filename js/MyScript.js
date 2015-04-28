
var shoppingCartModule = angular.module("technologyCart", [])
shoppingCartModule.controller("technologyController",
    function($scope) {
        $scope.items = [
            {name: "Product 1", price: 50, rank:5},
            {name: "Product 2", price: 20, rank: 3},
            {name: "Product 3", price: 180, rank: 4}
        ];
        $scope.update = function(index,isToUpdate) {
            if(isToUpdate)
            {
                alert('The action updated');
            }
            $scope.items.splice(index, 1);
        }
    }
);
shoppingCartModule.controller("testController",
    function($scope) {
        $scope.names = [
            {name:"Segu"},
            {name:"Start"}
        ];
    }
);

shoppingCartModule.controller("projectController",
    function($scope){
        $scope.technologies=[{Name:"Java"}, {Name:"Tes"}];
        $scope.projects = [
            {name:"Test1", ProjectDetails:"bakchod"}
        ];
    }
);


/**
 * Created by quantsegu on 28/4/15.
 */


(function(e,t,n,r){"use strict";var i=t.module("ngDragDrop",[]).service("ngDragDropService",["$timeout","$parse",function(s,o){this.draggableScope=null;this.droppableScope=null;this.callEventCallback=function(e,t,r,i){function l(t){var r=t.indexOf("(")!==-1?t.indexOf("("):t.length,i=t.lastIndexOf(")")!==-1?t.lastIndexOf(")"):t.length,s=t.substring(r+1,i),u=t.match(/^[^.]+.\s*/)[0].slice(0,-1);u=e[u]&&typeof e[u].constructor==="function"?u:null;return{callback:t.substring(u&&u.length+1||0,r),args:n.map(s&&s.split(",")||[],function(t){return o(t)(e)}),constructor:u}}if(!t)return;var s=l(t),u=s.callback,a=s.constructor,f=[r,i].concat(s.args);e.$apply((e[u]||e[a][u]).apply(e,f))};this.invokeDrop=function(e,n,o,u){var a="",f="",l={},c={},h=null,p={},d={},v,m,g=null,y=this.droppableScope,b=this.draggableScope;a=e.ngattr("ng-model");f=n.ngattr("ng-model");v=b.$eval(a);m=y.$eval(f);g=n.find("[jqyoui-draggable]:last,[data-jqyoui-draggable]:last");c=y.$eval(n.attr("jqyoui-droppable")||n.attr("data-jqyoui-droppable"))||[];l=b.$eval(e.attr("jqyoui-draggable")||e.attr("data-jqyoui-draggable"))||[];l.index=this.fixIndex(b,l,v);c.index=this.fixIndex(y,c,m);h=t.isArray(v)?l.index:null;p=t.isArray(v)?v[h]:v;if(l.deepCopy){p=t.copy(p)}if(t.isArray(m)&&c&&c.index!==r){d=m[c.index]}else if(!t.isArray(m)){d=m}else{d={}}if(c.deepCopy){d=t.copy(d)}if(l.animate===true){this.move(e,g.length>0?g:n,null,"fast",c,null);this.move(g.length>0&&!c.multiple?g:[],e.parent("[jqyoui-droppable],[data-jqyoui-droppable]"),i.startXY,"fast",c,t.bind(this,function(){s(t.bind(this,function(){e.css({position:"relative",left:"",top:""});g.css({position:"relative",left:"",top:"",display:g.css("display")==="none"?"":g.css("display")});this.mutateDraggable(b,c,l,a,f,d,e);this.mutateDroppable(y,c,l,f,p,h);this.callEventCallback(y,c.onDrop,o,u)}))}))}else{s(t.bind(this,function(){this.mutateDraggable(b,c,l,a,f,d,e);this.mutateDroppable(y,c,l,f,p,h);this.callEventCallback(y,c.onDrop,o,u)}))}};this.move=function(t,n,i,s,o,u){if(t.length===0){if(u){e.setTimeout(function(){u()},300)}return false}var a=t.css("z-index"),f=t[o.containment||"offset"](),l=n.css("display"),c=n.hasClass("ng-hide");if(i===null&&n.length>0){if((n.attr("jqyoui-draggable")||n.attr("data-jqyoui-draggable"))!==r&&n.ngattr("ng-model")!==r&&n.is(":visible")&&o&&o.multiple){i=n[o.containment||"offset"]();if(o.stack===false){i.left+=n.outerWidth(true)}else{i.top+=n.outerHeight(true)}}else{if(c)n.removeClass("ng-hide");i=n.css({visibility:"hidden",display:"block"})[o.containment||"offset"]();n.css({visibility:"",display:l})}}t.css({position:"absolute","z-index":9999}).css(f).animate(i,s,function(){if(c)n.addClass("ng-hide");t.css("z-index",a);if(u)u()})};this.mutateDroppable=function(e,n,r,i,s,u){var a=e.$eval(i);e.dndDragItem=s;if(t.isArray(a)){if(n&&n.index>=0){a[n.index]=s}else{a.push(s)}if(r&&r.placeholder===true){a[a.length-1]["jqyoui_pos"]=u}}else{o(i+" = dndDragItem")(e);if(r&&r.placeholder===true){a["jqyoui_pos"]=u}}};this.mutateDraggable=function(e,n,i,s,u,a,f){var l=t.equals(a,{})||!a,c=e.$eval(s);e.dndDropItem=a;if(i&&i.placeholder){if(i.placeholder!="keep"){if(t.isArray(c)&&i.index!==r){c[i.index]=a}else{o(s+" = dndDropItem")(e)}}}else{if(t.isArray(c)){if(l){if(i&&i.placeholder!==true&&i.placeholder!=="keep"){c.splice(i.index,1)}}else{c[i.index]=a}}else{o(s+" = dndDropItem")(e);if(e.$parent){o(s+" = dndDropItem")(e.$parent)}}}f.css({"z-index":"",left:"",top:""})};this.fixIndex=function(e,n,i){if(n.applyFilter&&t.isArray(i)&&i.length>0){var s=e[n.applyFilter](),o=s[n.index],u=r;i.forEach(function(e,n){if(t.equals(e,o)){u=n}});return u}return n.index}}]).directive("jqyouiDraggable",["ngDragDropService",function(e){return{require:"?jqyouiDroppable",restrict:"A",link:function(n,r,s){var o,u,a;var f=function(f,l){if(f){o=n.$eval(r.attr("jqyoui-draggable")||r.attr("data-jqyoui-draggable"))||{};u=n.$eval(s.jqyouiOptions)||{};r.draggable({disabled:false}).draggable(u).draggable({start:function(r,s){e.draggableScope=n;a=t.element(u.helper?s.helper:this).css("z-index");t.element(u.helper?s.helper:this).css("z-index",9999);i.startXY=t.element(this)[o.containment||"offset"]();e.callEventCallback(n,o.onStart,r,s)},stop:function(r,i){t.element(u.helper?i.helper:this).css("z-index",a);e.callEventCallback(n,o.onStop,r,i)},drag:function(t,r){e.callEventCallback(n,o.onDrag,t,r)}})}else{r.draggable({disabled:true})}};n.$watch(function(){return n.$eval(s.drag)},f);f();r.on("$destroy",function(){r.draggable({disabled:true}).draggable("destroy")})}}}]).directive("jqyouiDroppable",["ngDragDropService",function(e){return{restrict:"A",priority:1,link:function(n,r,i){var s;var o=function(o,u){if(o){s=n.$eval(t.element(r).attr("jqyoui-droppable")||t.element(r).attr("data-jqyoui-droppable"))||{};r.droppable({disabled:false}).droppable(n.$eval(i.jqyouiOptions)||{}).droppable({over:function(t,r){e.callEventCallback(n,s.onOver,t,r)},out:function(t,r){e.callEventCallback(n,s.onOut,t,r)},drop:function(r,o){if(t.element(o.draggable).ngattr("ng-model")&&i.ngModel){e.droppableScope=n;e.invokeDrop(t.element(o.draggable),t.element(this),r,o)}else{e.callEventCallback(n,s.onDrop,r,o)}}})}else{r.droppable({disabled:true})}};n.$watch(function(){return n.$eval(i.drop)},o);o();r.on("$destroy",function(){r.droppable({disabled:true}).droppable("destroy")})}}}]);t.element.prototype.ngattr=function(e,n){var r=t.element(this).get(0);return r.getAttribute(e)||r.getAttribute("data-"+e)}})(window,window.angular,window.jQuery)
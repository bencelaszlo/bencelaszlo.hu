(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{328:function(t,e,n){},329:function(t,e,n){},330:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(48),n(190),n(107);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function c(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function a(t){return/^tel:/.test(t)}function l(t){if(c(t))return t;var e=t.match(r),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return o.test(s)?t:s+".html"+n}function f(t,e,n){if(!t)return n;for(var r,i=e;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||n}},331:function(t,e,n){},332:function(t,e,n){},333:function(t,e,n){"use strict";var r=n(328);n.n(r).a},334:function(t,e,n){"use strict";var r=n(329);n.n(r).a},335:function(t,e,n){"use strict";var r=n(13),i=n(6),o=n(108),s=n(19),c=n(12),u=n(24),a=n(336),l=n(49),f=n(4),p=n(50),h=n(79).f,d=n(31).f,v=n(14).f,g=n(191).trim,m=i.Number,_=m.prototype,b="Number"==u(p(_)),$=function(t){var e,n,r,i,o,s,c,u,a=l(t,!1);if("string"==typeof a&&a.length>2)if(43===(e=(a=g(a)).charCodeAt(0))||45===e){if(88===(n=a.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+a}for(s=(o=a.slice(2)).length,c=0;c<s;c++)if((u=o.charCodeAt(c))<48||u>i)return NaN;return parseInt(o,r)}return+a};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(b?f((function(){_.valueOf.call(n)})):"Number"!=u(n))?a(new m($(e)),n,k):$(e)},y=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)c(m,x=y[I])&&!c(k,x)&&v(k,x,d(m,x));k.prototype=_,_.constructor=k,s(i,"Number",k)}},336:function(t,e,n){var r=n(7),i=n(109);t.exports=function(t,e,n){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},337:function(t,e,n){var r=n(188),i=n(181),o=n(338),s=n(342);t.exports=function(t,e){if(null==t)return{};var n=r(s(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},338:function(t,e,n){var r=n(114),i=n(339),o=n(106);t.exports=function(t,e,n){for(var s=-1,c=e.length,u={};++s<c;){var a=e[s],l=r(t,a);n(l,a)&&i(u,o(a,t),l)}return u}},339:function(t,e,n){var r=n(340),i=n(106),o=n(112),s=n(78),c=n(51);t.exports=function(t,e,n,u){if(!s(t))return t;for(var a=-1,l=(e=i(e,t)).length,f=l-1,p=t;null!=p&&++a<l;){var h=c(e[a]),d=n;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(a!=f){var v=p[h];void 0===(d=u?u(v,h,p):void 0)&&(d=s(v)?v:o(e[a+1])?[]:{})}r(p,h,d),p=p[h]}return t}},340:function(t,e,n){var r=n(341),i=n(111),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},341:function(t,e,n){var r=n(189);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},342:function(t,e,n){var r=n(182),i=n(343),o=n(345);t.exports=function(t){return r(t,o,i)}},343:function(t,e,n){var r=n(110),i=n(344),o=n(183),s=n(184),c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:s;t.exports=c},344:function(t,e,n){var r=n(187)(Object.getPrototypeOf,Object);t.exports=r},345:function(t,e,n){var r=n(185),i=n(346),o=n(113);t.exports=function(t){return o(t)?r(t,!0):i(t)}},346:function(t,e,n){var r=n(78),i=n(186),o=n(347),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var c in t)("constructor"!=c||!e&&s.call(t,c))&&n.push(c);return n}},347:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},348:function(t,e,n){},355:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return p}));n(15);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,371,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(333),n(9)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(334),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(335),n(80)),u=n.n(c),a=n(337),l=n.n(a),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},p=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},356:function(t,e,n){"use strict";var r=n(3),i=n(34).findIndex,o=n(116),s=n(25),c=!0,u=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},357:function(t,e,n){"use strict";var r=n(331);n.n(r).a},358:function(t,e,n){"use strict";var r=n(332);n.n(r).a},359:function(t,e,n){"use strict";var r=n(348);n.n(r).a},372:function(t,e,n){"use strict";n.r(e);n(15),n(356);var r,i=n(330),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),r=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-r-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},s=(n(357),n(9));function c(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var u={components:{Sticker:Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),r=e.top-n.top;r<20?this.$el.scrollTop=this.$el.scrollTop+r-20:r+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var r=e&&document.getElementById(e);r&&window.scrollTo(0,c(r)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===r&&(r=c(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,o=function(e){t.activeIndex=e};i<n.length;i++){if(!(c(document.getElementById(n[i].slug))-50<e)){i||o(i);break}o(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},a=(n(358),{components:{Toc:Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,r){return n("div",{key:r,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===r}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports,Comment:n(355).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,373))}}}),l=(n(359),Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[e("div",{staticClass:"vuepress-blog-theme-content"},[e("Content"),this._v(" "),this.$service.email.enabled?e("Newsletter"):this._e(),this._v(" "),e("hr"),this._v(" "),e("Comment")],1),this._v(" "),e("Toc")],1)}),[],!1,null,null,null));e.default=l.exports}}]);
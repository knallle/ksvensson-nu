webpackJsonp([0x67ef26645b2a,60335399758886],{110:function(t,e){t.exports={data:{site:{siteMetadata:{title:"KSvensson.nu"}}},layoutContext:{}}},207:function(t,e,n){(function(r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=n(2),i=(o(l),n(214)),u=o(i),c=n(110),f=o(c);e.default=function(t){return r.createElement(u.default,a({},t,f.default))},t.exports=e.default}).call(e,n(9))},210:function(t,e,n){(function(r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(2),c=o(u),f=n(12),s=o(f),p=n(39),d=n(24),h=o(d),m=(0,p.css)({background:h.default.colors.darkBackgroundColor,width:"100%",height:h.default.footerHeight,margin:"0"}),g=(0,p.css)({textAlign:"center",padding:"0",margin:"0 auto",color:h.default.colors.brightTextColor,backgroundColor:"transparent",width:"100%",maxWidth:"100%",overflow:"auto"}),b=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){var t=s.default.a({fontStyle:"inherit",color:"inherit",fontFamily:"inherit"}),e=" | ";return r.createElement(s.default.P,{margin:"2px auto"},r.createElement(t,{href:"https://www.linkedin.com/in/karl-svensson/"}," LinkedIn"),e,r.createElement(t,{href:"https://github.com/knallle"}," Github"),e,r.createElement(t,{href:"https://500px.com/k_a_ll_e"}," 500px"),e,r.createElement(t,{href:"https://t.me/knallle"}," Telegram"),e,r.createElement(t,{href:"https://twitter.com/KarlKerl"}," Twitter"))},e}(c.default.Component),y=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return r.createElement("div",{className:m},r.createElement("div",{className:g},r.createElement(b,null),r.createElement("p",null,this.props.text)))},e}(c.default.Component);e.default=y,t.exports=e.default}).call(e,n(9))},211:function(t,e,n){(function(r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(2),c=o(u),f=n(18),s=o(f),p=n(12),d=o(p),h=(n(39),n(17),n(24)),m=o(h),g=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return r.createElement(s.default,{to:this.props.linksTo},r.createElement(d.default.H3,{float:"left",margin:"0",marginLeft:"5px"},this.props.text))},e}(c.default.Component),b=function(t){function e(){return a(this,e),l(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return r.createElement(d.default.Div,{top:"0",height:m.default.headerHeight,backgroundColor:"transparent"},r.createElement(s.default,{to:"/"},r.createElement(d.default.H3,{float:"left",margin:"0",backgroundColor:"transparent"},this.props.title)),r.createElement(d.default.Div,{float:"right",backgroundColor:"transparent"},r.createElement(g,{linksTo:"/tags/",text:"Tags"}),r.createElement(g,{linksTo:"/about/",text:"About"})))},e}(c.default.Component);e.default=b,t.exports=e.default}).call(e,n(9))},214:function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o,a=n(2),l=(r(a),n(12)),i=(r(l),n(39)),u=n(18),c=(r(u),n(210)),f=r(c),s=n(211),p=r(s),d=n(24),h=r(d),m=n(17);n(308),n(307);var g=(0,i.css)((o={backgroundColor:"transparent",margin:"0",minHeight:"70vh",padding:(0,m.rhythm)(.25)},o.minHeight="-webkit-calc(100vh - "+h.default.footerHeight+")",o.minHeight="-moz-calc(100vh - "+h.default.footerHeight+")",o.minHeight="calc(100vh - "+h.default.footerHeight+")",o)),b=(0,i.css)({padding:"0",margin:"0 auto",maxWidth:700,display:"block",boxSizing:"border-box"}),y=(0,i.css)({width:"100%",height:"100%",backgroundColor:"transparent"});e.default=function(e){var n=e.children,r=e.data;return t.createElement("div",{className:y},t.createElement("div",{className:b},t.createElement("div",{className:g},t.createElement(p.default,{title:r.site.siteMetadata.title}),n(),t.createElement("br",null),"  ")),t.createElement(f.default,{text:"Copyright Karl Svensson "+(new Date).getFullYear()}))};e.query="** extracted graphql fragment **"}).call(e,n(9))},307:function(t,e){},308:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-js-e37d14f4bbb68214dd9c.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"Cuy+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var n=a("q1tI"),r=a.n(n),l=a("6cYQ"),o=a("W/9C"),c=a("ZPPm"),i=a.n(c),s=a("1Yj4"),u=a("ok1R"),m=a("rhny"),d=a("BLzl"),f=(a("2Spj"),a("wx14")),p=a("zLVn"),b=a("JX7q"),h=a("dI71"),g=a("TSYQ"),v=a.n(g),E=a("33Jr"),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(b.a)(a)),a.submit=a.submit.bind(Object(b.a)(a)),a}Object(h.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.inline,l=e.tag,o=e.innerRef,c=Object(p.a)(e,["className","cssModule","inline","tag","innerRef"]),i=Object(E.e)(v()(t,!!n&&"form-inline"),a);return r.a.createElement(l,Object(f.a)({},c,{ref:o,className:i}))},t}(n.Component);k.defaultProps={tag:"form"};var j=k,O=function(e){var t=e.className,a=e.cssModule,n=e.row,l=e.disabled,o=e.check,c=e.inline,i=e.tag,s=Object(p.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),u=Object(E.e)(v()(t,!!n&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!l)&&"disabled"),a);return"fieldset"===i&&(s.disabled=l),r.a.createElement(i,Object(f.a)({},s,{className:u}))};O.defaultProps={tag:"div"};var y=O,x=(a("8+KV"),function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a}),N=function(e){var t=e.className,a=e.cssModule,n=e.hidden,l=e.widths,o=e.tag,c=e.check,i=e.size,s=e.for,u=Object(p.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];l.forEach((function(t,n){var r=e[t];if(delete u[t],r||""===r){var l,o=!n;if(Object(E.d)(r)){var c,i=o?"-":"-"+t+"-";l=x(o,t,r.size),m.push(Object(E.e)(v()(((c={})[l]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),a)}else l=x(o,t,r),m.push(l)}}));var d=Object(E.e)(v()(t,!!n&&"sr-only",!!c&&"form-check-label",!!i&&"col-form-label-"+i,m,!!m.length&&"col-form-label"),a);return r.a.createElement(o,Object(f.a)({htmlFor:s},u,{className:d}))};N.defaultProps={tag:"label",widths:["xs","sm","md","lg","xl"]};var w=N,C=(a("Oyvg"),a("V+eJ"),function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(b.a)(a)),a.focus=a.focus.bind(Object(b.a)(a)),a}Object(h.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,l=e.bsSize,o=e.valid,c=e.invalid,i=e.tag,s=e.addon,u=e.plaintext,m=e.innerRef,d=Object(p.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(n)>-1,h=new RegExp("\\D","g"),g=i||("select"===n||"textarea"===n?n:"input"),k="form-control";u?(k+="-plaintext",g=i||"input"):"file"===n?k+="-file":"range"===n?k+="-range":b&&(k=s?null:"form-check-input"),d.size&&h.test(d.size)&&(Object(E.h)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=d.size,delete d.size);var j=Object(E.e)(v()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,k),a);return("input"===g||i&&"function"==typeof i)&&(d.type=n),d.children&&!u&&"select"!==n&&"string"==typeof g&&"select"!==g&&(Object(E.h)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete d.children),r.a.createElement(g,Object(f.a)({},d,{ref:m,className:j,"aria-invalid":c}))},t}(r.a.Component));C.defaultProps={type:"text"};var R=C,z=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(b.a)(a)),a}Object(h.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,l=e.className,o=e.close,c=e.cssModule,i=e.color,s=e.outline,u=e.size,m=e.tag,d=e.innerRef,b=Object(p.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===b.children&&(b.children=r.a.createElement("span",{"aria-hidden":!0},"×"));var h="btn"+(s?"-outline":"")+"-"+i,g=Object(E.e)(v()(l,{close:o},o||"btn",o||h,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),c);b.href&&"button"===m&&(m="a");var k=o?"Close":null;return r.a.createElement(m,Object(f.a)({type:"button"===m&&b.onClick?"button":void 0},b,{className:g,ref:d,onClick:this.onClick,"aria-label":a||k}))},t}(r.a.Component);z.defaultProps={color:"secondary",tag:"button"};var P=z;function B(){return r.a.createElement(s.a,{className:i.a.PageContainer+" "+i.a.BackgroundTexture,fluid:!0},r.a.createElement(l.a,{border:!0}),r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement("h1",{className:"text-center mt-4"},"Get In Touch"),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("h5",{className:"m-5 text-center"},"Email me and let's make something happen together!"))),r.a.createElement(d.a,{className:i.a.FormCard+" mb-5 p-4"},r.a.createElement(j,{method:"post",action:"https://www.flexyform.com/f/79bd6f427289a4bd2adf8288f90494c29876cc70"},r.a.createElement("h3",{className:"text-center"},"Enter Your Info"),r.a.createElement("hr",{className:"mb-4",style:{backgroundColor:"#a2eae0"}}),r.a.createElement(y,null,r.a.createElement(w,{for:"exampleEmail"},"Name"),r.a.createElement(R,{type:"text",name:"fullname",placeholder:"Enter your full name"})),r.a.createElement(y,null,r.a.createElement(w,{for:"exampleEmail"},"Email"),r.a.createElement(R,{type:"email",name:"email",placeholder:"Enter your email address"})),r.a.createElement(y,null,r.a.createElement(w,{for:"exampleText"},"Message"),r.a.createElement(R,{type:"textarea",name:"message",rows:"8",placeholder:"Please provide a brief description of your needs."})),r.a.createElement(u.a,null,r.a.createElement(m.a,{className:i.a.ButtonRow},r.a.createElement(P,{size:"lg",color:"info",className:i.a.SubmitButton,type:"submit"},"Submit"))))),r.a.createElement(o.a,{border:!0}))}},ZPPm:function(e,t,a){e.exports={PageContainer:"contact-module--PageContainer--19E8m",BackgroundTexture:"contact-module--BackgroundTexture--yfgnu",Link:"contact-module--Link--BQZTd",FormCard:"contact-module--FormCard--1lAni",ButtonRow:"contact-module--ButtonRow--248Vu",SubmitButton:"contact-module--SubmitButton--_L334"}}}]);
//# sourceMappingURL=component---src-pages-contact-js-c9d3a1e01bb6ee024413.js.map
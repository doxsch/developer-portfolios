(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/i6I":function(e,t,a){e.exports={letterContainer:"letter-module--letter-container--23c2w",letterCircle:"letter-module--letter-circle--2Od2s",letterText:"letter-module--letter-text--2W3c4"}},"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),d=r(a("j8BX")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(C,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),C=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:x?1:0,transition:N?"opacity "+v+"ms":"none"},s),V="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},H=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},N&&T),s),f),W={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:S};if(g){var j=g,P=p(g);return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),P.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:j,generateSources:L}),P.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:j,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,E(j),o.default.createElement(C,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)((0,d.default)({alt:a,title:t,loading:w},P),{},{imageVariants:j}))}}))}if(h){var q=h,_=p(h),F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete F.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},V&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},N&&T)}),_.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:W,imageVariants:q,generateSources:L}),_.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:W,imageVariants:q,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,E(q),o.default.createElement(C,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)((0,d.default)({alt:a,title:t,loading:w},_),{},{imageVariants:q}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});N.propTypes={resolutions:k,sizes:V,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=N;t.default=T},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("vrFN"),s=a("9eSz"),d=a.n(s),o=a("prNc"),c=a.n(o),u=function(e){var t=e.name,a=e.url,r=e.image;return i.a.createElement("div",{className:c.a.card},i.a.createElement("div",{className:c.a.cardText},i.a.createElement("h3",null,t),i.a.createElement("p",null,i.a.createElement("a",{href:a,rel:"noreferrer",target:"_blank"},a.replace("https://","").replace("http://","").replace("www.","").replace(/\/$/,"")))),i.a.createElement("div",{className:c.a.cardImage},i.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},r?i.a.createElement(d.a,{fluid:r.fluid,alt:t,fadeIn:!0}):i.a.createElement(i.a.Fragment,null))))},f=a("Wbzz"),m=a("/i6I"),p=a.n(m),g=function(e){var t=e.letter;return i.a.createElement("div",{className:p.a.letterContainer},i.a.createElement("div",{className:p.a.letterCircle},i.a.createElement("span",{className:p.a.letterText},t)))};t.default=function(){var e=Object(f.useStaticQuery)("3944171175"),t="";return i.a.createElement(n.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement("h2",null,"Hi people"),i.a.createElement("p",null,"On this page you will find a list of developer portfolios from which you can be inspired. This page was made possible by Emma Bostian, who provides this information in her"," ",i.a.createElement("a",{href:"https://github.com/emmabostian/developer-portfolios",rel:"noreferrer",target:"_blank"},"Github-Repo"),". Thanks a lot ☺"),i.a.createElement("p",null,"If you would like to see your portfolio on this page as well, please share the information about your portfolio"," ",i.a.createElement("a",{href:"https://github.com/emmabostian/developer-portfolios",rel:"noreferrer",target:"_blank"},"here"),"."),i.a.createElement("p",null,"Now get inspired and build something great."),e.allSitesYaml.edges.map((function(e){var a,r,n=e.node;return t!==n.name[0].toLowerCase()?(t=n.name[0].toLowerCase(),i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{key:t,letter:t.toUpperCase()}),i.a.createElement(u,{key:n.name,name:n.name,url:n.url,image:null===(a=n.childScreenshot)||void 0===a?void 0:a.screenshotFile.childImageSharp}))):i.a.createElement(u,{name:n.name,key:n.name,url:n.url,image:null===(r=n.childScreenshot)||void 0===r?void 0:r.screenshotFile.childImageSharp})})))}},prNc:function(e,t,a){e.exports={card:"developer-card-module--card--13L_W",cardText:"developer-card-module--card-text--2ueto",cardImage:"developer-card-module--card-image--6IWqI"}}}]);
//# sourceMappingURL=component---src-pages-index-js-143814a2540ee505beaa.js.map
(function(){function e(t,e){return function(){return t.apply(e,arguments)}}var i,t,n,a,o,r=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function s(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.resetAnimation=e(this.resetAnimation,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}function l(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}function u(){this.keys=[],this.values=[]}function h(){}h.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},h.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},h.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},h.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},h.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},h.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},h.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t=h,n=this.WeakMap||this.MozWeakMap||(u.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;n<i;e=++n)if(o[e]===t)return this.values[e]},u.prototype.set=function(t,e){var n,i,o,s;for(n=i=0,o=(s=this.keys).length;i<o;n=++i)if(s[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},u),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(l.notSupported=!0,l.prototype.observe=function(){},l),a=this.getComputedStyle||function(n,t){return this.getPropertyValue=function(t){var e;return"float"===t&&(t="styleFloat"),o.test(t)&&t.replace(o,function(t,e){return e.toUpperCase()}),(null!=(e=n.currentStyle)?e[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=(s.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},s.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},s.prototype.start=function(){var o,t,e,n,r;if(this.stopped=!1,this.boxes=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.element.querySelectorAll("."+this.config.boxClass)).length;t<e;t++)o=n[t],i.push(o);return i}.call(this),this.all=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.boxes).length;t<e;t++)o=n[t],i.push(o);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(t=0,e=(n=this.boxes).length;t<e;t++)o=n[t],this.applyStyle(o,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new i((r=this,function(t){var e,n,o,s,i;for(i=[],e=0,n=t.length;e<n;e++)s=t[e],i.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=s.addedNodes||[]).length;t<e;t++)o=n[t],i.push(this.doSync(o));return i}.call(r));return i})).observe(document.body,{childList:!0,subtree:!0}):void 0},s.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},s.prototype.sync=function(t){return i.notSupported?this.doSync(this.element):void 0},s.prototype.doSync=function(t){var e,n,i,o,s;if(null==t&&(t=this.element),1===t.nodeType){for(s=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)e=o[n],r.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},s.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},s.prototype.applyStyle=function(t,e){var n,i,o,s;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((s=this,function(){return s.customStyle(t,e,i,n,o)}))},s.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},s.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},s.prototype.resetAnimation=function(t){var e;return 0<=t.type.toLowerCase().indexOf("animationend")?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},s.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},s.prototype.vendors=["moz","webkit"],s.prototype.vendorSet=function(o,t){var s,e,r,l;for(s in e=[],t)r=t[s],o[""+s]=r,e.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=this.vendors).length;t<e;t++)l=n[t],i.push(o[""+l+s.charAt(0).toUpperCase()+s.substr(1)]=r);return i}.call(this));return e},s.prototype.vendorCSS=function(t,e){var n,i,o,s,r,l;for(s=(r=a(t)).getPropertyCSSValue(e),n=0,i=(o=this.vendors).length;n<i;n++)l=o[n],s=s||r.getPropertyCSSValue("-"+l+"-"+e);return s},s.prototype.animationName=function(e){var n;try{n=this.vendorCSS(e,"animation-name").cssText}catch(t){n=a(e).getPropertyValue("animation-name")}return"none"===n?"":n},s.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},s.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},s.prototype.scrollHandler=function(){return this.scrolled=!0},s.prototype.scrollCallback=function(){var o;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.boxes).length;t<e;t++)(o=n[t])&&(this.isVisible(o)?this.show(o):i.push(o));return i}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},s.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},s.prototype.isVisible=function(t){var e,n,i,o,s;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&s<=e},s.prototype.util=function(){return null!=this._util?this._util:this._util=new t},s.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},s)}).call(this);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvdy5qcyJdLCJuYW1lcyI6WyJmIiwiYSIsImIiLCJhcHBseSIsImFyZ3VtZW50cyIsImMiLCJkIiwiZSIsImciLCJpbmRleE9mIiwidGhpcyIsImxlbmd0aCIsInNjcm9sbENhbGxiYWNrIiwic2Nyb2xsSGFuZGxlciIsInJlc2V0QW5pbWF0aW9uIiwic3RhcnQiLCJzY3JvbGxlZCIsImNvbmZpZyIsInV0aWwiLCJleHRlbmQiLCJkZWZhdWx0cyIsInNjcm9sbENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFuaW1hdGlvbk5hbWVDYWNoZSIsIndvd0V2ZW50IiwiY3JlYXRlRXZlbnQiLCJib3hDbGFzcyIsImNvbnNvbGUiLCJ3YXJuIiwia2V5cyIsInZhbHVlcyIsInByb3RvdHlwZSIsImlzTW9iaWxlIiwidGVzdCIsImluaXRDdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiZXZlbnRUeXBlIiwiZXZlbnROYW1lIiwiZW1pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIldlYWtNYXAiLCJNb3pXZWFrTWFwIiwiZ2V0Iiwic2V0IiwicHVzaCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJraXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIm5vdFN1cHBvcnRlZCIsIm9ic2VydmUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImN1cnJlbnRTdHlsZSIsIldPVyIsImFuaW1hdGVDbGFzcyIsIm9mZnNldCIsIm1vYmlsZSIsImxpdmUiLCJjYWxsYmFjayIsImluaXQiLCJlbGVtZW50IiwicmVhZHlTdGF0ZSIsImZpbmlzaGVkIiwic3RvcHBlZCIsImJveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJhbGwiLCJkaXNhYmxlZCIsInJlc2V0U3R5bGUiLCJhcHBseVN0eWxlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImFkZGVkTm9kZXMiLCJkb1N5bmMiLCJib2R5IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInN0b3AiLCJjbGVhckludGVydmFsIiwic3luYyIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsInNob3ciLCJjbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJhbmltYXRlIiwiY3VzdG9tU3R5bGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwidHJpbSIsImNhY2hlQW5pbWF0aW9uTmFtZSIsInZlbmRvclNldCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvbk5hbWUiLCJjYWNoZWRBbmltYXRpb25OYW1lIiwidmVuZG9ycyIsImgiLCJjaGFyQXQiLCJzdWJzdHIiLCJ2ZW5kb3JDU1MiLCJpIiwiZ2V0UHJvcGVydHlDU1NWYWx1ZSIsImNzc1RleHQiLCJpc1Zpc2libGUiLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsIk1hdGgiLCJtaW4iLCJfdXRpbCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IkNBQUEsV0FBNEIsU0FBRkEsRUFBV0MsRUFBRUMsR0FBRyxPQUFPLFdBQVcsT0FBT0QsRUFBRUUsTUFBTUQsRUFBRUUsWUFBakUsSUFBSUgsRUFBRUMsRUFBRUcsRUFBRUMsRUFBRUMsRUFBa0VDLEVBQUUsR0FBR0MsU0FBUyxTQUFTUixHQUFHLElBQUksSUFBSUMsRUFBRSxFQUFF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YUFBYSxvQkFBb0J4RixLQUFLTyxPQUFPbUQsT0FBZ0c3RCxHQUF6RlAsRUFBRVUsS0FBS08sT0FBT0ksaUJBQWlCWCxLQUFLTyxPQUFPSSxnQkFBZ0IwRyxXQUFXL0UsT0FBT2dGLGFBQWdCQyxLQUFLQyxJQUFJeEgsS0FBSytELFFBQVF2QixhQUFheEMsS0FBS1EsT0FBTzZCLGVBQWUxQyxFQUFzQkgsR0FBcEJJLEVBQUVJLEtBQUttSCxVQUFVNUgsSUFBT0EsRUFBRWlELGFBQWdCNUMsR0FBSEMsR0FBU1AsR0FBSEUsR0FBTUssRUFBRXlCLFVBQVVkLEtBQUssV0FBVyxPQUFPLE1BQU1SLEtBQUt5SCxNQUFNekgsS0FBS3lILE1BQU16SCxLQUFLeUgsTUFBTSxJQUFJakksR0FBR0ssRUFBRXlCLFVBQVVpRCxTQUFTLFdBQVcsT0FBT3ZFLEtBQUtPLE9BQU9vRCxRQUFRM0QsS0FBS1EsT0FBT2UsU0FBU21HLFVBQVVDLFlBQVk5SCxLQUFPd0UsS0FBS3JFIiwiZmlsZSI6Indvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZj1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19LGc9W10uaW5kZXhPZnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKGIgaW4gdGhpcyYmdGhpc1tiXT09PWEpcmV0dXJuIGI7cmV0dXJuLTF9O2I9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fXJldHVybiBhLnByb3RvdHlwZS5leHRlbmQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2ZvcihjIGluIGIpZD1iW2NdLG51bGw9PWFbY10mJihhW2NdPWQpO3JldHVybiBhfSxhLnByb3RvdHlwZS5pc01vYmlsZT1mdW5jdGlvbihhKXtyZXR1cm4vQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYSl9LGEucHJvdG90eXBlLmNyZWF0ZUV2ZW50PWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlO3JldHVybiBudWxsPT1iJiYoYj0hMSksbnVsbD09YyYmKGM9ITEpLG51bGw9PWQmJihkPW51bGwpLG51bGwhPWRvY3VtZW50LmNyZWF0ZUV2ZW50PyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksZS5pbml0Q3VzdG9tRXZlbnQoYSxiLGMsZCkpOm51bGwhPWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0PyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksZS5ldmVudFR5cGU9YSk6ZS5ldmVudE5hbWU9YSxlfSxhLnByb3RvdHlwZS5lbWl0RXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9YS5kaXNwYXRjaEV2ZW50P2EuZGlzcGF0Y2hFdmVudChiKTpiIGluKG51bGwhPWEpP2FbYl0oKTpcIm9uXCIrYiBpbihudWxsIT1hKT9hW1wib25cIitiXSgpOnZvaWQgMH0sYS5wcm90b3R5cGUuYWRkRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsIT1hLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSk6bnVsbCE9YS5hdHRhY2hFdmVudD9hLmF0dGFjaEV2ZW50KFwib25cIitiLGMpOmFbYl09Y30sYS5wcm90b3R5cGUucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsIT1hLnJlbW92ZUV2ZW50TGlzdGVuZXI/YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSk6bnVsbCE9YS5kZXRhY2hFdmVudD9hLmRldGFjaEV2ZW50KFwib25cIitiLGMpOmRlbGV0ZSBhW2JdfSxhLnByb3RvdHlwZS5pbm5lckhlaWdodD1mdW5jdGlvbigpe3JldHVyblwiaW5uZXJIZWlnaHRcImluIHdpbmRvdz93aW5kb3cuaW5uZXJIZWlnaHQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodH0sYX0oKSxjPXRoaXMuV2Vha01hcHx8dGhpcy5Nb3pXZWFrTWFwfHwoYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt0aGlzLmtleXM9W10sdGhpcy52YWx1ZXM9W119cmV0dXJuIGEucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO2ZvcihmPXRoaXMua2V5cyxiPWQ9MCxlPWYubGVuZ3RoO2U+ZDtiPSsrZClpZihjPWZbYl0sYz09PWEpcmV0dXJuIHRoaXMudmFsdWVzW2JdfSxhLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihnPXRoaXMua2V5cyxjPWU9MCxmPWcubGVuZ3RoO2Y+ZTtjPSsrZSlpZihkPWdbY10sZD09PWEpcmV0dXJuIHZvaWQodGhpcy52YWx1ZXNbY109Yik7cmV0dXJuIHRoaXMua2V5cy5wdXNoKGEpLHRoaXMudmFsdWVzLnB1c2goYil9LGF9KCkpLGE9dGhpcy5NdXRhdGlvbk9ic2VydmVyfHx0aGlzLldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJ8fHRoaXMuTW96TXV0YXRpb25PYnNlcnZlcnx8KGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJm51bGwhPT1jb25zb2xlJiZjb25zb2xlLndhcm4oXCJNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGUmJmNvbnNvbGUud2FybihcIldPVy5qcyBjYW5ub3QgZGV0ZWN0IGRvbSBtdXRhdGlvbnMsIHBsZWFzZSBjYWxsIC5zeW5jKCkgYWZ0ZXIgbG9hZGluZyBuZXcgY29udGVudC5cIil9cmV0dXJuIGEubm90U3VwcG9ydGVkPSEwLGEucHJvdG90eXBlLm9ic2VydmU9ZnVuY3Rpb24oKXt9LGF9KCkpLGQ9dGhpcy5nZXRDb21wdXRlZFN0eWxlfHxmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWU9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuXCJmbG9hdFwiPT09YiYmKGI9XCJzdHlsZUZsb2F0XCIpLGUudGVzdChiKSYmYi5yZXBsYWNlKGUsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSksKG51bGwhPShjPWEuY3VycmVudFN0eWxlKT9jW2JdOnZvaWQgMCl8fG51bGx9LHRoaXN9LGU9LyhcXC0oW2Etel0pezF9KS9nLHRoaXMuV09XPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtudWxsPT1hJiYoYT17fSksdGhpcy5zY3JvbGxDYWxsYmFjaz1mKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssdGhpcyksdGhpcy5zY3JvbGxIYW5kbGVyPWYodGhpcy5zY3JvbGxIYW5kbGVyLHRoaXMpLHRoaXMucmVzZXRBbmltYXRpb249Zih0aGlzLnJlc2V0QW5pbWF0aW9uLHRoaXMpLHRoaXMuc3RhcnQ9Zih0aGlzLnN0YXJ0LHRoaXMpLHRoaXMuc2Nyb2xsZWQ9ITAsdGhpcy5jb25maWc9dGhpcy51dGlsKCkuZXh0ZW5kKGEsdGhpcy5kZWZhdWx0cyksbnVsbCE9YS5zY3JvbGxDb250YWluZXImJih0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhLnNjcm9sbENvbnRhaW5lcikpLHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlPW5ldyBjLHRoaXMud293RXZlbnQ9dGhpcy51dGlsKCkuY3JlYXRlRXZlbnQodGhpcy5jb25maWcuYm94Q2xhc3MpfXJldHVybiBlLnByb3RvdHlwZS5kZWZhdWx0cz17Ym94Q2xhc3M6XCJ3b3dcIixhbmltYXRlQ2xhc3M6XCJhbmltYXRlZFwiLG9mZnNldDowLG1vYmlsZTohMCxsaXZlOiEwLGNhbGxiYWNrOm51bGwsc2Nyb2xsQ29udGFpbmVyOm51bGx9LGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5lbGVtZW50PXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJpbnRlcmFjdGl2ZVwiPT09KGE9ZG9jdW1lbnQucmVhZHlTdGF0ZSl8fFwiY29tcGxldGVcIj09PWE/dGhpcy5zdGFydCgpOnRoaXMudXRpbCgpLmFkZEV2ZW50KGRvY3VtZW50LFwiRE9NQ29udGVudExvYWRlZFwiLHRoaXMuc3RhcnQpLHRoaXMuZmluaXNoZWQ9W119LGUucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGIsYyxkLGU7aWYodGhpcy5zdG9wcGVkPSExLHRoaXMuYm94ZXM9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZTtmb3IoZD10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmNvbmZpZy5ib3hDbGFzcyksZT1bXSxhPTAsYz1kLmxlbmd0aDtjPmE7YSsrKWI9ZFthXSxlLnB1c2goYik7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5hbGw9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYT0wLGM9ZC5sZW5ndGg7Yz5hO2ErKyliPWRbYV0sZS5wdXNoKGIpO3JldHVybiBlfS5jYWxsKHRoaXMpLHRoaXMuYm94ZXMubGVuZ3RoKWlmKHRoaXMuZGlzYWJsZWQoKSl0aGlzLnJlc2V0U3R5bGUoKTtlbHNlIGZvcihlPXRoaXMuYm94ZXMsYz0wLGQ9ZS5sZW5ndGg7ZD5jO2MrKyliPWVbY10sdGhpcy5hcHBseVN0eWxlKGIsITApO3JldHVybiB0aGlzLmRpc2FibGVkKCl8fCh0aGlzLnV0aWwoKS5hZGRFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXJ8fHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkuYWRkRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSx0aGlzLmludGVydmFsPXNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssNTApKSx0aGlzLmNvbmZpZy5saXZlP25ldyBhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYyxkLGUsZixnO2ZvcihnPVtdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspZj1iW2NdLGcucHVzaChmdW5jdGlvbigpe3ZhciBhLGIsYyxkO2ZvcihjPWYuYWRkZWROb2Rlc3x8W10sZD1bXSxhPTAsYj1jLmxlbmd0aDtiPmE7YSsrKWU9Y1thXSxkLnB1c2godGhpcy5kb1N5bmMoZSkpO3JldHVybiBkfS5jYWxsKGEpKTtyZXR1cm4gZ319KHRoaXMpKS5vYnNlcnZlKGRvY3VtZW50LmJvZHkse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk6dm9pZCAwfSxlLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcHBlZD0hMCx0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXJ8fHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkucmVtb3ZlRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSxudWxsIT10aGlzLmludGVydmFsP2NsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk6dm9pZCAwfSxlLnByb3RvdHlwZS5zeW5jPWZ1bmN0aW9uKGIpe3JldHVybiBhLm5vdFN1cHBvcnRlZD90aGlzLmRvU3luYyh0aGlzLmVsZW1lbnQpOnZvaWQgMH0sZS5wcm90b3R5cGUuZG9TeW5jPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7aWYobnVsbD09YSYmKGE9dGhpcy5lbGVtZW50KSwxPT09YS5ub2RlVHlwZSl7Zm9yKGE9YS5wYXJlbnROb2RlfHxhLGU9YS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxmPVtdLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspYj1lW2NdLGcuY2FsbCh0aGlzLmFsbCxiKTwwPyh0aGlzLmJveGVzLnB1c2goYiksdGhpcy5hbGwucHVzaChiKSx0aGlzLnN0b3BwZWR8fHRoaXMuZGlzYWJsZWQoKT90aGlzLnJlc2V0U3R5bGUoKTp0aGlzLmFwcGx5U3R5bGUoYiwhMCksZi5wdXNoKHRoaXMuc2Nyb2xsZWQ9ITApKTpmLnB1c2godm9pZCAwKTtyZXR1cm4gZn19LGUucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZStcIiBcIit0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsbnVsbCE9dGhpcy5jb25maWcuY2FsbGJhY2smJnRoaXMuY29uZmlnLmNhbGxiYWNrKGEpLHRoaXMudXRpbCgpLmVtaXRFdmVudChhLHRoaXMud293RXZlbnQpLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJhbmltYXRpb25lbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwib2FuaW1hdGlvbmVuZFwiLHRoaXMucmVzZXRBbmltYXRpb24pLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJ3ZWJraXRBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwiTVNBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSxhfSxlLnByb3RvdHlwZS5hcHBseVN0eWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO3JldHVybiBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZHVyYXRpb25cIiksYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWRlbGF5XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1pdGVyYXRpb25cIiksdGhpcy5hbmltYXRlKGZ1bmN0aW9uKGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmLmN1c3RvbVN0eWxlKGEsYixkLGMsZSl9fSh0aGlzKSl9LGUucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gd2luZG93P2Z1bmN0aW9uKGEpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEpfTpmdW5jdGlvbihhKXtyZXR1cm4gYSgpfX0oKSxlLnByb3RvdHlwZS5yZXNldFN0eWxlPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sZS5wdXNoKGEuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIik7cmV0dXJuIGV9LGUucHJvdG90eXBlLnJlc2V0QW5pbWF0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBhLnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYW5pbWF0aW9uZW5kXCIpPj0wPyhiPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsYi5jbGFzc05hbWU9Yi5jbGFzc05hbWUucmVwbGFjZSh0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsXCJcIikudHJpbSgpKTp2b2lkIDB9LGUucHJvdG90eXBlLmN1c3RvbVN0eWxlPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGImJnRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLGEuc3R5bGUudmlzaWJpbGl0eT1iP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIsYyYmdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uRHVyYXRpb246Y30pLGQmJnRoaXMudmVuZG9yU2V0KGEuc3R5bGUse2FuaW1hdGlvbkRlbGF5OmR9KSxlJiZ0aGlzLnZlbmRvclNldChhLnN0eWxlLHthbmltYXRpb25JdGVyYXRpb25Db3VudDplfSksdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uTmFtZTpiP1wibm9uZVwiOnRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKX0pLGF9LGUucHJvdG90eXBlLnZlbmRvcnM9W1wibW96XCIsXCJ3ZWJraXRcIl0sZS5wcm90b3R5cGUudmVuZG9yU2V0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY7ZD1bXTtmb3IoYyBpbiBiKWU9YltjXSxhW1wiXCIrY109ZSxkLnB1c2goZnVuY3Rpb24oKXt2YXIgYixkLGcsaDtmb3IoZz10aGlzLnZlbmRvcnMsaD1bXSxiPTAsZD1nLmxlbmd0aDtkPmI7YisrKWY9Z1tiXSxoLnB1c2goYVtcIlwiK2YrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cigxKV09ZSk7cmV0dXJuIGh9LmNhbGwodGhpcykpO3JldHVybiBkfSxlLnByb3RvdHlwZS52ZW5kb3JDU1M9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGk7Zm9yKGg9ZChhKSxnPWguZ2V0UHJvcGVydHlDU1NWYWx1ZShiKSxmPXRoaXMudmVuZG9ycyxjPTAsZT1mLmxlbmd0aDtlPmM7YysrKWk9ZltjXSxnPWd8fGguZ2V0UHJvcGVydHlDU1NWYWx1ZShcIi1cIitpK1wiLVwiK2IpO3JldHVybiBnfSxlLnByb3RvdHlwZS5hbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3ZhciBiO3RyeXtiPXRoaXMudmVuZG9yQ1NTKGEsXCJhbmltYXRpb24tbmFtZVwiKS5jc3NUZXh0fWNhdGNoKGMpe2I9ZChhKS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLW5hbWVcIil9cmV0dXJuXCJub25lXCI9PT1iP1wiXCI6Yn0sZS5wcm90b3R5cGUuY2FjaGVBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5zZXQoYSx0aGlzLmFuaW1hdGlvbk5hbWUoYSkpfSxlLnByb3RvdHlwZS5jYWNoZWRBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYSl9LGUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY3JvbGxlZD0hMH0sZS5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4hdGhpcy5zY3JvbGxlZHx8KHRoaXMuc2Nyb2xsZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSxhJiYodGhpcy5pc1Zpc2libGUoYSk/dGhpcy5zaG93KGEpOmUucHVzaChhKSk7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGh8fHRoaXMuY29uZmlnLmxpdmUpP3ZvaWQgMDp0aGlzLnN0b3AoKX0sZS5wcm90b3R5cGUub2Zmc2V0VG9wPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYjt2b2lkIDA9PT1hLm9mZnNldFRvcDspYT1hLnBhcmVudE5vZGU7Zm9yKGI9YS5vZmZzZXRUb3A7YT1hLm9mZnNldFBhcmVudDspYis9YS5vZmZzZXRUb3A7cmV0dXJuIGJ9LGUucHJvdG90eXBlLmlzVmlzaWJsZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO3JldHVybiBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctb2Zmc2V0XCIpfHx0aGlzLmNvbmZpZy5vZmZzZXQsZj10aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXImJnRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3B8fHdpbmRvdy5wYWdlWU9mZnNldCxlPWYrTWF0aC5taW4odGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCx0aGlzLnV0aWwoKS5pbm5lckhlaWdodCgpKS1jLGQ9dGhpcy5vZmZzZXRUb3AoYSksYj1kK2EuY2xpZW50SGVpZ2h0LGU+PWQmJmI+PWZ9LGUucHJvdG90eXBlLnV0aWw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9dGhpcy5fdXRpbD90aGlzLl91dGlsOnRoaXMuX3V0aWw9bmV3IGJ9LGUucHJvdG90eXBlLmRpc2FibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuY29uZmlnLm1vYmlsZSYmdGhpcy51dGlsKCkuaXNNb2JpbGUobmF2aWdhdG9yLnVzZXJBZ2VudCl9LGV9KCl9KS5jYWxsKHRoaXMpOyJdfQ==

!function(b){b.flexslider=function(p,e){var m=b(p);m.vars=b.extend({},b.flexslider.defaults,e);var t,d=m.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,u=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&m.vars.touch,r="click touchend MSPointerUp",o="",g="vertical"===m.vars.direction,h=m.vars.reverse,S=0<m.vars.itemWidth,x="fade"===m.vars.animation,v=""!==m.vars.asNavFor,y={};b.data(p,"flexslider",m),y={init:function(){m.animating=!1,m.currentSlide=parseInt(m.vars.startAt?m.vars.startAt:0,10),isNaN(m.currentSlide)&&(m.currentSlide=0),m.animatingTo=m.currentSlide,m.atEnd=0===m.currentSlide||m.currentSlide===m.last,m.containerSelector=m.vars.selector.substr(0,m.vars.selector.search(" ")),m.slides=b(m.vars.selector,m),m.container=b(m.containerSelector,m),m.count=m.slides.length,m.syncExists=0<b(m.vars.sync).length,"slide"===m.vars.animation&&(m.vars.animation="swing"),m.prop=g?"top":"marginLeft",m.args={},m.manualPause=!1,m.stopped=!1,m.started=!1,m.startTimeout=null,m.transitions=!m.vars.video&&!x&&m.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return m.pfx=t[a].replace("Perspective","").toLowerCase(),m.prop="-"+m.pfx+"-transform",!0;return!1}(),(m.ensureAnimationEnd="")!==m.vars.controlsContainer&&(m.controlsContainer=0<b(m.vars.controlsContainer).length&&b(m.vars.controlsContainer)),""!==m.vars.manualControls&&(m.manualControls=0<b(m.vars.manualControls).length&&b(m.vars.manualControls)),m.vars.randomize&&(m.slides.sort(function(){return Math.round(Math.random())-.5}),m.container.empty().append(m.slides)),m.doMath(),m.setup("init"),m.vars.controlNav&&y.controlNav.setup(),m.vars.directionNav&&y.directionNav.setup(),m.vars.keyboard&&(1===b(m.containerSelector).length||m.vars.multipleKeyboard)&&b(document).bind("keyup",function(e){var t=e.keyCode;if(!m.animating&&(39===t||37===t)){var a=39===t?m.getTarget("next"):37===t&&m.getTarget("prev");m.flexAnimate(a,m.vars.pauseOnAction)}}),m.vars.mousewheel&&m.bind("mousewheel",function(e,t){e.preventDefault();var a=t<0?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(a,m.vars.pauseOnAction)}),m.vars.pausePlay&&y.pausePlay.setup(),m.vars.slideshow&&m.vars.pauseInvisible&&y.pauseInvisible.init(),m.vars.slideshow&&(m.vars.pauseOnHover&&m.hover(function(){m.manualPlay||m.manualPause||m.pause()},function(){m.manualPause||m.manualPlay||m.stopped||m.play()}),m.vars.pauseInvisible&&y.pauseInvisible.isHidden()||(0<m.vars.initDelay?m.startTimeout=setTimeout(m.play,m.vars.initDelay):m.play())),v&&y.asNav.setup(),u&&m.vars.touch&&y.touch(),(!x||x&&m.vars.smoothHeight)&&b(window).bind("resize orientationchange focus",y.resize),m.find("img").attr("draggable","false"),setTimeout(function(){m.vars.start(m)},200)},asNav:{setup:function(){m.asNav=!0,m.animatingTo=Math.floor(m.currentSlide/m.move),m.currentItem=m.currentSlide,m.slides.removeClass(d+"active-slide").eq(m.currentItem).addClass(d+"active-slide"),f?(p._slider=m).slides.each(function(){var e=this;e._gesture=new MSGesture,(e._gesture.target=e).addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=b(this),a=t.index();b(m.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(m.direction=m.currentItem<a?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction,!1,!0,!0))})}):m.slides.on(r,function(e){e.preventDefault();var t=b(this),a=t.index();t.offset().left-b(m).scrollLeft()<=0&&t.hasClass(d+"active-slide")?m.flexAnimate(m.getTarget("prev"),!0):b(m.vars.asNavFor).data("flexslider").animating||t.hasClass(d+"active-slide")||(m.direction=m.currentItem<a?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){m.manualControls?y.controlNav.setupManual():y.controlNav.setupPaging()},setupPaging:function(){var e,t,a="thumbnails"===m.vars.controlNav?"control-thumbs":"control-paging",n=1;if(m.controlNavScaffold=b('<ol class="'+d+"control-nav "+d+a+'"></ol>'),1<m.pagingCount)for(var i=0;i<m.pagingCount;i++){if(t=m.slides.eq(i),e="thumbnails"===m.vars.controlNav?'<img src="'+t.attr("data-thumb")+'"/>':"<a>"+n+"</a>","thumbnails"===m.vars.controlNav&&!0===m.vars.thumbCaptions){var s=t.attr("data-thumbcaption");""!=s&&null!=s&&(e+='<span class="'+d+'caption">'+s+"</span>")}m.controlNavScaffold.append("<li>"+e+"</li>"),n++}m.controlsContainer?b(m.controlsContainer).append(m.controlNavScaffold):m.append(m.controlNavScaffold),y.controlNav.set(),y.controlNav.active(),m.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=b(this),a=m.controlNav.index(t);t.hasClass(d+"active")||(m.direction=a>m.currentSlide?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction))}""===o&&(o=e.type),y.setToClearWatchedEvent()})},setupManual:function(){m.controlNav=m.manualControls,y.controlNav.active(),m.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=b(this),a=m.controlNav.index(t);t.hasClass(d+"active")||(m.direction=a>m.currentSlide?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction))}""===o&&(o=e.type),y.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===m.vars.controlNav?"img":"a";m.controlNav=b("."+d+"control-nav li "+e,m.controlsContainer?m.controlsContainer:m)},active:function(){m.controlNav.removeClass(d+"active").eq(m.animatingTo).addClass(d+"active")},update:function(e,t){1<m.pagingCount&&"add"===e?m.controlNavScaffold.append(b("<li><a>"+m.count+"</a></li>")):1===m.pagingCount?m.controlNavScaffold.find("li").remove():m.controlNav.eq(t).closest("li").remove(),y.controlNav.set(),1<m.pagingCount&&m.pagingCount!==m.controlNav.length?m.update(t,e):y.controlNav.active()}},directionNav:{setup:function(){var e=b('<ul class="'+d+'direction-nav"><li><a class="'+d+'prev" href="#">'+m.vars.prevText+'</a></li><li><a class="'+d+'next" href="#">'+m.vars.nextText+"</a></li></ul>");m.controlsContainer?(b(m.controlsContainer).append(e),m.directionNav=b("."+d+"direction-nav li a",m.controlsContainer)):(m.append(e),m.directionNav=b("."+d+"direction-nav li a",m)),y.directionNav.update(),m.directionNav.bind(r,function(e){var t;e.preventDefault(),""!==o&&o!==e.type||(t=b(this).hasClass(d+"next")?m.getTarget("next"):m.getTarget("prev"),m.flexAnimate(t,m.vars.pauseOnAction)),""===o&&(o=e.type),y.setToClearWatchedEvent()})},update:function(){var e=d+"disabled";1===m.pagingCount?m.directionNav.addClass(e).attr("tabindex","-1"):m.vars.animationLoop?m.directionNav.removeClass(e).removeAttr("tabindex"):0===m.animatingTo?m.directionNav.removeClass(e).filter("."+d+"prev").addClass(e).attr("tabindex","-1"):m.animatingTo===m.last?m.directionNav.removeClass(e).filter("."+d+"next").addClass(e).attr("tabindex","-1"):m.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=b('<div class="'+d+'pauseplay"><a></a></div>');m.controlsContainer?(m.controlsContainer.append(e),m.pausePlay=b("."+d+"pauseplay a",m.controlsContainer)):(m.append(e),m.pausePlay=b("."+d+"pauseplay a",m)),y.pausePlay.update(m.vars.slideshow?d+"pause":d+"play"),m.pausePlay.bind(r,function(e){e.preventDefault(),""!==o&&o!==e.type||(b(this).hasClass(d+"pause")?(m.manualPause=!0,m.manualPlay=!1,m.pause()):(m.manualPause=!1,m.manualPlay=!0,m.play())),""===o&&(o=e.type),y.setToClearWatchedEvent()})},update:function(e){"play"===e?m.pausePlay.removeClass(d+"pause").addClass(d+"play").html(m.vars.playText):m.pausePlay.removeClass(d+"play").addClass(d+"pause").html(m.vars.pauseText)}},touch:function(){function a(e){t=e.touches[0].pageX,u=e.touches[0].pageY,l=g?i-u:i-t;(!(d=g?Math.abs(l)<Math.abs(t-s):Math.abs(l)<Math.abs(u-s))||500<Number(new Date)-c)&&(e.preventDefault(),!x&&m.transitions&&(m.vars.animationLoop||(l/=0===m.currentSlide&&l<0||m.currentSlide===m.last&&0<l?Math.abs(l)/o+2:1),m.setProps(r+l,"setTouch")))}function n(){if(p.removeEventListener("touchmove",a,!1),m.animatingTo===m.currentSlide&&!d&&null!==l){var e=h?-l:l,t=0<e?m.getTarget("next"):m.getTarget("prev");m.canAdvance(t)&&(Number(new Date)-c<550&&50<Math.abs(e)||Math.abs(e)>o/2)?m.flexAnimate(t,m.vars.pauseOnAction):x||m.flexAnimate(m.currentSlide,m.vars.pauseOnAction,!0)}p.removeEventListener("touchend",n,!1),r=l=s=i=null}var i,s,r,o,l,c,d=!1,t=0,u=0,v=0;f?(p.style.msTouchAction="none",p._gesture=new MSGesture,(p._gesture.target=p).addEventListener("MSPointerDown",function(e){e.stopPropagation(),m.animating?e.preventDefault():(m.pause(),p._gesture.addPointer(e.pointerId),v=0,o=g?m.h:m.w,c=Number(new Date),r=S&&h&&m.animatingTo===m.last?0:S&&h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:S&&m.currentSlide===m.last?m.limit:S?(m.itemW+m.vars.itemMargin)*m.move*m.currentSlide:h?(m.last-m.currentSlide+m.cloneOffset)*o:(m.currentSlide+m.cloneOffset)*o)},!1),p._slider=m,p.addEventListener("MSGestureChange",function(e){e.stopPropagation();var t=e.target._slider;if(t){var a=-e.translationX,n=-e.translationY;return l=v+=g?n:a,d=g?Math.abs(v)<Math.abs(-a):Math.abs(v)<Math.abs(-n),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){p._gesture.stop()}):void((!d||500<Number(new Date)-c)&&(e.preventDefault(),!x&&t.transitions&&(t.vars.animationLoop||(l=v/(0===t.currentSlide&&v<0||t.currentSlide===t.last&&0<v?Math.abs(v)/o+2:1)),t.setProps(r+l,"setTouch"))))}},!1),p.addEventListener("MSGestureEnd",function(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!d&&null!==l){var a=h?-l:l,n=0<a?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-c<550&&50<Math.abs(a)||Math.abs(a)>o/2)?t.flexAnimate(n,t.vars.pauseOnAction):x||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=l=s=i=null,v=0}},!1)):p.addEventListener("touchstart",function(e){m.animating?e.preventDefault():!window.navigator.msPointerEnabled&&1!==e.touches.length||(m.pause(),o=g?m.h:m.w,c=Number(new Date),t=e.touches[0].pageX,u=e.touches[0].pageY,r=S&&h&&m.animatingTo===m.last?0:S&&h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:S&&m.currentSlide===m.last?m.limit:S?(m.itemW+m.vars.itemMargin)*m.move*m.currentSlide:h?(m.last-m.currentSlide+m.cloneOffset)*o:(m.currentSlide+m.cloneOffset)*o,i=g?u:t,s=g?t:u,p.addEventListener("touchmove",a,!1),p.addEventListener("touchend",n,!1))},!1)},resize:function(){!m.animating&&m.is(":visible")&&(S||m.doMath(),x?y.smoothHeight():S?(m.slides.width(m.computedW),m.update(m.pagingCount),m.setProps()):g?(m.viewport.height(m.h),m.setProps(m.h,"setTotal")):(m.vars.smoothHeight&&y.smoothHeight(),m.newSlides.width(m.computedW),m.setProps(m.computedW,"setTotal")))},smoothHeight:function(e){if(!g||x){var t=x?m:m.viewport;e?t.animate({height:m.slides.eq(m.animatingTo).height()},e):t.height(m.slides.eq(m.animatingTo).height())}},sync:function(e){var t=b(m.vars.sync).data("flexslider"),a=m.animatingTo;switch(e){case"animate":t.flexAnimate(a,m.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.find("[id]").each(function(){var e=b(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(y.pauseInvisible.visProp=e[t]+"Hidden");if(y.pauseInvisible.visProp){var a=y.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(a,function(){y.pauseInvisible.isHidden()?m.startTimeout?clearTimeout(m.startTimeout):m.pause():m.started?m.play():0<m.vars.initDelay?setTimeout(m.play,m.vars.initDelay):m.play()})}},isHidden:function(){return document[y.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(t),t=setTimeout(function(){o=""},3e3)}},m.flexAnimate=function(e,t,a,n,i){if(m.vars.animationLoop||e===m.currentSlide||(m.direction=e>m.currentSlide?"next":"prev"),v&&1===m.pagingCount&&(m.direction=m.currentItem<e?"next":"prev"),!m.animating&&(m.canAdvance(e,i)||a)&&m.is(":visible")){if(v&&n){var s=b(m.vars.asNavFor).data("flexslider");if(m.atEnd=0===e||e===m.count-1,s.flexAnimate(e,!0,!1,!0,i),m.direction=m.currentItem<e?"next":"prev",s.direction=m.direction,Math.ceil((e+1)/m.visible)-1===m.currentSlide||0===e)return m.currentItem=e,m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),!1;m.currentItem=e,m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),e=Math.floor(e/m.visible)}if(m.animating=!0,m.animatingTo=e,t&&m.pause(),m.vars.before(m),m.syncExists&&!i&&y.sync("animate"),m.vars.controlNav&&y.controlNav.active(),S||m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),m.atEnd=0===e||e===m.last,m.vars.directionNav&&y.directionNav.update(),e===m.last&&(m.vars.end(m),m.vars.animationLoop||m.pause()),x)u?(m.slides.eq(m.currentSlide).css({opacity:0,zIndex:1}),m.slides.eq(e).css({opacity:1,zIndex:2}),m.wrapup(c)):(m.slides.eq(m.currentSlide).css({zIndex:1}).animate({opacity:0},m.vars.animationSpeed,m.vars.easing),m.slides.eq(e).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing,m.wrapup));else{var r,o,l,c=g?m.slides.filter(":first").height():m.computedW;o=S?(r=m.vars.itemMargin,(l=(m.itemW+r)*m.move*m.animatingTo)>m.limit&&1!==m.visible?m.limit:l):0===m.currentSlide&&e===m.count-1&&m.vars.animationLoop&&"next"!==m.direction?h?(m.count+m.cloneOffset)*c:0:m.currentSlide===m.last&&0===e&&m.vars.animationLoop&&"prev"!==m.direction?h?0:(m.count+1)*c:h?(m.count-1-e+m.cloneOffset)*c:(e+m.cloneOffset)*c,m.setProps(o,"",m.vars.animationSpeed),m.transitions?(m.vars.animationLoop&&m.atEnd||(m.animating=!1,m.currentSlide=m.animatingTo),m.container.unbind("webkitTransitionEnd transitionend"),m.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(m.ensureAnimationEnd),m.wrapup(c)}),clearTimeout(m.ensureAnimationEnd),m.ensureAnimationEnd=setTimeout(function(){m.wrapup(c)},m.vars.animationSpeed+100)):m.container.animate(m.args,m.vars.animationSpeed,m.vars.easing,function(){m.wrapup(c)})}m.vars.smoothHeight&&y.smoothHeight(m.vars.animationSpeed)}},m.wrapup=function(e){x||S||(0===m.currentSlide&&m.animatingTo===m.last&&m.vars.animationLoop?m.setProps(e,"jumpEnd"):m.currentSlide===m.last&&0===m.animatingTo&&m.vars.animationLoop&&m.setProps(e,"jumpStart")),m.animating=!1,m.currentSlide=m.animatingTo,m.vars.after(m)},m.animateSlides=function(){m.animating||m.flexAnimate(m.getTarget("next"))},m.pause=function(){clearInterval(m.animatedSlides),m.animatedSlides=null,m.playing=!1,m.vars.pausePlay&&y.pausePlay.update("play"),m.syncExists&&y.sync("pause")},m.play=function(){m.playing&&clearInterval(m.animatedSlides),m.animatedSlides=m.animatedSlides||setInterval(m.animateSlides,m.vars.slideshowSpeed),m.started=m.playing=!0,m.vars.pausePlay&&y.pausePlay.update("pause"),m.syncExists&&y.sync("play")},m.stop=function(){m.pause(),m.stopped=!0},m.canAdvance=function(e,t){var a=v?m.pagingCount-1:m.last;return!!t||(v&&m.currentItem===m.count-1&&0===e&&"prev"===m.direction||(!v||0!==m.currentItem||e!==m.pagingCount-1||"next"===m.direction)&&((e!==m.currentSlide||v)&&(!!m.vars.animationLoop||(!m.atEnd||0!==m.currentSlide||e!==a||"next"===m.direction)&&(!m.atEnd||m.currentSlide!==a||0!==e||"next"!==m.direction))))},m.getTarget=function(e){return"next"===(m.direction=e)?m.currentSlide===m.last?0:m.currentSlide+1:0===m.currentSlide?m.last:m.currentSlide-1},m.setProps=function(e,t,a){var n,i=(n=e||(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo,-1*function(){if(S)return"setTouch"===t?e:h&&m.animatingTo===m.last?0:h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:m.animatingTo===m.last?m.limit:n;switch(t){case"setTotal":return h?(m.count-1-m.currentSlide+m.cloneOffset)*e:(m.currentSlide+m.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return h?e:m.count*e;case"jumpStart":return h?m.count*e:e;default:return e}}()+"px");m.transitions&&(i=g?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",m.container.css("-"+m.pfx+"-transition-duration",a),m.container.css("transition-duration",a)),m.args[m.prop]=i,!m.transitions&&void 0!==a||m.container.css(m.args),m.container.css("transform",i)},m.setup=function(e){var t,a;x?(m.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(u?m.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+m.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(m.currentSlide).css({opacity:1,zIndex:2}):m.slides.css({opacity:0,display:"block",zIndex:1}).eq(m.currentSlide).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing)),m.vars.smoothHeight&&y.smoothHeight()):("init"===e&&(m.viewport=b('<div class="'+d+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(m).append(m.container),m.cloneCount=0,m.cloneOffset=0,h&&(a=b.makeArray(m.slides).reverse(),m.slides=b(a),m.container.empty().append(m.slides))),m.vars.animationLoop&&!S&&(m.cloneCount=2,m.cloneOffset=1,"init"!==e&&m.container.find(".clone").remove(),y.uniqueID(m.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(m.container),y.uniqueID(m.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(m.container)),m.newSlides=b(m.vars.selector,m),t=h?m.count-1-m.currentSlide+m.cloneOffset:m.currentSlide+m.cloneOffset,g&&!S?(m.container.height(200*(m.count+m.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){m.newSlides.css({display:"block"}),m.doMath(),m.viewport.height(m.h),m.setProps(t*m.h,"init")},"init"===e?100:0)):(m.container.width(200*(m.count+m.cloneCount)+"%"),m.setProps(t*m.computedW,"init"),setTimeout(function(){m.doMath(),m.newSlides.css({width:m.computedW,float:"left",display:"block"}),m.vars.smoothHeight&&y.smoothHeight()},"init"===e?100:0)));S||m.slides.removeClass(d+"active-slide").eq(m.currentSlide).addClass(d+"active-slide"),m.vars.init(m)},m.doMath=function(){var e=m.slides.first(),t=m.vars.itemMargin,a=m.vars.minItems,n=m.vars.maxItems;m.w=void 0===m.viewport?m.width():m.viewport.width(),m.h=e.height(),m.boxPadding=e.outerWidth()-e.width(),S?(m.itemT=m.vars.itemWidth+t,m.minW=a?a*m.itemT:m.w,m.maxW=n?n*m.itemT-t:m.w,m.itemW=m.minW>m.w?(m.w-t*(a-1))/a:m.maxW<m.w?(m.w-t*(n-1))/n:m.vars.itemWidth>m.w?m.w:m.vars.itemWidth,m.visible=Math.floor(m.w/m.itemW),m.move=0<m.vars.move&&m.vars.move<m.visible?m.vars.move:m.visible,m.pagingCount=Math.ceil((m.count-m.visible)/m.move+1),m.last=m.pagingCount-1,m.limit=1===m.pagingCount?0:m.vars.itemWidth>m.w?m.itemW*(m.count-1)+t*(m.count-1):(m.itemW+t)*m.count-m.w-t):(m.itemW=m.w,m.pagingCount=m.count,m.last=m.count-1),m.computedW=m.itemW-m.boxPadding},m.update=function(e,t){m.doMath(),S||(e<m.currentSlide?m.currentSlide+=1:e<=m.currentSlide&&0!==e&&--m.currentSlide,m.animatingTo=m.currentSlide),m.vars.controlNav&&!m.manualControls&&("add"===t&&!S||m.pagingCount>m.controlNav.length?y.controlNav.update("add"):("remove"===t&&!S||m.pagingCount<m.controlNav.length)&&(S&&m.currentSlide>m.last&&(--m.currentSlide,--m.animatingTo),y.controlNav.update("remove",m.last))),m.vars.directionNav&&y.directionNav.update()},m.addSlide=function(e,t){var a=b(e);m.count+=1,m.last=m.count-1,g&&h?void 0!==t?m.slides.eq(m.count-t).after(a):m.container.prepend(a):void 0!==t?m.slides.eq(t).before(a):m.container.append(a),m.update(t,"add"),m.slides=b(m.vars.selector+":not(.clone)",m),m.setup(),m.vars.added(m)},m.removeSlide=function(e){var t=isNaN(e)?m.slides.index(b(e)):e;--m.count,m.last=m.count-1,isNaN(e)?b(e,m.slides).remove():g&&h?m.slides.eq(m.last).remove():m.slides.eq(e).remove(),m.doMath(),m.update(t,"remove"),m.slides=b(m.vars.selector+":not(.clone)",m),m.setup(),m.vars.removed(m)},y.init()},b(window).blur(function(){focused=!1}).focus(function(){focused=!0}),b.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},b.fn.flexslider=function(n){if(void 0===n&&(n={}),"object"==typeof n)return this.each(function(){var e=b(this),t=n.selector?n.selector:".slides > li",a=e.find(t);1===a.length&&!0===n.allowOneSlide||0===a.length?(a.fadeIn(400),n.start&&n.start(e)):void 0===e.data("flexslider")&&new b.flexslider(this,n)});var e=b(this).data("flexslider");switch(n){case"play":e.play();break;case"pause":e.pause();break;case"stop":e.stop();break;case"next":e.flexAnimate(e.getTarget("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("prev"),!0);break;default:"number"==typeof n&&e.flexAnimate(n,!0)}}}(jQuery);
$(document).ready(function(){if($(window).width()>768){var e=$(".cursor_dot");$(window).mousemove(function(t){var o;(o=t),e.css({top:o.clientY-e.height()/2,left:o.clientX-e.width()/2});}),$(window).mouseleave(function(){e.css("opacity","0");}).mouseenter(function(){e.css("opacity","1");});}
try{if(!(function(e){for(var t="cookie_policy=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length);}
return 0;})()){var t=$(".cookies_field_wrapper");t.css("display","flex"),$("#got_it").on("click",function(e){var o,n;e.preventDefault(),(n=new Date()).setTime(n.getTime()+31104e6),(o="; expires="+n.toUTCString()),(document.cookie="cookie_policy=yes"+o+"; path=/"),t.fadeOut();});var o=$("#cookies_learn_more"),n=$(".cookie_policy-warpper");o.on("click",function(e){e.preventDefault(),n.fadeIn(),$("body").css("overflow","hidden");}),$("#cookie_policy-cross").on("click",function(e){e.preventDefault(),$("body").css("overflow","initial"),n.fadeOut();});}}catch(e){console.log(e);}
if(-1!=$(location).prop("href").indexOf("portfolio")){var E,Y=$("#show_tags"),D=$(".portfolio-tags_sub");Y.on("click",function(e){e.preventDefault(),D.toggleClass("hide_sub_ul"),"Hide"==Y.text()?(Y.css("margin-right","-5ch"),Y.text("Show More")):(Y.text("Hide"),Y.css("margin-right","-2ch"));});var X=$("#main_tags");function q(e){X.children().removeClass("active"),(E=$('#main_tags li a[href *= "'+e+'"')).parent().addClass("active"),D.find(E.parent()).length&&window.innerWidth>769&&(X.children("li").last().clone().appendTo(D),X.children("li").last().remove(),X.children().last().before(E.parent()),D.find(E.parent()).remove());}
if(location.pathname.split('/')[2]!=-1){q(location.pathname.split('/')[2]);}
if(location.pathname.split('/')[2]==undefined){q("all");}
if(window.innerWidth<769){var I=$("#main_tags li.active"),z=$(".banner__section-buttons #main_tags li").index(I);D.children().clone().appendTo(X),D.remove(),X.children("li").children("a").each(function(e){$(this).text($(this).text().replace(/ .*/,""));}),$(X).slick({infinite:!0,slidesToShow:2,slidesToScroll:1}),X.slick("slickGoTo",z);}}
if((-1!=$(location).prop("href").indexOf("business-analysis")&&(window.innerWidth<768&&$(".mob__popup").on("click",function(){$(this).children(".popup__wrap").toggleClass("show");}),(function(e){e(function(){var t=0;e(window).scroll(function(){var o=e(".customers__care").offset().top-window.innerHeight;0==t&&e(window).scrollTop()>o&&(e(".counter").each(function(){var t=e(this),o=t.attr("data-count");e({countNum:t.text()}).animate({countNum:o},{duration:2500,easing:"swing",step:function(){t.text(Math.floor(this.countNum));},complete:function(){t.text(this.countNum);},});}),(t=1));});});})(jQuery)),-1!=$(location).prop("href").indexOf("blog"))){var M=$(".tags");var blogSlider=$('.tags');sliderFunction();function sliderFunction(){var $windowWidth=$(window).width();if($windowWidth<769){console.log("i am here")
$(blogSlider).slick({infinite:false,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:500,settings:{slidesToShow:2}}]});}else{$(".tags.slick-slider").slick("unslick");}}
$(window).resize(function(){sliderFunction();if($(window).width()<769){$(".popular_posts").css("display","none");}});$(window).scroll(function(){$(window).width()>768&&($(window).scrollTop()>$(".posts-content").offset().top&&$(".popular_posts").css("display","block"),$(window).scrollTop()<$(".posts-content").offset().top&&$(".popular_posts").css("display","none"),$(window).scrollTop()>$(".related_projects").offset().top-$(window).height()&&$(".popular_posts").css("display","none"));});var W=$(".tags li");function H(e){W.removeClass("tags-active-li"),$('.tags li a[href *= "'+e+'"').parent().addClass("tags-active-li");}
W.first().addClass("tags-active-li")
if(location.pathname.split('/')[2]!=-1){H(location.pathname.split('/')[2]);}
if(location.pathname.split('/')[2]==undefined){H("all");}
var V=$(".likes-img-box"),Q=$(".likes_counter .counter");V.hasClass("active")||V.addClass("likes-hover"),V.on("click",function(){V.toggleClass("likes-hover");var e=Q.text().trim().replace(/\D+/g,"");V.hasClass("active")?(V.removeClass("active"),e--,Q.text(e+" Likes")):(V.addClass("active"),e++,Q.text(e+" Likes"));});}
-1!=$(location).prop("href").indexOf("about")&&((function(e){e(function(){var t=0;e(window).scroll(function(){var o=e(".numbers").offset().top-window.innerHeight;0==t&&e(window).scrollTop()>o&&(e(".numbers .list .item").each(function(){var t=e(this).find("h3"),o=t.attr("data-number");e({countNum:t.text()}).animate({countNum:o},{duration:2500,easing:"swing",step:function(){t.text(Math.floor(this.countNum));},complete:function(){t.text(this.countNum);},});}),(t=1));});});})(jQuery),$(".second-row .item").length>5&&$(".second-row").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,nextArrow:'<div class="right"><i class="fas fa-arrow-right"></i></div>',prevArrow:'<div class="left"><i class="fas fa-arrow-left"></i></div>',responsive:[{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:504,settings:{slidesToShow:1,slidesToScroll:1}},],}));var U=$("#burger"),P=$("nav"),F=$("#burger .top-strip"),J=$("#burger .bottom-strip");function G(e,t,o,n){F.removeClass(e),J.removeClass(t),F.addClass(o),J.addClass(n);}
U.click(function(){"none"==P.css("display")?(P.show(),G("toBurgerTop","toBurgerBottom","toCrossTop","toCrossBottom")):(P.hide(),G("toCrossTop","toCrossBottom","toBurgerTop","toBurgerBottom"));}),$("nav .nav-ul li").has(".sub-ul").prepend('<div class="plus opened"></div>'),$(".plus").click(function(){var e;(e=$(this)).toggleClass("opened"),e.toggleClass("closed"),e.hasClass("closed")?e.siblings(".sub-ul").show():e.siblings(".sub-ul").hide();});var K=$(".header-content"),R=0;var header=$(".header-content");var lastScrollTop=0;$('a[href^="#contact"]').click(function(){document.querySelector('nav').style.display='block';});function hideShowHeaderWhenScroling(){var scrollTop=$(this).scrollTop();document.querySelector('nav').style.display='block';if(scrollTop>lastScrollTop&&$(this).scrollTop()>100){header.css("top","-150px");if($(window).width()<768){changeNavigationStatus("toCrossTop","toCrossBottom","toBurgerTop","toBurgerBottom");}}else{header.css("top","0");if($(window).width()<768){changeNavigationStatus("toCrossTop","toCrossBottom","toBurgerTop","toBurgerBottom");}}
lastScrollTop=scrollTop;}
$(window).scroll(hideShowHeaderWhenScroling);$(window).resize(hideShowHeaderWhenScroling);var burger=$("#burger");var nav=$("nav");var header=$(".header");var lastScrollTop=0;var topStrip=$("#burger .top-strip");var bottomStrip=$("#burger .bottom-strip");function changeNavigationStatus(removedClassTop,removedClassBottom,addedClassTop,addedClassBottom){topStrip.removeClass(removedClassTop);bottomStrip.removeClass(removedClassBottom);topStrip.addClass(addedClassTop);bottomStrip.addClass(addedClassBottom);}
$('a[href^="#"]').click(function(){var target=$(this).attr('href');$('html, body').animate({scrollTop:$(target).offset().top-90},1000);return false;});$('a[href^="#contact"]').click(function(){document.querySelector('nav').style.display='block';});if(($(window).scroll(function(){var e=$(this).scrollTop();e>R&&$(this).scrollTop()>100?(K.css("top","-150px"),$(window).width()<768&&(P.hide(),G("toCrossTop","toCrossBottom","toBurgerTop","toBurgerBottom"))):(K.css("top","0"),$(window).width()<768&&(P.hide(),G("toCrossTop","toCrossBottom","toBurgerTop","toBurgerBottom"))),(R=e);}),-1!=$(location).prop("href").indexOf("devops-support")&&(function(e){e(function(){var t=0;e(window).scroll(function(){var o=e(".why_need_support-wrapper").offset().top-window.innerHeight;0==t&&e(window).scrollTop()>o&&(e(".counter").each(function(){var t=e(this),o=t.attr("data-number");e({countNum:t.text()}).animate({countNum:o},{duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum));},complete:function(){t.text(this.countNum);},});}),(t=1));});});})(jQuery),-1==$(location).prop("href").indexOf("portfolio")&&$('a[href^="#"]').on("click",function(e){e.preventDefault();var t=this.hash,o=$(t);$("html, body").stop().animate({scrollTop:o.offset().top},900,"swing",function(){window.location.hash=t;});}),-1==$(location).prop("href").indexOf("devops")||-1==$(location).prop("href").indexOf("web-development")||-1==$(location).prop("href").indexOf("mobile-development")||-1==$(location).prop("href").indexOf("ui-ux-design")||-1==$(location).prop("href").indexOf("business-analysis")||-1==$(location).prop("href").indexOf("blockchain")||-1==$(location).prop("href").indexOf("data-science")||-1==$(location).prop("href").indexOf("aws")||-1==$(location).prop("href").indexOf("aiml")||-1==$(location).prop("href").indexOf("qaqc-testing"))){function ee(arguments){var e=[],t=[];arguments.forEach(function(o){"string"==typeof o?e.push(o):"number"==typeof o?t.push(o):alert("error");}),$(window).on("scroll",function(){for(var o=$(window).scrollTop(),n=0;n<e.length;n++)$(e[n]).css({transform:"translateY("+o*t[n]+"px)"});});}
$(location).prop("href").indexOf("devops")>-1&&ee(["g.key","g.circle","g.cloud",-0.2,0.32,-0.23]),$(location).prop("href").indexOf("web-development")>-1&&$(window).width()>770&&ee(["g#wd-mobile","g#wd-cowgheel",0.25,0.15]),$(location).prop("href").indexOf("mobile-development")>-1&&$(window).width()>770&&ee(["g.talk","g.circle-talk","g.android-logo","g.apple-logo",0.39,-0.13,-0.2,-0.18]),$(location).prop("href").indexOf("ui-ux-design")>-1&&$(window).width()>770&&ee(["g.cube","g.sphere","g.talk",0.1,-0.13,0.4]),$(location).prop("href").indexOf("business-analysis")>-1&&$(window).width()>770&&ee(["g.documents","g.lamp","g.chart",0.1,0.25,-0.09]),$(location).prop("href").indexOf("blockchain")>-1&&$(window).width()>770&&ee(["g.litecoin","g.bitcoin","g.chain",0.1,0.25,0.12]),$(location).prop("href").indexOf("data-science")>-1&&ee(["g.circle","g.graph","g.null",0.39,-0.13,-0.1]),$(location).prop("href").indexOf("aws")>-1&&ee(["g.cloud","g.top_blocks","g.db",0.22,0.37,-0.12]),$(location).prop("href").indexOf("aiml")>-1&&ee(["g.first_blocks","g.last_blocks","g.second_block",0.39,-0.32,0.2]),$(location).prop("href").indexOf("qaqc-testing")>-1&&ee(["g.book","g.top_gear","g.bottom_gear",0.39,-0.12,-0.3]);}
function te(e){e.css({transform:"perspective(525px) translateZ("+Z+"px) rotateX("+XAngle+"deg) rotateY("+YAngle+"deg)","-webkit-transform":"-webkit-perspective(525px) -webkit-translateZ("+Z+"px) -webkit-rotateX("+XAngle+"deg) -webkit-rotateY("+YAngle+"deg)","-ms-transform":"-ms-perspective(525px) -ms-translateZ("+Z+"px) -ms-rotateX("+XAngle+"deg) -ms-rotateY("+YAngle+"deg)",}),e.find("strong").css({transform:"perspective(525px) translateZ("+Z+"px) rotateX("+XAngle/0.66+"deg) rotateY("+YAngle/0.66+"deg)"});}
if((document.documentMode||/Edge/.test(navigator.userAgent)||(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome"))||$(function(){($li=$(".box")),($div=$("div")),(XAngle=0),(YAngle=0),(Z=1),$li.on("mousemove",function(e){var t=$(this),o=e.pageX-t.offset().left,n=e.pageY-t.offset().top,i=t.width();(YAngle=6*-(0.5-o/i)),(XAngle=6*(0.5-n/i)),te(t);}),$li.on("mouseleave",function(){(oLayer=$(this)),oLayer.css({transform:"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",transition:"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"}),oLayer.find("strong").css({transform:"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",transition:"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});}),$div.on("mousemove",function(e){var t=$(this),o=e.pageX-t.offset().left,n=e.pageY-t.offset().top,i=t.width();(YAngle=2*-(0.5-o/i)),(XAngle=2*(0.5-n/i)),te(t.children(".icon"));}),$div.on("mouseleave",function(){(oLayer=$(this).children(".icon")),oLayer.css({transform:"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)"}),oLayer.find("strong").css({transform:"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)"});});}),-1!=$(location).prop("href").indexOf("services"))){}
var ne=$("#form_error_message"),ie=$("#industry_select summary"),se=$("#budget_select summary"),re=$("#main_form_name"),ae=$("#main_form_email"),le=$('textarea[name="message"]');function ce(e){var t=e.offset().top+e.innerHeight()+10;ne.offset({top:t}),ne.css("visibility","visible"),setTimeout(function(){ne.fadeOut("slow","linear");},2e3);}
$("#form").on("submit",function(e){!(function(e){if((e.preventDefault(),ne.css({visibility:"hidden",display:"flex"}),!(""==re.val().trim()?(ce(re),1):""==ae.val().trim()?(ce(ae),1):"* Industry"==ie.text().trim()?(ce(ie),1):"* Expected Budget"==se.text().trim()?(ce(se),1):""==le.val()&&(ce(le),1)))){for(var t,o=JSON.stringify($("#form").serializeArray()),n=[o.indexOf("industry"),o.indexOf("industry_description"),o.indexOf("expected_budget"),o.indexOf("message"),o.indexOf("checkbox"),o.indexOf("code")],i='"',s=0;s<n.length;s++)
i+=(t=o.slice(n[s])).slice(0,t.indexOf("}"))+'; "';var r=o.slice(0,n[0]-11)+o.slice(n[3]-11,o.indexOf("checkbox")-11)+'"';(i=r.slice(0,r.indexOf("message")+18)+i.split('"').join("'")+'"}]'),$.ajax({method:"POST",contentType:"application/json;charset=UTF-8",url:"https://6vnjgxw9wl.execute-api.eu-central-1.amazonaws.com/dev/mail-form",data:i,success:function(){$("#formWrap").addClass("form-success"),$(".contact__back-side").css("display","flex"),$(".contact__front-side").css("display","none"),(parent.location.hash="thnx");},});}})(e);}),$("#formBlog").on("submit",function(e){!(function(e){e.preventDefault();var t=JSON.stringify($(e.target).serializeArray());$.ajax({method:"POST",contentType:"application/json;charset=UTF-8",url:"https://6vnjgxw9wl.execute-api.eu-central-1.amazonaws.com/dev/mail-form",data:t,success:function(){document.getElementById("modalWrap").classList.remove("show-modal");},});})(e);});var pe=$(".other_scope");function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n;}
var ue=(function(){function e(e){(this.container=document.querySelector(e)),(this.options=document.querySelectorAll("".concat(e," > .select > .select__option"))),(this.value=this.container.querySelector("summary").textContent),(this.mouseDown=!1),this._addEventListeners(),this._setAria(),this.updateValue();}
var t;return((t=[{key:"_addEventListeners",value:function(){var e=this;this.container.addEventListener("toggle",function(){e.container.open||e.updateValue();}),this.container.addEventListener("focusout",function(t){e.mouseDown||e.container.removeAttribute("open");}),this.options.forEach(function(t){t.addEventListener("mousedown",function(){e.mouseDown=!0;}),t.addEventListener("mouseup",function(){(e.mouseDown=!1),e.container.removeAttribute("open");});}),this.container.addEventListener("keyup",function(t){var o=t.which,n=(function(e){return((function(e){if(Array.isArray(e))return de(e);})(e)||(function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e);})(e)||(function(e,t){if(e){if("string"==typeof e)return de(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?de(e,t):void 0);}})(e)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");})());})(e.options).indexOf(e.container.querySelector(".active"));switch(o){case 27:e.container.removeAttribute("open");break;case 35:t.preventDefault(),e.container.open||e.container.setAttribute("open",""),e.setChecked(e.options[e.options.length-1].querySelector("input"));break;case 36:t.preventDefault(),e.container.open||e.container.setAttribute("open",""),e.setChecked(e.options[0].querySelector("input"));break;case 38:t.preventDefault(),e.container.open||e.container.setAttribute("open",""),e.setChecked(e.options[n>0?n-1:0].querySelector("input"));break;case 40:t.preventDefault(),e.container.open||e.container.setAttribute("open",""),e.setChecked(e.options[n<e.options.length-1?n+1:e.options.length-1].querySelector("input"));}});},},{key:"_setAria",value:function(){this.container.setAttribute("aria-haspopup","listbox");var e=this.container.querySelector(".select");e.setAttribute("role","listbox"),e.querySelector("[type=radio]").setAttribute("role","option");},},{key:"updateValue",value:function(e){var t=this.container.querySelector("input:checked");t&&this.setValue(t);},},{key:"setChecked",value:function(e){(e.checked=!0),this.setValue(e);},},{key:"setValue",value:function(e){this.value!=e.value&&((this.container.querySelector("summary").textContent=e.parentNode.textContent),(this.container.querySelector("summary").style.color="#000000"),"Other"==e.parentNode.textContent.trim()?(pe.css("display","block"),$(window).width()>768&&(document.getElementById("formWrap").style.height="120vh")):"industry_select"==this.container.id&&(pe.css("display","none"),$(window).width()>768&&(document.getElementById("formWrap").style.height="100vh")),(this.value=e.value),this.options.forEach(function(e){e.classList.remove("active");}),e.parentNode.classList.add("active"),this.container.dispatchEvent(new Event("change")));},},])&&(function(e,t){for(var o=0;o<t.length;o++){var n=t[o];(n.enumerable=n.enumerable||!1),(n.configurable=!0),"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}})(e.prototype,t),e);})();if((new ue("#industry_select"),new ue("#budget_select"),-1!=$(location).prop("href").indexOf("search"))){var fe,he=$(".ss-result__content");he.children(".ss-result__title").addClass("font-h4").css({padding:"initial","text-align":"left"}),he.children(".ss-result__text").addClass("font-body-3").css("margin","15px 0"),he.children(".ss-result__url").addClass("font-subtitle").addClass("bborder").css("text-align","left"),he.parent().children("hr").remove(),he.on("click",function(){(fe=$(this).children(".ss-result__url").children("a").attr("href")),$(location).attr("href",fe);});}
$(".slick-prev").text(" "),$(".slick-next").text(" "),$(".slick-dots li button").text(" "),$("#loadOverlay").css("display","none");});
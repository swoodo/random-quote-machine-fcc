(this["webpackJsonprandom-quote-machine-fcc"]=this["webpackJsonprandom-quote-machine-fcc"]||[]).push([[0],[,function(e,t,o){e.exports=o.p+"static/media/homer-1.c18d7493.svg"},function(e){e.exports=JSON.parse('[{"quote":"Look Marge, you don\'t know what it\'s like -- I\'m the one out there every day putting his ass on the line. And I\'m not out of order! You\'re out of order! The whole freakin\' system is out of order! You want the truth? You want the truth?! You can\'t HANDLE the truth! \'Cause when you reach over and put your hand into a pile of goo that was your best friend\'s face, you\'ll know what to do! Forget it, Marge, it\'s Chinatown!"},{"quote":"Dear Lord, the gods have been good to me. As an offering, I present these milk and cookies. If you wish me to eat them instead, please give me no sign whatsoever...thy will be done."},{"quote":"The information superhighway showed the average person what some nerd thinks about Star Trek."},{"quote":"Step aside everyone! Sensitive love letters are my specialty. \'Dear Baby, Welcome to Dumpsville. Population: you."}]')},,,,,,function(e,t,o){e.exports=o.p+"static/media/homer-2.b2d4d33e.svg"},function(e,t,o){e.exports=o.p+"static/media/homer-3.ddb14a21.svg"},,,function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(4),c=o.n(r),u=o(5),s=o(6),i=o(10),l=o(7),m=o(11),d=o(1),h=o.n(d),y=o(8),f=o.n(y),p=o(9),v=o.n(p),b=o(2),g=(o(17),function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={bgColor:"#659FD5",quote:o.newQuote()},o.homerClick=function(){var e=document.querySelector(".footer-image");e.src=v.a,setTimeout((function(){e.src=h.a}),1e3)},o.quoteClick=function(){var e=document.querySelector(".footer-image");e.src=f.a,setTimeout((function(){e.src=h.a}),1e3);for(var t=["#659FD5","#EC385D","#00BCC8","#F8BEAA","#F59209"],n=Math.floor(5*Math.random()),a=t[n];a===o.state.bgColor;)a=t[n=Math.floor(5*Math.random())];document.body.style.backgroundColor=a;for(var r=document.querySelectorAll("button"),c=0;c<r.length;c++)r[c].style.backgroundColor=a;document.getElementById("author").style.color=a,document.querySelector("footer").style.color=a,document.querySelector(".quote-symbol").style.fill=a;for(var u=o.newQuote();o.state.quote===u;)u=o.newQuote();document.body.style.pointerEvents="none",setTimeout((function(){document.querySelector(".quote-text").style.display="block",document.querySelector(".quote-text").innerHTML=u,document.body.style.pointerEvents="initial"}),1e3),o.setState({bgColor:a,quote:u})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"content container"},a.a.createElement("div",{id:"quote-box"},a.a.createElement("svg",{className:"quote-symbol noselect"},a.a.createElement("path",{d:"M20.7,26.1c0,2.4-1.3,3.6-4,3.6c-1.8,0-5-3.7-9.7-11C2.4,11.4,0.1,6.6,0,4.2 C-0.1,1.5,0.9,0.1,2.9,0c1-0.1,2.4,0.8,4,2.6c1.2,1.3,3.2,4.5,6.2,9.6c1.8,3,3.9,6.5,6.2,10.5C20.1,24.1,20.6,25.2,20.7,26.1z M38.6,21.1c0,0.9-0.6,1.7-1.7,2.3c-1.1,0.6-2.2,1-3.3,1c-0.8,0.1-2.5-1.6-5.3-5c-3.1-3.8-4.7-7.2-4.7-10c0-1.4,1-2.2,2.9-2.4 c1,0,3.3,2.1,6.7,6.2C36.5,17.4,38.4,20,38.6,21.1z"})),a.a.createElement("div",{id:"text"},a.a.createElement("p",{className:"quote-text"},this.state.quote)),a.a.createElement("div",{id:"author"},a.a.createElement("p",null,"- Homer Jay Simpson")),a.a.createElement("div",{id:"tweet-quote"},a.a.createElement("button",{className:"btn"},"Tweet")),a.a.createElement("div",{id:"new-quote"},a.a.createElement("button",{className:"btn",onClick:this.quoteClick},"New Quote")))),a.a.createElement("footer",null,a.a.createElement("img",{src:h.a,alt:"Homer Simpson",className:"footer-image noselect",onClick:this.homerClick}),a.a.createElement("div",{className:"footer-content container noselect"},"by swoodo")))}},{key:"newQuote",value:function(){var e=Math.floor(Math.random()*b.length);return b[e].quote}}]),t}(n.Component));c.a.render(a.a.createElement(g,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.56cb64f3.chunk.js.map
(this["webpackJsonprandom-quote-machine-fcc"]=this["webpackJsonprandom-quote-machine-fcc"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"quote":"A woman is a lot like a refrigerator: 6 feet tall, 300 pounds\u2026 it makes ice.","image":"./images/refrigerator.jpg"},{"quote":"To alcohol! The cause of, and solution to, all of life\'s problems.","image":"./images/alcohol-solution.jpg"},{"quote":"Stupid sexy Flanders!","image":"./images/sexy-flanders.jpg"}]')},function(e,t,o){e.exports=o.p+"static/media/homer-1.c18d7493.svg"},,,,,,function(e,t,o){e.exports=o.p+"static/media/homer-2.b2d4d33e.svg"},function(e,t,o){e.exports=o.p+"static/media/homer-3.66162d19.svg"},,,function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(4),c=o.n(r),l=o(5),s=o(6),i=o(10),u=o(7),m=o(11),d=o(2),f=o.n(d),h=o(8),g=o.n(h),p=o(9),q=o.n(p),b=o(1),y=(o(17),function(e){function t(){var e,o;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={bgColor:"#659FD5",quoteIndex:0,quotesUsed:[],quote:"",bgStyle:""},o.homerClick=function(){var e=document.querySelector(".footer-image");e.src=q.a,setTimeout((function(){e.src=f.a}),1e3)},o.quoteClick=function(){var e=document.querySelector(".footer-image");e.src=g.a,setTimeout((function(){e.src=f.a}),1e3);for(var t=["#659FD5","#EC385D","#00BCC8","#F8BEAA","#F59209"],a=Math.floor(5*Math.random()),n=t[a];n===o.state.bgColor;)n=t[a=Math.floor(5*Math.random())];document.body.style.backgroundColor=n;for(var r=document.querySelectorAll("button"),c=0;c<r.length;c++)r[c].style.backgroundColor=n;document.getElementById("author").style.color=n,document.querySelector(".quote-symbol").style.fill=n;var l=o.newQuote();document.body.style.pointerEvents="none",setTimeout((function(){document.querySelector(".quote-text").style.display="block",document.querySelector(".quote-text").innerHTML=l,document.body.style.pointerEvents="initial"}),1e3),o.setState({bgColor:n,quote:l})},o.tweetClick=function(e){e.target.parentNode.setAttribute("href",'http://www.twitter.com/intent/tweet?text="'.concat(o.state.quote,'" -Homer Simpson'))},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({quote:this.newQuote()})}},{key:"newQuote",value:function(){var e=Math.floor(Math.random()*b.length),t=[];for(t=this.state.quotesUsed.slice(),this.state.quotesUsed.length===b.length-1&&(t=[]);this.state.quotesUsed.indexOf(e)>=0;)e=Math.floor(Math.random()*b.length);t.push(e);var o="linear-gradient(0deg, #ffffff, #ffffff, transparent), url("+b[e].image+") no-repeat center";return document.querySelector(".quote-box-image").style.background=o,this.setState({quoteIndex:e,quotesUsed:t,bgStyle:o}),b[e].quote}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container content-container"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{id:"quote-box"},n.a.createElement("div",{class:"quote-box-image"}),n.a.createElement("svg",{className:"quote-symbol noselect"},n.a.createElement("path",{d:"M20.7,26.1c0,2.4-1.3,3.6-4,3.6c-1.8,0-5-3.7-9.7-11C2.4,11.4,0.1,6.6,0,4.2 C-0.1,1.5,0.9,0.1,2.9,0c1-0.1,2.4,0.8,4,2.6c1.2,1.3,3.2,4.5,6.2,9.6c1.8,3,3.9,6.5,6.2,10.5C20.1,24.1,20.6,25.2,20.7,26.1z M38.6,21.1c0,0.9-0.6,1.7-1.7,2.3c-1.1,0.6-2.2,1-3.3,1c-0.8,0.1-2.5-1.6-5.3-5c-3.1-3.8-4.7-7.2-4.7-10c0-1.4,1-2.2,2.9-2.4 c1,0,3.3,2.1,6.7,6.2C36.5,17.4,38.4,20,38.6,21.1z"})),n.a.createElement("div",{id:"text"},n.a.createElement("p",{className:"quote-text"},this.state.quote)),n.a.createElement("div",{id:"author"},n.a.createElement("p",null,"- Homer Jay Simpson")),n.a.createElement("a",{id:"tweet-quote",href:"http://www.twitter.com/intent/tweet",onClick:this.tweetClick,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{className:"btn"},"Tweet")),n.a.createElement("div",{id:"new-quote"},n.a.createElement("button",{className:"btn",onClick:this.quoteClick},"New Quote"))),n.a.createElement("div",{className:"footer-image"},n.a.createElement("div",{id:"quote-box-triangle"}),n.a.createElement("img",{src:f.a,alt:"Homer Simpson",className:"noselect",onClick:this.homerClick})),n.a.createElement("footer",null,n.a.createElement("div",{className:"footer-content container noselect"},"by swoodo")))))}}]),t}(a.Component));c.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.742db9c2.chunk.js.map
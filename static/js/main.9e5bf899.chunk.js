(this.webpackJsonpreefton_hideaway=this.webpackJsonpreefton_hideaway||[]).push([[0],[,function(e,a,t){"use strict";a.a={BAND_NAME:"Jun & Tashi",BAND_LOCATION:"Nelson",BAND_CONTACT_NUMBER:"0220910069",BAND_CONTACT_EMAIL:"jun.a.kagaya@gmail.com"}},,,,function(e,a,t){"use strict";(function(e){var n=t(0),c=t.n(n),l=(t(20),t(21),t(6)),r=t(7),i=t(8),o=t(9),s=t(10),m=t(11),u=t(12);a.a=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null),c.a.createElement(r.a,null),c.a.createElement(i.a,null),c.a.createElement(o.a,null),c.a.createElement(u.a,null),c.a.createElement(s.a,null),c.a.createElement(m.a,null))},e.getRandomInt=function(e){return Math.floor(Math.random()*Math.floor(e))}}).call(this,t(19))},function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(2),c=t(0),l=t.n(c),r=t(1);function i(){var e=Object(c.useState)(0),a=Object(n.a)(e,2),t=a[0],i=a[1],o=function(e){return t===e?"active":""};return l.a.createElement("div",{className:"Header"},l.a.createElement("div",{className:"header-inner"},l.a.createElement("div",{id:"siteTitleWrapper"},l.a.createElement("h1",null,l.a.createElement("a",{href:"/"},r.a.BAND_NAME))),l.a.createElement("div",{id:"headerNav"},l.a.createElement("nav",null,l.a.createElement("div",{className:"link",style:{float:"left"}},l.a.createElement("a",{href:"#works",className:"".concat(o(0)),onClick:function(){i(0)}},"Works")),l.a.createElement("div",{className:"link",style:{float:"left"}},l.a.createElement("a",{href:"#about",className:"".concat(o(1)),onClick:function(){i(1)}},"About")),l.a.createElement("div",{className:"link",style:{float:"left"}},l.a.createElement("a",{href:"#venues",className:"".concat(o(2)),onClick:function(){i(2)}},"Venues")),l.a.createElement("div",{className:"link",style:{float:"right"}},l.a.createElement("a",{href:"#contact",className:"".concat(o(5)),onClick:function(){i(5)}},"Contact")),l.a.createElement("div",{className:"link",style:{float:"right"}},l.a.createElement("a",{href:"#testimonials",className:"".concat(o(3)),onClick:function(){i(3)}},"Testimonials"))))))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(2),c=t(0),l=t.n(c);t(1);function r(){var e=Object(c.useState)(0),a=Object(n.a)(e,2),t=a[0],r=a[1],i=Object(c.useRef)(),o=function(e){return t===e?"active":""};return window.onscroll=function(){i.current.classList.toggle("active",document.documentElement.scrollTop>125),function(){for(var e=["works","about","venues","testimonials","contact"],a=0;a<e.length;a++){var t=document.getElementById(e[a]);if(t.offsetTop+t.offsetHeight>window.scrollY)return r(a),void console.log("set active link, ",a)}}()},l.a.createElement("div",{className:"FloatingHeader",ref:i},l.a.createElement("div",{className:"header-inner"},l.a.createElement("div",{id:"headerNav"},l.a.createElement("nav",null,l.a.createElement("div",{className:"link"},l.a.createElement("a",{href:"#works",className:"".concat(o(0)),onClick:function(){r(0)}},"Works")),l.a.createElement("div",{className:"link"},l.a.createElement("a",{href:"#about",className:"".concat(o(1)),onClick:function(){r(1)}},"About")),l.a.createElement("div",{className:"link"},l.a.createElement("a",{href:"#venues",className:"".concat(o(2)),onClick:function(){r(2)}},"Venues")),l.a.createElement("div",{className:"link"},l.a.createElement("a",{href:"#testimonials",className:"".concat(o(3)),onClick:function(){r(3)}},"Testimonials")),l.a.createElement("div",{className:"link"},l.a.createElement("a",{href:"#contact",className:"".concat(o(4)),onClick:function(){r(4)}},"Contact"))))))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),c=t.n(n);function l(){return c.a.createElement("div",{className:"SectionWrapper"},c.a.createElement("h3",{className:"SectionTitle",id:"works"},"Works"),c.a.createElement("div",{className:"SectionContents"},"<Insert youtube embeds here>",c.a.createElement("br",null),c.a.createElement("br",null),"<Insert soundcloud uploads here>"))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),c=t.n(n);function l(){return c.a.createElement("div",{className:"SectionWrapper"},c.a.createElement("h3",{className:"SectionTitle",id:"about"},"About"),c.a.createElement("div",{className:"SectionContents"},"We are a music group based in Nelson, New Zealand specializing in improvisational peaceful and ambient music.",c.a.createElement("br",null),c.a.createElement("br",null),"We perform on piano, with accompaniment by flute, clarinet, trumpet or vocals.",c.a.createElement("br",null),c.a.createElement("br",null),"Our music helps to facilitate conversation and can be played at dinner parties or gatherings. We are best suited to casual relaxing atmospheres."))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),c=t.n(n),l=t(1);function r(){return c.a.createElement("div",{className:"SectionWrapper"},c.a.createElement("h3",{className:"SectionTitle",id:"testimonials"},"Testimonials"),c.a.createElement("div",{className:"SectionContents"},c.a.createElement("div",{className:"quote"},c.a.createElement("p",null,"Relaxing and therapeutic, ",l.a.BAND_NAME," have managed to manufacture a unique calming experience."),c.a.createElement("p",null,"Leila, Travel Planner")),c.a.createElement("div",{className:"quote"},c.a.createElement("p",null,"Peaceful"),c.a.createElement("p",null,"Rory, Builder")),c.a.createElement("div",{className:"quote"},c.a.createElement("p",null,"Makes me forget everything."),c.a.createElement("p",null,"Jennifer, Masseuse at Goodhands ")),c.a.createElement("div",{className:"quote"},c.a.createElement("p",null,"We needed personalized music to fill the room but wouldn't dominate it. It didn't take us long to find ",l.a.BAND_NAME," and they talked with us and managed to fit our needs perfectly."),c.a.createElement("p",null,"Linda, Host at Clearway Nelson"))))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),c=t.n(n),l=t(1);function r(){return c.a.createElement("div",{className:"SectionWrapper"},c.a.createElement("h3",{className:"SectionTitle",id:"contact"},"Contact"),c.a.createElement("div",{className:"SectionContents"},"Email: ",c.a.createElement("a",{href:"mailto:jun.a.kagaya@gmail.com"},l.a.BAND_CONTACT_EMAIL),c.a.createElement("br",null),"Phone: +64 ",l.a.BAND_CONTACT_NUMBER))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),c=t.n(n);function l(){return c.a.createElement("div",{className:"SectionWrapper"},c.a.createElement("h3",{className:"SectionTitle",id:"venues"},"Venues"),c.a.createElement("div",{className:"SectionContents"},"<Insert venues Here>"))}},function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(4),r=t.n(l),i=(t(18),t(5));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.9e5bf899.chunk.js.map
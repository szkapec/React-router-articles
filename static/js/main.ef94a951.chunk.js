(this.webpackJsonppodstawy=this.webpackJsonppodstawy||[]).push([[0],{26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){e.exports=a.p+"static/media/ryanflorence.5086cbe8.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/michaeljackson.090afebd.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/kentcdodds.3a72cbe0.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/danabramov.250c0286.jpg"},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),c=a(21),o=a(8),s=a(25),m=a(10),u=a(11),p=a(13),d=a(12),h=a(14),g=(a(31),a(32),a(33),a(34),a(35),a(22)),f=(a(36),function(e){var t=e.children,a=e.href,n=e.secondary,i=e.click;e.ex,e.types,Object(g.a)(e,["children","href","secondary","click","ex","types"]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("a",{href:a,target:"_blank",className:"listItem__button",rel:"noopener noreferrer"},t):r.a.createElement("button",{onClick:i,className:n?"secondary":"form__button",type:"submit"},t))}),E=(a(37),function(e){var t=e.children;return r.a.createElement("h2",{className:"listItem__name"},t)}),b=function(e){var t=e.image,a=e.title,n=e.description,i=e.link;console.log(t);return r.a.createElement("li",{className:"listItem__wrapper"},t&&r.a.createElement("img",{src:t.length<=6?"https://unsplash.it/200/200":t,className:"listItem__image",alt:"B\u0142\u0105d zdj\u0119cia"}),r.a.createElement("div",{className:"pudelko"},r.a.createElement(E,null,a),r.a.createElement("p",{className:"listItem__description"},n),i&&r.a.createElement(f,{href:i},"Odwiedz strone")))};b.defaultProps={image:null,link:null};var v=b,w=(a(38),function(e){var t=e.items,a=e.is;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"listWrapper__wrapper"},t.length?t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,Object.assign({key:e.name},e)))})):r.a.createElement("h2",{className:"noItems"},"Jeszcze nic nie dodane, prosze doda\u0107 kilka ",a,"! ")))}),k=r.a.createContext(),y=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement(w,{items:e.articles,is:"artyku\u0142\xf3w"})}))},N=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement(w,{items:e.notes,is:"notatek"})}))},_=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement(w,{items:e.twitters,is:"twitter\xf3w"})}))},I=a(7),j=a(6),C=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nawigationWrapper"},r.a.createElement("li",{className:"navigationItem"},r.a.createElement(I.b,{exact:!0,activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/"},"Twittery")),r.a.createElement("li",{className:"navigationItem"},r.a.createElement(I.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"articles"},"Artyku\u0142y")),r.a.createElement("li",{className:"navigationItem"},r.a.createElement(I.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"notes"},"Notatki"))))},z=(a(44),function(e){var t=e.openModalFn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header__wrapper"},r.a.createElement(C,null),r.a.createElement(f,{click:t,secondary:!0},"Dodaj nowy")))}),O=(a(45),a(46),a(47),a(48),function(e){var t=e.tag,a=e.name,n=e.label,i=(e.maxLength,e.textarea,e.onChange),l=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form__item"},r.a.createElement(t,{type:"text",name:a,id:a,required:l,placeholder:" ",onChange:i}),r.a.createElement("label",{className:"form__label",htmlFor:a},n),r.a.createElement("div",{className:"forms__item__bar"})))});O.defaultProps={tag:"input",maxLength:40};var F=O,x="twitters",A="notes",M="articles",L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={type:x,title:"",link:"",image:"",description:""},a.handleInputChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.handleRadioButtonChange=function(e){a.setState({type:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.type;return r.a.createElement(k.Consumer,null,(function(a){return r.a.createElement("div",{className:"form__wrapper"},r.a.createElement(E,null,"Dodaj nowy"),r.a.createElement("form",{className:"form__form",onSubmit:function(t){return a.addItem(t,e.state)}},r.a.createElement("div",{className:"newButton"},r.a.createElement("input",{className:"input",id:x,checked:t===x,type:"radio",onChange:function(){return e.handleRadioButtonChange(x)}}),r.a.createElement("label",{className:"radio",htmlFor:x},"Twittery"),r.a.createElement("input",{className:"input",id:M,checked:t===M,type:"radio",onChange:function(){return e.handleRadioButtonChange(M)}}),r.a.createElement("label",{className:"radio",htmlFor:M},"Artyku\u0142y"),r.a.createElement("input",{className:"input",id:A,checked:t===A,type:"radio",onChange:function(){return e.handleRadioButtonChange(A)}}),r.a.createElement("label",{className:"radio",htmlFor:A},"Notatki"),r.a.createElement(f,{className:"radioButton",click:e.props.close},"X")),r.a.createElement(F,{onChange:e.handleInputChange,value:e.state.title,name:"title",required:!0,label:"twitters"===t?"Nazwa Twittera":"Tytu\u0142"}),t!==A?r.a.createElement(F,{onChange:e.handleInputChange,value:e.state.link,name:"link",required:!0,label:"twitters"===t?"Link do Twittera":"Link"}):null,"twitters"===t?r.a.createElement(F,{onChange:e.handleInputChange,images:!0,value:e.state.image,name:"image",label:"Link do zdj\u0119cia"}):null,r.a.createElement(F,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",required:!0,name:"description",label:"twitters"===t?"Dodaj opis do Twittera":"Dodaj opis"}),r.a.createElement(f,{types:e.state.type},"Dodaj nowy post")))}))}}]),t}(r.a.Component),P=function(e){var t=e.close;return r.a.createElement("div",{className:"modal__wrapper"},r.a.createElement(L,{close:t}))},S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={twitters:[{title:"lorem",description:"API Fetch zapewnia interfejs JavaScript dla dost\u0119pu i manipulowania cz\u0119\u015bci ruroci\u0105gu, takich jak HTTP \u017c\u0105da\u0144 i odpowiedzi. Zapewnia r\xf3wnie\u017c globaln\u0105 fetch()metod\u0119, kt\xf3ra zapewnia \u0142atwy, logiczny spos\xf3b asynchronicznego pobierania zasob\xf3w w sieci. ",link:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",image:"http://unsplash.it/200/200"},{title:"lorem",description:"lorem lorem lorem ",link:"https://google.com",image:"http://unsplash.it/200/200"}],articles:[{title:"lorem",description:"API Fetch zapewnia interfejs JavaScript dla dost\u0119pu i manipulowania cz\u0119\u015bci ruroci\u0105gu, takich jak HTTP \u017c\u0105da\u0144 i odpowiedzi. Zapewnia r\xf3wnie\u017c globaln\u0105 fetch()metod\u0119, kt\xf3ra zapewnia \u0142atwy, logiczny spos\xf3b asynchronicznego pobierania zasob\xf3w w sieci. ",link:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}],notes:[],isModalOpen:!1},a.addItem=function(e,t){e.preventDefault(),a.setState((function(e){return Object(o.a)({},t.type,[].concat(Object(s.a)(e[t.type]),[t]))})),a.closeIsModal()},a.openModal=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},a.closeIsModal=function(){a.setState({isModalOpen:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Object(c.a)({},this.state,{addItem:this.addItem});return(r.a.createElement(I.a,{basename:"/"},r.a.createElement(k.Provider,{value:e},r.a.createElement(z,{openModalFn:this.openModal}),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:_}),r.a.createElement(j.a,{path:"/articles",component:y}),r.a.createElement(j.a,{path:"/notes",component:N})),this.state.isModalOpen&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{close:this.openModal})))))}}]),t}(r.a.Component);a(49);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ef94a951.chunk.js.map
(this.webpackJsonppodstawy=this.webpackJsonppodstawy||[]).push([[0],{26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){e.exports=a.p+"static/media/ryanflorence.5086cbe8.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/michaeljackson.090afebd.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/kentcdodds.3a72cbe0.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/danabramov.250c0286.jpg"},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),l=a.n(r),c=a(21),o=a(8),s=a(25),m=a(10),u=a(11),p=a(13),d=a(12),h=a(14),g=(a(31),a(32),a(33),a(34),a(35),a(22)),f=(a(36),function(e){var t=e.children,a=e.href,n=e.secondary,r=e.click;e.ex,e.types,Object(g.a)(e,["children","href","secondary","click","ex","types"]);return i.a.createElement(i.a.Fragment,null,a?i.a.createElement("a",{href:a,target:"_blank",className:"listItem__button",rel:"noopener noreferrer"},t):i.a.createElement("button",{onClick:r,className:n?"secondary":"form__button",type:"submit"},t))}),E=(a(37),function(e){var t=e.children;return i.a.createElement("h2",{className:"listItem__name"},t)}),v=function(e){var t=e.image,a=e.title,n=e.description,r=e.link;console.log(t);return i.a.createElement("li",{className:"listItem__wrapper"},t&&i.a.createElement("div",{className:"listItem__imageDiv"},i.a.createElement("img",{src:t.length<=6?"https://unsplash.it/200/200":t,className:"listItem__image",alt:"B\u0142\u0105d zdj\u0119cia"})),i.a.createElement("div",{className:"pudelko"},i.a.createElement(E,null,a),i.a.createElement("p",{className:"listItem__description"},n),r&&i.a.createElement(f,{href:r},"Odwiedz strone")))};v.defaultProps={image:null,link:null};var b=v,w=(a(38),function(e){var t=e.items,a=e.is;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"listWrapper__wrapper"},t.length?t.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,Object.assign({key:e.name},e)))})):i.a.createElement("h2",{className:"noItems"},"Jeszcze nic nie dodane, prosze doda\u0107 kilka ",a,"! ")))}),k=i.a.createContext(),y=function(){return i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement(w,{items:e.articles,is:"artyku\u0142\xf3w"})}))},N=function(){return i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement(w,{items:e.notes,is:"notatek"})}))},_=function(){return i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement(w,{items:e.twitters,is:"twitter\xf3w"})}))},I=a(7),j=a(6),C=function(){return i.a.createElement("nav",null,i.a.createElement("ul",{className:"nawigationWrapper"},i.a.createElement("li",{className:"navigationItem"},i.a.createElement(I.b,{exact:!0,activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/"},"Twittery")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(I.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"articles"},"Artyku\u0142y")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(I.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"notes"},"Notatki"))))},O=(a(44),function(e){var t=e.openModalFn;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header__wrapper"},i.a.createElement(C,null),i.a.createElement(f,{click:t,secondary:!0},"Dodaj nowy")))}),z=(a(45),a(46),a(47),a(48),function(e){var t=e.tag,a=e.name,n=e.label,r=(e.maxLength,e.textarea,e.onChange),l=e.required;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form__item"},i.a.createElement(t,{type:"text",name:a,id:a,required:l,placeholder:" ",onChange:r}),i.a.createElement("label",{className:"form__label",htmlFor:a},n),i.a.createElement("div",{className:"forms__item__bar"})))});z.defaultProps={tag:"input",maxLength:40};var F=z,x="twitters",A="notes",M="articles",L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={type:x,title:"",link:"",image:"",description:""},a.handleInputChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.handleRadioButtonChange=function(e){a.setState({type:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.type;return i.a.createElement(k.Consumer,null,(function(a){return i.a.createElement("div",{className:"form__wrapper"},i.a.createElement(E,null,"Dodaj nowy"),i.a.createElement("form",{className:"form__form",onSubmit:function(t){return a.addItem(t,e.state)}},i.a.createElement("div",{className:"newButton"},i.a.createElement("input",{className:"input",id:x,checked:t===x,type:"radio",onChange:function(){return e.handleRadioButtonChange(x)}}),i.a.createElement("label",{className:"radio",htmlFor:x},"Twittery"),i.a.createElement("input",{className:"input",id:M,checked:t===M,type:"radio",onChange:function(){return e.handleRadioButtonChange(M)}}),i.a.createElement("label",{className:"radio",htmlFor:M},"Artyku\u0142y"),i.a.createElement("input",{className:"input",id:A,checked:t===A,type:"radio",onChange:function(){return e.handleRadioButtonChange(A)}}),i.a.createElement("label",{className:"radio",htmlFor:A},"Notatki"),i.a.createElement(f,{className:"radioButton",click:e.props.close},"X")),i.a.createElement(F,{onChange:e.handleInputChange,value:e.state.title,name:"title",required:!0,label:"twitters"===t?"Nazwa Twittera":"Tytu\u0142"}),t!==A?i.a.createElement(F,{onChange:e.handleInputChange,value:e.state.link,name:"link",required:!0,label:"twitters"===t?"Link do Twittera":"Link"}):null,"twitters"===t?i.a.createElement(F,{onChange:e.handleInputChange,images:!0,value:e.state.image,name:"image",label:"Link do zdj\u0119cia"}):null,i.a.createElement(F,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",required:!0,name:"description",label:"twitters"===t?"Dodaj opis do Twittera":"Dodaj opis"}),i.a.createElement(f,{secondary2:!0,types:e.state.type},"Dodaj nowy post")))}))}}]),t}(i.a.Component),P=function(e){var t=e.close;return i.a.createElement("div",{className:"modal__wrapper"},i.a.createElement(L,{close:t}))},S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={twitters:[{title:"Api Fetch",description:"API Fetch zapewnia interfejs JavaScript dla dost\u0119pu i manipulowania cz\u0119\u015bci ruroci\u0105gu, takich jak HTTP \u017c\u0105da\u0144 i odpowiedzi. Zapewnia r\xf3wnie\u017c globaln\u0105 fetch()metod\u0119, kt\xf3ra zapewnia \u0142atwy, logiczny spos\xf3b asynchronicznego pobierania zasob\xf3w w sieci. ",link:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",image:"http://unsplash.it/200/200"},{title:"lorem",description:"lorem lorem lorem ",link:"https://google.com",image:"http://unsplash.it/200/200"}],articles:[{title:"Api Fetch",description:"API Fetch zapewnia interfejs JavaScript dla dost\u0119pu i manipulowania cz\u0119\u015bci ruroci\u0105gu, takich jak HTTP \u017c\u0105da\u0144 i odpowiedzi. Zapewnia r\xf3wnie\u017c globaln\u0105 fetch()metod\u0119, kt\xf3ra zapewnia \u0142atwy, logiczny spos\xf3b asynchronicznego pobierania zasob\xf3w w sieci. ",link:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}],notes:[],isModalOpen:!1},a.collback=function(){console.log("cooo"),a.state.isModalOpen||a.setState({isModalOpen:!1})},a.addItem=function(e,t){e.preventDefault(),a.setState((function(e){return Object(o.a)({},t.type,[].concat(Object(s.a)(e[t.type]),[t]))})),a.closeIsModal()},a.openModal=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},a.closeIsModal=function(){a.setState({isModalOpen:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Object(c.a)({},this.state,{addItem:this.addItem});return(i.a.createElement(I.a,{basename:"/"},i.a.createElement(k.Provider,{value:e},i.a.createElement(O,{openModalFn:this.openModal}),i.a.createElement(j.c,null,i.a.createElement(j.a,{exact:!0,path:"/",component:_}),i.a.createElement(j.a,{path:"/articles",component:y}),i.a.createElement(j.a,{path:"/notes",component:N})),this.state.isModalOpen&&i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{close:this.openModal})))))}}]),t}(i.a.Component);a(49);l.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3ba41bc8.chunk.js.map
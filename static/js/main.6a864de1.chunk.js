(this.webpackJsonppodstawy=this.webpackJsonppodstawy||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.a87d0f35.svg"},27:function(e,t,a){e.exports=a(51)},32:function(e,t,a){e.exports=a.p+"static/media/ryanflorence.5086cbe8.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/michaeljackson.090afebd.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/kentcdodds.3a72cbe0.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/danabramov.250c0286.jpg"},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=a(21),o=a(7),s=a(26),m=a(10),u=a(11),p=a(13),d=a(12),h=a(14),g=(a(32),a(33),a(34),a(35),l.a.createContext()),f=(a(36),a(22)),E=(a(37),function(e){var t=e.children,a=e.href,n=e.secondary,r=e.click;Object(f.a)(e,["children","href","secondary","click"]);return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("a",{href:a,target:"_blank",className:"listItem__button",rel:"noopener noreferrer"},t):l.a.createElement("button",{onClick:r,className:n?"secondary":"form__button",type:"submit"},t))}),v=(a(38),function(e){var t=e.children;return l.a.createElement("h2",{className:"listItem__name"},t)}),b=function(e){var t=e.image,a=e.title,n=e.description,r=e.link;return l.a.createElement("li",{className:"listItem__wrapper"},t&&l.a.createElement("img",{src:""===t?"https://unsplash.it/200/200":t,className:"listItem__image",alt:a+1}),l.a.createElement("div",null,l.a.createElement(v,null,a),l.a.createElement("p",{className:"listItem__description"},n),r&&l.a.createElement(E,{href:r},"visit twitter page")))};b.defaultProps={image:null,link:null};var N=b,k=(a(39),function(e){return l.a.createElement(l.a.Fragment,null,console.log(e.items.length),l.a.createElement("ul",{className:"listWrapper__wrapper"},e.items.length?e.items.map((function(e){return l.a.createElement(N,Object.assign({key:e.name},e))})):l.a.createElement("h2",{className:"noItems"},'"There\'s nothing here yet, please add some items!" ')))}),_=function(){return l.a.createElement(g.Consumer,null,(function(e){return l.a.createElement(k,{items:e.articles})}))},I=function(){return l.a.createElement(g.Consumer,null,(function(e){return l.a.createElement(k,{items:e.notes})}))},w=function(){return l.a.createElement(g.Consumer,null,(function(e){return l.a.createElement(k,{items:e.twitters})}))},C=a(8),y=a(6),j=function(){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"nawigationWrapper"},l.a.createElement("li",{className:"navigationItem"},l.a.createElement(C.b,{exact:!0,activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/"},"Twitters")),l.a.createElement("li",{className:"navigationItem"},l.a.createElement(C.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"articles"},"Articles")),l.a.createElement("li",{className:"navigationItem"},l.a.createElement(C.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"notes"},"Notes"))))},O=(a(45),a(25)),x=a.n(O),M=function(e){var t=e.openModalFn;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header__wrapper"},l.a.createElement("img",{src:x.a,alt:"logoImage"}),l.a.createElement(j,null),l.a.createElement(E,{click:t,secondary:!0},"New Item")))},L=(a(46),a(47),a(48),a(49),function(e){var t=e.tag,a=e.name,n=e.label,r=e.maxLength,c=(e.textarea,e.onChange);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form__item"},l.a.createElement(t,{type:"text",name:a,id:a,required:!0,maxLength:r,placeholder:" ",onChange:c}),l.a.createElement("label",{className:"form__label",htmlFor:a},n),l.a.createElement("div",{className:"forms__item__bar"})))});L.defaultProps={tag:"input",maxLength:40};var F=L,A="twitters",B="notes",T="articles",S={twitter:"Twitter description",notes:"Notes description",article:"articles description"},R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={type:A,title:"",link:"",image:"",description:""},a.handleInputChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.handleRadioButtonChange=function(e){a.setState({type:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.type;return l.a.createElement(g.Consumer,null,(function(a){return l.a.createElement("div",{className:"form__wrapper"},l.a.createElement(v,null,"Add new ",S[t]),l.a.createElement("form",{className:"form__form",onSubmit:function(t){return a.addItem(t,e.state)}},l.a.createElement("div",{className:"newButton"},l.a.createElement("input",{className:"input",id:A,checked:t===A,type:"radio",onChange:function(){return e.handleRadioButtonChange(A)}}),l.a.createElement("label",{className:"radio",htmlFor:A},"Twitters"),l.a.createElement("input",{className:"input",id:B,checked:t===B,type:"radio",onChange:function(){return e.handleRadioButtonChange(B)}}),l.a.createElement("label",{className:"radio",htmlFor:B},"Notes"),l.a.createElement("input",{className:"input",id:T,checked:t===T,type:"radio",onChange:function(){return e.handleRadioButtonChange(T)}}),l.a.createElement("label",{className:"radio",htmlFor:T},"articles"),l.a.createElement(E,{className:"radioButton",secondary:!0,click:e.props.close},"X")),l.a.createElement(F,{onChange:e.handleInputChange,value:e.state.title,name:"title",label:"twitters"===t?"Twitters name":"Title",maxLength:30}),t!==B?l.a.createElement(F,{onChange:e.handleInputChange,value:e.state.link,name:"link",label:"twitters"===t?"Twitter link":"Link"}):null,"twitters"===t?l.a.createElement(F,{onChange:e.handleInputChange,value:e.state.image,name:"image",label:"Image"}):null,l.a.createElement(F,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",name:"description",label:"Description"}),l.a.createElement(E,null,"add new item")))}))}}]),t}(l.a.Component),P=function(e){var t=e.close;return l.a.createElement("div",{className:"modal__wrapper"},l.a.createElement(R,{close:t}))},D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={twitters:[{title:"lorem",description:"lorem lorem lorem ",link:"https://google.com",image:"http://unsplash.it/200/200"},{title:"lorem",description:"lorem lorem lorem ",link:"https://google.com",image:"http://unsplash.it/200/200"}],articles:[],notes:[],isModalOpen:!1},a.addItem=function(e,t){e.preventDefault(),a.setState((function(e){return Object(o.a)({},t.type,[].concat(Object(s.a)(e[t.type]),[t]))})),a.closeIsModal()},a.openModal=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},a.closeIsModal=function(){a.setState({isModalOpen:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Object(i.a)({},this.state,{addItem:this.addItem});return(l.a.createElement(C.a,null,l.a.createElement(g.Provider,{value:e},l.a.createElement(M,{openModalFn:this.openModal}),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/",component:w}),l.a.createElement(y.a,{path:"/articles",component:_}),l.a.createElement(y.a,{path:"/notes",component:I})),this.state.isModalOpen&&l.a.createElement(P,{close:this.openModal}))))}}]),t}(l.a.Component);a(50);c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6a864de1.chunk.js.map
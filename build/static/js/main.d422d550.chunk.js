(this.webpackJsonppuhelinluettolo=this.webpackJsonppuhelinluettolo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),a=t.n(c),o=t(3),r=t(2),u=t(0),i=function(e){var n=e.filter,t=e.handleFilterChange;return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{children:["filter shown with",Object(u.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.persons,t=e.filter,c=e.handleRemovePerson;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(){return c(e.name,e.id)},children:"delete"})]},e.name)}))},d=function(e){var n=e.addName,t=e.newName,c=e.handleNameChange,a=e.newNumber,o=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:a,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},s=t(4),f=t.n(s),h="http://localhost:3001/api/persons",j=function(){return f.a.get(h).then((function(e){return e.data}))},b=function(e){return f.a.post(h,e).then((function(e){return e.data}))},m=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message;return null===n?null:n.includes("Del")?Object(u.jsx)("div",{className:"deleted",children:n}):Object(u.jsx)("div",{className:"added",children:n})},p=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),f=s[0],h=s[1],p=Object(r.useState)(""),g=Object(o.a)(p,2),x=g[0],w=g[1],N=Object(r.useState)(""),C=Object(o.a)(N,2),S=C[0],k=C[1],y=Object(r.useState)(null),D=Object(o.a)(y,2),F=D[0],I=D[1];Object(r.useEffect)((function(){j().then((function(e){c(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(v,{message:F}),Object(u.jsx)(i,{filter:S,handleFilterChange:function(e){console.log(e.target.value),k(e.target.value)}}),Object(u.jsx)("h3",{children:"add a new"}),Object(u.jsx)(d,{addName:function(e){e.preventDefault();var n={name:f,number:x};if(t.filter((function(e){return e.name===n.name})).length>0){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===f}));m(a.id,n).then((function(e){c(t.map((function(n){return n.name===f?e:n})))})).catch((function(e){I("Information of ".concat(f," has already been removed from server"))})),c(t.concat(n)),h(""),w(""),I("Updated ".concat(f)),setTimeout((function(){I(null)}),5e3)}}else b(n).then((function(e){c(t.concat(e)),h(""),w(""),I("Added ".concat(f))})).catch((function(e){I("Failed to add ".concat(f))})),setTimeout((function(){I(null)}),5e3)},newName:f,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},newNumber:x,handleNumberChange:function(e){console.log(e.target.value),w(e.target.value)}}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(l,{persons:t,filter:S,handleRemovePerson:function(e,n){window.confirm("Delete ".concat(e," ?"))&&(O(n).then((function(){c(t.filter((function(e){return e.id!==n}))),h(""),w(""),I("Deleted ".concat(e))})).catch((function(n){c(t.filter((function(n){return n.name!==e}))),I("Information of ".concat(e," has already been removed from server"))})),setTimeout((function(){I(null)}),5e3))}})]})};t(38);a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d422d550.chunk.js.map
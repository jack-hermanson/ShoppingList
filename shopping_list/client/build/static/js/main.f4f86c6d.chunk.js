(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(23),s=n.n(a),i=n(133),o=n(130),u=n(131),l=n(18),j=n(24),d=n(25),b=n(29),p=n(28),h=n(3),m=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"page-title",children:[Object(h.jsx)("h4",{className:"title-text",children:this.props.title}),Object(h.jsx)("div",{className:"right",children:this.props.children})]})})}}]),n}(r.Component),f=n(135),O=n(136),x=n(137),g=n(129),v=n(121),k=n(118),N=n(132),w=n(10),I=n(9),y=n.n(I),C=n(13),S=n(15),F=n(16),G=n.n(F),E="/api/alerts/",T=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post(E,{text:t,color:n});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,Promise.resolve();case 6:e.next=10;break;case 8:return e.next=10,Promise.reject();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="Successfully ".concat(t," ").concat(n,"."),e.next=3,T(r,"success");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.put("/api/items/edit/".concat(t.id),t);case 3:return n=e.sent,r=n.data,e.next=7,D("updated",'item "'.concat(r.name,'"'));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,T("Error in editItem api call: ".concat(e.t0.message),"danger");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.put("/api/items/toggle/".concat(t),{checked:n});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,T("Error in toggleItemCheck api call: ".concat(e.t0.message),"danger");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.post("/api/items/",t);case 3:return n=e.sent,r=n.data,e.next=7,D("added",'item "'.concat(r.name,'"'));case 7:return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,T("Error in the saveItem api call: ".concat(e.t0.message),"danger");case 14:throw new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.delete("/api/items/",{data:{id:t}});case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,T("Error in the deleteItem api call: ".concat(e.t0.message),"danger");case 9:throw new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/api/groups/");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{visible:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=Object(S.c)({groups:[],setGroups:Object(S.b)((function(e,t){e.groups=t})),fetchGroups:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,t.setGroups(n.sort((function(e,t){return"Misc"===e.name?1:"Misc"===t.name?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),addGroup:Object(S.b)((function(e,t){e.groups.push(t)})),saveGroup:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post("/api/groups/",n);case 2:return r=e.sent,t.addGroup(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleGroup:Object(S.b)((function(e,t){e.groups=e.groups.map((function(e){return e.id!==t||(e.visible=!e.visible),e}))})),items:null,setItems:Object(S.b)((function(e,t){e.items=t})),fetchItems:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/api/items/");case 2:n=e.sent,t.setItems(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),editItem:Object(S.b)((function(e,t){var n=Object(w.a)(Object(w.a)({},t),{},{groups:t.groups.map((function(e){return e.groupId}))});e.items=e.items.map((function(e){return e.id===n.id?t:e}));var r=Date.now();R(n).then((function(){console.log("Item edited. Response time: ".concat(z(r),"s"))}))})),deleteItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,A(n);case 3:return console.log("Item deleted. Response time: ".concat(z(r),"s")),e.next=6,t.fetchItems();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleItemCheck:Object(S.b)((function(e,t){var n=Date.now();e.items=e.items.map((function(e){return e.id===t.itemId?(e.checked=t.checked,e):e})),q(t.itemId,t.checked).then((function(){console.log("Item ".concat(t.checked?"":"un","checked. Response time: ").concat(z(n),"s"))}))})),focusItem:null,setFocusItem:Object(S.b)((function(e,t){e.focusItem=t})),saveItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),c=Object(w.a)(Object(w.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),e.next=4,P(c);case 4:return e.next=6,t.fetchItems();case 6:console.log("New item added. Response time: ".concat(z(r),"s"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),alerts:[]}),z=function(e){return(Date.now()-e)/1e3},K=Object(S.d)(),J=K.useStoreActions,M=(K.useStoreDispatch,K.useStoreState),_=n(54),L=function(e){var t=J((function(e){return e.toggleGroup}));return Object(h.jsxs)(k.a,{className:"d-flex",children:[Object(h.jsxs)("div",{className:"d-block mt-auto ".concat(!1===e.visible&&"text-muted"),onClick:function(){return t(e.id)},children:[e.name,""!==e.notes&&Object(h.jsx)("small",{className:"d-block text-muted",children:e.notes})]}),Object(h.jsx)("div",{className:"my-auto ml-auto",children:Object(h.jsx)(_.a,{size:"sm",color:"info",children:"Complete"})})]})},Y=n(119),H=n(55),Q=function(e){var t=e.item;return Object(h.jsxs)("label",{htmlFor:"checkbox_".concat(t.id),className:"custom-control-label",children:[t.name,t.recurring?Object(h.jsx)(H.a,{className:"ml-1",style:{paddingBottom:"3px"}}):"",""===t.notes?"":Object(h.jsx)("small",{className:"text-muted d-block",children:t.notes})]})},U=n(56),W=function(e){var t=e.item,n=J((function(e){return e.setFocusItem})),c=J((function(e){return e.toggleItemCheck}));return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)(Y.a,{id:"checkbox_".concat(t.id),type:"checkbox",className:"custom-control-input",checked:t.checked,onChange:function(e){return c({itemId:t.id,checked:e.target.checked})}}),Object(h.jsx)(Q,{item:t})]})}),Object(h.jsx)("td",{children:Object(h.jsx)(U.a,{style:{cursor:"pointer"},onClick:function(){return n(t)}})})]})})},X=n(120),Z=(n(87),n(57)),$=n.n(Z),ee=function(e){var t=e.className;return Object(h.jsx)("div",{className:t,children:Object(h.jsx)($.a,{type:"Bars",height:30,color:"#fff"})})},te=function(e){var t=e.group,n=M((function(e){var n;return null===(n=e.items)||void 0===n?void 0:n.filter((function(e){return e.groups.some((function(e){return e.groupId===t.id}))}))}));return Object(h.jsx)(r.Fragment,{children:void 0!==n?Object(h.jsx)(X.a,{className:"mb-0 same-width",striped:!0,children:Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)(W,{item:e},e.id)}))})}):Object(h.jsx)(ee,{className:"my-3"})})},ne=function(e){var t=e.group;return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(v.a,{className:"space-between",children:[Object(h.jsx)(L,{name:t.name,notes:t.notes,id:t.id,visible:t.visible}),!1!==t.visible&&Object(h.jsx)(te,{group:t})]})})},re=function(){var e=M((function(e){return e.groups})),t=J((function(e){return e.fetchGroups})),n=J((function(e){return e.fetchItems}));return Object(r.useEffect)((function(){t(),n()}),[t,n]),Object(h.jsx)(r.Fragment,{children:e.map((function(e){return Object(h.jsx)(ne,{group:e},e.id)}))})},ce=c.a.memo(re),ae=n(125),se=n(134),ie=n(126),oe=n(127),ue=n(128),le=n(123),je=n(122),de=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(je.a,{required:this.props.required,htmlFor:this.props.id,children:this.props.label}),Object(h.jsx)(Y.a,{required:this.props.required,id:this.props.id,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onKeyPress:this.props.onKeyPress,placeholder:this.props.placeholder})]})}}]),n}(r.Component),be=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)(le.a,{check:!0,children:Object(h.jsxs)(je.a,{check:!0,children:[Object(h.jsx)(Y.a,{checked:this.props.checked,onChange:this.props.handleChange,type:"checkbox"}),this.props.label]})})}}]),n}(r.Component),pe=function(e){var t=M((function(e){return e.groups}));return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(le.a,{children:Object(h.jsx)(de,{required:!0,label:"Name",id:"".concat(e.formName,"-name-input"),type:"text",value:e.editedItem.name,onChange:e.handleNameTextChange,placeholder:"The name of the item...",onKeyPress:function(t){"Enter"===t.key&&e.handleFormSubmit()}})}),Object(h.jsx)(le.a,{children:Object(h.jsx)(de,{label:"Notes",id:"".concat(e.formName,"-notes-input"),type:"textarea",value:e.editedItem.notes,onChange:e.handleNotesTextChange,placeholder:"Optional..."})}),Object(h.jsxs)(le.a,{children:[Object(h.jsx)(je.a,{className:"mb-0",children:"Recurring"}),Object(h.jsx)(be,{checked:e.editedItem.recurring,handleChange:e.handleRecurringCheckChange,label:"Item repeats"})]}),Object(h.jsxs)(le.a,{children:[Object(h.jsx)(je.a,{className:"mb-0",children:"Groups"}),t.map((function(t){return Object(h.jsx)(be,{checked:e.editedItem.groups.some((function(e){return e.groupId===t.id})),handleChange:function(n){return e.handleGroupCheckChange(n,t.id)},label:t.name},t.id)}))]})]})},he=n(124),me=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={visible:!0},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(he.a,{className:"mt-3",color:this.props.color,isOpen:this.state.visible,toggle:function(){return e.setState({visible:!1})},children:this.props.text})}}]),n}(r.Component);function fe(e){var t=!0,n="";return e.name.replace(" ","").length<2&&(t=!1,n+="The 'name' field must have at least 2 characters. "),e.groups.length<1&&(t=!1,n+="At least one group is required. "),{isValid:t,alertText:n}}var Oe={name:"",notes:"",groups:[],checked:!1,recurring:!1,id:void 0},xe=function(){var e=M((function(e){return e.focusItem})),t=J((function(e){return e.setFocusItem})),n=J((function(e){return e.editItem})),c=J((function(e){return e.deleteItem})),a=M((function(e){return e.groups})),s=Object(r.useState)(null),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),b=d[0],p=d[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),O=f[0],x=f[1],g=function(){t(null)},v=Object(r.useState)(e),k=Object(l.a)(v,2),N=k[0],I=k[1];return Object(r.useEffect)((function(){I(e)}),[e]),Object(h.jsx)(ae.a,{children:e&&Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(se.a,{centered:!0,toggle:y,isOpen:!0,children:[Object(h.jsx)(ie.a,{toggle:y,className:"d-flex",children:e.name}),Object(h.jsxs)(oe.a,{children:[function(){if(!1===o)return Object(h.jsx)(me,{color:"danger",text:b})}(),Object(h.jsx)(pe,{formName:"edit-item",editedItem:N,handleNameTextChange:function(e){return I(Object(w.a)(Object(w.a)({},N),{},{name:e.target.value}))},handleNotesTextChange:function(e){return I(Object(w.a)(Object(w.a)({},N),{},{notes:e.target.value}))},handleRecurringCheckChange:function(e){return I(Object(w.a)(Object(w.a)({},N),{},{recurring:e.target.checked}))},handleGroupCheckChange:function(e,t){var n=[];a.forEach((function(r){r.id===t?e.target.checked&&n.push({groupId:r.id,groupName:r.name}):N.groups.some((function(e){return e.groupId===r.id}))&&n.push({groupId:r.id,groupName:r.name})})),I(Object(w.a)(Object(w.a)({},N),{},{groups:n}))},handleFormSubmit:C}),Object(h.jsxs)(se.a,{isOpen:O,toggle:function(){return x(!O)},children:[Object(h.jsx)(ie.a,{toggle:function(){return x(!O)},children:"Confirm Item Deletion"}),Object(h.jsx)(oe.a,{children:Object(h.jsxs)("p",{className:"mb-0",children:['Are you sure you want to delete the item "',null===e||void 0===e?void 0:e.name,'"?']})}),Object(h.jsxs)(ue.a,{children:[Object(h.jsx)(_.a,{onClick:function(){return x(!1)},color:"secondary",children:"No, cancel"}),Object(h.jsx)(_.a,{onClick:S,color:"danger",children:"Yes, delete"})]})]})]}),Object(h.jsxs)(ue.a,{children:[Object(h.jsx)(_.a,{onClick:function(){return x(!0)},className:"mr-auto",color:"danger",children:"Delete"}),Object(h.jsx)(_.a,{onClick:y,color:"secondary",children:"Cancel"}),Object(h.jsx)(_.a,{onClick:C,type:"submit",color:"info",children:"Submit"})]})]})})});function y(){g(),u(null)}function C(){var e=fe(N),t=e.isValid,r=e.alertText;u(t),p(r),t&&(n(N),g())}function S(){c(e.id),x(!1),y()}},ge=function(){var e=Object(r.useState)({name:"",notes:"",id:null,visible:!0}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=J((function(e){return e.saveGroup})),s=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(n);case 3:c(Object(w.a)(Object(w.a)({},n),{},{name:"",notes:""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(le.a,{children:Object(h.jsx)(de,{label:"Name",id:"group-name-input",type:"text",value:n.name,onChange:function(e){c(Object(w.a)(Object(w.a)({},n),{},{name:e.target.value}))},placeholder:"The name of the group...",required:!0})}),Object(h.jsx)(le.a,{children:Object(h.jsx)(de,{onChange:function(e){return c(Object(w.a)(Object(w.a)({},n),{},{notes:e.target.value}))},type:"textarea",placeholder:"Optional...",id:"group-notes-input",label:"Notes",value:n.notes})}),Object(h.jsx)(le.a,{className:"bottom-buttons",children:Object(h.jsx)(_.a,{block:!0,type:"submit",color:"info",children:"Save"})})]})},ve=function(){var e=Object(r.useState)(Oe),t=Object(l.a)(e,2),n=t[0],c=t[1],a=M((function(e){return e.groups})),s=J((function(e){return e.saveItem})),i=Object(r.useState)(null),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(r.useState)(""),b=Object(l.a)(d,2),p=b[0],m=b[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f()},children:[function(){if(!1===u)return Object(h.jsx)(me,{color:"danger",text:p})}(),Object(h.jsx)(pe,{formName:"new-item",editedItem:n,handleNameTextChange:function(e){c(Object(w.a)(Object(w.a)({},n),{},{name:e.target.value}))},handleNotesTextChange:function(e){c(Object(w.a)(Object(w.a)({},n),{},{notes:e.target.value}))},handleRecurringCheckChange:function(e){c(Object(w.a)(Object(w.a)({},n),{},{recurring:e.target.checked}))},handleGroupCheckChange:function(e,t){var r=a.filter((function(r){return r.id===t?e.target.checked:n.groups.some((function(e){return e.groupId===r.id}))})).map((function(e){return{groupId:e.id,groupName:e.name}}));c(Object(w.a)(Object(w.a)({},n),{},{groups:r}))},handleFormSubmit:f}),Object(h.jsx)(le.a,{className:"bottom-buttons",children:Object(h.jsx)(_.a,{block:!0,color:"info",type:"submit",children:"Save"})})]});function f(){var e=fe(n),t=e.isValid,r=e.alertText;j(t),m(r),t&&s(n).then((function(){c(Oe)}))}},ke=function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})},Ne=function(e){var t=e.children;return Object(h.jsx)("div",{className:"sticky-top",style:{zIndex:10},children:t})},we=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{title:"Shopping List",children:function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)(f.a,{isOpen:n,toggle:function(){c(!n)},size:"sm",color:"info",children:[Object(h.jsx)(O.a,{caret:!0,children:"Actions"}),Object(h.jsxs)(x.a,{right:!0,children:[Object(h.jsx)(g.a,{onClick:function(){ke("new-item-form-card")},children:"New Item"}),Object(h.jsx)(g.a,{onClick:function(){ke("new-group-form-card")},children:"New Group"})]})]})}()}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(u.a,{sm:12,lg:8,children:Object(h.jsx)(ce,{})}),Object(h.jsx)(u.a,{children:Object(h.jsxs)(Ne,{children:[Object(h.jsxs)(v.a,{id:"new-item-form-card",className:"space-between mt-3 mt-lg-0",children:[Object(h.jsx)(k.a,{children:"New Item"}),Object(h.jsx)(N.a,{className:"pt-2",children:Object(h.jsx)(ve,{})})]}),Object(h.jsxs)(v.a,{id:"new-group-form-card",className:"space-between",children:[Object(h.jsx)(k.a,{children:"New Group"}),Object(h.jsx)(N.a,{className:"pt-2",children:Object(h.jsx)(ge,{})})]})]})})]})]}),Object(h.jsx)(xe,{})]})},Ie=function(){return Object(h.jsx)(S.a,{store:V,children:Object(h.jsxs)(i.a,{className:"main-container pt-0",children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(we,{})})})]})})};n(116);s.a.render(Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(Ie,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.f4f86c6d.chunk.js.map
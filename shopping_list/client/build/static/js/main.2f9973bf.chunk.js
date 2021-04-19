(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(23),s=n.n(a),i=n(133),o=n(130),u=n(131),l=n(16),j=n(24),d=n(25),b=n(29),p=n(28),h=n(3),m=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"page-title",children:[Object(h.jsx)("h4",{className:"title-text",children:this.props.title}),Object(h.jsx)("div",{className:"right",children:this.props.children})]})})}}]),n}(r.Component),f=n(134),O=n(135),x=n(136),g=n(119),v=n(122),k=n(118),w=n(132),I=n(9),N=n(10),y=n.n(N),C=n(13),S=n(14),F=n(17),G=n.n(F),E="/api/alerts/",T=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post(E,{text:t,color:n});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,Promise.resolve();case 6:e.next=10;break;case 8:return e.next=10,Promise.reject();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="Successfully ".concat(t," ").concat(n,"."),e.next=3,T(r,"success");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.put("/api/items/edit/".concat(t.id),t);case 3:return n=e.sent,r=n.data,e.next=7,D("updated",'item "'.concat(r.name,'"'));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,T("Error in editItem api call: ".concat(e.t0.message),"danger");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.put("/api/items/toggle/".concat(t),{checked:n});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,T("Error in toggleItemCheck api call: ".concat(e.t0.message),"danger");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.post("/api/items/",t);case 3:return n=e.sent,r=n.data,e.next=7,D("added",'item "'.concat(r.name,'"'));case 7:return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,T("Error in the saveItem api call: ".concat(e.t0.message),"danger");case 14:throw new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.delete("/api/items/",{data:{id:t}});case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,T("Error in the deleteItem api call: ".concat(e.t0.message),"danger");case 9:throw new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/api/groups/");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return Object(I.a)(Object(I.a)({},e),{},{visible:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function V(e){var t=!0,n="";return e.name.replace(" ","").length<2&&(t=!1,n+="The 'name' field must have at least 2 characters. "),e.groups.length<1&&(t=!1,n+="At least one group is required. "),{isValid:t,alertText:n}}var z={name:"",notes:"",groups:[],checked:!1,recurring:!1,id:void 0},K=Object(S.c)({groups:[],setGroups:Object(S.b)((function(e,t){e.groups=t})),fetchGroups:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,t.setGroups(n.sort((function(e,t){return"Misc"===e.name?1:"Misc"===t.name?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),addGroup:Object(S.b)((function(e,t){e.groups.push(t)})),saveGroup:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post("/api/groups/",n);case 2:return r=e.sent,t.addGroup(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleGroup:Object(S.b)((function(e,t){e.groups=e.groups.map((function(e){return e.id!==t||(e.visible=!e.visible),e}))})),items:null,setItems:Object(S.b)((function(e,t){e.items=t})),fetchItems:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/api/items/");case 2:n=e.sent,t.setItems(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),editItem:Object(S.b)((function(e,t){var n=Object(I.a)(Object(I.a)({},t),{},{groups:t.groups.map((function(e){return e.groupId}))});e.items=e.items.map((function(e){return e.id===n.id?t:e}));var r=Date.now();R(n).then((function(){console.log("Item edited. Response time: ".concat(J(r),"s"))}))})),deleteItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,P(n);case 3:return console.log("Item deleted. Response time: ".concat(J(r),"s")),e.next=6,t.fetchItems();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleItemCheck:Object(S.b)((function(e,t){var n=Date.now();e.items=e.items.map((function(e){return e.id===t.itemId?(e.checked=t.checked,e):e})),q(t.itemId,t.checked).then((function(){console.log("Item ".concat(t.checked?"":"un","checked. Response time: ").concat(J(n),"s"))}))})),focusItem:null,setFocusItem:Object(S.b)((function(e,t){e.focusItem=t})),saveItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),c=Object(I.a)(Object(I.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),e.next=4,B(c);case 4:return e.next=6,t.fetchItems();case 6:console.log("New item added. Response time: ".concat(J(r),"s"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),newItem:z,setNewItem:Object(S.b)((function(e,t){e.newItem=t})),alerts:[]}),J=function(e){return(Date.now()-e)/1e3},M=Object(S.d)(),_=M.useStoreActions,L=(M.useStoreDispatch,M.useStoreState),Y=n(54),H=function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})},Q=function(e){var t=_((function(e){return e.toggleGroup})),n=Object(r.useState)(!1),c=Object(l.a)(n,2),a=c[0],s=c[1],i=_((function(e){return e.setNewItem})),o=L((function(e){return e.groups}));return Object(h.jsxs)(k.a,{className:"d-flex",children:[Object(h.jsxs)("div",{className:"d-block mt-auto ".concat(!1===e.visible&&"text-muted"),onClick:function(){return t(e.id)},children:[e.name,""!==e.notes&&Object(h.jsx)("small",{className:"d-block text-muted",children:e.notes})]}),Object(h.jsx)("div",{className:"my-auto ml-auto",children:Object(h.jsxs)(f.a,{size:"sm",isOpen:a,toggle:function(){return s((function(e){return!e}))},children:[Object(h.jsx)(Y.a,{color:"info",children:"Complete"}),Object(h.jsx)(O.a,{split:!0,color:"info"}),Object(h.jsxs)(x.a,{right:!0,children:[Object(h.jsx)(g.a,{onClick:function(){var t;null===(t=document.getElementById("new-item-name-input"))||void 0===t||t.focus(),H("new-item-form-card"),i(Object(I.a)(Object(I.a)({},z),{},{groups:[{groupName:o.find((function(t){return t.id===e.id})).name,groupId:e.id}]}))},children:"New Item"}),Object(h.jsx)(g.a,{children:"Edit Group"})]})]})})]})},U=n(120),W=n(56),X=function(e){var t=e.item;return Object(h.jsxs)("label",{htmlFor:"checkbox_".concat(t.id),className:"custom-control-label",children:[t.name,t.recurring?Object(h.jsx)(W.a,{className:"ml-1",style:{paddingBottom:"3px"}}):"",""===t.notes?"":Object(h.jsx)("small",{className:"text-muted d-block",children:t.notes})]})},Z=n(57),$=function(e){var t=e.item,n=_((function(e){return e.setFocusItem})),c=_((function(e){return e.toggleItemCheck}));return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)(U.a,{id:"checkbox_".concat(t.id),type:"checkbox",className:"custom-control-input",checked:t.checked,onChange:function(e){return c({itemId:t.id,checked:e.target.checked})}}),Object(h.jsx)(X,{item:t})]})}),Object(h.jsx)("td",{children:Object(h.jsx)(Z.a,{style:{cursor:"pointer"},onClick:function(){return n(t)}})})]})})},ee=n(121),te=(n(90),n(58)),ne=n.n(te),re=function(e){var t=e.className;return Object(h.jsx)("div",{className:t,children:Object(h.jsx)(ne.a,{type:"Bars",height:30,color:"#fff"})})},ce=function(e){var t=e.group,n=L((function(e){var n;return null===(n=e.items)||void 0===n?void 0:n.filter((function(e){return e.groups.some((function(e){return e.groupId===t.id}))}))}));return Object(h.jsx)(r.Fragment,{children:void 0!==n?Object(h.jsx)(ee.a,{className:"mb-0 same-width",striped:!0,children:Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)($,{item:e},e.id)}))})}):Object(h.jsx)(re,{className:"my-3"})})},ae=function(e){var t=e.group;return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(v.a,{className:"space-between",children:[Object(h.jsx)(Q,{name:t.name,notes:t.notes,id:t.id,visible:t.visible}),!1!==t.visible&&Object(h.jsx)(ce,{group:t})]})})},se=function(){var e=L((function(e){return e.groups})),t=_((function(e){return e.fetchGroups})),n=_((function(e){return e.fetchItems}));return Object(r.useEffect)((function(){t(),n()}),[t,n]),Object(h.jsx)(r.Fragment,{children:e.map((function(e){return Object(h.jsx)(ae,{group:e},e.id)}))})},ie=c.a.memo(se),oe=n(126),ue=n(137),le=n(127),je=n(128),de=n(129),be=n(124),pe=n(123),he=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(pe.a,{required:this.props.required,htmlFor:this.props.id,children:this.props.label}),Object(h.jsx)(U.a,{required:this.props.required,id:this.props.id,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onKeyPress:this.props.onKeyPress,placeholder:this.props.placeholder})]})}}]),n}(r.Component),me=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)(be.a,{check:!0,children:Object(h.jsxs)(pe.a,{check:!0,children:[Object(h.jsx)(U.a,{className:"checkbox-lg",checked:this.props.checked,onChange:this.props.handleChange,type:"checkbox"}),Object(h.jsx)("span",{className:"pl-2",children:this.props.label})]})})}}]),n}(r.Component),fe=function(e){var t=L((function(e){return e.groups}));return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(be.a,{children:Object(h.jsx)(he,{required:!0,label:"Name",id:"".concat(e.formName,"-name-input"),type:"text",value:e.editedItem.name,onChange:e.handleNameTextChange,placeholder:"The name of the item...",onKeyPress:function(t){"Enter"===t.key&&e.handleFormSubmit()}})}),Object(h.jsx)(be.a,{children:Object(h.jsx)(he,{label:"Notes",id:"".concat(e.formName,"-notes-input"),type:"textarea",value:e.editedItem.notes,onChange:e.handleNotesTextChange,placeholder:"Optional..."})}),Object(h.jsxs)(be.a,{children:[Object(h.jsx)(pe.a,{className:"mb-0",children:"Recurring"}),Object(h.jsx)(me,{checked:e.editedItem.recurring,handleChange:e.handleRecurringCheckChange,label:"Item repeats"})]}),Object(h.jsxs)(be.a,{children:[Object(h.jsx)(pe.a,{className:"mb-0",children:"Groups"}),t.map((function(t){return Object(h.jsx)(me,{checked:e.editedItem.groups.some((function(e){return e.groupId===t.id})),handleChange:function(n){return e.handleGroupCheckChange(n,t.id)},label:t.name},t.id)}))]})]})},Oe=n(125),xe=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={visible:!0},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(Oe.a,{className:"mt-3",color:this.props.color,isOpen:this.state.visible,toggle:function(){return e.setState({visible:!1})},children:this.props.text})}}]),n}(r.Component),ge=function(){var e=L((function(e){return e.focusItem})),t=_((function(e){return e.setFocusItem})),n=_((function(e){return e.editItem})),c=_((function(e){return e.deleteItem})),a=L((function(e){return e.groups})),s=Object(r.useState)(null),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),b=d[0],p=d[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),O=f[0],x=f[1],g=function(){t(null)},v=Object(r.useState)(e),k=Object(l.a)(v,2),w=k[0],N=k[1];return Object(r.useEffect)((function(){N(e)}),[e]),Object(h.jsx)(oe.a,{children:e&&Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(ue.a,{centered:!0,toggle:y,isOpen:!0,children:[Object(h.jsx)(le.a,{toggle:y,className:"d-flex",children:e.name}),Object(h.jsxs)(je.a,{children:[function(){if(!1===o)return Object(h.jsx)(xe,{color:"danger",text:b})}(),Object(h.jsx)(fe,{formName:"edit-item",editedItem:w,handleNameTextChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{name:e.target.value}))},handleNotesTextChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{notes:e.target.value}))},handleRecurringCheckChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{recurring:e.target.checked}))},handleGroupCheckChange:function(e,t){var n=[];a.forEach((function(r){r.id===t?e.target.checked&&n.push({groupId:r.id,groupName:r.name}):w.groups.some((function(e){return e.groupId===r.id}))&&n.push({groupId:r.id,groupName:r.name})})),N(Object(I.a)(Object(I.a)({},w),{},{groups:n}))},handleFormSubmit:C}),Object(h.jsxs)(ue.a,{isOpen:O,toggle:function(){return x(!O)},children:[Object(h.jsx)(le.a,{toggle:function(){return x(!O)},children:"Confirm Item Deletion"}),Object(h.jsx)(je.a,{children:Object(h.jsxs)("p",{className:"mb-0",children:['Are you sure you want to delete the item "',null===e||void 0===e?void 0:e.name,'"?']})}),Object(h.jsxs)(de.a,{children:[Object(h.jsx)(Y.a,{onClick:function(){return x(!1)},color:"secondary",children:"No, cancel"}),Object(h.jsx)(Y.a,{onClick:S,color:"danger",children:"Yes, delete"})]})]})]}),Object(h.jsxs)(de.a,{children:[Object(h.jsx)(Y.a,{onClick:function(){return x(!0)},className:"mr-auto",color:"danger",children:"Delete"}),Object(h.jsx)(Y.a,{onClick:y,color:"secondary",children:"Cancel"}),Object(h.jsx)(Y.a,{onClick:C,type:"submit",color:"info",children:"Submit"})]})]})})});function y(){g(),u(null)}function C(){var e=V(w),t=e.isValid,r=e.alertText;u(t),p(r),t&&(n(w),g())}function S(){c(e.id),x(!1),y()}},ve=function(){var e=Object(r.useState)({name:"",notes:"",id:null,visible:!0}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=_((function(e){return e.saveGroup})),s=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(n);case 3:c(Object(I.a)(Object(I.a)({},n),{},{name:"",notes:""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(be.a,{children:Object(h.jsx)(he,{label:"Name",id:"group-name-input",type:"text",value:n.name,onChange:function(e){c(Object(I.a)(Object(I.a)({},n),{},{name:e.target.value}))},placeholder:"The name of the group...",required:!0})}),Object(h.jsx)(be.a,{children:Object(h.jsx)(he,{onChange:function(e){return c(Object(I.a)(Object(I.a)({},n),{},{notes:e.target.value}))},type:"textarea",placeholder:"Optional...",id:"group-notes-input",label:"Notes",value:n.notes})}),Object(h.jsx)(be.a,{className:"bottom-buttons",children:Object(h.jsx)(Y.a,{block:!0,type:"submit",color:"info",children:"Save"})})]})},ke=function(){var e=L((function(e){return e.newItem})),t=_((function(e){return e.setNewItem})),n=L((function(e){return e.groups})),c=_((function(e){return e.saveItem})),a=Object(r.useState)(null),s=Object(l.a)(a,2),i=s[0],o=s[1],u=Object(r.useState)(""),j=Object(l.a)(u,2),d=j[0],b=j[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p()},children:[function(){if(!1===i)return Object(h.jsx)(xe,{color:"danger",text:d})}(),Object(h.jsx)(fe,{formName:"new-item",editedItem:e,handleNameTextChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{name:n.target.value}))},handleNotesTextChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{notes:n.target.value}))},handleRecurringCheckChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{recurring:n.target.checked}))},handleGroupCheckChange:function(r,c){var a=n.filter((function(t){return t.id===c?r.target.checked:e.groups.some((function(e){return e.groupId===t.id}))})).map((function(e){return{groupId:e.id,groupName:e.name}}));t(Object(I.a)(Object(I.a)({},e),{},{groups:a}))},handleFormSubmit:p}),Object(h.jsx)(be.a,{className:"bottom-buttons",children:Object(h.jsx)(Y.a,{block:!0,color:"info",type:"submit",children:"Save"})})]});function p(){var n=V(e),r=n.isValid,a=n.alertText;o(r),b(a),r&&c(e).then((function(){t(z)}))}},we=function(e){var t=e.children;return Object(h.jsx)("div",{className:"sticky-top",style:{zIndex:10},children:t})},Ie=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{title:"Shopping List",children:function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)(f.a,{isOpen:n,toggle:function(){c(!n)},size:"sm",color:"info",children:[Object(h.jsx)(O.a,{caret:!0,children:"Actions"}),Object(h.jsxs)(x.a,{right:!0,children:[Object(h.jsx)(g.a,{onClick:function(){H("new-item-form-card")},children:"New Item"}),Object(h.jsx)(g.a,{onClick:function(){H("new-group-form-card")},children:"New Group"})]})]})}()}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(u.a,{sm:12,lg:8,children:Object(h.jsx)(ie,{})}),Object(h.jsx)(u.a,{children:Object(h.jsxs)(we,{children:[Object(h.jsxs)(v.a,{id:"new-item-form-card",className:"space-between mt-3 mt-lg-0",children:[Object(h.jsx)(k.a,{children:"New Item"}),Object(h.jsx)(w.a,{className:"pt-2",children:Object(h.jsx)(ke,{})})]}),Object(h.jsxs)(v.a,{id:"new-group-form-card",className:"space-between",children:[Object(h.jsx)(k.a,{children:"New Group"}),Object(h.jsx)(w.a,{className:"pt-2",children:Object(h.jsx)(ve,{})})]})]})})]})]}),Object(h.jsx)(ge,{})]})},Ne=function(){return Object(h.jsx)(S.a,{store:K,children:Object(h.jsxs)(i.a,{className:"main-container pt-0",children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(Ie,{})})})]})})};n(116);s.a.render(Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(Ne,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.2f9973bf.chunk.js.map
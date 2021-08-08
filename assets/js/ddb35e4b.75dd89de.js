"use strict";(self.webpackChunkdocusaurus_plugin_docs_editor_preview=self.webpackChunkdocusaurus_plugin_docs_editor_preview||[]).push([[669],{5571:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(2137),a=n(7757),o=n.n(a),c=n(7294),u=n(6010),s=n(2263),i=n(4996),l=n(1823),p=n(6856),f=n(128),d=n(7082),h=n(54),m=n(9889),v=n(8481),w=n(9302),g=n(7191),x=n(1769),b=n(3142),k=n(6829),E=n(9802),_=n(3427),Z=n(5961),y=n(9457),N=n(9068),C=n(6149),P=n(9401),z=n(7532),S=n.n(z),I=n(3322),L=n.n(I),B=n(4825),R=n.n(B),A=n(3734),U=n.n(A),H=n(2861),q=n.n(H),F=n(5941),j=n.n(F),M=n(7597),O=n.n(M),T=n(8818),D=n.n(T),G=n(8835),J=n.n(G),K=n(9741),Q=n.n(K),V=n(8173),W=n(9105),X=[1,2,3,4,5,6],Y=function(e){var t=e.children;return c.createElement("div",{className:(0,u.Z)("editor__group","margin-vert--sm","padding-horiz--xs")},t)},$=function(e){var t=e.editor,n=e.name,r=e.action,a=e.children;return c.createElement("button",{className:(0,u.Z)("editor__icon","margin-horiz--xs",n&&t.isActive(n)&&"editor__icon--active"),onClick:r},c.createElement("span",{className:"material-icons"},a))};function ee(e){var t=e.editor,n=e.save,r=e.submit,a=e.syncing,o=e.className;return t?c.createElement(c.Fragment,null,c.createElement(W.Z,null,c.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),c.createElement("div",{className:(0,u.Z)("editor__menu",o)},c.createElement("div",{className:(0,u.Z)("editor__submenu")},c.createElement(Y,null,c.createElement($,{editor:t,action:function(){return t.chain().focus().undo().run()}},"undo"),c.createElement($,{editor:t,action:function(){return t.chain().focus().redo().run()}},"redo")),c.createElement(Y,null,c.createElement("select",{className:(0,u.Z)("editor__select","margin-horiz--xs"),value:function(){if(t.isActive("code"))return"code";var e=[];t.isActive("paragraph")&&e.push("paragraph");for(var n,r=(0,V.Z)(X);!(n=r()).done;){var a=n.value;t.isActive("heading",{level:a})&&e.push(a.toString())}return 1==e.length?e[0]:""}(),onChange:function(e){e.preventDefault();var n=e.target.value;if("code"===n)t.chain().focus().setParagraph().setCode().run();else if("paragraph"===n)t.chain().focus().unsetCode().setParagraph().run();else{var r=parseInt(n);X.includes(r)&&t.chain().focus().unsetCode().setHeading({level:r}).run()}}},c.createElement("option",{hidden:!0,disabled:!0,value:""}),c.createElement("option",{value:"paragraph"},"Normal text"),X.map((function(e){return c.createElement("option",{key:e,value:e},"Heading "+e)})),c.createElement("option",{value:"code"},"Inline code"))),c.createElement(Y,null,c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleBold().run()},name:"bold"},"format_bold"),c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleItalic().run()},name:"italic"},"format_italic")),c.createElement(Y,null,c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleBulletList().run()},name:"bulletList"},"format_list_bulleted"),c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleOrderedList().run()},name:"orderedList"},"format_list_numbered"),c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleCodeBlock().run()},name:"codeBlock"},"code"),c.createElement($,{editor:t,action:function(){return t.chain().focus().toggleBlockquote().run()},name:"blockquote"},"format_quote")),c.createElement(Y,null,c.createElement($,{editor:t,action:function(){return t.chain().focus().setHorizontalRule().run()}},"horizontal_rule"),c.createElement($,{editor:t,action:function(){return t.chain().focus().setHardBreak().run()}},"keyboard_return")),c.createElement(Y,null,c.createElement($,{editor:t,action:function(){return t.chain().focus().unsetAllMarks().clearNodes().run()}},"format_clear"))),c.createElement("div",{className:(0,u.Z)("editor__submenu")},c.createElement(Y,null,c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",disabled:a,onClick:function(){t.chain().focus().run(),n()}},a?c.createElement("span",{className:"editor__loading material-icons"},"autorenew"):c.createElement("span",{className:"material-icons"},"file_download"),"Save"),c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",disabled:a,onClick:function(){t.chain().focus().run(),r()}},c.createElement("span",{className:"material-icons"},"file_upload")," Submit"))))):null}function te(e){var t=e.editor,n=e.className;return c.createElement("div",{className:(0,u.Z)("editor__page",n),onClick:function(){return t.chain().focus().run()}},c.createElement(l.kg,{editor:t,className:"editor__content"}))}function ne(){return null}function re(e){var t=e.options,n=e.className,a=(0,c.useState)(),z=a[0],I=a[1],B=(0,c.useState)(),A=B[0],H=B[1],F=(0,c.useState)(),M=F[0],T=F[1],G=(0,c.useState)(),K=G[0],V=G[1],W=(0,c.useState)(!1),X=W[0],Y=W[1],$=(0,s.Z)(),re=(0,i.Z)(t.route||"edit"),ae=t.docs.path||"docs",oe=t.docs.owner||$.siteConfig.organizationName,ce=t.docs.repo||$.siteConfig.projectName,ue=t.github.clientId,se=t.github.tokenUrl,ie=(0,l.jE)({extensions:[p.ZP,f.ZP,d.ZP,h.ZP,m.ZP,v.Z,w.Z,g.Z,x.Z,b.Z,k.Z,E.ZP,_.Z,Z.ZP,y.Z,N.Z],autofocus:"start"}),le=function(e){var t=new URL("https://github.com/login/oauth/authorize"),n=t.searchParams;n.append("client_id",ue),n.append("scope","public_repo"),n.append("redirect_uri",e),window.location.replace(t)},pe=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL(t,se),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){return e.token}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,a,c,u,s,i,l,p,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URL(window.location.pathname,window.location.origin),n=new URLSearchParams(window.location.search),!(a=n.get("code"))){e.next=18;break}return window.history.replaceState(window.history.state,"",t),e.next=7,pe(a,t);case 7:return c=e.sent,u=C.v.plugin(P.T),s=new u({auth:c}),i=s.hook,l=s.rest,i.error("request",function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(403!==t.status){e.next=5;break}return e.next=3,fe();case 3:e.next=6;break;case 5:throw t;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,l.users.getAuthenticated();case 13:return p=e.sent,f=p.data.login,e.abrupt("return",{api:l,user:f});case 18:le(t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.api.repos.createFork({owner:oe,repo:ce});case 2:return t=e.sent,n=t.data,r=n.name,a=n.owner.login,e.next=8,new Promise((function(e,t){var n=setInterval((function(){K.api.repos.get({owner:a,repo:r}).then((function(t){clearInterval(n),e(t)})).catch((function(e){404!==e.status&&t(e)}))}),1e3)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.api.repos.get({owner:t,repo:n});case 3:r=e.sent,e.next=15;break;case 6:if(e.prev=6,e.t0=e.catch(0),404!==e.t0.status||t===oe){e.next=14;break}return e.next=11,de();case 11:r=e.sent,e.next=15;break;case 14:throw e.t0;case 15:if(a=r.data,c=a.name,u=a.owner.login,s=a.parent,u===oe){e.next=24;break}if(!s){e.next=23;break}if(i=s.name,s.owner.login===oe||i===ce){e.next=21;break}throw"Repo is not a fork of "+oe+"/"+ce;case 21:e.next=24;break;case 23:throw"Repo is not a fork of "+oe+"/"+ce;case 24:return e.abrupt("return",{owner:u,repo:c});case 25:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),me=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a,c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.api.repos.get({owner:oe,repo:ce});case 2:return a=e.sent,c=a.data.default_branch,e.next=6,K.api.repos.getBranch({owner:oe,repo:ce,branch:c});case 6:return u=e.sent,s=u.data.commit.sha,e.next=10,K.api.git.createRef({owner:t,repo:n,sha:s,ref:"refs/heads/"+r});case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ve=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.api.repos.getBranch({owner:t,repo:n,branch:r});case 3:e.next=13;break;case 5:if(e.prev=5,e.t0=e.catch(0),404!==e.t0.status){e.next=12;break}return e.next=10,me(t,n,r);case 10:e.next=13;break;case 12:throw e.t0;case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,r){return e.apply(this,arguments)}}(),we=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a){var c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.api.repos.getContent({owner:t,repo:n,path:a+".md",ref:"refs/heads/"+r}).catch((function(e){if(404===e.status)return K.api.repos.getContent({owner:t,repo:n,path:a+".mdx",ref:"refs/heads/"+r});throw e}));case 2:return c=e.sent,u=c.data.content,s=atob(u),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ge=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,c){var u,s,i,l,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r});case 2:if(u=e.sent,s=u.data,i=s.sha,l=s.content,(p=btoa(c)).trim()===l.trim()){e.next=13;break}return Y(!0),e.next=11,K.api.repos.createOrUpdateFileContents({owner:t,repo:n,branch:r,path:a,sha:i,content:p,message:"Edit "+A});case 11:return e.next=13,new Promise((function(e,o){var c=setInterval((function(){K.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r}).then((function(t){t.data.sha!=i&&(clearInterval(c),Y(!1),e())})).catch((function(e){404!==e.status&&(Y(!1),o(e))}))}),1e3)}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),xe=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t+":"+n,e.next=3,K.api.pulls.list({owner:oe,repo:ce,state:"open",head:r});case 3:if(a=e.sent,a.data.length){e.next=12;break}return e.next=8,K.api.repos.get({owner:oe,repo:ce});case 8:return c=e.sent,u=c.data.default_branch,e.next=12,K.api.pulls.create({owner:oe,repo:ce,base:u,head:r,title:"Edit "+A});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be=J()().use(L()).use(R()).use(U()),ke=J()().use(q()).use(j(),["yaml"]).use(O(),{yaml:Q().parse}).use(D()).use(S()),Ee=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ie.getHTML(),e.next=3,be.process(t);case 3:return n=e.sent,r=n.contents,z&&(a=Q().stringify(z),r="---\n"+a+"---\n\n"+r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.process(t);case 2:n=e.sent,r=n.data,a=n.contents,I(r),ie.chain().setContent(a).focus("start").run();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:t=e.sent,n=window.location.pathname.slice(re.length),a="edit/"+(r=""+ae+n).replaceAll(/[\/]/g,"-"),V(t),T(a),H(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(K.user,ce);case 2:return t=e.sent,n=t.owner,r=t.repo,e.next=7,ve(n,r,M);case 7:return a=e.sent,e.next=10,we(n,r,a,A);case 10:return c=e.sent,e.next=13,_e(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:return t=e.sent,e.next=5,he(K.user,ce);case 5:return n=e.sent,r=n.owner,a=n.repo,e.next=10,ve(r,a,M);case 10:return c=e.sent,e.next=13,ge(r,a,c,A,t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:return t=e.sent,e.next=5,he(K.user,ce);case 5:return n=e.sent,r=n.owner,a=n.repo,e.next=10,ve(r,a,M);case 10:return c=e.sent,e.next=13,ge(r,a,c,A,t);case 13:return e.next=15,xe(r,c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){Ze()}),[]),(0,c.useEffect)((function(){K&&M&&A&&ye()}),[K,M,A]),c.createElement(c.Fragment,null,K?c.createElement("div",{className:(0,u.Z)("editor",n)},c.createElement(ee,{editor:ie,save:Ne,submit:Ce,syncing:X}),c.createElement(te,{editor:ie})):c.createElement(ne,null))}}}]);
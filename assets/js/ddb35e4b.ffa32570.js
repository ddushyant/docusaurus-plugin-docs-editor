"use strict";(self.webpackChunkdocusaurus_plugin_docs_editor_preview=self.webpackChunkdocusaurus_plugin_docs_editor_preview||[]).push([[669],{93137:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ze}});var r=n(15861),a=n(87757),o=n.n(a),c=n(67294),u=n(86010),s=n(52263),i=n(44996),l=n(96470),p=n(25745),f=n.n(p),d=n(96344),h=n.n(d),m=n(93839),g=n.n(m),v=n(30308),w=n.n(v),x=n(11374),k=n.n(x),b=n(19514),_=n.n(b),E=n(71823),Z=n(56856),y=n(70128),N=n(7082),C=n(60054),L=n(68798),P=n(8481),z=n(49302),S=n(47191),R=n(41769),A=n(83142),I=n(6829),B=n(92943),U=n(29802),H=n(18802),j=n(93427),q=n(85961),F=n(69457),M=n(79068),O=n(27870),T=n(19401),V=n(17532),W=n.n(V),D=n(71647),G=n.n(D),J=n(90582),K=n.n(J),Q=n(64825),X=n.n(Q),Y=n(13734),$=n.n(Y),ee=n(53850),te=n.n(ee),ne=n(15941),re=n.n(ne),ae=n(99413),oe=n(84796),ce=n.n(oe),ue=n(67597),se=n.n(ue),ie=n(78818),le=n.n(ie),pe=n(84338),fe=n.n(pe),de=n(55006),he=n.n(de),me=n(59352),ge=n(99105),ve=[1,2,3,4,5,6],we=function(e){var t=e.children;return c.createElement("div",{className:(0,u.Z)("editor__group","margin-vert--sm","padding-horiz--xs")},t)},xe=function(e){var t=e.editor,n=e.name,r=e.action,a=e.children;return c.createElement("button",{className:(0,u.Z)("editor__control","margin-horiz--xs",n&&t.isActive(n)&&"editor__control--active"),onClick:r},c.createElement("span",{className:"editor__icon"},a))};function ke(e){var t=e.editor,n=e.save,r=e.submit,a=e.syncing,o=e.className;return t?c.createElement(c.Fragment,null,c.createElement(ge.Z,null,c.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),c.createElement("div",{className:(0,u.Z)("editor__menu",o)},c.createElement("div",{className:(0,u.Z)("editor__submenu")},c.createElement(we,null,c.createElement(xe,{editor:t,action:function(){return t.chain().focus().undo().run()}},"undo"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().redo().run()}},"redo")),c.createElement(we,null,c.createElement("select",{className:(0,u.Z)("editor__select","margin-horiz--xs"),value:function(){var e=[];t.isActive("code")&&e.push("code"),t.isActive("paragraph")&&e.push("paragraph");for(var n,r=(0,me.Z)(ve);!(n=r()).done;){var a=n.value;t.isActive("heading",{level:a})&&e.push(a.toString())}return 1==e.length?e[0]:""}(),onChange:function(e){e.preventDefault();var n=e.target.value;if("code"===n)t.chain().focus().clearNodes().setCode().run();else if("paragraph"===n)t.chain().focus().unsetCode().setParagraph().run();else{var r=parseInt(n);ve.includes(r)&&t.chain().focus().clearNodes().unsetCode().setHeading({level:r}).selectParentNode().unsetCode().run()}}},c.createElement("option",{hidden:!0,disabled:!0,value:""}),c.createElement("option",{value:"paragraph"},"Normal text"),ve.map((function(e){return c.createElement("option",{key:e,value:e},"Heading "+e)})),c.createElement("option",{value:"code"},"Inline code"))),c.createElement(we,null,c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleBold().run()},name:"bold"},"format_bold"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleItalic().run()},name:"italic"},"format_italic"),c.createElement(xe,{editor:t,action:function(){if(t.isActive("link"))t.chain().focus().unsetLink().run();else{var e=window.prompt("URL");t.chain().focus().extendMarkRange("link").setLink({href:e}).run()}},name:"link"},"link")),c.createElement(we,null,c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleBulletList().run()},name:"bulletList"},"format_list_bulleted"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleOrderedList().run()},name:"orderedList"},"format_list_numbered"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleCodeBlock().run()},name:"codeBlock"},"code"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().toggleBlockquote().run()},name:"blockquote"},"format_quote")),c.createElement(we,null,c.createElement(xe,{editor:t,action:function(){return t.chain().focus().setHorizontalRule().run()}},"horizontal_rule"),c.createElement(xe,{editor:t,action:function(){return t.chain().focus().setHardBreak().run()}},"keyboard_return")),c.createElement(we,null,c.createElement(xe,{editor:t,action:function(){return t.chain().focus().unsetAllMarks().clearNodes().run()}},"format_clear"))),c.createElement("div",{className:(0,u.Z)("editor__submenu")},c.createElement(we,null,c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",disabled:a,onClick:function(){t.chain().focus().run(),n()}},a?c.createElement("span",{className:"editor__loading editor__icon"},"autorenew"):c.createElement("span",{className:"editor__icon"},"file_download"),"Save"),c.createElement("button",{className:"editor__button margin-horiz--xs padding-horiz--sm",disabled:a,onClick:function(){t.chain().focus().run(),r()}},c.createElement("span",{className:"editor__icon"},"file_upload")," Submit"))))):null}function be(e){var t=e.editor,n=e.className;return c.createElement("div",{className:(0,u.Z)("editor__page",n)},c.createElement(E.kg,{editor:t,className:"editor__content"}))}function _e(){return null}var Ee=function(e){var t=e.node.attrs.language,n=e.updateAttributes,r=e.extension,a=(0,c.useState)(t),o=a[0],s=a[1];return c.createElement(E.T5,{className:"codeblock"},c.createElement("select",{className:"codeblock__language",contentEditable:!1,defaultValue:t,onChange:function(e){return function(e){s(e),n({language:e})}(e.target.value)}},c.createElement("option",{value:!0},"auto"),c.createElement("option",{disabled:!0},"---"),r.options.lowlight.listLanguages().map((function(e,t){return c.createElement("option",{key:t,value:e},e)}))),c.createElement("pre",null,c.createElement(E.ms,{as:"code",className:(0,u.Z)("codeblock__code",o?"language-"+o:"")})))};function Ze(e){var t=e.options,n=e.className,a=(0,c.useState)(),p=a[0],f=a[1],d=(0,c.useState)(),h=d[0],m=d[1],g=(0,c.useState)(),v=g[0],w=g[1],x=(0,c.useState)(),k=x[0],b=x[1],_=(0,c.useState)(!1),V=_[0],D=_[1],J=(0,s.Z)(),Q=(0,i.Z)(t.route||"edit"),Y=J.siteConfig.organizationName,ee=J.siteConfig.projectName,ne="docs";t.docs&&(Y=t.docs.owner||Y,ee=t.docs.repo||ee,ne=t.docs.path||ne);var oe="static";t.static&&(oe=t.static.path||oe);var ue=t.github.clientId,ie=t.github.tokenUrl,pe=(0,E.jE)({extensions:[Z.ZP,y.ZP,N.ZP,C.ZP,L.Z.extend({addNodeView:function(){return(0,E.fW)(Ee)}}).configure({lowlight:l}),P.Z,z.Z,S.Z,R.Z,A.Z,I.Z,U.ZP,B.ZP,H.ZP.configure({openOnClick:!1}),j.Z,q.ZP,F.Z,M.Z],autofocus:"start"}),de=function(e){var t=new URL("https://github.com/login/oauth/authorize"),n=t.searchParams;n.append("client_id",ue),n.append("scope","public_repo"),n.append("redirect_uri",e),window.location.replace(t)},me=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL(t,ie),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){return e.token}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,a,c,u,s,i,l,p,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URL(window.location.pathname,window.location.origin),n=new URLSearchParams(window.location.search),!(a=n.get("code"))){e.next=18;break}return window.history.replaceState(window.history.state,"",t),e.next=7,me(a,t);case 7:return c=e.sent,u=O.v.plugin(T.T),s=new u({auth:c}),i=s.hook,l=s.rest,i.error("request",function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(403!==t.status){e.next=5;break}return e.next=3,ge();case 3:e.next=6;break;case 5:throw t;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,l.users.getAuthenticated();case 13:return p=e.sent,f=p.data.login,e.abrupt("return",{api:l,user:f});case 18:de(t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.api.repos.createFork({owner:Y,repo:ee});case 2:return t=e.sent,n=t.data,r=n.name,a=n.owner.login,e.next=8,new Promise((function(e,t){var n=setInterval((function(){k.api.repos.get({owner:a,repo:r}).then((function(t){clearInterval(n),e(t)})).catch((function(e){404!==e.status&&t(e)}))}),1e3)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.api.repos.get({owner:t,repo:n});case 3:r=e.sent,e.next=15;break;case 6:if(e.prev=6,e.t0=e.catch(0),404!==e.t0.status||t===Y){e.next=14;break}return e.next=11,ve();case 11:r=e.sent,e.next=15;break;case 14:throw e.t0;case 15:if(a=r.data,c=a.name,u=a.owner.login,s=a.parent,u===Y){e.next=24;break}if(!s){e.next=23;break}if(i=s.name,s.owner.login===Y||i===ee){e.next=21;break}throw"Repo is not a fork of "+Y+"/"+ee;case 21:e.next=24;break;case 23:throw"Repo is not a fork of "+Y+"/"+ee;case 24:return e.abrupt("return",{owner:u,repo:c});case 25:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),xe=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a,c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.api.repos.get({owner:Y,repo:ee});case 2:return a=e.sent,c=a.data.default_branch,e.next=6,k.api.repos.getBranch({owner:Y,repo:ee,branch:c});case 6:return u=e.sent,s=u.data.commit.sha,e.next=10,k.api.git.createRef({owner:t,repo:n,sha:s,ref:"refs/heads/"+r});case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.api.repos.getBranch({owner:t,repo:n,branch:r});case 3:e.next=13;break;case 5:if(e.prev=5,e.t0=e.catch(0),404!==e.t0.status){e.next=12;break}return e.next=10,xe(t,n,r);case 10:e.next=13;break;case 12:throw e.t0;case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,r){return e.apply(this,arguments)}}(),ye=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a){var c,u,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r});case 2:return c=e.sent,u=c.data.content,s=atob(u),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,c){var u,s,i,l,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r});case 2:if(u=e.sent,s=u.data,i=s.sha,l=s.content,(p=btoa(c)).trim()===l.trim()){e.next=13;break}return D(!0),e.next=11,k.api.repos.createOrUpdateFileContents({owner:t,repo:n,branch:r,path:a,sha:i,content:p,message:"Edit "+v});case 11:return e.next=13,new Promise((function(e,o){var c=setInterval((function(){k.api.repos.getContent({owner:t,repo:n,path:a,ref:"refs/heads/"+r}).then((function(t){t.data.sha!=i&&(clearInterval(c),D(!1),e())})).catch((function(e){404!==e.status&&(D(!1),o(e))}))}),1e3)}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t+":"+n,e.next=3,k.api.pulls.list({owner:Y,repo:ee,state:"open",head:r});case 3:if(a=e.sent,a.data.length){e.next=12;break}return e.next=8,k.api.repos.get({owner:Y,repo:ee});case 8:return c=e.sent,u=c.data.default_branch,e.next=12,k.api.pulls.create({owner:Y,repo:ee,base:u,head:r,title:"Edit "+v});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Le=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a,c,u,s,i,l,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://raw.githubusercontent.com/"+t+"/"+n+"/"+r+"/"+oe+"/",c=function(e){if(e.href.startsWith(a))return"/"+e.href.slice(a.length)},u=pe.getHTML(),s=fe()().use(G()).use(K(),c).use(X()).use($()),e.next=6,s.process(u);case 6:return i=e.sent,l=i.contents,p&&(f=he().stringify(p),l="---\n"+f+"---\n\n"+l),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Pe=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a){var c,u,s,i,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://raw.githubusercontent.com/"+t+"/"+n+"/"+r+"/"+oe+"/",u=fe()().use(te()).use(re(),["yaml"]).use(se(),{yaml:he().parse}).use(ae.Z).use(ce(),{absolutePath:c}).use(le()).use(W()),e.next=4,u.process(a);case 4:s=e.sent,i=s.data,l=s.contents,f(i),pe.chain().setContent(l).focus("start").run();case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ze=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:t=e.sent,n=window.location.pathname.slice(Q.length),a="edit/"+(r=""+ne+n).replaceAll(/[\/\.]/g,"-"),b(t),m(a),w(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we(k.user,ee);case 2:return t=e.sent,n=t.owner,r=t.repo,e.next=7,Ze(n,r,h);case 7:return a=e.sent,e.next=10,ye(n,r,a,v);case 10:return c=e.sent,e.next=13,Pe(n,r,a,c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we(k.user,ee);case 2:return t=e.sent,n=t.owner,r=t.repo,e.next=7,Ze(n,r,h);case 7:return a=e.sent,e.next=10,Le(n,r,a);case 10:return c=e.sent,e.next=13,Ne(n,r,a,v,c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le();case 2:return t=e.sent,e.next=5,we(k.user,ee);case 5:return n=e.sent,r=n.owner,a=n.repo,e.next=10,Ze(r,a,h);case 10:return c=e.sent,e.next=13,Ne(r,a,c,v,t);case 13:return e.next=15,Ce(r,c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){ze()}),[]),(0,c.useEffect)((function(){k&&h&&v&&Se()}),[k,h,v]),c.createElement(c.Fragment,null,k?c.createElement("div",{className:(0,u.Z)("editor",n)},c.createElement(ke,{editor:pe,save:Re,submit:Ae,syncing:V}),c.createElement(be,{editor:pe})):c.createElement(_e,null))}l.registerLanguage("c",f()),l.registerLanguage("javascript",h()),l.registerLanguage("markdown",g()),l.registerLanguage("python",w()),l.registerLanguage("rust",k()),l.registerLanguage("shell",_())}}]);
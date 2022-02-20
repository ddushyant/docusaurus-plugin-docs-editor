"use strict";(self.webpackChunkpreview=self.webpackChunkpreview||[]).push([[610],{8465:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6775),n=a(4996),s=a(8084),i=a(5999),m=a(1687);function o(e){var t=e.editUrl,a=(0,l.TH)().pathname,o=(0,m.useActivePlugin)(),c=(0,s.usePluginData)("docusaurus-plugin-docs-editor"),u=function(){if(o){var e=a;return a.startsWith("/")&&(e=e.slice(1)),"/"+c.route+"/"+e}}(),g=(0,n.Z)(u);return r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,r.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},"Open in editor"),r.createElement("span",{className:"margin-horiz--sm"},"|")),r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}},8665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(3366),l=a(7294),n=a(6010),s=a(2434),i=a(9960),m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var b=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,r.Z)(e,b),o=t&&t.items.length>0;return l.createElement(s.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(7294),l=a(6010),n=a(3905),s=a(5999),i=a(9960),m=a(4996),o=a(5773),c=a(8780),u=a(4689),g=a(8465),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",b=a(62),v="image_o0gy";var E=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:v,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",P="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?N:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?P:f),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}var Z=function(e){var t,a,v,E=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,m.C)().withBaseUrl,N=e.children,P=e.frontMatter,Z=e.assets,k=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,I=k.date,M=k.formattedDate,C=k.permalink,L=k.tags,R=k.readingTime,U=k.title,A=k.editUrl,F=k.authors,O=null!=(t=Z.image)?t:P.image,x=!y&&T,B=L.length>0,D=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(D,{className:d,itemProp:"headline"},y?U:r.createElement(i.Z,{itemProp:"url",to:C},U)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},M),void 0!==R&&r.createElement(r.Fragment,null," \xb7 ",E(R))),r.createElement(_,{authors:F,assets:Z})),O&&r.createElement("meta",{itemProp:"image",content:f(O,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:u.Z},N)),(B||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},B&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":x})},r.createElement(b.Z,{tags:L})),y&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:A})),x&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":B})},r.createElement(i.Z,{to:k.permalink,"aria-label":"Read more about "+U},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),l=a(9960),n=a(8665),s=a(8561),i=a(5999),m=a(5773);function o(e){var t,a=e.metadata,o=e.items,c=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,p=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(d),tagName:g});return r.createElement(n.Z,{title:h,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}}}]);
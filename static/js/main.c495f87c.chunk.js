(this.webpackJsonpVSM=this.webpackJsonpVSM||[]).push([[0],{74:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),o=a.n(c),r=(a(74),a(5)),l=a(61),s=a(132),d=a(133),u=a(59),p=a(10),b=a(23),j=a.n(b),f=a(33),h=new WebSocket("ws://localhost:8765"),x=function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){try{h.send(JSON.stringify(t))}catch(n){console.log("you fucking moron this state should never occur"),a("error")}h.onmessage=function(n){var i=JSON.parse(n.data);i.request===t.request&&(i.error?a(i):e(i))}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=a(104),v=a(25),O=a(136),g=a(105),y=a(106),w=a(107),k=a(108),S=a(109),C=a(110),N=a(111),_=a(2),I=Object(m.a)((function(e){return{appBar:{flexGrow:1,margin:"12px",display:"flex",flexDirection:"column",zIndex:5,backgroundColor:"rgba(0, 0, 0, 0)",border:"0px rgb(255,255,255) solid",borderRadius:"15px"},action:{width:"40px",height:"40px",margin:e.spacing(.25)}}}));var D=function(e){var t=I(),a=(Object(v.a)(),i.a.useState(!1)),n=Object(r.a)(a,2),c=n[0],o=n[1];function l(){return(l=Object(f.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,x({request:"randomize_skins"}).then((function(t){o(!1),e.setLoadout(t.response)}));case 3:setTimeout((function(){o(!1)}),3e3);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(_.jsx)(O.a,{direction:"down",in:!0,children:Object(_.jsx)(g.a,{variant:"outlined",className:t.appBar,position:"static",children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{variant:"h6",style:{flexGrow:1},children:"a creative title"}),Object(_.jsxs)("div",{className:t.actions,children:[Object(_.jsx)(k.a,{"aria-label":"randomize","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",onClick:c?null:function(){return l.apply(this,arguments)},color:"inherit",className:t.action,children:c?Object(_.jsx)(S.a,{}):Object(_.jsx)(C.a,{})}),Object(_.jsx)(k.a,{"aria-label":"account button lol","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",color:"inherit",className:t.action,children:Object(_.jsx)(N.a,{})})]})]})})})},E=a(112),q=a(127),L=a(128),F=a(129),A=a(135),T=a(138),W=a(113),P=Object(m.a)((function(e){return{}}));var M=function(e){P(),Object(v.a)();var t=e.equippedChromaIndex,a=Object.keys(e.levelData).length.toString(),i=Object(n.useState)(e.equippedLevelIndex.toString()),c=Object(r.a)(i,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){if(1!==t&&o!==a){l(a);var n=Object.values(e.levelData)[a-1];e.setter(n)}}),[t]),Object(n.useEffect)((function(){l(e.equippedLevelIndex.toString())}),[e.equippedLevelIndex]),"1"!==a?Object(_.jsx)("div",{style:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-start",height:"45px"},children:Object(_.jsx)(T.a,{value:o,exclusive:!0,onChange:function(t,a){if(null!==a){l(a);var n=Object.values(e.levelData)[a-1];e.setter(n)}},"aria-label":"chroma level",style:{width:"90%",height:"95%"},children:Object.keys(e.levelData).map((function(n){var i=e.levelData[n],c=i.index.toString();return Object(_.jsx)(A.a,{title:i.level_type,disabled:!i.unlocked||!(1===t&&1!==c)&&c!==a,arrow:!0,children:Object(_.jsx)(W.a,{selected:o===c,value:c,"aria-label":i.index,style:{border:i.favorite?"1px #996D2D solid":null},children:i.shorthand_display_name})})}))})}):null},B=Object(m.a)((function(e){return{}}));var z=function(e){B(),e.equippedLevelIndex;var t=Object.keys(e.chromaData).length.toString(),a=(Object.keys(e.levelData).length.toString(),Object(n.useState)(e.equippedChromaIndex.toString())),i=Object(r.a)(a,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){o(e.equippedChromaIndex.toString())}),[e.equippedChromaIndex]),"1"!==t?Object(_.jsx)("div",{style:{flexGrow:1,width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end",height:"45px"},children:Object(_.jsx)(T.a,{value:c,exclusive:!0,onChange:function(t,a){if(null!==a){o(a);var n=Object.values(e.chromaData)[a-1];e.setter(n)}},"aria-label":"skin level",style:{width:"90%",height:"95%",justifyContent:"flex-end",marginLeft:0},children:Object.keys(e.chromaData).map((function(t){var a=e.chromaData[t],n=a.index.toString();return null!==a.swatch_icon?Object(_.jsx)(A.a,{title:a.unlocked?a.display_name:"".concat(a.display_name," (Locked)"),disabled:!a.unlocked,arrow:!0,children:Object(_.jsx)(W.a,{selected:c===n,value:n,"aria-label":a.index,style:{border:a.favorite?"1px #996D2D solid":null},children:Object(_.jsx)("img",{alt:a.display_name,src:a.swatch_icon,style:{width:"25px",height:"auto",filter:a.unlocked?"":"grayscale(75%)"}})})}):null}))})}):null},G=Object(m.a)((function(e){return{weaponPaper:{width:"100%",height:"70px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},container:{width:"93%",height:"90%",display:"flex"},tierImage:{height:"25px",alignSelf:"flex-end",margin:"3px 3px",position:"relative",bottom:"-3px",objectFit:"contain",objectPosition:"left center"},favoriteButton:{alignSelf:"flex-end",right:"2px",height:"25px",objectPosition:"center center"}}}));var V=function(e){var t=G(),a=Object(v.a)(),i=e.skinData,c="2f59173c-4bed-b6c3-2191-dea9b58be9c7"===e.weaponData.uuid,o=e.skinData.favorite,l=Object(n.useState)(i.uuid===e.equipped.uuid),s=Object(r.a)(l,2),d=s[0],u=s[1];return Object(n.useEffect)((function(){e.equipped.uuid===i.uuid?u(!0):u(!1)}),[e.equipped]),Object(_.jsx)(g.a,{variant:"outlined",className:t.weaponPaper,onClick:function(){e.equip(i.uuid)},style:{border:o?"1px ".concat(a.palette.warning.light," solid"):d?"1px ".concat(a.palette.primary.light," solid"):null},children:Object(_.jsx)("div",{className:t.container,style:{backgroundImage:"url(".concat(i.display_icon,")"),backgroundSize:c?"auto 87%":"contain",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",flexDirection:c?"column":"row",justifyContent:c?"flex-end":null},children:Object(_.jsx)("img",{alt:i.content_tier.display_name,src:i.content_tier.display_icon,className:t.tierImage,style:{left:c?"5px":"-5px"}})})})},R=a(116),U=a(114),J=a(115),H=a(117),X=Object(m.a)((function(e){return{header:{width:"auto",display:"flex",marginTop:"15px",flexWrap:"wrap"},headerButton:{marginLeft:e.spacing(.25)}}}));var Y=function(e){var t=X(),a=Object(v.a)(),n=e.equippedSkinData,i=e.inventoryData,c=e.saving,o=e.saveCallback,r=e.isFavorite,l=e.favoriteCallback;return Object(_.jsxs)("div",{className:t.header,children:[Object(_.jsx)("div",{style:{width:"auto",alignSelf:"center"},children:"Standard"!==n.content_tier.dev_name?Object(_.jsx)("img",{alt:n.content_tier.dev_name,src:n.content_tier.display_icon,style:{width:"auto",height:"40px",justifySelf:"center",marginRight:"10px"}}):null}),Object(_.jsxs)("div",{children:[Object(_.jsx)(w.a,{variant:"h5",children:n.display_name}),Object(_.jsxs)(w.a,{variant:"overline",children:["Battlepass"!==n.content_tier.dev_name?n.content_tier.dev_name:"Unlockable"," ",i.display_name]})]}),Object(_.jsxs)("div",{style:{flexGrow:1,display:"flex",height:"100%",justifyContent:"flex-end"},children:[Object(_.jsx)(A.a,{title:r?"Remove skin from favorites":"Add skin to favorites",className:t.headerButton,children:Object(_.jsx)(k.a,{onClick:l,style:{height:"40px",width:"40px"},children:r?Object(_.jsx)(U.a,{}):Object(_.jsx)(J.a,{})})}),Object(_.jsx)(A.a,{title:"Save",className:t.headerButton,children:c?Object(_.jsx)(R.a,{color:a.palette.secondary.dark,style:{margin:"10px",height:"20px",width:"20px"}}):Object(_.jsx)(k.a,{onClick:o,style:{height:"40px",width:"40px"},children:Object(_.jsx)(H.a,{})})})]})]})},K=a(118),Q=a(119),Z=a(120),$=a(121),ee=a(122),te=a(123),ae=a(124),ne=a(125),ie=a(126),ce=Object(m.a)((function(e){return{equippedActions:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10px",marginLeft:"10px",padding:"2px",transition:"all .2s ease !important"},previewAction:{height:"35px",width:"35px",alignSelf:"center",margin:e.spacing(.25),transition:"all .2s ease !important"},previewActionIcon:{width:"20px",height:"20px"}}}));var oe=function(e){var t=ce(),a=(Object(v.a)(),e.hasAlternateMedia),n=e.showingVideo,i=e.changeVideoStateCallback,c=e.showingControls,o=e.changeControlsStateCallback,r=e.isFavoriteLevel,l=e.isFavoriteChroma,s=e.toggleFavoriteLevelCallback,d=e.toggleFavoriteChromaCallback,u=e.canFavoriteLevel,p=e.canFavoriteChroma,b=a||u||p;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(E.a,{in:b,mountOnEnter:!0,unmountOnExit:!0,children:Object(_.jsxs)(g.a,{variant:"outlined",outlinecolor:"secondary",className:t.equippedActions,children:[Object(_.jsx)(K.a,{in:u,mountOnEnter:!0,unmountOnExit:!0,children:Object(_.jsx)(A.a,{title:r?"Remove level from favorites":"Add level to favorites",children:Object(_.jsx)(k.a,{onClick:function(){s()},"aria-label":"favorite level",className:t.previewAction,children:r?Object(_.jsx)(Q.a,{className:t.previewActionIcon}):Object(_.jsx)(Z.a,{className:t.previewActionIcon})})})}),Object(_.jsx)(K.a,{in:p,mountOnEnter:!0,unmountOnExit:!0,children:Object(_.jsx)(A.a,{title:l?"Remove chroma from favorites":"Add chroma to favorites",children:Object(_.jsx)(k.a,{onClick:function(){d()},"aria-label":"favorite chroma",className:t.previewAction,children:l?Object(_.jsx)($.a,{className:t.previewActionIcon}):Object(_.jsx)(ee.a,{className:t.previewActionIcon})})})}),Object(_.jsx)(K.a,{in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(_.jsx)(A.a,{title:n?"Stop video preview":"Play video preview",children:Object(_.jsx)(k.a,{onClick:function(){i(!n)},"aria-label":"preview",className:t.previewAction,children:n?Object(_.jsx)(te.a,{className:t.previewActionIcon}):Object(_.jsx)(ae.a,{className:t.previewActionIcon})})})}),Object(_.jsx)(K.a,{in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(_.jsx)(A.a,{title:c?"Hide video controls":"Show video controls",children:Object(_.jsx)(k.a,{onClick:function(){o(!c)},"aria-label":"preview",className:t.previewAction,children:c?Object(_.jsx)(ne.a,{className:t.previewActionIcon}):Object(_.jsx)(ie.a,{className:t.previewActionIcon})})})})]})})})},re=Object(m.a)((function(e){return{backdrop:{zIndex:3},masterGrid:{display:"flex",margin:"auto",height:"100%",width:"100%"},mainPaper:{margin:"auto",width:"100%",height:"90vh",display:"flex",justifySelf:"flex-start",justifyContent:"center",alignContent:"flex-start",flexWrap:"wrap",overflow:"auto","&::-webkit-scrollbar":{width:4},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey",backgroundClip:"padding-box"}},paperOnTopContent:{width:"92%",background:"#424242",paddingBottom:"10px",display:"flex",flexDirection:"column",position:"sticky",top:0,zIndex:4},mainSkinMedia:{width:"100%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",marginTop:"10px",transition:"all .2s ease"},paperCustomizingContent:{width:"92%",height:"auto",marginTop:"5px",display:"flex",flexDirection:"column",overflowY:"auto",alignItems:"stretch",top:0},levelSelectors:{display:"flex",flexDirection:"row",width:"100%",flexGrow:1,marginBottom:"15px",transition:"all .2s ease"},skinSelector:{marginBottom:"15px",marginTop:"15px",padding:"2px 2px",display:"flex",justifyContent:"center"}}}));var le=function(e){var t=re(),a=(Object(v.a)(),e.inventoryData[e.weaponUuid]),i=a.skins,c=e.initialSkinData,o=Object(n.useState)(i[c.skin_uuid]),l=Object(r.a)(o,2),s=l[0],d=l[1],u=Object(n.useState)(i[c.skin_uuid].levels[e.loadoutWeaponData.level_uuid]),p=Object(r.a)(u,2),b=p[0],j=p[1],f=Object(n.useState)(i[c.skin_uuid].chromas[e.loadoutWeaponData.chroma_uuid]),h=Object(r.a)(f,2),x=h[0],m=h[1],O=Object(n.useState)(i[c.skin_uuid].favorite),y=Object(r.a)(O,2),w=y[0],k=y[1],S=Object(n.useState)(),C=Object(r.a)(S,2),N=C[0],I=C[1],D=Object(n.useState)(),A=Object(r.a)(D,2),T=A[0],W=A[1],P=Object(n.useState)(!0),B=Object(r.a)(P,2),G=B[0],R=B[1],U=Object(n.useState)(!0),J=Object(r.a)(U,2),H=J[0],X=J[1],K=Object(n.useState)(!1),Q=Object(r.a)(K,2),Z=Q[0],$=Q[1],ee=Object(n.useState)(!1),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],ie=Object(n.useState)(!0),ce=Object(r.a)(ie,2),le=ce[0],se=ce[1],de=Object(n.useState)(!1),ue=Object(r.a)(de,2),pe=ue[0],be=ue[1],je=Object(n.useState)(!1),fe=Object(r.a)(je,2),he=fe[0],xe=fe[1],me=Object(n.useState)(!1),ve=Object(r.a)(me,2),Oe=ve[0],ge=ve[1],ye=Object(n.useState)(!1),we=Object(r.a)(ye,2),ke=we[0],Se=we[1],Ce=Object(n.useState)(!1),Ne=Object(r.a)(Ce,2),_e=Ne[0],Ie=Ne[1];function De(e){for(var t=i[e],a=0,n=0,c=0;c<Object.keys(t.levels).length;c++)!0===t.levels[Object.keys(t.levels)[c]].unlocked&&(a=t.levels[Object.keys(t.levels)[c]].index);for(var o=0;o<Object.keys(t.chromas).length;o++)!0===t.chromas[Object.keys(t.chromas)[o]].unlocked&&(n=t.chromas[Object.keys(t.chromas)[o]].index);xe(1!==a||1!==n),d(t),j(t.levels[Object.keys(t.levels)[a-1]]),m(t.chromas[Object.keys(t.chromas)[0]]),ge(!1),Ie(!1)}return Object(n.useEffect)((function(){le&&(document.title="VSM // ".concat(a.display_name))}),[le]),Object(n.useEffect)((function(){Se(null!==x.video_preview||null!==b.video_preview),k(s.favorite),function(){for(var e=s.levels,t=[],a=0,n=Object.keys(e);a<n.length;a++){var i=e[n[a]];i.favorite&&t.push(i.uuid)}I(t),t.includes(b.uuid)?$(!0):$(!1),1===Object.keys(e).length?R(!1):R(!0)}(),function(){for(var e=s.chromas,t=[],a=0,n=Object.keys(e);a<n.length;a++){var i=e[n[a]];i.favorite&&t.push(i.uuid)}W(t),t.includes(x.uuid)?ne(!0):ne(!1),1===Object.keys(e).length?X(!1):X(!0)}()}),[s,b,x]),Object(n.useEffect)((function(){De(c.skin_uuid),j(i[c.skin_uuid].levels[e.loadoutWeaponData.level_uuid]),m(i[c.skin_uuid].chromas[e.loadoutWeaponData.chroma_uuid])}),[]),null==a&&null==c?null:Object(_.jsx)(q.a,{open:le,className:t.backdrop,children:Object(_.jsx)(L.a,{container:!0,className:t.masterGrid,direction:"row",justifyContent:"center",alignItems:"center",children:Object(_.jsx)(L.a,{item:!0,xl:4,lg:5,md:7,sm:11,xs:12,style:{display:"flex",marginTop:"10px"},children:Object(_.jsxs)(g.a,{className:t.mainPaper,children:[Object(_.jsxs)("div",{className:t.paperOnTopContent,children:[Object(_.jsx)(Y,{equippedSkinData:s,inventoryData:a,saving:pe,saveCallback:function(){be(!0);var t={weaponUuid:e.weaponUuid,skinUuid:s.uuid,levelUuid:b.uuid,chromaUuid:x.uuid,inventoryData:i},a=c.skin_uuid,n=c.chroma_uuid,o=c.level_uuid,r=b.uuid===o&&x.uuid===n&&s.uuid===a,l=JSON.stringify(t),d=!1;e.saveCallback(l,r).then((function(){d=!0,se(!1),setTimeout((function(){e.closeEditor()}),300)})),setTimeout((function(){d||(se(!1),setTimeout((function(){e.closeEditor()}),300))}),3e3)},isFavorite:w,favoriteCallback:function(){i[s.uuid].favorite=!w,k(!w)}}),Object(_.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[Object(_.jsx)(g.a,{variant:"outlined",outlinecolor:"secondary",className:t.mainSkinMedia,style:{height:Oe?"35vh":"125px",maxHeight:"350px",maxWidth:"100%",overflowX:"hidden"},children:function(){var e=!1,t=!1;return null!==x.video_preview&&(e=!0),1!==x.index||null===b.display_icon||s.display_name.includes("Standard")||(t=!0),Oe?Oe&&null!==b.video_preview?Object(_.jsx)(E.a,{in:!0,children:Object(_.jsx)("video",{src:e?x.video_preview:b.video_preview,type:"video/mp4",controls:_e,autoPlay:!0,onEnded:function(){ge(!1)},style:{width:"auto",height:"100%",overflow:"hidden",objectFit:"contain",flexGrow:1,alignSelf:"center"}})}):void ge(!1):Object(_.jsx)(E.a,{in:!0,children:Object(_.jsx)("img",{alt:x.display_name,src:t?b.display_icon:x.display_icon,style:{maxWidth:"90%",maxHeight:"85%",objectFit:"contain",alignSelf:"center",overflow:"hidden"}})})}()}),Object(_.jsx)(oe,{hasAlternateMedia:ke,showingVideo:Oe,changeVideoStateCallback:ge,showingControls:_e,changeControlsStateCallback:Ie,toggleFavoriteLevelCallback:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=null===t?b.uuid:t;var n,c=N;(n=null===a?!c.includes(b.uuid):a)&&!c.includes(e)?c.push(e):!n&&c.includes(e)&&c.splice(c.indexOf(e),1),$(n),I(c),i[s.uuid].levels[b.uuid].favorite=n},isFavoriteLevel:Z,toggleFavoriteChromaCallback:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===t?(e=x.uuid,console.log(e)):e=t;var n,c=T;(n=null===a?!c.includes(x.uuid):a)&&!c.includes(e)?c.push(e):!n&&c.includes(e)&&c.splice(c.indexOf(e),1),ne(n),W(c),i[s.uuid].chromas[e].favorite=n},isFavoriteChroma:ae,canFavoriteLevel:G,canFavoriteChroma:H})]})]}),Object(_.jsxs)("div",{className:t.paperCustomizingContent,children:[Object(_.jsxs)("div",{className:t.levelSelectors,style:{height:he?"45px":"0px"},children:[Object(_.jsx)(M,{levelData:s.levels,equippedLevelIndex:b.index,equippedChromaIndex:x.index,setter:j}),Object(_.jsx)(z,{levelData:s.levels,chromaData:s.chromas,equippedLevelIndex:b.index,equippedChromaIndex:x.index,setter:m})]}),he?Object(_.jsx)(F.a,{variant:"middle"}):null,Object(_.jsx)("div",{className:t.skinSelector,children:Object(_.jsx)(L.a,{style:{width:"100%",height:"100%",justifySelf:"center"},container:!0,justifyContent:"flex-start",direction:"row",alignItems:"center",spacing:1,children:Object.keys(i).map((function(e){var t=i[e];return Object(_.jsx)(L.a,{item:!0,xs:4,children:Object(_.jsx)(V,{skinData:t,weaponData:a,equip:De,equipped:s})})}))})})]})]})})})})},se=a(88),de=a(130),ue={"29a0cfab-485b-f5d5-779a-b59f85e204a8":["100px","20px"],"42da8ccc-40d5-affc-beec-15aa47b42eda":["130px","30px"],"44d4e95c-4157-0037-81b2-17841bf2e8e3":["100px","10px"],"1baa85b4-4c70-1284-64bb-6481dfc3bb4e":["140px","35px"],"e336c6b8-418d-9340-d77f-7a9e4cfe0702":["140px","20px"],"f7e1b454-4ad4-1063-ec0a-159e56b58941":["195px","20px"],"462080d1-4035-2937-7c09-27aa2a5c27a7":["200px","20px"],"910be174-449b-c412-ab22-d0873436b21b":["240px","40px"],"ec845bf4-4f79-ddda-a3da-0db3774b2794":["240px","30px"],"ae3de142-4d85-2547-dd26-4e90bed35cf7":["240px","20px"],"4ade7faa-4cf1-8376-95ef-39884480959b":["240px","60px"],"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a":["250px","30px"],"9c82e19d-4575-0200-1a81-3eacf00cf872":["240px","30px"],"c4883e50-4494-202c-3ec3-6b8a9284f00b":["250px","70px"],"a03b24d3-4319-996d-0f8c-94bbfba1dfc7":["240px","100px"],"55d8a0f4-4274-ca67-fe2c-06ab45efdf58":["260px","80px"],"63e6c2b6-4a8e-869c-3d4c-e38355226584":["270px","40px"],"2f59173c-4bed-b6c3-2191-dea9b58be9c7":["auto","20px"]},pe=Object(m.a)((function(e){return{weaponContainerVideo:{position:"absolute",objectFit:"cover",width:"auto",height:"auto"},weaponPaper:{flexDirection:"row",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:-1,transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},bottomGradient:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,.175) 100%)",zIndex:0,width:"100%",height:"100%"},dataContainer:{width:"100%",height:"100%",display:"flex",position:"relative",top:"-100%"},textContainer:{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignSelf:"flex-start",alignItems:"center",justifyContent:"center",backgroundPosition:"center",overflow:"visible",zIndex:1},buddyContainer:{display:"flex",maxWidth:"50px",height:"100%",position:"relative",right:0,bottom:7},buddyImage:{width:"100%",height:"auto",objectFit:"contain",alignSelf:"flex-end"},weaponLabelHolder:{display:"flex",width:"80%",height:"50%",position:"relative",alignSelf:"flex-start",left:12,bottom:-22},weaponLabel:{textAlign:"left",width:"100%",flexGrow:1,height:"auto",alignSelf:"flex-end",textOverflow:"ellipsis"}}}));var be=function(e){var t=pe(),a=(Object(v.a)(),!1),i=Object(n.useState)(!0),c=Object(r.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)(!1),d=Object(r.a)(s,2),u=d[0],p=d[1],b=Object(n.useState)({}),j=Object(r.a)(b,2),f=j[0],h=j[1],x=Object(n.useState)(!1),m=Object(r.a)(x,2),O=m[0],y=m[1];function k(){return 150*Math.random()+100}return Object(n.useEffect)((function(){if(void 0!==e.data){var t=null!==f?f.skin_image:"";!1===a&&e.data.skin_image!==t&&(a=!0,setTimeout((function(){l(!0),setTimeout((function(){h(e.data),setTimeout((function(){l(!1),a=!1}),k())}),k())}),k())),e.data.buddy_name!==f.buddy_name&&setTimeout((function(){p(!0),setTimeout((function(){h(e.data),setTimeout((function(){p(!1)}),k())}),k())}),k())}}),[e.data]),Object(_.jsx)(se.a,{in:!o,children:Object(_.jsxs)(g.a,{className:t.weaponPaper,variant:"outlined",onMouseEnter:function(){y(!0)},onMouseLeave:function(){y(!1)},onMouseDown:function(){e.weaponEditorCallback(e.uuid)},style:{backgroundPosition:e.useLargeWeaponImage?"50% 50%":"50% 40%",backgroundImage:f!=={}?"url(".concat(f.skin_image,")"):'url("https://media.valorant-api.com/weapons/'.concat(e.uuid,'/displayicon.png")'),backgroundSize:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?e.useLargeWeaponImage?"calc(".concat(ue[e.uuid][0]," + ").concat(ue[e.uuid][1],") auto"):"".concat(e.uuid in ue?ue[e.uuid][0]:"250px"," auto"):"auto 80%"},children:[Object(_.jsx)("div",{className:t.bottomGradient}),Object(_.jsxs)("div",{className:t.dataContainer,children:[Object(_.jsxs)("div",{className:t.textContainer,children:[Object(_.jsx)("div",{className:t.weaponLabelHolder,children:Object(_.jsx)(w.a,{className:t.weaponLabel,variant:"overline",children:e.displayName})}),Object(_.jsx)("div",{style:{width:"80%",alignSelf:"flex-start",position:"relative",left:12},children:Object(_.jsx)(de.a,{in:O,children:Object(_.jsx)(w.a,{className:t.weaponLabel,variant:"body2",style:{marginTop:"14px",marginBottom:"5px"},children:f.skin_name})})})]}),Object(_.jsx)(E.a,{in:!u,children:Object(_.jsx)("div",{className:t.buddyContainer,style:{width:e.isSidearm?"20%":"14%"},children:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?Object(_.jsx)("img",{alt:f.buddy_name,className:t.buddyImage,src:""!==f.buddy_image?f.buddy_image:null}):Object(_.jsx)("img",{alt:"",src:""})})})]})]})})},je=Object(m.a)((function(e){return{root:{display:"flex",margin:"auto",width:"100%",alignSelf:"center"},collectionMainGridItem:{display:"flex",alignItems:"center"},collectionItem:{height:"115px"}}})),fe=[[{type:"weapon",sidearm:!0,uuid:"29a0cfab-485b-f5d5-779a-b59f85e204a8",displayName:"Classic"},{type:"weapon",sidearm:!1,uuid:"f7e1b454-4ad4-1063-ec0a-159e56b58941",displayName:"Stinger"},{type:"weapon",sidearm:!1,uuid:"ae3de142-4d85-2547-dd26-4e90bed35cf7",displayName:"Bulldog"},{type:"weapon",sidearm:!1,uuid:"c4883e50-4494-202c-3ec3-6b8a9284f00b",displayName:"Marshal"}],[{type:"weapon",sidearm:!0,uuid:"42da8ccc-40d5-affc-beec-15aa47b42eda",displayName:"Shorty"},{type:"weapon",sidearm:!1,uuid:"462080d1-4035-2937-7c09-27aa2a5c27a7",displayName:"Spectre"},{type:"weapon",sidearm:!1,uuid:"4ade7faa-4cf1-8376-95ef-39884480959b",displayName:"Guardian"},{type:"weapon",sidearm:!1,uuid:"a03b24d3-4319-996d-0f8c-94bbfba1dfc7",displayName:"Operator"}],[{type:"weapon",sidearm:!0,uuid:"44d4e95c-4157-0037-81b2-17841bf2e8e3",displayName:"Frenzy"},{type:"weapon",sidearm:!1,uuid:"910be174-449b-c412-ab22-d0873436b21b",displayName:"Bucky"},{type:"weapon",sidearm:!1,uuid:"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",displayName:"Phantom"},{type:"weapon",sidearm:!1,uuid:"55d8a0f4-4274-ca67-fe2c-06ab45efdf58",displayName:"Ares"}],[{type:"weapon",sidearm:!0,uuid:"1baa85b4-4c70-1284-64bb-6481dfc3bb4e",displayName:"Ghost"},{type:"weapon",sidearm:!1,uuid:"ec845bf4-4f79-ddda-a3da-0db3774b2794",displayName:"Judge"},{type:"weapon",sidearm:!1,uuid:"9c82e19d-4575-0200-1a81-3eacf00cf872",displayName:"Vandal"},{type:"weapon",sidearm:!1,uuid:"63e6c2b6-4a8e-869c-3d4c-e38355226584",displayName:"Odin"}],[{type:"weapon",sidearm:!0,uuid:"e336c6b8-418d-9340-d77f-7a9e4cfe0702",displayName:"Sheriff"},{type:"placeholder"},{type:"weapon",sidearm:!1,uuid:"2f59173c-4bed-b6c3-2191-dea9b58be9c7",displayName:"Melee"}]];var he=function(e){var t=je(),a=window.innerWidth<980||window.innerWidth>1500,i=window.innerWidth<980;return Object(n.useEffect)((function(){a=window.innerWidth<980||window.innerWidth>1500,i=window.innerWidth<980}),[]),Object(_.jsx)(L.a,{className:t.root,container:!0,justifyContent:"center",direction:"row",alignItems:"center",spacing:2,children:fe.map((function(n){if(null!==e.loadout)return n.map((function(n){return"weapon"===n.type?Object(_.jsx)(L.a,{className:t.collectionItem,item:!0,md:!0===n.sidearm?2:3,sm:12,xs:12,children:Object(_.jsx)(be,{data:e.loadout[n.uuid],uuid:n.uuid,displayName:n.displayName,useLargeWeaponImage:a,weaponEditorCallback:e.weaponEditorCallback,isSidearm:n.sidearm})}):i?Object(_.jsx)("br",{}):Object(_.jsx)(L.a,{className:t.collectionItem,item:!0,md:6,sm:!1,xs:!1})}))}))})},xe=a(131),me=Object(m.a)((function(e){return{footer:{height:"25vh"},root:{height:"80vh",margin:"auto",display:"flex",padding:0,flexGrow:1}}}));var ve=function(e){var t=me(),a=Object(n.useState)(""),i=Object(r.a)(a,2),c=(i[0],i[1],Object(n.useState)({})),o=Object(r.a)(c,2),l=o[0],s=o[1],d=Object(n.useState)(!1),u=Object(r.a)(d,2),p=u[0],b=u[1],h=Object(n.useState)({}),m=Object(r.a)(h,2),v=m[0],O=m[1],g=Object(n.useState)(),y=Object(r.a)(g,2),w=y[0],k=y[1];function S(){return(S=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({request:"fetch_inventory"}).then((function(e){!0===e.success&&s(e.response.skins)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({request:"fetch_loadout"}).then((function(e){!0===e.success&&O(e.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){try{x({request:"update_inventory",args:{payload:t}}).then((function(n){s(n.response),a?e():x({request:"put_weapon",args:{payload:t}}).then((function(t){O(t.response),e()}))}))}catch(i){e()}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){b(!1),k(null)}return Object(n.useEffect)((function(){C().then((function(){!function(){S.apply(this,arguments)}()})),setInterval((function(){return C()}),5e3)}),[]),Object(n.useEffect)((function(){p||(document.title="VSM // Collection")}),[p]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(D,{setLoadout:O}),Object(_.jsxs)(xe.a,{maxWidth:"xl",className:t.root,children:[w,Object(_.jsx)(he,{weaponEditorCallback:function(e){b(!0),k(Object(_.jsx)(le,{weaponUuid:e,initialSkinData:v[e],inventoryData:l,loadoutWeaponData:v[e],saveCallback:I,closeEditor:q}))},loadout:v})]})]})},Oe=a(134),ge=Object(m.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var ye=function(e){var t=ge();return Object(_.jsx)(q.a,{className:t.backdrop,open:e.open,children:Object(_.jsx)(Oe.a,{children:Object(_.jsx)(R.a,{color:"#ffffff"})})})},we=Object(l.a)({palette:{type:"dark",primary:{main:"#fa7581"},secondary:{main:"#454545"}},overrides:{MuiCssBaseline:{"@global":{body:{"&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey"}}}}}});var ke=function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)(!0),l=Object(r.a)(o,2),b=l[0],j=l[1],f=Object(n.useRef)(null);Object(n.useEffect)((function(){h(),f.current=setInterval((function(){h()}),1e3)}),[]);var h=function(){x({request:"handshake"}).then((function(e){e.success&&(j(!1),setTimeout((function(){c(!1),clearInterval(f.current),f.current=null}),100))}))};return Object(_.jsxs)(s.a,{theme:we,children:[Object(_.jsx)(d.a,{}),i?Object(_.jsx)(ye,{open:b}):Object(_.jsxs)(u.a,{basename:"/",children:[Object(_.jsx)(p.b,{exact:!0,path:"/",children:Object(_.jsx)(p.a,{to:"/collection"})}),Object(_.jsx)(p.b,{path:"/collection",children:Object(_.jsx)(ve,{})})]})]})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(ke,{})}),document.getElementById("root")),Se()}},[[86,1,2]]]);
//# sourceMappingURL=main.c495f87c.chunk.js.map
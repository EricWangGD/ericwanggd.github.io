(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[440],{7757:function(e,t,n){e.exports=n(9727)},1368:function(e,t,n){"use strict";n.r(t);var o=n(2672),r=n.n(o),s=n(1250),a=function(e){e&&e instanceof Function&&n.e(787).then(n.bind(n,787)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),s(e),a(e)}))},i=n(7757),l=n.n(i),c=n(5861),d=n(1413),u=n(4925),h=n(5671),p=n(3144),g=n(9340),f=n(5716),C=n(1694),w=n.n(C),v=n(3856),x=n(2322),m=n(2249),k=n(1386),Z=n(5996),y=n(9054),b=n(6515),j=n(5665),S=n(7755),E=(n(2336),n(184)),P=["contextCls"],T=["contextCls"],W=["contextCls","i18n"],_=["isAgentOnline"];(0,v.YV)({defaultTranslations:{"en-US":function(){return n.e(661).then(n.t.bind(n,6661,19))}},partnerId:"walmart",shouldLoadStrings:!1});var I=function(e){(0,g.Z)(n,e);var t=(0,f.Z)(n);function n(){var e;(0,h.Z)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={shouldShowChooseOptionWindow:!1,shouldShowErrorPage:!1,shouldShowHoopWindow:!1},e.renderContent=function(){var t=e.state,n=t.shouldShowChooseOptionWindow,o=t.shouldShowErrorPage,r=t.shouldShowHoopWindow,s=e.props.contextCls;return(0,E.jsxs)("div",{className:w()(e.baseCls,s),children:[n&&e.renderChooseOptionWindow(),r&&e.renderHoopWindow(),o&&e.renderErrorPage()]})},e.renderHoopWindow=function(){var t=e.props,n=(t.contextCls,(0,u.Z)(t,P)),o=e.state.chatConfigs,r=null!==o&&void 0!==o?o:{},s=r.hoop,a=r.isLeaveAgentMessageEnabled;return(0,E.jsx)(k.Z,(0,d.Z)((0,d.Z)({contextCls:"".concat(e.baseCls,"__hoop"),hoop:s,isLeaveAgentMessageEnabled:a},n),o))},e.renderChooseOptionWindow=function(){var t=e.props,n=(t.contextCls,(0,u.Z)(t,T)),o=e.state.chatConfigs,r=(null!==o&&void 0!==o?o:{}).ewt;return(0,E.jsx)(x.Z,(0,d.Z)((0,d.Z)({contextCls:"".concat(e.baseCls,"__choose-option-window"),ewt:r},n),o))},e.renderErrorPage=function(){var t=e.props,n=(t.contextCls,t.i18n),o=(0,u.Z)(t,W),r=n.getTranslation("chatModule.errorPage.title"),s=n.getTranslation("chatModule.errorPage.headText"),a=n.getTranslation("chatModule.errorPage.subText");return(0,E.jsx)(m.Z,(0,d.Z)({contextCls:"".concat(e.baseCls,"__generic-message"),icon:Z.Z.WARNING,windowTitle:r,headText:s,subText:a,i18n:n},o))},e.fetchConfig=(0,c.Z)(l().mark((function t(){var n,o,r,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,b.Z.getChatConfig();case 4:o=t.sent,r=o.isAgentOnline,s=(0,u.Z)(o,_),n.chatConfigs=s,!0===r?n.shouldShowChooseOptionWindow=!0:!1===r?n.shouldShowHoopWindow=!0:n.shouldShowErrorPage=!0,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n.shouldShowErrorPage=!0;case 13:return t.prev=13,e.setState(n),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])}))),e.applyDesignToken=(0,c.Z)(l().mark((function t(){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.props.brand,t.next=4,j.Z.import(n);case 4:e.setState({isDesignTokenApplied:!0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.debug(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.setContainerElementStyle=function(){var t=e.props.containerElement;t&&(e.setState({originContainerElementPosition:t.style.position}),t.style.position="relative")},e.restoreContainerElementStyle=function(){var t=e.props.containerElement,n=e.state.originContainerElementPosition;t&&n&&(t.style.position=n)},e.destoryClient=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.destoryClient();case 2:case"end":return e.stop()}}),e)}))),e.baseCls="web-chat-module",e}return(0,p.Z)(n,[{key:"render",value:function(){var e=this.state.isDesignTokenApplied,t=this.props.isI18nReady;return e&&t&&this.renderContent()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.accessToken,n=e.applicationId,o=e.prefixAPIUrl;t&&(S.Z.accessToken=t),n&&(S.Z.applicationId=n),o&&(S.Z.prefixAPIUrl=o),this.setContainerElementStyle(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){this.restoreContainerElementStyle(),this.destoryClient()}}]),n}(o.PureComponent);I.defaultProps={onChatWidgetClose:function(){return Promise.resolve()}};var A=(0,v.Zh)(I);var M=document.getElementById("root");s.createRoot(M).render((0,E.jsxs)(r().StrictMode,{children:[(0,E.jsx)("div",{children:"Test Widget Page, when invoke the wiget, we should expose the ChatModule only and set the containerElement to which element in the existing page"}),(0,E.jsx)(A,{containerElement:M,accessToken:"ajkdjkljaklsjdfkljaklsdjfljksdajlf",brand:"go2bank",accountIdentifier:"adjkajsdlfjlkajsd",onChatWidgetClose:function(){console.log("Chat window has been closed")},applicationId:"10001",email:"ewang2@greendotcorp.com"})]})),a()},1250:function(e,t,n){"use strict";var o=n(4556);t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot}}]);
//# sourceMappingURL=440.7fb06145.chunk.js.map
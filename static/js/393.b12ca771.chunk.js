(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[393],{7757:function(e,t,n){e.exports=n(9727)},6481:function(e,t,n){"use strict";n.r(t);var o=n(5861),r=n(1413),s=n(4925),i=n(5671),a=n(3144),l=n(9340),c=n(5716),p=n(7757),u=n.n(p),d=n(1694),h=n.n(d),f=n(2672),C=n(3856),g=n(9730),w=n(2249),v=n(6472),Z=n(5996),x=n(9054),m=n(6515),S=n(5665),y=n(4432),b=(n(2336),n(1713)),k=n(9468),E=n(184),P=["contextCls"],T=["contextCls"],A=["contextCls","i18n"],W=["isAgentOnline"];(0,C.YV)({defaultTranslations:{"en-US":function(){return n.e(661).then(n.t.bind(n,6661,19))}},partnerId:"walmart",shouldLoadStrings:!1});var _=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={shouldShowChooseOptionWindow:!1,shouldShowErrorPage:!1,shouldShowHoopWindow:!1},e.renderContent=function(){var t=e.state,n=t.shouldShowChooseOptionWindow,o=t.shouldShowErrorPage,r=t.shouldShowHoopWindow,s=e.props.contextCls;return(0,E.jsxs)("div",{className:h()(e.baseCls,s),children:[n&&e.renderChooseOptionWindow(),r&&e.renderHoopWindow(),o&&e.renderErrorPage()]})},e.renderHoopWindow=function(){var t=e.props,n=(t.contextCls,(0,s.Z)(t,P)),o=e.state.chatConfigs,i=null!==o&&void 0!==o?o:{},a=i.hoop,l=i.isLeaveAgentMessageEnabled;return(0,E.jsx)(v.Z,(0,r.Z)((0,r.Z)({contextCls:"".concat(e.baseCls,"__hoop"),hoop:a,isLeaveAgentMessageEnabled:l},n),o))},e.renderChooseOptionWindow=function(){var t=e.props,n=(t.contextCls,(0,s.Z)(t,T)),o=e.state.chatConfigs,i=(null!==o&&void 0!==o?o:{}).ewt;return(0,E.jsx)(g.Z,(0,r.Z)((0,r.Z)({contextCls:"".concat(e.baseCls,"__choose-option-window"),ewt:i},n),o))},e.renderErrorPage=function(){var t=e.props,n=(t.contextCls,t.i18n),o=(0,s.Z)(t,A),i=n.getTranslation("chatModule.errorPage.title"),a=n.getTranslation("chatModule.errorPage.headText"),l=n.getTranslation("chatModule.errorPage.subText");return(0,E.jsx)(w.Z,(0,r.Z)({contextCls:"".concat(e.baseCls,"__generic-message"),icon:Z.Z.WARNING,windowTitle:i,headText:a,subText:l,i18n:n},o))},e.fetchConfig=(0,o.Z)(u().mark((function t(){var n,o,r,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,m.Z.getChatConfig();case 4:o=t.sent,r=o.isAgentOnline,i=(0,s.Z)(o,W),n.chatConfigs=i,r?n.shouldShowChooseOptionWindow=!0:n.shouldShowHoopWindow=!0,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n.shouldShowErrorPage=!0;case 13:return t.prev=13,e.setState(n),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])}))),e.applyDesignToken=function(){var t=e.props.brand;S.Z.import(t),e.setState({isDesignTokenApplied:!0})},e.setContainerElementStyle=function(){var t=e.props.containerElement;t&&(e.setState({originContainerElementPosition:t.style.position}),t.style.position="relative")},e.restoreContainerElementStyle=function(){var t=e.props.containerElement,n=e.state.originContainerElementPosition;t&&n&&(t.style.position=n)},e.destoryClient=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.destoryClient();case 2:case"end":return e.stop()}}),e)}))),e.baseCls="web-chat-module",e}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.state.isDesignTokenApplied,t=this.props.isI18nReady;return e&&t&&this.renderContent()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.accessToken,n=e.applicationId,o=e.prefixAPIUrl,r=e.platform;t&&(y.Z.accessToken=t),n&&(y.Z.applicationId=n),o&&(y.Z.prefixAPIUrl=o),r&&(b.Z.platform=r),this.setContainerElementStyle(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){this.restoreContainerElementStyle(),this.destoryClient(),y.Z.cleanData()}}]),n}(f.PureComponent);_.defaultProps={onChatWidgetClose:function(){return Promise.resolve()},platform:k.iw.BAAS,brand:k.cg.GO2BANK},t.default=(0,C.Zh)(_)}}]);
//# sourceMappingURL=393.b12ca771.chunk.js.map
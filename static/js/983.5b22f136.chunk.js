(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[983],{7757:function(e,t,n){e.exports=n(9727)},6481:function(e,t,n){"use strict";n.r(t);var o=n(5861),r=n(1413),s=n(4925),i=n(5671),a=n(3144),l=n(9340),c=n(5716),u=n(7757),p=n.n(u),h=n(1694),d=n.n(h),f=n(2672),C=n(3856),v=n(4817),w=n(2249),g=n(1386),x=n(5989),y=(n(2336),n(3703)),Z=n(9868),m=n(7314),k=n(184),S=["contextCls"],b=["contextCls"],E=["contextCls"],P=["isAgentOnline","isSuccess","errors"];(0,C.YV)({defaultTranslations:{"en-US":function(){return n.e(661).then(n.t.bind(n,6661,19))}},partnerId:"walmart",shouldLoadStrings:!1});var W=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={shouldShowChooseOptionWindow:!1,shouldShowErrorPage:!1,shouldShowHoopWindow:!1},e.renderHoopWindow=function(){var t=e.props,n=t.contextCls,o=(0,s.Z)(t,S),i=e.state.chatConfigs;return(0,k.jsx)(g.Z,(0,r.Z)((0,r.Z)({contextCls:d()(e.baseCls,n),hoop:i.hoop,isLeaveAgentMessageEnabled:i.isLeaveAgentMessageEnabled},o),i))},e.renderChooseOptionWindow=function(){var t=e.props,n=t.contextCls,o=(0,s.Z)(t,b),i=e.state.chatConfigs;return(0,k.jsx)(v.Z,(0,r.Z)((0,r.Z)({contextCls:d()(e.baseCls,n),ewt:i.ewt},o),i))},e.renderErrorPage=function(){var t=e.props,n=t.contextCls,o=(0,s.Z)(t,E);return(0,k.jsx)(w.Z,(0,r.Z)({contextCls:d()(e.baseCls,n),icon:"WarningAlert",windowTitle:"Chat with an agent",headText:"There was a problem connecting to chat support",subText:"Please try again later."},o))},e.destoryClient=(0,o.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.destoryClient();case 2:case"end":return e.stop()}}),e)}))),e.baseCls="web-chat-module",e}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.state.isDesignTokenApplied,t=this.props.isI18nReady;return e&&t&&this.renderContent()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.accessToken,n=e.applicationId,o=e.prefixAPIUrl;t&&(Z.Z.accessToken=t),n&&(Z.Z.applicationId=n),o&&(Z.Z.prefixAPIUrl=o),this.setContainerElementStyle(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){this.restoreContainerElementStyle(),this.destoryClient()}},{key:"renderContent",value:function(){var e=this.state,t=e.shouldShowChooseOptionWindow,n=e.shouldShowErrorPage,o=e.shouldShowHoopWindow;return(0,k.jsxs)(k.Fragment,{children:[t&&this.renderChooseOptionWindow(),o&&this.renderHoopWindow(),n&&this.renderErrorPage()]})}},{key:"fetchConfig",value:function(){var e=(0,o.Z)(p().mark((function e(){var t,n,o,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,x.Z.getChatConfig();case 4:n=e.sent,o=n.isAgentOnline,n.isSuccess,n.errors,r=(0,s.Z)(n,P),t.chatConfigs=r,!0===o?t.shouldShowChooseOptionWindow=!0:!1===o?t.shouldShowHoopWindow=!0:t.shouldShowErrorPage=!0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.shouldShowErrorPage=!0;case 13:return e.prev=13,this.setState(t),e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"applyDesignToken",value:function(){var e=(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.brand,e.next=4,y.Z.import(t);case 4:this.setState({isDesignTokenApplied:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.debug(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"setContainerElementStyle",value:function(){var e=this.props.containerElement;e&&(this.setState({originContainerElementPosition:e.style.position}),e.style.position="relative")}},{key:"restoreContainerElementStyle",value:function(){var e=this.props.containerElement,t=this.state.originContainerElementPosition;e&&t&&(e.style.position=t)}}]),n}(f.PureComponent);W.defaultProps={onChatWidgetClose:function(){return Promise.resolve()}},t.default=(0,C.Zh)(W)}}]);
//# sourceMappingURL=983.5b22f136.chunk.js.map
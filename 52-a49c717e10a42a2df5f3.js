(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{978:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return P}));var t=s(845),e=s.n(t),p=s(839),o=s.n(p),c=s(840),u=s.n(c),l=s(519),i=s.n(l),k=s(841),r=s.n(k),d=s(842),h=s.n(d),m=s(843),g=s.n(m),v=s(844),y=s.n(v),f=s(0),D=s.n(f),Y=s(211),C=s(147);function b(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var e=g()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return h()(this,s)}}var w=function(){var n=function(n){r()(s,n);var a=b(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),y()(i()(n),"state",{}),y()(i()(n),"handleChange",(function(a,s){n.setState({value:a,chosenDays:s})})),y()(i()(n),"handleChange1",(function(a,s){n.setState({value1:a,chosenDays1:s})})),n}return u()(s,[{key:"render",value:function(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,e=n.chosenDays1;return D.a.createElement("div",null,D.a.createElement(C.DateRangeQuickPicker,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),D.a.createElement("br",null),D.a.createElement(C.DateRangeQuickPicker,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:e,preset:[{text:"Today",value:0},{text:"Yesterday",value:1},{text:"7 days",value:7},{text:"30 days",value:30}]}))}}]),s}(f.Component);return D.a.createElement(n,null)},E=function(){var n=function(n){r()(s,n);var a=b(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),y()(i()(n),"state",{}),y()(i()(n),"handleChange",(function(a,s){n.setState({value:a,chosenDays:s})})),y()(i()(n),"handleChange1",(function(a,s){n.setState({value1:a,chosenDays1:s})})),y()(i()(n),"handleChange2",(function(a,s){n.setState({value2:a,chosenDays2:s})})),n}return u()(s,[{key:"render",value:function(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,e=n.chosenDays1,p=n.value2,o=n.chosenDays2;return D.a.createElement("div",null,D.a.createElement(C.DateRangeQuickPicker,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),D.a.createElement("br",null),D.a.createElement(C.DateRangeQuickPicker,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:e,preset:[{text:"Previous cycle",value:["2019-01-01","2019-01-02"]},{text:"January",value:["2019-01-01","2019-01-31"]}]}),D.a.createElement("br",null),D.a.createElement(C.DateRangeQuickPicker,{onChange:this.handleChange2,value:p,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:o,defaultSelectedPresetIndex:1}))}}]),s}(f.Component);return D.a.createElement(n,null)};function M(n){return D.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return D.a.createElement(M,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return D.a.createElement(M,{tag:"style",html:n.style})}var H=function(n){r()(s,n);var a=b(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),y()(i()(n),"state",{showCode:!1}),y()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return D.a.createElement("div",{className:"zandoc-react-demo"},D.a.createElement("div",{className:"zandoc-react-demo__preview"},e),D.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},D.a.createElement("div",{className:"zandoc-react-demo__title"},D.a.createElement("p",null,s||"")),D.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&D.a.createElement("pre",{className:"zandoc-react-demo__code"},D.a.createElement(M,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(f.Component),P=function(n){r()(s,n);var a=b(s);function s(){return o()(this,s),a.apply(this,arguments)}return u()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(Y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return D.a.createElement("div",{className:"zandoc-react-container",key:null},D.a.createElement(x,{style:""}),D.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#daterangequickpicker">¶</a><a href="javascript:void(0)" id="daterangequickpicker" class="anchor-point"></a>DateRangeQuickPicker</h2>\n<p>DateRangeQuickPicker is used for time range selection, it has 2 quick options which points previous 7 days and previous 30 days.</p>\n<h3 class="anchor-heading"><a href="#usage-scenarios">¶</a><a href="javascript:void(0)" id="usage-scenarios" class="anchor-point"></a>Usage Scenarios</h3>\n<p>Select a date range in one click.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),D.a.createElement(H,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DateRangeQuickPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token punctuation">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">,</span> value1<span class="token punctuation">,</span> chosenDays1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DateRangeQuickPicker</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>DateRangeQuickPicker\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange1<span class="token punctuation">}</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span>\n          format<span class="token operator">=</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span>\n          chosenDays<span class="token operator">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span>\n          preset<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'Today\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'Yesterday\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'7 days\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'30 days\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(w)),D.a.createElement(H,{title:"Quickly choose a time range",id:"Demopreset",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DateRangeQuickPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token punctuation">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value2<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      chosenDays2<span class="token punctuation">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n      value1<span class="token punctuation">,</span>\n      chosenDays1<span class="token punctuation">,</span>\n      value2<span class="token punctuation">,</span>\n      chosenDays2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DateRangeQuickPicker</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>DateRangeQuickPicker\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange1<span class="token punctuation">}</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span>\n          format<span class="token operator">=</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span>\n          chosenDays<span class="token operator">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span>\n          preset<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'Previous cycle\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-02\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'January\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-31\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DateRangeQuickPicker</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>chosenDays2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">defaultSelectedPresetIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(E)),D.a.createElement(S,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternatives</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Change event callback</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>Starting and end time</td>\n<td>array</td>\n<td><code>[]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>preset</td>\n<td>Custom quick options</td>\n<td>array</td>\n<td><code>[{text: '7 days', value: 7}, {text: '30 days', value: 30}]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>defaultSelectedPresetIndex</td>\n<td>Default selected item index in \n<code>preset</code></td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>valueType</td>\n<td>Argument type of onChange</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td><code>'date'</code>\n, \n<code>'number'</code>\n, \n<code>'string'</code></td>\n</tr>\n<tr>\n<td>format</td>\n<td>Format of returned Date string</td>\n<td><code>string</code></td>\n<td><code>'YYYY-MM-DD'</code>\n, \n<code>'YYYY-MM-DD HH:mm:ss'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>chosenDays</td>\n<td>Number of choosen days</td>\n<td><code>number</code>\n \n|\n \n<code>array</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td>Minimum value of optional date</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>Maximum number of optional date</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),s}(f.Component)}}]);
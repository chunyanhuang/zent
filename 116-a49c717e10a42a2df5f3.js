(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{988:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return M}));var t=s(845),e=s.n(t),p=s(839),o=s.n(p),c=s(840),u=s.n(c),l=s(519),r=s.n(l),i=s(841),k=s.n(i),d=s(842),m=s.n(d),h=s(843),g=s.n(h),v=s(844),f=s.n(v),y=s(0),w=s.n(y),b=s(211),C=s(147);function E(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var e=g()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return m()(this,s)}}var S=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),f()(r()(n),"state",{value:0}),f()(r()(n),"onChange",(function(a){n.setState({value:a})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.Slider,{value:n,onChange:this.onChange})}}]),s}(w.a.Component);return w.a.createElement(n,null)},j=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),f()(r()(n),"state",{value:[30,100]}),f()(r()(n),"onChange",(function(a){n.setState({value:a})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.Slider,{range:!0,value:n,onChange:this.onChange})}}]),s}(w.a.Component);return w.a.createElement(n,null)},T=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),f()(r()(n),"state",{value:1.3}),f()(r()(n),"onChange",(function(a){n.setState({value:a})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.Slider,{max:2,min:1,step:.1,value:n,onChange:this.onChange})}}]),s}(w.a.Component);return w.a.createElement(n,null)},D=function(){var n={0:"0°C",100:"100°C"},a=function(a){k()(t,a);var s=E(t);function t(){var n;o()(this,t);for(var a=arguments.length,e=new Array(a),p=0;p<a;p++)e[p]=arguments[p];return n=s.call.apply(s,[this].concat(e)),f()(r()(n),"state",{value:[30,100]}),f()(r()(n),"onChange",(function(a){n.setState({value:a})})),n}return u()(t,[{key:"render",value:function(){var a=this.state.value;return w.a.createElement(C.Slider,{range:!0,marks:n,value:a,onChange:this.onChange})}}]),t}(w.a.Component);return w.a.createElement(a,null)},z=function(){var n={0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"},a=function(a){k()(t,a);var s=E(t);function t(){var n;o()(this,t);for(var a=arguments.length,e=new Array(a),p=0;p<a;p++)e[p]=arguments[p];return n=s.call.apply(s,[this].concat(e)),f()(r()(n),"state",{value:[0,50]}),f()(r()(n),"onChange",(function(a){n.setState({value:a})})),n}return u()(t,[{key:"render",value:function(){var a=this.state.value;return w.a.createElement(C.Slider,{range:!0,dots:!0,marks:n,value:a,onChange:this.onChange})}}]),t}(w.a.Component);return w.a.createElement(a,null)},N=function(){return w.a.createElement(C.Slider,{value:[30,100],range:!0,disabled:!0})};function R(n){return w.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return w.a.createElement(R,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return w.a.createElement(R,{tag:"style",html:n.style})}var A=function(n){k()(s,n);var a=E(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),f()(r()(n),"state",{showCode:!1}),f()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},e),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(R,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(y.Component),M=function(n){k()(s,n);var a=E(s);function s(){return o()(this,s),a.apply(this,arguments)}return u()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(x,{style:""}),w.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#slider">¶</a><a href="javascript:void(0)" id="slider" class="anchor-point"></a>Slider</h2>\n<p>You can select a value by dragging or clicking <code>Slider</code>.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Support a single slider and double slider.</li>\n<li>Can be used with <code>Input</code>.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(A,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(A,{title:"Double silders for range selection",id:"Demorange",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(j)),w.a.createElement(A,{title:"Set the maximun value, the minimun value and the interval between values.",id:"Demosetproperty",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">1.3</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(T)),w.a.createElement(A,{title:"Label",id:"Demolabel",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> marks <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">\'0°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">100</span><span class="token punctuation">:</span> <span class="token string">\'100°C\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">marks</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>marks<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(D)),w.a.createElement(A,{title:"Only the label values can be selected, where there is no input.",id:"Demonoinput",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> marks <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">\'0°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">25</span><span class="token punctuation">:</span> <span class="token string">\'25°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">50</span><span class="token punctuation">:</span> <span class="token string">\'50°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">75</span><span class="token punctuation">:</span> <span class="token string">\'75°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">100</span><span class="token punctuation">:</span> <span class="token string">\'100°C\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">dots</span> <span class="token attr-name">marks</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>marks<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(A,{title:"disabled",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">range</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(_,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>The value of input</td>\n<td>[\nnumber,array\n]</td>\n<td>0</td>\n<td>[\n0,0\n]</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggered when the slider is changed</td>\n<td>func(e:Event)</td>\n<td></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>range</td>\n<td>Whether the range selection can be used or not</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>max</td>\n<td>The max value</td>\n<td>number</td>\n<td>100</td>\n<td>50</td>\n<td>no</td>\n</tr>\n<tr>\n<td>min</td>\n<td>The min value</td>\n<td>number</td>\n<td>0</td>\n<td>-100</td>\n<td>no</td>\n</tr>\n<tr>\n<td>step</td>\n<td>The interval between values</td>\n<td>number</td>\n<td>1</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>withInput</td>\n<td>Whether the input is included</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n<td>no</td>\n</tr>\n<tr>\n<td>dots</td>\n<td>Whether the value of slider can only be selected from label values or not</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>marks</td>\n<td>label values</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable the silder</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>width</td>\n<td>width</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>no否</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>no</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Ps.</strong> When setting <code>range</code>, you should set <code>value</code> as an array of length 2. The array entry must be a number. Property <code>dots</code> must be used with <code>marks</code>.</p>'}))}}]),s}(y.Component)}}]);
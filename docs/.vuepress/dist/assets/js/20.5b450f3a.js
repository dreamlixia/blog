(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{436:function(n,e,t){"use strict";t.r(e);var r=t(27),o=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"normalize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#normalize"}},[n._v("#")]),n._v(" normalize()")]),n._v(" "),t("hr"),n._v(" "),t("blockquote",[t("p",[n._v("实质意义：不同系统的字符默认编码形式不一样，normalize()将它们标准化。")])]),n._v(" "),t("p",[n._v("许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\\u004F）和ˇ（\\u030C）合成Ǒ（\\u004F\\u030C）。")]),n._v(" "),t("p",[n._v("这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。")]),n._v(" "),t("h4",{attrs:{id:"es6提供的的字符串实例normalize-方法-将字符串的不同表示方法统一为同样的形式-这称为unicode正规化。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6提供的的字符串实例normalize-方法-将字符串的不同表示方法统一为同样的形式-这称为unicode正规化。"}},[n._v("#")]),n._v(" ES6提供的的字符串实例normalize() 方法，将字符串的不同表示方法统一为同样的形式，这称为Unicode正规化。")]),n._v(" "),t("p",[n._v("normalize()方法可以接受一个参数来指定normalize()的方式，参数的四个可选值如下。")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。")])]),n._v(" "),t("li",[t("p",[n._v("NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。")])]),n._v(" "),t("li",[t("p",[n._v("NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize()方法不能识别中文。）")])]),n._v(" "),t("li",[t("p",[n._v("NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。")])])]),n._v(" "),t("p",[n._v("例子1：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 判断两个字符串是否是回文数\nconst isReverseString = (str1, str2) => {\n    const isReverse = (str) => str.toLowerCase()\n        .normalize('NFD')// Unicode正规化\n        .split('')\n        .reverse()\n        .join('')\n    return isReverse(str1) === str2\n}\n\nconsole.log(isReverseString('abc', 'cba')) // true\nconsole.log(isReverseString('abc', 'dac')) // false\n")])])]),t("p",[n._v("例子2:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 判端两个字符串是否为互相重组/互相排列\nconst isAnagram = (str1, str2) => {\n    const anagram = (str) => str.toLowerCase()\n        .normalize('NFD')\n        .split('')\n        .sort()\n        .join('')\n    return anagram(str1) === str2\n}\n\nconsole.log('-', isReverseString('abcd', 'dcba')) // true\nconsole.log(isReverseString('jnhbhi', 'mlknlk')) // false\nconsole.log(isReverseString('jnhbhi', 'ihbhnj')) // true\n")])])]),n._v(" "),t("comment-comment")],1)}),[],!1,null,null,null);e.default=o.exports}}]);
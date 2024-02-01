(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{391:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[s._v("#")]),s._v(" 正则表达式")]),s._v(" "),a("blockquote",[a("p",[s._v("正则是用来对字符串进行查找或者处理的\n正则表达式是匹配模式（match pattern）: 要么匹配字符， 要么匹配位置")])]),s._v(" "),a("h1",{attrs:{id:"正则表达式字符匹配攻略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式字符匹配攻略"}},[s._v("#")]),s._v(" 正则表达式字符匹配攻略")]),s._v(" "),a("ul",[a("li",[s._v("主要内容")])]),s._v(" "),a("blockquote",[a("p",[s._v("在量词后面加上 ? 表示惰性匹配（亦称作惰性量词）\n- 两种模糊匹配\n- 字符组\n- 量词(+ 惰性匹配)\n- 分支结构\n- 案例分析")])]),s._v(" "),a("h2",{attrs:{id:"_1-两种模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-两种模糊匹配"}},[s._v("#")]),s._v(" 1- 两种模糊匹配")]),s._v(" "),a("blockquote",[a("p",[s._v("正则的强大在于其模糊匹配\n*正则的模糊匹配两种："),a("strong",[s._v("横向模糊匹配")]),s._v(" 和 "),a("strong",[s._v("纵向模糊匹配")])])]),s._v(" "),a("h3",{attrs:{id:"_1-1-横向模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-横向模糊匹配"}},[s._v("#")]),s._v(" 1.1- 横向模糊匹配")]),s._v(" "),a("blockquote",[a("p",[s._v("横向模糊匹配： 一个正则可匹配的字符串长度不是固定的。\n实现方式使用量词: 如：{m,n},表示"),a("strong",[s._v("某个或者某组")]),s._v("字符的连续出现次数 至少 m 次， 至多 n 次")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/ab{2,5}c/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc abbc abbbc abbbbc abbbbbc abbbbbbc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["abbc", "abbbc", "abbbbc", "abbbbbc"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其中， g 是正则的修饰符，表示全局匹配，即在目标字符串中按顺序找到满足匹配模式的所有有子串，强调的是 “所有” 而不是 “第一个”")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意下 g 和 贪婪匹配没有关系")])])]),s._v(" "),a("h3",{attrs:{id:"_1-2-纵向模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-纵向模糊匹配"}},[s._v("#")]),s._v(" 1.2- 纵向模糊匹配")]),s._v(" "),a("blockquote",[a("p",[s._v("纵向模糊匹配： 一个正则匹配的字符串，具体到某一位时候，可以是不确定的字符\n实现方式： 如： [abc]，表示该位字符可以是 字符 a , b ,c 中的任何一个。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/a[123]b/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a0b a1b a2b a3b a4b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//["a1b", "a2b", "a3b"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"_2-字符组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符组"}},[s._v("#")]),s._v(" 2- 字符组")]),s._v(" "),a("blockquote",[a("p",[s._v("虽然叫字符组（字符类），但只是其中的一个字符。例如： [abc], 表示匹配一个字符，他可以是 字符’a’， ‘b’, ‘c’ 之一。")])]),s._v(" "),a("h3",{attrs:{id:"_2-1-范围表示法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-范围表示法"}},[s._v("#")]),s._v(" 2.1- 范围表示法")]),s._v(" "),a("blockquote",[a("p",[s._v("使用连字符 - 来省略和简写：")])]),s._v(" "),a("p",[s._v("比如： [123456abcdefGHIJKLM] 可以简写为：[1-6a-fG-M]")]),s._v(" "),a("p",[s._v("因为 连字符有特殊用途，那么匹配 ‘a’, ‘-‘, ‘z’ 三者中的任意一个字符： [-az]或者[az-]或者[a-z] 即要么放在开头要么放在结尾，或者转义，只要不让 引擎认为表示范围就好了;")]),s._v(" "),a("h3",{attrs:{id:"_2-2-排除字符组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-排除字符组"}},[s._v("#")]),s._v(" 2.2- 排除字符组")]),s._v(" "),a("blockquote",[a("p",[s._v("纵向模糊匹配的时候，有一种情形是： 某位字符上表示任何除了 a,b,c 字符外的任何字符")])]),s._v(" "),a("p",[s._v("此时就是 排除字符组（反义字符组）的概念。 如： [^abc] 表示 一个除 ‘a’ , ‘b’ , ‘c’ 之外的任意一个字符。 字符组的第一位 ^ (脱字符) ,有取反 之意")]),s._v(" "),a("p",[s._v("当然，也有相应的范围表示法")]),s._v(" "),a("h3",{attrs:{id:"_2-3-常见的简写形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-常见的简写形式"}},[s._v("#")]),s._v(" 2.3- 常见的简写形式")]),s._v(" "),a("p",[s._v("\\d 就是 [0-9] ,表示一位数字。对应英文 digit(数字)")]),s._v(" "),a("p",[s._v("\\D 就是 [^0-9], 表示除数字外的任意字符")]),s._v(" "),a("p",[s._v("\\w 就是 [0-9a-zA-Z_] 或者 [0-9A-z](注意 A-z ASCII 码) ,表示 数字，字母，下划线。 word （单词），单词字符")]),s._v(" "),a("blockquote",[a("p",[s._v("注意 \\w 不包含 $ 符号\n\\W 就是 [^0-9a-zA-Z] , 表示非单词字符")])]),s._v(" "),a("p",[s._v("\\s 就是 [\\t\\v\\n\\r\\f] , 表空白符（号），包括 空格， 水平制表符，垂直制表符，换行符，回车符，换页符。 对应英文： space character")]),s._v(" "),a("p",[s._v("\\S 就是 [^\\t\\v\\r\\n\\f]， 表示非空白符号")]),s._v(" "),a("p",[s._v(". 就是 [^\\n\\r\\u2028\\u2029] 。 通配符，表示几乎任意字符，除了： 换行符，回车符，行分隔符和段分隔符")]),s._v(" "),a("p",[s._v("如果要匹配任意字符， 可以使用 [\\d\\D] 、[\\w\\W]、[\\s\\S] 和 [^] 中任何一个;")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"_3-量词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-量词"}},[s._v("#")]),s._v(" 3- 量词")]),s._v(" "),a("blockquote",[a("p",[s._v("量词也称作重复， 掌握 {m,n}精准含义后，只需要记住一些简写形式。")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-简写形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简写形式"}},[s._v("#")]),s._v(" 3.1- 简写形式")]),s._v(" "),a("p",[s._v("{m,}: 至少出现 m 次")]),s._v(" "),a("p",[s._v("{,n}： 至多出现 n 次")]),s._v(" "),a("p",[s._v("{m}: 出现 m 次")]),s._v(" "),a("p",[s._v("? : 等价于 {0,1} ，表示出现或者不出现")]),s._v(" "),a("p",[s._v("*： 等价于 {0,} 表示出现任意次， 有可能不出现")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_3-2-贪婪匹配-和-惰性匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-贪婪匹配-和-惰性匹配"}},[s._v("#")]),s._v(" 3.2- 贪婪匹配 和 惰性匹配")]),s._v(" "),a("p",[s._v("看如下例子：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\d{2,5}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123 1234 12345 123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// =>["123", "1234", "12345", "12345"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("正则 /\\d{2,5}/ 表示数字连续出现 2 到 5 次，可以匹配到 2,3,4 位连续数字")]),s._v(" "),a("p",[s._v("但是其是贪婪的，会尽可能多的匹配。能力范围内，越多越好")]),s._v(" "),a("p",[s._v("而惰性匹配，就是尽可能少的匹配：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v("  regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\d{2,5}?/g")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123 1234 12345 123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// => ["12", "12", "34", "12", "34", "12", "34", "56"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("其中 /\\d{2,5}/表示， 2到5次都行，当2个就够的时候，就不再往下尝试了")]),s._v(" "),a("p",[s._v("通过在量词后面加个问号既可以实现惰性匹配，因此所有惰性匹配的情形如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("一般只有量词才会涉及到贪婪和惰性")])]),s._v(" "),a("ol",[a("li",[s._v("{m,n}?")]),s._v(" "),a("li",[s._v("{m,}?")]),s._v(" "),a("li",[s._v("??")]),s._v(" "),a("li",[s._v("+?")]),s._v(" "),a("li",[s._v("*?")])]),s._v(" "),a("p",[s._v("*惰性匹配的记忆方式： 量词后面加问号，问一句你知足了吗？ 你很贪婪吗?")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"_4-多选分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-多选分支"}},[s._v("#")]),s._v(" 4- 多选分支")]),s._v(" "),a("blockquote",[a("p",[s._v("一个模式可以实现 横向和纵向的模糊匹配。而多选分支可以支持多个子模式任选其一。\n具体形式： (p1| p2| p3) ，其中 p1 、p2 、p3 是子模式，用 | （管道符）分隔，表示其中任何之一。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/good|nice/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"good idea , nice try"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["good", "nice"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("分支结构的匹配是 惰性匹配，即当前面的匹配上了，后面就不再尝试了")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/good|goodbye/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goodbye'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// => ["good"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/goodbye|good/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goodbye'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// => ["goodbye"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"_5-案例分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例分析"}},[s._v("#")]),s._v(" 5- 案例分析")]),s._v(" "),a("blockquote",[a("p",[s._v("匹配字符，无非就是 字符组、量词和分支机构的组合使用罢了")])]),s._v(" "),a("h3",{attrs:{id:"_5-1-匹配16进制颜色值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-匹配16进制颜色值"}},[s._v("#")]),s._v(" 5.1- 匹配16进制颜色值")]),s._v(" "),a("blockquote",[a("p",[s._v("建议在 [] 不要使用 \\d 使用 0-9\n注意在 正则表达式中不要随意加 空格，空格也是会匹配的")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要求匹配： #ffbbad #Fc01Df #fff #ffE")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var regex = /#[0-9a-fA-F]{6} | #[0-9a-fA-F]{3}/g")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/#[\\da-fA-F]{6} | #[\\da-fA-F]{3}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#ffbbad #Fc01Df #fff #ffE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// >  ["#ffbbad", "#Fc01Df", "#fff", "#ffE"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_5-2-匹配时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-匹配时间"}},[s._v("#")]),s._v(" 5.2- 匹配时间")]),s._v(" "),a("blockquote",[a("p",[s._v("以24小时制为例。\n要求匹配： 23:59 ， 02:07")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 共四位数， 第1位 可以是[0-2]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 当第一位 为2 时候， 第二位可以 [0-3],其他情况 第二位[0-9]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 第3 位 数字为 [0-5]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 第4位 为 [0-9]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^([01][0-9]|[2][0-3]):[0-5][0-9]$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'23:59'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02:07'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// > true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// > true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("零可以省略情况：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 扩大范围了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var regex = /^([01]?[0-9]|[2][0-3]):[0-5]?[0-9]$/;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):((0?|[1-5])[0-9])$/;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'23:59'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02:07'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2:7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// > true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// > true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// > true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_5-3-匹配日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-匹配日期"}},[s._v("#")]),s._v(" 5.3- 匹配日期")]),s._v(" "),a("blockquote",[a("p",[s._v("比如： yyyy-mm-dd 格式为例\n分析：\n1. 年， 四位数字即可，可用 [0-9]{4}\n2. 月， 共12个月，分两种情况： 01、02…、09 和 10 、11、12， 可用 (0[1-9]|1[0-2] )\n3. 日，最大31 天，分为三种情况： 01、02、…、 09 和 10… 和 30、31，可用(0[1-9]|[12][0-9]|[3][01])")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^[0-9]{4}-0[1-9]|1[0-2]-0[1-9]|[12][0-9]|[3][01]$/")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2017-06-07'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5-4-window-操作系统文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-window-操作系统文件路径"}},[s._v("#")]),s._v(" 5.4- window 操作系统文件路径")]),s._v(" "),a("p",[s._v("要求:"),a("br"),s._v("\nF:\\study\\javascript\\regex\\regular expression.pdf\nF:\\study\\javascript\\regex"),a("br"),s._v("\nF:\\study\\javascript\nF:\\")]),s._v(" "),a("p",[s._v("分析:"),a("br"),s._v("\n1. 整体的模式是： 盘符:\\文件夹\\文件夹\\文件夹"),a("br"),s._v("\n2. 匹配 F:\\ 使用 [a-zA-Z]:\\,其中盘符不区分大小写，注意 \\ 需要使用转义\n3. 文件名和文件夹： [^:"),a("em",[s._v('<>|"?\\r\\n/] 不能空名，至少一个字符，匹配文件夹: folder. 可用 ([^:')]),s._v('<>|"?\\r\\n/]+\\)+, 其中 '),a("strong",[s._v("括号提供子表达式")]),s._v('\n4. 路径最后一部分可以是文件夹，没有 , 因此需要添加 ([^:*<>|"?\\r\\n/]+)?')]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这正则很棒，最后一位的匹配直接使用 ? 来区分 folder\\ 类型的")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v('/^[a-zA-Z]:\\\\([^\\\\:*<|"?\\r\\n/]+\\\\)*([^\\\\:*<>|"?\\r\\n/]+)?$/')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nregex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F:\\\\study\\\\javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nregex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F:\\\\study\\\\javascript\\regex\\\\regular expression.pdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F:\\\\study\\\\javascript\\\\regex\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_5-5-匹配-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-匹配-id"}},[s._v("#")]),s._v(" 5.5- 匹配 id")]),s._v(" "),a("blockquote",[a("p",[s._v('要求： 提取 id="container"\n首先想到：')])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v('/id=".*"/')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'<div id="container" class="main" style="color: red;"></div>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// id="container" class="main" style="color: red;"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("因为 . 是通配符， 本身就可以匹配双引号，而 量词 * 本身又是贪婪的， 当遇到 container 后面双引号时候，不会停下来，会继续匹配，"),a("strong",[s._v("直到遇到最后一个双引号位置")])]),s._v(" "),a("p",[s._v("优化如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v('/id="[^"]*"/')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'<div id="container" class="main" style="color: red;"></div>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// id="container"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_5-6-匹配-0-100"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-匹配-0-100"}},[s._v("#")]),s._v(" 5.6- 匹配 0% ~ 100%")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^(\\d|[1-9]\\d|100)%$/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("来源: "),a("a",{attrs:{href:"https://blog.csdn.net/palmer_kai/article/details/80165412",target:"_blank",rel:"noopener noreferrer"}},[s._v("palmer_kai"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);
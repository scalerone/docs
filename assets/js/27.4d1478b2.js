(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{196:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"动画简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画简介"}},[t._v("#")]),t._v(" 动画简介")]),t._v(" "),s("p",[t._v("Animated库用于创建更精细的交互控制的动画，它使得开发者可以非常容易地实现各种各样的动画和交互方式，并且具备极高的性能。动画旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用简单的start / stop方法来控制动画按顺序执行。\n")]),t._v(" "),s("h3",{attrs:{id:"动画提供了两种类型的值："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画提供了两种类型的值："}},[t._v("#")]),t._v(" 动画提供了两种类型的值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Animated.Value()")]),t._v("用于单个值。")]),t._v(" "),s("li",[s("code",[t._v("Animated.ValueXY()")]),t._v("用于矢量值。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Animated.Value()")]),t._v("可以绑定到样式或是其他属性上，也可以进行插值运算。单个Animated.Value（）可以用在任意多个属性上。")])]),t._v(" "),s("h3",{attrs:{id:"动画用于创建动画的主要方法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画用于创建动画的主要方法："}},[t._v("#")]),t._v(" 动画用于创建动画的主要方法：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Amated.timing()")]),t._v("：最常用的动画类型，使一个值按照一个过渡曲线而随时间变化。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Animated.spring()")]),t._v("：弹簧效果，基础的单次弹跳物理模型实现的spring动画。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Animated.decay()")]),t._v("：衰变效果，以一个初始的速度和一个衰减系数逐渐减慢变为0。")])])]),t._v(" "),s("h3",{attrs:{id:"动画实现组合动画的主要方式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画实现组合动画的主要方式："}},[t._v("#")]),t._v(" 动画实现组合动画的主要方式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Animated.parallel()")]),t._v("：同时开始一个动画数组里的全部动画。默认情况下，如果有任何一个动画停止了，其余的也会被停止。可以通过stopTogether选项设置为false来取消这种关联。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Animated.sequence()")]),t._v("：按顺序执行一个动画数组里的动画，等待一个完成后再执行下一个。如果当前的动画被中止，后面的动画则不会继续执行。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Animated.stagger()")]),t._v("：一个动画数组，传入一个时间参数来设置队列动画间的延迟，即在前一个动画开始之后，隔一段指定时间才开始执行下一个动画里面的动画，并不关心前一个动画是否已经完成，所以有可能会出现同时执行（重叠）的情况。")])])]),t._v(" "),s("h3",{attrs:{id:"合成动画值："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成动画值："}},[t._v("#")]),t._v(" 合成动画值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Animated.add()")])]),t._v(" "),s("li",[s("code",[t._v("Animated.divide()")])]),t._v(" "),s("li",[s("code",[t._v("Animated.modulo()")]),t._v("\n-"),s("code",[t._v("Animated.multiply()")])])]),t._v(" "),s("blockquote",[s("p",[t._v("可以使用加减乘除以及取余等运算来把两个动画值合成为一个新的动画值。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Animated.delay(time: number)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("在指定的延迟之后开始动画。")])]),t._v(" "),s("h3",{attrs:{id:"插值函数："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值函数："}},[t._v("#")]),t._v(" 插值函数：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("interpolate()")]),t._v("：将输入值范围转换为输出值范围。")])]),t._v(" "),s("blockquote",[s("p",[t._v("允许一个输入的区间范围映射到另外一个输入的区间范围。例如:一个简单的实例0-1的区间映射到0-100的区间范围:")])]),t._v(" "),s("div",{staticClass:"language-jsx harmony extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("opacity_text_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interpolate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inputRange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outputRange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0deg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100deg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("blockquote",[s("p",[t._v("interpolate还支持多段区间，该用来定义一些静态区间。例如:当我们输入为-152的时候取值0。然后在输入到-76的时候变成76，当输入-75的时候接着变成成-76，接着输入一直到0的时候又回到0。")])]),t._v(" "),s("div",{staticClass:"language-jsx harmony extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v(" transformY_text_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interpolate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inputRange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("152")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outputRange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("interpolation还支持任意形式的渐变方法，很多类型已经Easing类中定义了，例如:二次函数,指数函数,贝塞尔曲线等step以及bounce。interpolation还可以设置区间outputRnage的输出值边界。可以设置extrapolate,extrapolateLeft或者extraplateRight可选属性。默认值为extend(允许超出),但是我们可以设置clamp属性来避免值超出outputRange的最大边界值。")])]),t._v(" "),s("h3",{attrs:{id:"监听动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听动画"}},[t._v("#")]),t._v(" 监听动画")]),t._v(" "),s("ul",[s("li",[t._v("有时候我们需要在动画的过程中监听到某动画时刻的属性值，可以通过 "),s("code",[t._v("animateValue.stopAnimation(callback<Function>)")]),t._v(" 或 "),s("code",[t._v("animateValue.addListener(callback<Function>)")]),t._v(" 来实现")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("其中 stopAnimation 会停止当前动画并在回调函数中返回一个 {value : number} 对象，value对应最后一刻的动画属性值。")]),t._v(" "),s("li",[t._v("而 addListener 方法会在动画的执行过程中持续异步调用callback回调函数，提供一个最近的值作为参数。")])])]),t._v(" "),s("ul",[s("li",[t._v("有时候我们希望在某个交互事件（特别是手势）中更灵活地捕获某个事件对象属性值，并动态赋予某个变量，对于这种需求可以通过 "),s("code",[t._v("Animated.event")]),t._v(" 来实现。\n它接受一个数组为参数，数组中的层次对应绑定事件参数的相应映射，听着有点绕，看例子就很好理解了：")])]),t._v(" "),s("div",{staticClass:"language-jsx harmony extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\nonScroll "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nativeEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" scrollX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scrollX = e.nativeEvent.contentOffset.x")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nonPanResponderMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略原生事件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从gestureState中解析出dx和dy的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"api-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-介绍"}},[t._v("#")]),t._v(" API 介绍")]),t._v(" "),s("h3",{attrs:{id:"animated基本使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animated基本使用方法"}},[t._v("#")]),t._v(" "),s("code",[t._v("Animated")]),t._v("基本使用方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("decay(value,config)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法,传入一个初始速度值以及衰减值。动画从初始速度慢慢衰减到0.")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("timing(value,config)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法,该动画传入一个值，根据过渡曲线函数变化。Easing模块已经定义很多不同的过渡曲线方法，当然也可以自己自定义")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("spring(value,config)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法,创建一个基于Rebound和Origami实现的Spring动画。该值会将当前动画运行的状态值自动更新到toValue属性中，以确保动画的连贯性。可以链式调用。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("add(a,b)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法,将两个动画值相加，创建一个新的动画值。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("multiply(a,b)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法,将两个动画值进行相乘，创建一个新的动画值")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("modulo(a,modulus)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法，进行对参数一的动画值取模(非负值)，创建一个新的动画值")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("delay(time)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法，在给定的延迟时间之后执行动画")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("sequence(animations)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法，该按照顺序执行一组动画，该需要等待一个动画完成以后才会继续执行下一个动画。如果当前的动画被打断终止了，那么就不会执行后边的动画了。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("parallel(animations,config?)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法，同时执行一组动画，默认情况下，如果其中有任一动画被终止了，那么其余的动画也会被停止。不过我们可以通过stopTogether来改变设置。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("stagger(time,animations)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法，执行一组动画，有可能里边的动画是同时执行。不过会有指定时间的延迟。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("event(argMapping,config?)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法  响应事件值，如下看一下使用方法")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("createAnimatedComponent(Component)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("静态方法 ，使得任何React的组件都可以设置动画效果，例如创建Animated.View等等")])]),t._v(" "),s("h2",{attrs:{id:"基本属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本属性"}},[t._v("#")]),t._v(" 基本属性")]),t._v(" "),s("h3",{attrs:{id:"animatedvalue类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animatedvalue类"}},[t._v("#")]),t._v(" "),s("code",[t._v("AnimatedValue")]),t._v("类")]),t._v(" "),s("blockquote",[s("p",[t._v("该值用来驱动动画执行，一个"),s("code",[t._v("Animated.Value")]),t._v("可以用一种顺序的方法进行执行多种属性，不过在同一时间只能执行一种效果。通过开启一个新的动画或者调用setValue方法会停止之前任何的动画然后开始新的动画效果。通常我们使用"),s("code",[t._v("new Animated.Value(0)")]),t._v("，进行初始化动画。")])]),t._v(" "),s("h4",{attrs:{id:"重要方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要方法"}},[t._v("#")]),t._v(" 重要方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("constructor(value)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("构造方法，初始化一个值")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("setValue(value)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("直接设置动画值，该会停止任何正在进行中的动画，然后更新所有绑定的属性")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("setOffset(value)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("设置偏移量，接下来无论使用setValue,一个动画或者Animated.event，都会加上这个值。常用在手势拖动操作中。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("flattenOffset()")])])]),t._v(" "),s("blockquote",[s("p",[t._v("该用来把相对值合并到值里，然后相对值设置为0，最终输出的值不会发生变化。常常在拖动操作结束以后调用。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("addListener(callback)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("添加监听器，用于监听动画执行过程中的值的变化。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("removeListener(id)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("删除指定的监听器")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("emoveAllListeners()")])])]),t._v(" "),s("blockquote",[s("p",[t._v("删除所有的监听器")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("stopAnimation(callback?)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("进行停止任何正在运行的动画或者追踪器，最终callback会被调用，该参数为动画结束的时候那个最终值。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("interpolate(config)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("在更新属性之前对值进行插值函数映射 ：例如 映射0-1到0-10")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("animate(animation,callback)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("私有方法，一般在自定义动画类中可能会使用到")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("stopTracking()")])])]),t._v(" "),s("blockquote",[s("p",[t._v("私有方法")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Track(tracking)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("私有方法")])]),t._v(" "),s("h3",{attrs:{id:"animatedvaluexy类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animatedvaluexy类"}},[t._v("#")]),t._v(" AnimatedValueXY类")]),t._v(" "),s("blockquote",[s("p",[t._v("用设置驱动2D动画的运行，例如滑动操作等。该使用的API和普通的Animated.Value几乎一模一样，只不过该包含两个Animated.Value值的复杂结构。")])]),t._v(" "),s("h4",{attrs:{id:"重要方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要方法-2"}},[t._v("#")]),t._v(" 重要方法")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("constructor(value?)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("setValue(value)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("setOffset(offset)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("flattenOffset()")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("stopAnimation(callback?)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("addListener(callback)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("removeListener(id)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("getLayout()")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("用于样式中，将{x,y}的形式转换成{left,top}的模式")])]),t._v(" "),s("div",{staticClass:"language-jsx harmony extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("getTranslateTransform()")])])]),t._v(" "),s("blockquote",[s("p",[t._v("用于将{x,y}的组合形式转换成可以用于平移变化的模式,")])]),t._v(" "),s("div",{staticClass:"language-jsx harmony extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("transform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTranslateTransform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);
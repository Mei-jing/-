# 什么是 DOM  
文档对象模型 (DOM) 是 HTML 和 XML 文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

一个 web 页面是一个文档。这个文档可以在浏览器窗口或作为 HTML 源码显示出来。但上述两个情况中都是同一份文档。文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。 DOM 是web 页面的完全的面向对象表述，它能够使用如 JavaScript 等脚本语言进行修改。  

[W3C DOM](http://www.w3.org/DOM/) 和 [WHATWG](http://www.w3.org/DOM/) DOM 标准在绝大多数现代浏览器中都有对DOM的基本实现。许多浏览器提供了对W3C标准的扩展，所以在使用时必须注意，文档可能会在多种浏览器上使用不同的DOM来访问。  

例如，W3C DOM 中指定下面代码中的getElementsByTagName方法必须要返回所有 &lt;p&gt; 元素的列表：
```js
paragraphs = document.getElementsByTagName("P");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0k2xitw4wj20kh03cgll.jpg)

所有操作和创建web页面的属性，方法和事件都会被组织成对象的形式（例如， document 对象表示文档本身， table 对象实现了特定的 HTMLTableElement DOM 接口来访问HTML 表格等）。本文会介绍基于 Gecko浏览器的 DOM 面向对象引用。  

# 如何访问 DOM 
在使用 DOM 时，您不需要做任何其他特殊的操作。不同的浏览器都有对 DOM 不同的实现， 这些实现对当前的 DOM 标准而言，都会呈现出不同程度的一致性，每个 web 浏览器都会使用一些文档对象模型，从而使页面可以被脚本语言访问。

当您在创建一个脚本时-无论是使用内嵌 **&lt;script&gt;** 元素或者使用在 web 页面脚本加载的方法— 您都可以使用 [document](https://developer.mozilla.org/en-US/docs/DOM/document) 或 [window](https://developer.mozilla.org/en-US/docs/DOM/window) 元素的API来操作文档本身或获取文档的子类（web页面中的各种元素）。
```html
<body onload="window.alert('welcome to my home page!');">
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0k3fb5j4mj20cu03zmx0.jpg)

除了定义 JavaScript 的 &lt;script&gt; 元素外， 当文档被装载（以及当整个 DOM 可以被有效使用时），JavaScript 可以设定一个函数来运行。下面的函数会创建一个新的 H1 元素，为元素添加文本，并将H1添加在文档树中。
```html
<html>

<head>
  <script>
    // run this function when the document is loaded
    window.onload = function () {
      // create a couple of elements 
      // in an otherwise empty HTML page
      heading = document.createElement("h1");
      heading_text = document.createTextNode("Big Head!");
      heading.appendChild(heading_text);
      document.body.appendChild(heading);
    }
  </script>
</head>

<body>
</body>

</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0k3lqbruxj204c034t8j.jpg)

# 重要的数据类型  
本参考文档会试图以尽可能简单的方式描述各种对象和类型。但在API中传入的不同的数据类型需要我们去注意。为简单起见，在API参考文档中的语法实例通常会使用element(s) 指代节点，使用nodeList（s）或 element(s)来指代节点数组，使用 attribute(s)来指代属性节点。

下面的表格简单则描述了这些数据类型。
[Important Data Types](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction#Important_Data_Types)

# DOM 接口 
本指南对你可以用来操作DOM层级的对象以及事物进行了介绍。例如， HTML form 元素从 HTMLFormElement 接口中获取它的 name 属性，从 HTMLElement 接口中获取 className 属性。在上面情况中，您要获取的属性都只在form对象中。
但是由DOM实现的对象和接口间的关系是容易被混淆的，因此本节会尝试去对DOM 标准中的一些常用的接口进行说明以及它们是怎样生效的。

## 接口及对象
许多对象都实现了多个接口。例如，table对象实现了 [HTML Table Element Interface](https://developer.mozilla.org/en-US/docs/DOM/HTMLTableElement), 其中包括 createCaption 和 insertRow 方法。但由于table对象也是一个HTML元素， table 也实现了 Element 接口（在  [DOM element Reference](https://developer.mozilla.org/en-US/docs/DOM/element) 一章有对应描述）。最后，由于HTML元素对DOM来说也是组成web页面或XML页面节点树中的一个节点， table元素也实现更基本的  Node 接口， Element 对象也继承这个接口。

正如下面的例子，当你得到一个  table 对象的引用时，你经常会轮流使用对象实现的三个不同接口的方法，但并不知其所以然。

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    table.border = "1"; 
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

## DOM 核心接口
本节列出了在DOM中最常用的一些接口。此处并不会描述这些API在做什么，但是会让你了解当你使用DOM时常用的各种方法和属性。 这些常用的API在本文档最后的  [DOM Examples](https://developer.mozilla.org/en-US/docs/Gecko_DOM_Reference/Examples) 章节中(包含更长的实例)中有使用。

DOM 编程时，通常使用的最多的就是 Document 和 window 对象。简单的说， window 对象表示浏览器中的内容，而 document 对象是文档本身的根节点。Element 继承了通用的 Node 接口,  将这两个接口结合后就提供了许多方法和属性可以供单个元素使用。在处理这些元素所对应的不同类型的数据时，这些元素可能会有专用的接口，如上节中的  table  对象的例子。 

下面是在web和XML页面脚本中使用DOM时，一些常用的API简要列表。

### ***document.getElementById(id)***
>Document的方法 getElementById()返回一个匹配特定 ID的元素. 由于元素的 ID 在大部分情况下要求是独一无二的，这个方法自然而然地成为了一个高效查找特定元素的方法。

>如果需要查找到那些没有ID 的元素，你可以考虑通过CSS选择器使用 [querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)。

#### 语法
```js
var element = document.getElementById(id) 
```
#### 参数
*element是一个 Element 对象。如果当前文档中拥有特定ID的元素不存在则返回null.  
*id是大小写敏感的字符串，代表了所要查找的元素的唯一ID.

#### 返回值 
返回一个匹配到 ID 的 DOM Element 对象。若在当前 Document 下没有找到，则返回 null。

#### Example
```html
<!DOCTYPE html>
<html>

<head>
  <title>getElementById example</title>
</head>

<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>
  <script>
    function changeColor(newColor) {
      var elem = document.getElementById('para');
      elem.style.color = newColor;
    }
  </script>
</body>

</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0k4lokq25j204f024t8h.jpg) ![](https://ws1.sinaimg.cn/large/785070e7ly1g0k4m7dgldj204e029we9.jpg)

#### 注意：
对 “Id” 的拼写一定要正确。无论看起来多么合情合理，getElementByID() 都是不合理的且永远都不会工作的。

不同于其他 Element 查找方法（如 [Document.querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)  以及 [Document.querySelectorAll()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)），getElementById() 只有在作为 document 的方法时才能起作用，而在DOM中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的 “局部” 版本

#### Example
```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="parent-id">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>
    <script>
        var parentDOM = document.getElementById('parent-id');
        console.log(parentDOM)
        var test1=parentDOM.getElementById('test1');
        //抛出错误
        //（这是一条错误信息）Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
</body>
</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0k5opq2sdj20oe04vaa7.jpg)
如果没有查找到对应的元素，方法会返回null。注意ID参数是大小写敏感的，所以document.getElementById("Main")无法获取到元素&lt;div id="main"&gt;，因为 'M' 和 'm' 是不一样的。

getElementById方法不会搜索不在文档中的元素。当创建一个元素，并且分配ID后，你必须要使用  [insertBefore](https://developer.mozilla.org/en-US/docs/DOM/Node.insertBefore) 或其他类似的方法把元素插入到文档中，之后才能使用 getElementById 获取到:
```js
var element = document.createElement("div");
element.id = 'testqq';
var el = document.getElementById('testqq'); // el 是个 null
```

### *document.getElementsByTagName(name)*
>返回一个包括所有给定标签名称的元素的 HTML 集合 [HTMLCollection](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)。 整个文件结构都会被搜索，包括根节点。返回的 HTML集合是动态的, 意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用 document.getElementsByTagName() 。

####语法
```js
var elements =document.getElementsByTagName(name)
```
*elements 是一个由发现的元素出现在树中的顺序构成的动态的HTML集合 HTMLCollection (但是看下面的提示) 。

*name 是一个代表元素的名称的字符串。特殊字符 \" * \" 代表了所有元素。
![](https://ws1.sinaimg.cn/large/785070e7ly1g0l1u2dsqkj20fe0byjsp.jpg)

注意: 最新的 W3C 规范 说明这些元素是 HTMLCollection（HTML集合）； 然而, 这个方法在WebKit内核的浏览器中返回一个 [NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 。 更多详情请查看 [bug 14869](https://bugzilla.mozilla.org/show_bug.cgi?id=14869) 。

#### Example
在以下的例子中，getElementsByTagName() 开始于一个具体的父级元素并且从它自上而下递归地在DOM树中搜索符合标签名称参数的子元素。

注意调用 getElementsByTagName() 的不是那个文件节点 document，事实上是使用这个方法 [element.getElementsByTagName()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getElementsByTagName)。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>getElementsByTagName example</title>

    <script>
        function getAllParaElems() {
            var allParas = document.getElementsByTagName("p")
            var num = allParas.length
            alert("There are" + num + " paragraph in this document ")
        }

        function div1ParaElems() {
            var div1 = document.getElementById("div1")
            var div1Paras = div1.getElementsByTagName("p")
            //注意调用 getElementsByTagName() 的不是那个文件节点 document，事实上是使用这个方法 element.getElementsByTagName()。
            var num = div1Paras.length
            alert("There are" + num + "Paragraph in #div1")
        }

        function div2ParaElems() {
            var div2 = document.getElementById("div2")
            var div2Paras = div2.getElementsByTagName("p")
            var num = div2Paras.length
            alert("There are" + num + "paragraph in #div2")
        }
    </script>
</head>

<body style="border:solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border:solid blue 3px">
        <p>Some div1 text</p>
        <p>Some div1 text</p>
        <p>Some div1 text</p>

        <div id="div2" style="border: solid red 3px">
            <p>Some div2 text</p>
            <p>Some div2 text</p>
        </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button><br />

    <button onclick="div1ParaElems();">show all p elements in div1 element</button><br />

    <button onclick="div2ParaElems();">show all p elements in div2 element</button>


</body>

</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0l35fkigvj209x0eadfw.jpg)
#### 注意
当在一个HTML 文件上执行时， getElementsByTagName() 会在执行前把参数转换为小写字母。这是试着在一个HTML文件的子树匹配驼峰命名法的 SVG 元素时不希望的。 [document.getElementsByTagNameNS()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagNameNS) 在那种情况下会有用. 请查看 bug 499656。

document.getElementsByTagName() 类似于 [element.getElementsByTagName()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getElementsByTagName)，除了它会搜索整个文档这点。

### *Document.createElement()*
>在一个 HTML 文档中， Document.createElement() 方法创建由tagName 指定的HTML元素，或一个 [HTMLUnknownElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLUnknownElement)，如果tagName不被识别。

>在一个 [XUL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL) 文档中，它创建指定的XUL元素。在其他文档中，它创建一个具有null命名空间URI的元素。

>要显式指定元素的命名空间URI，请使用 [document.createElementNS()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)。

#### 语法
```js
let element = document.createELement(tagName[,option])
```
### 参数
**tagName**
指定要创建元素类型的字符串,创建元素时的 [nodeName](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName) 使用tagName的值为初始化,该方法不接受使用限定名称(如:"html:a"),在 HTML 文档上调用 createElement() 方法创建元素之前会将tagName转化成小写,在Firefox, Opera 和 Chrome内核中. createElement(null) 等同于 createElement("null")

**options** 可选
    一个可选的参数 ElementCreationOptions 是包含一个属性名为 is的对象, 该对象的值是用 customElements.define()方法定义过的一个自定义元素的标签名。 为了向前兼容较老版本的 [Custom Elements specification](https://www.w3.org/TR/custom-elements/), 有一些浏览器会允许你传一个值为自定义元素的标签名的字符串作为该参数的值. 可以看 [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) 仔细了解如何使用该参数。
    这个新元素会有一个 is 属性，该属性值为自定义元素的标签名。注意，自定义元素是一项只在某些浏览器可用的实验性特性。

#### 返回值
The new [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
*element 是创建的 [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) 对象。
*tagName 指定将要创建的元素类型的字符串。创建的 element 的 nodeName 会被初始化为tagName的值。该方法不接受带条件的元素名字(例如: html:a)。
*options 是一个可选的 ElementCreationOptions 对象. 如果这个对象被定义并赋予了一个 is 特性，则创建的element的 is 属性会被初始化为这个特性的值. 如果这个对象没有 is 特性，则值为空.
#### Example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>||Working with elements||</title>
</head>

<body>
    <div id="div1">The text above has been created dynamically</div>
</body>

<script>
    document.body.onload = addElement

    function addElement() {
        //创建一个新的标签添加一些内容
        var newDiv = document.createElement("div")
        var newContent = document.createTextNode("Hi there and greetings!")
        newDiv.appendChild(newContent) //将文本节点添加到新创建的div中
        //将新创建的元素及其内容添加到DOM中
        var currentDiv = document.getElementById('div1')
        document.body.insertBefore(newDiv, currentDiv)
    }
</script>

</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0l7pu7un4j20b703x747.jpg)
当在一个被标记为HTML文档的文档对象上执行时，createElement()优先将参数转换为小写。

### *parentNode.appendChild(node)*
![](https://ws1.sinaimg.cn/large/785070e7ly1g0l840zgnqj20li04nwes.jpg)
>Node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾

#### 语法
```js
var  child = node.appendChild(child)
```
*node是要插入子节点的父节点
*child 既是参数又是这个方法的返回值  

appendChild 方法会把要插入的这个节点引用作为返回值返回.
```js
var p = document.createElement("p")
document.body.appendChild(p)
//创建一个新的 p 元素，然后添加 body 的最尾部
```

####注意
如果被插入的节点已经存在于当前文档的文档树中，则那个节点会首先从原先的位置移除，然后再插入到新的位置.

如果你需要保留这个子节点在原先位置的显示，则你需要先用 [Node.cloneNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode) 方法复制出一个节点的副本，然后在插入到新位置.

这个方法只能将某个子节点插入到同一个文档的其他位置，如果你想跨文档插入，你需要先调用 [document.importNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)方法.

### *Element.innerHTML*
>Element.innerHTML 属性设置或获取 HTML 语法表示的元素的后代。

>Note: 如果一个 &lt;div&gt;, &lt;span&gt;, 或 &lt;noembed&gt; 节点有一个文本子节点，该节点包含字符 (&), (<),  或 (>), innerHTML 将这些字符分别返回为 & amp;, &lt; 和 &gt; 。使用 [Node.textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent)  可获取一个这些文本节点内容的正确副本

#### 语法
```js
const content = element.innerHTML
element.innerHTML = htmlString
```
#####值
DOMString 包含元素后代的 HTML 序列。设置元素的 innerHTML 将会删除所有该元素的后代并以上面给出的 htmlString 替代
#####例外
**SyntaxError**
当 HTML 没有被正确标记时，设置 innerHTML 将会抛出语法错误。
**NoModificationAllowedError**
当父元素是 Document 时，设置 innerHTML 将会提示不允许修改。


####使用说明
innerHTML 属性可以用来检查当前页面自最初加载到当前的 HTML 源码的变化。
#####获取元素的 HTML 
获取 innerHTML 会导致用户代理序列化 由元素后代组成的 HTML 或者 XML 。返回结果字符串。
```js
let contents = myElement.innerHTML
```
查看元素内容的节点的 HTML 标记
>注：返回的 HTML 或者 XML 片段是基于当前元素的内容生成的，所以返回的标记和格式可能与原始页面的标记不匹配
#####替换元素的内容
设置 innerHTML 的值可以让你轻松地将当前元素的内容替换为新的内容。

举个例子来说，你可以通过文档 body  属性删除 body 的全部内容。
```js
document.body.innerHTML = ""
```
下面这个例子，首先获取文档当前的 HTML 标记并替换 "<" 字符为 HTML 实体 "\&lt;"，从本质上来看，它是将 HTML 转换成原始文本，将其包裹在 &lt;pre&gt; 元素中。然后 innerHTML 的值被替换成新的字符串。最后，文档的内容被替换为页面显示源码。
```js
document.documentElement.innerHTML = "<pre>" + document.documentElement.innerHTML.replace(/</g,"&lt;") + "</pre>"
```
####Example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Element.innerHTML Example</title>
    <style>
        .box {
            width: 600px;
            height: 300px;
            border: 1px solid black;
            padding: 2px 4px;
            overflow-y: scroll;
            overflow-x: auto;
        }

        .log {
            margin-top: 8px;
            font-family: monospace;
        }
    </style>
</head>

<body>
    <div class="box">
        <div><strong>Log:</strong></div>
        <div class="log"></div>

    </div>

</body>
<script>
    function log(msg) {
        var logElem = document.querySelector('.log');

        var time = new Date()
        var timeStr = time.toLocaleTimeString()
        logElem.innerHTML += timeStr + "：" + msg + "<br/>"
    }

    log("Logging mouse events inside this container...")
    /*
    log () 函数通过 Date 对象的 toLocaleTimeString() 方法获取当前时间，然后将消息文本和时间戳放一起构建一个字符串，最后将其追加到具有 “log” 类的框上。
    */
    /*
    现在添加第二个方法：记录基于事件 (比如 mousedown, click, 和 mouseenter) 的 MouseEvent 的信息。
    */

    function logEvent(event) {
        var msg = "Event <strong>" + event.type + "</strong> at <em>" + event.clientX + "," + event.clientY + "</em>"
        log(msg)
    }

    //然后我们使用它作为包含我们消息的框上的鼠标事件的时间处理程序
    var boxElem = document.querySelector(".box");

    boxElem.addEventListener("mousedown", logEvent);
    boxElem.addEventListener("mouseup", logEvent);
    boxElem.addEventListener("click", logEvent);
    boxElem.addEventListener("mouseenter", logEvent);
    boxElem.addEventListener("mouseleave", logEvent);
</script>


</html>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0la3zrxjaj20hc08x3ym.jpg)

### *Element.setAttribute()*
>设置指定元素上的一个属性值。

>如果属性已经存在，则更新该值；否则将添加一个新的属性用指定的名称和值。

>要获取属性的当前值，使用 [getAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute); 

>要删除一个属性，调用 [removeAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttribute)。

#### 语法
```js
element.setAttribute(name,value)
```
*name 是表示属性名称的字符串
*value 是属性的新值

#### Example
```js
let div1 = document.getElementById("div1")
div1.setAttribute("align","center")
```
####备注
当在 HTML 文档中的 HTML 元素上调用 setAttribute() 方法时，该方法会将其属性名称（attribute name）参数小写化。

如果指定的属性已经存在，则其值变为传递的值。如果不存在，则创建指定的属性。

尽管对于不存在的属性，getAttribute() 返回 null，你还是应该使用 removeAttribute() 代替 elt.setAttribute(attr, null) 来删除属性。

### *Element.getAttribute*
>getAttribute() 返回元素上一个指定的属性值。如果指定的属性不存在，则返回  null 或 "" （空字符串）；具体细节，请参阅  [Notes](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute#Notes) 部分。

#### 语法
```js
let attribute = element.getAttribute(attributeName)
```
*attribute 是一个包含 attributeName 属性值的字符串
*attributeName 是你想要获取的属性值的属性名称

####Example
```js
let div1 = document.getElementById("div1")
let align = div1.getAttribute("align")

alert(align)
//shows the value of align for the element with id="div1"
```
```js
<!DOCTYPE html>
<head>
<meta charset=" utf-8">
<meta name="author" content="http://www.softwhy.com/" />
<title>蚂蚁部落</title>
<script type="text/javascript"> 
window.onload=function(){
  var obt=document.getElementById("bt");
  var odiv=document.getElementById("thediv")
  obt.onclick=function(){
    odiv.innerHTML=odiv.getAttribute("title");
  }
}
</script> 
</head>
<body>
<div id="thediv" title="蚂蚁部落"></div>
<input type="button" id="bt" value="查看效果"/> 
</body> 
</html>
```
点击按钮后：
![](https://ws1.sinaimg.cn/large/785070e7ly1g0lbdbhiesj208i02s3yc.jpg)
#### 备注
当在被标记为 HTML 文档中的一个 HTML 元素上调用此方法时，getAttribute() 会先将其参数转换为小写形式。

### *EventTarget.addEventListener()*
>EventTarget.addEventListener() 方法将指定的监听器注册到 [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和 Window 或者任何其他支持事件的对象 (比如 [XMLHttpRequest](https://developer.mozilla.org/zh-cn/DOM/XMLHttpRequest))。

>addEventListener() 的工作原理是将实现 [EventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener) 的函数或对象添加到调用它的 EventTarget上的指定事件类型的事件侦听器列表中。
#### 语法
```js
target.addEventListener(type,listener[,option])
target.addEventListener(type,listener[,useCapture])
```
*type
表示监听[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)的字符串
*listener
当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。有关回调本身的详细信息，请参阅 [The event listener callback](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback)
*options 可选 
一个指定有关 listener 属性的可选参数对象。可用的选项如下：
1.capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
2.once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
3.passive: Boolean，表示 listener 永远不会调用 [preventDefault()](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
*useCapture 可选
Boolean，是指在 DOM 树中，注册了该 listener 的元素，是否会先于它下方的任何事件目标，接收到该事件。沿着 DOM 树向上冒泡的事件不会触发被指定为 use capture（也就是设为 true）的 listener。当一个元素嵌套了另一个元素，两个元素都对同一个事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 

####返回值
>undefined

####用法说明
**事件监听回调**
事件监听器可以被指定为回调函数或实现 EventListener的对象，其 handleEvent() 方法用作回调函数。

回调函数本身具有与 handleEvent() 方法相同的参数和返回值；也就是说，回调接受一个参数：一个基于 Event 的对象，描述已发生的事件，并且它不返回任何内容。

例如，一个可用于处理 fullscreenchange 和 fullscreenerror 的事件处理函数可以像这样：
```js
function eventHandler(event) {
  if(event.type == fullscreenchange) {
    //处理全屏切换
  } else {
    //handle error
  }
}
```
### Example
**添加一个简单的监听器**
下面这个例子用来展示如何使用 addEventListener() 监听鼠标点击一个元素。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table id="outside">
        <tr>
            <td id="t1">one</td>
        </tr>
        <tr>
            <td id="t2">two</td>
        </tr>
    </table>
    <script>
        //改变 t2 的函数
        function modifyText() {
            var t2 = document.getElementById("t2")
            if (t2.firstChild.nodeValue == "three") {
                t2.firstChild.nodeValue = "two"
            } else {
                t2.firstChild.nodeValue = "three"
            }
        }

        // 为 table 添加事件监听器
        var el = document.getElementById("outside")
        el.addEventListener("click", modifyText, false)
    </script>
</body>


</html>
```
点击后
![](https://ws1.sinaimg.cn/large/785070e7ly1g0lwil5z6sj206702ndfm.jpg)

**带有匿名函数的监听器**
现在我们来看看如何使用匿名函数来为事件监听器进行传参。
请注意，侦听器是一个匿名函数，它封装了代码，然后代码可以将参数发送到 modifyText() 函数，该函数负责实际响应事件。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table id="outside">
        <tr>
            <td id="t1">one</td>
        </tr>
        <tr>
            <td id="t2">two</td>
        </tr>
    </table>
    <script>
        //改变 t2 的函数
        function modifyText(new_text) {
            var t2 = document.getElementById("t2")
            t2.firstChild.nodeValue = new_text
        }

        // 为 table 添加事件监听器
        var el = document.getElementById("outside")
        el.addEventListener("click", function(){modifyText("four")}, false)
    </script>
</body>


</html>
```
**带有箭头函数的监听器**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table id="outside">
        <tr>
            <td id="t1">one</td>
        </tr>
        <tr>
            <td id="t2">two</td>
        </tr>
    </table>
    <script>
        //改变 t2 的函数
        function modifyText(new_text) {
            var t2 = document.getElementById("t2")
            t2.firstChild.nodeValue = new_text
        }

        // 为 table 添加事件监听器
        var el = document.getElementById("outside")
        el.addEventListener("click",() => {modifyText("four")}, false)
    </script>
</body>


</html>
```
请注意尽管匿名函数和箭头函数有些类似，但是他们绑定不同的 this 对象。匿名函数（和所有传统的 Javascript 函数）创建他们独有的 this 对象，而箭头函数则继承绑定他所在函数的 this 对象。

这意味着在使用箭头函数时，原函数中可用的变量和常量在事件处理器中同样可用。
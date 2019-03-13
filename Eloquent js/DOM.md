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

  <!-- COMMENT -->

  <button onclick="console.log(&quot;1&quot;)"></button>
  <div class = "foo bar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et nam rem. Blanditiis dolore ea magnam sit,
    voluptatibus cupiditate. Delectus eius deserunt necessitatibus, sed minima officia dolorem possimus earum laborum.</div>

  <script>
    debugger
    console.log(1)
  </script>
  <div>aa</div>
  <p id = "para" class = "foo baz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero itaque voluptate, distinctio cumque
    aperiam ratione? Magni cupiditate, ducimus, sequi molestias perspiciatis porro vel, atque nemo excepturi cum
    voluptatibus maiores.</p>

</body>

</html>
```

```js
document
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0me3niu5zj208r06ct9e.jpg)

```js
document.documentElement
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0me5298i5j20a7052mxp.jpg)
```js
document.documentElement.tagName
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0me77ko92j20fv03kwem.jpg)
```js
document.documentElement.lang
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0me8f85o2j20kf03cjrp.jpg)
```js
document.documentElement.foo
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0me8vwtdaj20jr03274n.jpg)
```js
document.documentElement.getAttribute("foo")
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0meapv3rnj20r702zq3o.jpg)
```js
document.documentElement.children
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mehc2l53j20jy03f74r.jpg)
```js
document.documentElement.children[1].tagName
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0meiydny1j20lq02zdg8.jpg)
```js
document.documentElement.children[1].children
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mekjxrfij20nj02hdgg.jpg)

```js
document.documentElement.children[1].children[0].tagName
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0meohlpvdj20pr023aaj.jpg)
```js
document.documentElement.children[1].children[0].onclick
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0merdguokj20q703qdgg.jpg)
```js
document.head
document.body
typeof document.head
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mesp6pluj20fd09agna.jpg)
```js
document.body.childNodes
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mgip0vdej20k901g747.jpg)
```js
<script>
window.onload = function(){
    var oUl = document.getElementsByTagName('ul')[0];
        alert(oUl.childNodes.length);
    //上面弹出语句的结果为：在IE 6-8 浏览器中是2，但在ie9以上或者其他浏览器，如谷歌，火狐等结果都是5，因为这些浏览器都把ul到li之间的空白节点也算上了，所以结果为5。
}
</script>
<body>
    <ul>
        <li></li>
        <li></li>
    </ul>
</body>
```
>这就是使用 childNodes 带来的问题，当然了，我们可以借助 nodeType 来解决这个问题。通过判断节点的 nodeType 来得到我们想要的结果，( 因为文本节点的 nodeType 值等于 3，而元素节点的 nodeType 值等于 1)，代码如下：
```js
<script>
window.onload = function(){
    var oUl = document.getElementsByTagName('ul')[0];
    for(var i=0;i<oUl.childNodes.length;i++){
        if(oUl.childNodes[i].nodeType == 1){
            oUl.childNodes[i].style.backgroundColor = 'red';
        }
    }
}
</script>
<body>
    <ul>
        <li></li>
        <li></li>
    </ul>
</body>
```
>上面，我们了解到了 childNodes 因为浏览器版本的不同，给我们带来的麻烦。虽然借助 nodeType 可以解决我们的麻烦。但是，有更方便的方法吗？答案是：当然有。它就是 children。**children 和 childNodes 最大的区别是，无论什么浏览器使用，都不会把空白节点算进去**，也不需要 nodeType 来帮助判断，直接使用。当我们要实现上面的效果时，使用 children，不需要借助 nodeType 来做判断，代码如下：
```js
<script>
window.onload = function(){
    var oUl = document.getElementsByTagName('ul')[0];
    for(var i=0;i<oUl.children.length;i++){
        //alert(oUl.children.length) 结果为2；
        oUl.children[i].style.backgroundColor = 'yellow';
    }
}
</script>
<body>
    <ul>
        <li></li>
        <li></li>
    </ul>
</body>
```
**childNodes 包括元素节点和文本节点，而 children 只包括元素节点**
```js
document.body.childNodes[1]
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mgwikwigj2096017jr7.jpg)
```js
document.body.childNodes[1].data
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mgyddd1aj20a401cmwz.jpg)

![](https://ws1.sinaimg.cn/large/785070e7ly1g0mgzhovyij20i90d740v.jpg)
```js
$0.nodeType //=> 1
$1.nodeType //=> 1

$0.nodeType === document.ELEMENT_NODE // =>true     //1
$0.nodeType === document.TEXT_NODE // => true    //3
$0.nodeType === document.COMMENT_NODE // =>true     //8
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mha8a0q0j20ik0g70vp.jpg)
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mhbbgptjj20ef025aaa.jpg)
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mhcmu37rj20nc08m0uo.jpg)
```js
$0.childNodes[0].nodeValue
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mhg8n44kj208502kdfo.jpg)
```js
document.TEXT_NODE   //=>3
document.TEXT_NODE = 8  
document.TEXT_NODE   //=>3   定义为常量
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mhjnjo6vj20er06edgo.jpg)
```js
document.body.childNodes  // NodeList
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mht2yfeej20ki016wee.jpg)
```js
Array.from(document.body.childNodes)
Array.apply(null,document.body.childNodes)
[].slice.call(document.body.childNodes)
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mhyvux7qj20kx06fmxs.jpg)
```js
  // 多态
  // 只要是类数组就行，有 length 和 index 属性
  function slice(aryLike, start = 0, end = ary.length) {  //
    var result = []
    for (var i = start; i < end; i++) {
      result.push(aryLike[i])
    }
    return result
  }
```
```js
a = document.createElement("a",{href:"baidu.com"})
// => <a></a>
//  只接收第一个参数
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mivqiz8gj20p3027q3e.jpg)
```js
// 用 setAttribute 来设置属性
a.setAttribute("href","baidu.com")
// a => <a href = "baidu.com"></a>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mix63xdnj20jc04njs8.jpg)

![](https://ws1.sinaimg.cn/large/785070e7ly1g0mit6sl3tj20p206lq4j.jpg)
```js
span = document.createElement("span")
// => <span></span>
a.appendChild(span)
// => <span></span>
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0mj5j45a1j20e704374o.jpg)

DOM 节点包含了许多指向相邻节点的链接，如下图所示：
![](https://ws1.sinaimg.cn/large/785070e7ly1g0ugw5aeq1j20j30gkacu.jpg)


```js
$0.parentElement == $0.parentNode
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0nexnqql7j20iz0flwhv.jpg)
```js
$0.parentNode.parentElement
```
```js
$0.parentNode.parentElement.firstChild
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0nf1zka6uj20l20iqwiw.jpg)
```js
// 选中的是 div 标签
$0.parentNode.parentElement.childNodes
$0.parentNode.parentElement.firstChild.firstChild
$0.parentNode.parentElement.firstChildNodes[1]
$0.parentNode.parentElement.firstChild.childNodes[1].getAttribute("charset")
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0nfa1t5cwj20yg0addjb.jpg)
```js
//选中的是 div 标签
$0.previousSibling
$0.previousElementSibling
$0.nextSibling
$0.nextElementSibling
//若指向没有节点 则是 null
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0nflx6bdtj20oa0f9gp1.jpg)
![](https://ws1.sinaimg.cn/large/785070e7ly1g0nfmxegtij20ie0gd77f.jpg)

递归函数非常适合用于处理这类嵌套数据结构。下面的递归函数会扫描一个文档，搜索白喊特定字符串的文本节点，并在找到一个节点是但会 true。
```js
function talkAbout(node,string){
  if(node.nodeType == document.ELEMENT_NODE){
    for(var i = 0;i < node.childNodes.length; i++){
      if(talkAbout(node.childNodes[i],string)){
        return true
      }
    }
    return false
  } else if (node.nodeType == document.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1
    // nodeValue 属性指向该节点表示的文本字符串
  }
}

console.log(talkAbout(document.body,"book"))
// => true
```

```js
document.getElementByTagName("div")
document.getElementByTagName("p")
document.getElementByTagName("p")[0]
document.getElementByTagName("0").textContent
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0ujalqr11j20h70463za.jpg)
![](https://ws1.sinaimg.cn/large/785070e7ly1g0ujbc0bvij20rn05tn0k.jpg)

```js
document.getElementById("para")
// 只在 document 上有，body 上没有
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0ujfps8w0j20g502it92.jpg)


```js
document.getElementsByClassName("foo")
```
![](https://ws1.sinaimg.cn/large/785070e7ly1g0ujhw2hwtj20u1068jt2.jpg)

```js
// 实现
function getElementByTagName(node,tagName){
  var result = []
  tagName = tagName.toUpperCase()
  traverse(node,n =>{
    if(n.tagName == tagName) {
      result.push(n)
    }
  })
  return result
}

// 不带根节点的多叉树遍历
function traverse(node,action) {
  if(node.nodeType == document.Element_NODE) {
    for( var i = 0; i < node.children.length; i++){
      action(node.children[i])
      traverse(node.children[i])
    }
  }
}

// 带根节点的多叉树遍历
function traverse(node,action) {
  if(node.nodeType == document.Element_NODE) {
    action(node)
    for( var i = 0; i < node.children.length; i++){
      traverse(node.children[i]，action)
    }
  }
}


// 二叉树
function traverse(root,action) {
  if(root) {
    action (root.left)
    traverse(root.left,action)
    action(root.right)
    traverse(root.right,action)
  }
}
//简单实现
function cloneNode(node) {
  if (node.nodeType == document.ELEMENT_NODE) { //常规元素
    var ret = document.createElement(node.tagName)
    for (var i = 0; i < node.childNodes.length; i++) {
      ret.appendChild(cloneNode(node.childNodes[i]))
    }
    return result
  } else if (node.nodeType == document.TEXT_NODE) { //文本节点
    return document.createTextNode(node.nodeValue)
  } else if (node.nodeType == document.COMMENT_NODE) { //注释
    return document.createComment(node.data)
  }
}

//document.body.cloneNode()  完全复制



function getOuterHTML(node) {
  if (node.nodeType == document.ELEMENT_NODE) {
    var tag = node.nodeName.toLowerCase()
    return `<${tag}
    ${Array.from(node.childNodes).map(getOuterHTML.join(''))}
    </${tag}>`
  }
}




node.style.backgroundColor = "red"
node.classList.add / remove / toggle / contains
node.data.foo = 'foo' // get data-set attribute and so on

//下两个不受css影响
innerHTML
getOuterHTML
//下两个受css影响 
innerTEXT
outerTEXT

textContext


function elt(nodeName, attrs, ...children) {
  var node = document.createElement(nodeName)
  attrs = attrs || {}
  for (var key in attrs) {
    var val = attrs[key]
    node.setAttribute(key, val)
  }
  for (var child of children) {
    if (typeof child == 'string') {
      node.appendChild(document.createTextNode(child))
    } else {
      node.appendChild(child)
    }
  }
  return node
}



//  书上 p172 elt 的 的另一个形式
function dom(ary, ...inters) {
  var htmlCode = ary.join('')
  var div = document.createElement('div')
  div.innerHTML = htmlCode // 取巧，利用浏览器
  return div.firstElementChild
}

/*
dom`
str
`
*/

/**
 * 返回node是否匹配selector这个选择器
 * selector中不包含逗号，即为一个单一的选择器
 * @param  {[type]}  node     [description]
 * @param  {[type]}  selector [description]
 * @return {Boolean}          [description]
 */
function isMatchSelector(node, selector) {
  var levels = selector.split(' ')
  var l = levels.length - 1

  if (isMatchComboSelector(node, levels[l])) {
    l--

    while (node.parentNode) {
      node = node.parentNode
      if (isMatchComboSelector(node, levels[l])) {
        l--
      }
      if (l == -1) {
        return true
      }
    }
  } else {
    return false
  }
}

// selector不包含空格
// p.foo.bar#baz[title='foo:b a r']:hover:nth-child(odd)
function isMatchComboSelector(node, selector) {
  var conditions = selector.split(/(?=[.#[:])/)
  return conditions.every(cond => isMatchSingleSelector(node, cond))
}


//selector是任意一种最简单的不可拆分的选择器如：
//p
//.foo
//#bar
//[attr=val]
function isMatchSingleSelector(node, selector) {
  var c = selector[0]
  if (c == '.') {
    return isMatchSingleClassSelector(node, selector)
  } else if (c == '#') {
    return isMatchSingleIdSelector(node, selector)
  } else if (c == '[') {
    return isMatchSingleAttrSelector(node, selector)
  } else if (c == ':') {
    return isMatchSinglePseudoClassSelector(node, selector)
  } else if (c == '*') {
    return true
  } else {
    return isMatchSingleElementSelector(node, selector)
  }
}

function isMatchSingleClassSelector(node, classSelector) {
  return node.classList.has(classSelector.slice(1))
}

function isMatchSingleIdSelector(node, selector) {
  return node.id == selector.slice(1)
}

isMatchSelector(node, 'div span a')

function sleep(duration) {
  var start = Date.now()
  while (Date.now() - start < duration) {

  }
}



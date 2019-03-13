var isValid = function (s) {
  if (s.length == 0) {
    return true
  }
  if (s.length % 2 !== 0) {
    return false
  }
  let stack = []
  let size = []
  let len = 0
  for (let i = 0; i < s.length; i++) {
    size.push(s.charAt(i))
  }
  for (let i = 0; i < s.length; i++) {
    if (size[i] == "(") {
      stack[len] = "("
      len++
    } else if (size[i] == "[") {
      stack[len] = "["
      len++
    } else if (size[i] == "{") {
      stack[len] = "{"
      len++
    } else if (size[i] == ")") {
      if (stack[len - 1] == "(") {
        stack.pop()
        len--
      }
    } else if (size[i] == "]") {
      if (stack[len - 1] == "[") {
        stack.pop()
        len--
      }
    } else if (size[i] == "}") {
      if (stack[len - 1] == "{") {
        stack.pop()
        len--
      }
    }
  }
  if (!stack || len != 0) {
    return false
  }
  return true
}

var isValid = function (s) {
  let left = 0
  for (let i = 0; i < s.length; i++) {
    if ("(") {
      left++
    } else if (")") {
      left--
    }
  }
};

"()[]{}"

var isValid = function (s) {
  let stack = []
  let size = []
  if (s.length % 2 !== 0) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    size.push(s.charAt(i))
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      size.pop()
      stack.push(")")
    } else if (s.charAt(i) == "{") {
      size.pop()
      stack.push("}")
    } else if (s.charAt(i) == "[") {
      size.pop()
      stack.push("]")
    } else if ()
  }

  return true
};




var isValid = function (s) {
  let size = []
  let save = []
  if (s.length == 0) {
    return true
  }
  for (let i = 0; i < s.length; i++) {
    size.push(s.charAt(i))
  }
  if (size.length % 2 !== 0) {
    return false
  }
  for (let i = 0; i < size.length; i++) {
    if (size[i] == '(') {
      save.push(')');
    } else if (size[i] == '[') {
      save.push(']');
    } else if (size[i] == '{') {
      save.push('}');
    } else if (!save || size[i] != save.pop()) { // array.pop 删除操作，返回原数组尾部的值
      return false;
    }
  }
  return true
}



var isValid = function (s) {
  let size = []
  let save = []
  if (s.length == 0) {
    return true
  }
  for (let i = 0; i < s.length; i++) {
    size.push(s.charAt(i))
  }
  for (let i = 0; i <= size.length; i++) {
    if (size[i] == '(') {
      save.push(')');
    } else if (size[i] == '[') {
      save.push(']');
    } else if (size[i] == '{') {
      save.push('}');
    } else if (size[i] !== save.pop()) { // array.pop 删除操作，返回原数组尾部的值
      save.pop()
      return false;
    }
  }
  if (save == []) {
    return true
  } else {
    return false
  }

}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let len = 0; //  尽量把变量命名为let
  let arr = s.split(''); //  这样写读取比在string里读快

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    switch (str) {
      case '(':
        stack[len] = str;
        len++;
        break;
      case '[':
        stack[len] = str;
        len++;
        break;
      case '{':
        stack[len] = str;
        len++;
        break;
      case ')':
        if (stack[len - 1] == '(')
          len--;
        else
          return false;
        break;
      case ']':
        if (stack[len - 1] == '[')
          len--;
        else
          return false;
        break;
      case '}':
        if (stack[len - 1] == '{')
          len--;
        else
          return false;
        break;
    }
  }

  if (len == 0)
    return true;
  else
    return false;
};
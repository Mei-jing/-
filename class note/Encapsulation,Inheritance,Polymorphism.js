//封装
personProto = {}
Object.setPrototypeOf(xiaoming, personProto)
//构造函数
function Person(name, age) {
  this.name = name
  this.age = age
}

xiaoming = new Person("xioaming", 10)
Person.prototype.grow = function () {
  this.age++
}
xiaoming.grow
// => age +1
xiaohua.grow

//继承
function Male(name, age) {
  person.call(this, name, age)
  this.gender = "m"
}
xiaomin = new Male('xiaomion', 10)
// => Male{name:"xioaming",age:10,gender:"m"}

Male.prototype.__proto__ = Person.prototype
xiaomin.grow
//=> age +1.
Male.prototype.grow


/*
类型判断
1.type of
2.instanceof
3.Object.prototype.toString.call
*/

//前三种
RTextCell.prototype.__proto__ = TextCell.prototype
Object.setPrototypeOf(RTextCell.prototype, TextCell.prototype)
RTextCell.prototype = Object.create(TextCell.prototype)

RTextCell.prototype = new TextCell()



function INSTANCEOF(obj, C) {
  if (!obj) {
    return false
  }
  if (obj.constructor === C) {
    return true
  } else {
    return INSTANCEOF(obj.__proto__, C)
  }
}

function INSTANCEOF(obj, C) {
  if (!obj) {
    return false
  }
  if (obj.__proto__ === C.prototype) {
    return true
  } else {
    return INSTANCEOF(obj.__proto__, C)
  }
}

var a = NEW(C, a, b, c)
var a = new C(a, b, c)

function NEW(C, ...args) {
  var obj = Object.create(C.prototype)
  var ret = C.call(obj, ...args)
  if (ret && typeof ret == 'object') {
    return ret
  } else {
    return obj
  }
}

var MySet = (function () {
  function MySet(init = []) {
    if (new.target !== MySet) {
      return new MySet(init)
    }
    if (!(this instanceof MySet)) {
      return new MySet(init)
    }
    this.values = []
    for (var val of init) {
      this.add(val)
    }
  }

  function findIndex(val) {
    if (val != val) {
      for (var i = 0; i < this.values.length; i++) {
        if (this.values[i] != this.values[i]) {
          return i
        }
      }
      return -1
    } else {
      return this.values.indexOf(val)
    }
  }

  MySet.prototype = {
    add: function (val) {
      if (!this.has(val)) {
        this.values.push(val)
      }
      return this
    },
    delete: function (val) {
      var pos = findIndex.call(this, val)
      if (pos >= 0) {
        this.values.splice(pos, 1)
      }
      return this
    },
    has: function (val) {
      return findIndex.call(this, val) >= 0
    },
    clear: function () {
      this.values.length = 0
      return this
    },
    forEach: function (iterator) {
      this.values.forEach((val) => {
        iterator(val, val, this)
      })
      return this
    },
    get size() {
      return this.values.length
    }
  }
  return MySet
}())
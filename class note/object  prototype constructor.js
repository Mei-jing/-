//一月21
//将this设定为传入的对象
//传入的数组则作为第一个参数
say.apply({
	name: 'damiao'
}, [1, 2, 3])

//将this设定为传入的对象
//传入的1作为第一个参数，2作为第二个参数
say.bind({
	name: 'damiao'
}, 1, 2)


// 箭头函数与function函数不同
// 全局的 this 是window
// 箭头函数不能被绑定，没有this方法
rabbit = {
	name: 'damiao',
	speak: () => {
		console.log(this.name)
	}
}


//原型链
//获取对象原型 "prototype"
({}).__proto__
	({}).__proto__.__proto__ //null

empty = {}
empty.__proto__ = {
	valueOf: function () {
		return 8
	}
}
empty.valueOf() //8
empty + 2 //10
empty + 'fjsl' //'8fjsl'
//类似原型继承，自己没有，从父原型中查找

//__proto原型
//.prototype原型对象
2.__proto__ === Number.prototype
true.__proto__ === Boolean.prototype 
'1'.__proto__ === String.prototype
obj.__proto__ === Object.prototype //true
//普通对象的原型就是Object.prototype
String.prototype.__proto__ === Object.prototype //true
Array.prototype.__proto__ === Object.prototype //true

Object.setPrototypeOf(obj, {
	x: 2,
	y: 3
})
Object.setPrototypeOf(obj, {
	x: 2,
	y: 3,
	z: function () {
		return this.x
	}
})
obj.z() //2  此时obj访问的是obj的原型

//创建了一个以{a:1,b:2}为原型的新对象并返回该对象
obj3 = Object.create({
	a: 1,
	b: 2
})
//--------------------------------------------
//-----------------分界线----------------------
//--------------------------------------------
var ary = [1, 2, 3, 4, 5]
ary.slice2 = function (start = 0, end = this.length) {
	let result = []
	for (let i = start; i < end; i++) {
		result.push(this[i])
	}
	return result
}

14: 45

function bind(f, thisArg, ...fixedArgs) {
	return function (...args) {
		return f.call(thisArg, ...fixedArgs, ...args)
	}
}

slice3 = bind(slice2, [1, 2, 3, 4, 5, 6])
slice3(2, 4) //[3,4]
//绑定好的this无法改变，所以传入的[9,8,7,6,5,4,3,2,1]无效
slice3.call([9, 8, 7, 6, 5, 4, 3, 2, 1], 3, 6) //[4,5,6]

//从一个对象上找一个属性的功能
function getPropOf(obj, prop) {

}

15: 13

function f() {
	this.a = 8 //this -> window
	this.b = 9
}
f() //undefined
window.a // 8
var x = new f() //x是f()的一个实例
x // f{a:8,b:9} 	返回的是一个对象

function f() {
	this.a = 8
	this.b = 9
	return [1, 2, 3]
}
y = new f() //[1,2,3]  y是f()的一个实例

//构造函数在创建时，首字母大写，区分于其他函数
//是用new来调用的



//一月22
//先写好原型，再构造实例

a = {}
Object.defineProperty(a, baz, {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 999,
})
// => a {baz:999}

Object.prototype.hasOwnProperty.call(a, "hasOwnProperty")

function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

var hasOwn = Object.prototype.hasOwnProperty
for (var prop in a) {
  if (hasOwn.call(a, prop)) {
    console.log(prop)
  }
}

var hasOwn = Object.prototype.hasOwnProperty
for (var prop in a) {
  if (hasOwn.call(a, prop)) {
    console.log(prop)
  }
}

function forOwn(a, prop, iterator) {
  var hasOwn = Object.prototype.hasOwnProperty
  for (var prop in a) {
    if (hasOwn.call(a, prop)) {
      iterator(a[prop], prop, a) // 属性值，属性名，对象
    }
  }
}


Object.create(null)
Object.setPrototypeOf(obj, null)
obj.__proto__ = null

// 返回一个以 proto 为原型的对象
function creat(proto) {
  function Object() {}
  Object.prototype = proto
  return new Object()
}

if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

    function F() {}
    F.prototype = proto;

    return new F();
  };
}

function assign(target, ...sources) {
  for (let source of sources) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = sources[key]
      }
    }
  }
  return target
}


/*  
 面向对象
 1.封装（Encapsulation）
 一种把数据和相关的方法绑定在一起使用的方法
 2.继承（Inheritance）
 一个类可以继承另一个类的特征
 3.多态（Polymorphism）
 不同的类可以定义相同的方法和属性。“多”意许多，“态”意形态
 4.抽象（Abstraction）
 */
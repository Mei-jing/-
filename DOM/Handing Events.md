## 脚本执行时间线  

补充1：CSS3的2D，3D变幻是可以在页面卡住的时候继续运行的，因为2D3D变幻是在另一个线程里执行的

补充2：进程与线程的区别：  
不同进程之间不能共享内存。
同一个进程的多个线程是可以共享这个进程的内存的。CPU 的时间片轮转是以线程为基本单位的  

worker 之间不能共享数据，只能通过时间与 postMsg 来发送消息，所发送的消息是复制以后发过去的，所以修改接收到手的消息不会改变源消息。  
worker 内不能访问 dom ，以及任何与 UI 相关的接口。  

## setTimeout  


## debounce

```javascript
el.addEventListener('mousemove', _.debounce(f, 500))
el.addEventListener('mousemove', _.throttle(f, 500))

function debounce(f, duration) {
  var id
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(f.bind(this, ...args), duration)
  }
}

function throttle(f, duration) {
  var lastTime = 0
  return function () {
    var now = Date.now()
    if (now - lastTime > duration) {
      lastTime = now
      f.call(this, ...args)
    }
  }
}

```

```
补充：移动端事件，触摸事件
touch start/move/end
需要注意的是 touch 事件是支持多点触摸的，可以通过 event.touches 得到所有的点，另外 touchend 事件对象的 touches 属性上是没有点的，如果非要读的话，可以从最后一次的 touchmove 事件上读取

原生只有这三个事件，更复杂的手势检测其实是更复杂的，所有以下两个库
hammer.js  
zepto.js
```

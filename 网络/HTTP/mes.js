const net = require("net")
const port = 8000

// 保留用户每一次发过来的请求
const msgs = [];

[{
  name: "damiao",
  content: "hello"
}, {
  name: "xiaomao",
  content: "world"
}]

const server = net.createServer(conn => {
  conn.on('data', d => {
    var d = d.toString()
    // console.log(d)
    var lines = d.split('\r\n')
    var firstLines = lines.shift()

    var [method, url] = firstLines.split(" ")

    if (method == "GET") {}

    if (method == "POST") {
      var query = parseQueryString(lines.pop())   // parseQueryString的实现见下方    node 自带的解析见下方
      // console.log(lastLine)
      query.timestamp = Date.now()
      msgs.push(query)
    }
    conn.write("HTTP/1.1 200 OK\r\n")
    conn.write("Content-Type: text/html\r\n")
    conn.write("\r\n")
    conn.write(`
    <form action="/" method="POST">
      <input type="text" name="name" />
      <textarea name="content"></textarea>
      <button>Submit</button>
    </form>
    `)
    conn.write(`
      ${
        msgs.slice().reverse().map(msg => `
          <li>
            <h3>${msg.name} <small>${new Date(msg.timestamp).toLocaleTimeString()}</small></h3>
            <p>${msg.content}</p>
          </li>
        `).join("")
      }
    </ul>
    `)
    conn.end()
  })
})

server.listen(port, () => {
  console.log('server listening on port', port)
})


// name=mao&msg=hello 解析
function parseQueryString(str) {
  return str.split("&")
    .map(it => it.split("="))
    .reduce((result, pair) => {
      var key = pair[0]
      var val = decodeURIComponent(pair[1])
      result[key] = val
      return result
    }, {})
}

// node 自带一个解析
//   const querystring = require('querystring')
//   var query = querystring.parse(lines.pop())
var _ = require2('lodash.js')

console.log(_)

var names = ['Sunday', 'Monday', 'Saturday']
exports.weekDay = {
  number: function(name) {
    return names.indexOf(name)
  },
  name: function(number) {
    return names[number]
  }
}


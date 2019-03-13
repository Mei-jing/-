function every(ary, test) {
  for (var i = 0; i < ary.length; i++) {
    if (!test(ary[i], i, ary)) {
      return false
    }
  }
  return true
}




  function some(ary, test) {
    for (var i = 0; i < ary.length; i++) {
      if (test(ary[i], i, ary)) {
        return true
      }
    }
    return false
  }



  function groupBy(ary, f) {
    let result = {}
    for (let i = 0; i < ary.length; i++) {
      let key = f(ary[i], i, ary)
      if (key in result) {
        result[key].push(ary[i])
      } else {
        result[key] = [aru[i]]
      }
    }
  }

  {
    key: [obj1, obj2, obj3]
    key2: [obj5, obj8, obj9]
  }


  //  mapValues({
  //      a: 1,
  //      b: 2,
  //      c: 3
  //    }, it => it * it)

  //    -> {
  //      a: 1,
  //      b: 4,
  //      c: 9
  //    }


  //groupBy 函数
  function groupBy(ary, predicate) {
    var result = {}
    for (var i = 0; i < ary.length; i++) {
      var key = predicate(ary[i], i, ary)
      if (key in result) {
        result[key].push(ary[i])
      } else {
        result[key] = [ary[i]]
      }
    }
    return result
  }

  // mapValue 函数
  function mapValues(obj, mapper) {
    var result = {}
    for (var key in obj) {
      var val = obj[key]
      result[key] = mapper(val)
    }
    return result
  }

  function avgLifeTimes(persons) {
    return persons.map(it => it.died - it.born)
      .reduce((a, b) => a + b) / persons.length
  }



  var grouped = groupBy(ancestry, p => Math.ceil(p.died / 100))

  mapValues(grouped, avgLifeTimes)

  function keyBy(ary, keyName) {
    var result = {}
    for (var item of ary) {
      result[item[keyName]] = item
    }
    return result
  }
  
  function keyBy(ary, prop) {
    return ary.reduce((result, item) => {
      result[item[prop]] = item
      return result
    }, {})
  }
  
  function dnaShare(name) {
    if (name === targetName) {
      return 1
    }
    if (!people) {
      return 0
    }
    var people = byName[name]
    var a = dnaShare(people.father)
    var b = dnaShare(people.mother)
    return (a + b) / 2
  }
  
  
  function restruct(people) {
    if (!people) {
      return null
    }
    var father = byName[people.father]
    var mother = byName[people.mother]
    people.father = restruct(father)
    people.mother = restruct(mother)
    return people
  
  }
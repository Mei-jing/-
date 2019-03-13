function maxSubArry(ary) {
  let max = 0
  let sum = 0
  for (let start = 0; start < ary.length; start++) {
    let sum = 0
    for (let end = start; end < ary.length; end++) {
      sum += ary[j]
      if (sum > max) {
        max = sum
      }
    }
  }
}
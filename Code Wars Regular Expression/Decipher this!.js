/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples:
decipherThis('72olle 103doo 100ya') // 'Hello good day'
decipherThis('82yade 115te 103o')   // 'Ready set go'
*/

function decipherThis(str) {
  //have fun!
  return str.replace(/\b(\d*)(\w?)(\w*?)(\w?)\b/g, function (match, code, first, middle, last) {
    if (match == '') return ''
    else return String.fromCharCode(+code) + last + middle + first
  })
};

function decipherThis(str) {
  return str.replace(/\d+/g, (digit) => String.fromCodePoint(digit))
    .replace(/(\w)(\w)(\w+)?(\w)/g, '$1$4$3$2');
};

function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
      .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
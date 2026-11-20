let names= ["ABC","XYZ","MNp","pqr","page"]
console.log(names)
names.forEach(n=>console.log(n))
let unames=names.map(n=>n.toLowerCase())
console.log(unames)

let fnames=names.filter(n=>n.startsWith("p"))
console.log(fnames)

let ele=names.find(n=>n.length>4)
console.log(ele)

let elei=names.findIndex(n=>n.length>4)
console.log(elei)

names.sort()
console.log(names)
names.reverse()
console.log(names)
console.log(names.length)
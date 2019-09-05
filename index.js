// 070102
const items = require("./data.js")
const calculations = require("./calc.js")

items.forEach(item => console.log(item))

// 070104
console.log(calculations.add(items.map(item => item.price)))
console.log(calculations.subtract(items.map(item => item.price)))


const myVal=process.argv
let myArr=[]
let mealCost = myArr.push(Number(myVal[2]))
let tipPercent=myArr.push(Number(myVal[3]))
let tipAmount=myVal[3]/100*myVal[2]
const totalOwing=(tipAmount+Number(myVal[2]))
const output=`your meal was $${Number(myVal[2])}+ a ${Number(myVal[3])}% tipAmount=${totalOwing}`
console.log(output)
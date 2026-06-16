const arrOfNum = [1,3,4,5,6,7,[8,[[6],5],3],2,4,5,6]
arrOfNum[0] = 100

// document.write(arrOfNum)

console.log("🚀 ~ arrOfNum:", arrOfNum.length)
console.log("🚀 ~ arrOfNum:", arrOfNum.toString())
console.log("🚀 ~ arrOfNum:", arrOfNum.at(4))
console.log("🚀 ~ arrOfNum:", arrOfNum.join(' | '))
// console.log("🚀 ~ arrOfNum:", arrOfNum.pop())
// console.log("🚀 ~ arrOfNum:", arrOfNum.push(10))
// console.log("🚀 ~ arrOfNum:", arrOfNum.shift())
// console.log("🚀 ~ arrOfNum:", arrOfNum.unshift(4))
// delete arrOfNum[2]
console.log("🚀 ~ arrOfNum:", arrOfNum.concat(arrOfNum, [34, 44], [44], []))
// console.log("🚀 ~ arrOfNum:", arrOfNum.copyWithin(4, 0, 3))
console.log("🚀 ~ arrOfNum:", arrOfNum.flat(3))
console.log("🚀 ~ arrOfNum:", arrOfNum.slice(3, 6))
console.log("🚀 ~ arrOfNum:", arrOfNum.splice(3, 1, 111, 44))
console.log("🚀 ~ arrOfNum:", arrOfNum.toSpliced(3, 1, 111, 44))


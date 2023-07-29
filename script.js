let numArray = [12, 5, 7, 14,8, 40, 6]
let randArray = ["well", 1, "tall", 8, "jam"]
let redArray = numArray.reduce((u,t,z,b)=> (t*z) + u + b.length) 
 console.log(redArray)
 console.log(numArray.filter((p)=> p%2==1));
//  console.log(randArray.join("mumu"))
//  console.log(randArray.unshift('stanley'))
//  console.log(randArray.pop())
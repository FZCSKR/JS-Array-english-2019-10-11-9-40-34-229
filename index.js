// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a 不是数组
//b 是数组 
// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

for (let i = 0; i < a.length; i++){
      a[i]=a[i]*2
}
console.log(a)
// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

console.log(colors.join("+"))
console.log(colors.join())
// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

a.sort(function(b, c){return c - b});
console.log(a)

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    if (!arr.length) return
    if (arr.length === 1) return 1
    let res = {}
    let maxName, maxNum = 0
    // 遍历数组
    arr.forEach((item) => {
      res[item] ? res[item] += 1 : res[item] = 1
    })
    // 遍历 res
    for (let r in res) {
      if (res[r] > maxNum) {
        maxNum = res[r]
        maxName = r
      }
    }
    return  maxName ;
  }
  console.log(findMost(a))

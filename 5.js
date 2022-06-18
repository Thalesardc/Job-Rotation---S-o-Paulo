const string = 'abcdef'
const newArray = []

const array = string.split("")
console.log(array)

for(let i = 0; i < string.length; i++) {
    newArray[i] = array[string.length -1 - i]  
}

console.log(newArray)


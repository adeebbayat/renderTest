
const array = [0]

const memoryLeak = () => {
  array.push(...array)
  console.log(array)
}

setInterval(memoryLeak,100)
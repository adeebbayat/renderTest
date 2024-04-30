// iterate from 1 to 100
for (let i = 1; i < 101; i++){
  // if divisible by 3, print 'fizz'
  // if divisible by 5, print 'buzz'
  // if divisible by 3 and 5, print 'fizzbuzz'
  switch (true){
    case (i % 15 === 0):
      console.log('fizzbuzz')
      break
    case (i % 3 === 0):
      console.log('fizz')
      break
    case (i % 5 === 0):
      console.log('buzz')
      break
    default:
      console.log(i)
  }

}
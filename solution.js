const fs = require('fs')

const uneatenFoodCount = (queue, foodItems) => {
  const favouriteFood = {
    Alice: 'Curry',
    Brian: 'Dumpling',
    Clara: 'Burrito',
    David: 'Hummus'
  }

  let count = 0;

  for(const person of queue) {
    if (count >= foodItems.length) {
      break;
    }

    if(foodItems[count] === favouriteFood[person]) {
      count++
    }
  }

  const uneatenFoodCount = foodItems.length - count
  return uneatenFoodCount;
}

const input  = fs.readFileSync('input.csv', 'utf8')

// const queue = ['Alice', 'Brian', 'Clara', 'Alice', 'Alice', 'Clara', 'Brian', 'David', 'Brian']
// const foodItems = ['Burrito', 'Curry', 'Dumpling', 'Curry', 'Hummus']

const lines = input.split('\n')
const queue = lines[0].split(',')
const foodItems = lines[1].split(',')

const result = uneatenFoodCount(queue, foodItems)

console.log(result)
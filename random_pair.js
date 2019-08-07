let fellows = [
  "Michael",
  "Sihame",
  "Amine",
  "Voniel",
  "Hupaul",
  "Elisandra",
  "Sergio",
  "Shayna",
  "Johanne",
  "Jonathan",
  "Peter",
  "Dantae",
  "Deja",
  "Aransa",
  "Suzette",
  "Owen",
  "Sharrar",
  "Douglas",
  "Savita",
  "Briahana",
  "Kameron",
  "Karen",
  "Jenesh",
  "Chukwuka",
  "Joseph",
  "Kathy",
  "Ohidur",
  "Stephanie",
  "Ariel",
  "Giselle",
  "Briany",
  "Malik",
  "Kadijah"
]

let result = []

const getRandomArr = (arr) => {
  while(arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * Math.floor(arr.length))
    result.push(arr.splice(randomIndex, 1)[0])
    getRandomArr(arr)
  }
}

const getRandomPairs = (arr) => {
  let randomizedResult = []
  getRandomArr(arr)
  for(let i = 0; i < result.length; i+=2) {
    randomizedResult.push([result[i], result[i + 1]])
  }
  return randomizedResult
}

console.log(getRandomPairs(fellows))

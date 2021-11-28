const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


 

const titleCased = (input) => {
  return tutorials.map(sentence  => {
    const wordsArray = sentence.split(" ") 
    const capitalizedArray = wordsArray.map(word => word[0].toUpperCase() + word.slice(1))
    const finalOutput = capitalizedArray.join(" ")
    console.log(finalOutput)
    return finalOutput
  })
}
titleCased(tutorials)
























let words = ["hello", "world"];
console.log(words.length)

function getWordLengths(word) {
  // Start coding here
    return word.map(word => word.length)
  
}

let result = getWordLengths(words);

console.log(result); // Output: [5, 5]

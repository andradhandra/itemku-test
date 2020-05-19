function solution(relation) {
  let answer = 0;
  if (relation.length > 20) return "Error: database tuple exceed limit"

  let attributeLimit = false
  


  return answer;
}

// Input and output examples
// relation: 
// [
//     [“100”,”ryan”,”music”,”2”],
//     [“200”,”apeach”,”math”,”2”],
//     [“300”,”tube”,”computer”,”3”],
//     [“400”,”con”,”computer”,”4”],
//     [“500”,”muzi”,”music”,”3”],
//     [“600”,”apeach”,”music”,”2”]
// ]
console.log(solution([
  ["100","ryan”,”music”,”2"],
  ["200”,”apeach”,”math”,”2"],
  ["300”,”tube”,”computer”,”3"],
  ["400”,”con”,”computer”,”4"],
  ["500”,”muzi”,”music”,”3"],
  ["600”,”apeach”,”music”,”2"]
]))

// answer: 2
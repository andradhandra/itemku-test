function solution(relation) {
  let answer = 0;
  if (relation.length > 20) return "Error: relation tuple exceed limit";
  if (relation.filter((coloumn) => coloumn.length > 8).length > 0)
    return "Error: relation attribute exceed limit";

  for (let i = 0; i < relation[0].length; i++) {
    let arr = [];

    for (let j = 0; j < relation.length; j++) {
      let str = "";
      str += relation[j][i];
      arr.push(str);
    }

    let arr2 = [...arr];
    for (let k = i; k < relation[0].length; k++) {
      arr2 = [...arr];
      for (let j = 0; j < arr2.length; j++) {
        if (!relation[j][k] || k === i) break;
        arr2[j] += relation[j][k];
      }

      let unique = [...new Set(arr2)];
      if (arr.length === unique.length) {
        console.log(unique, "unique");
        answer += 1;
        break;
      }
    }
  }
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
console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);

// answer: 2

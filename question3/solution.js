function solution(relation) {
  let answer = 0;
  if (relation.length > 20) return "Error: relation tuple exceed limit";
  if (relation.filter((coloumn) => coloumn.length > 8).length > 0)
    return "Error: relation attribute exceed limit";

  // let col = 0
  // while (col < relation[0].length) {
  //   let arr = []
  //   relation.forEach(row => {
  //     arr.push(row[col])
  //   })
  //   let unique = [ ...new Set(arr)]
  //   if (arr.length === unique.length) answer += 1
  //   col += 1
  // }

  // for (let i=0; i<relation[i].length; i++) {
  //   for (let j=i+1; j<relation[i].length; j++) {
  //     let arr = []
  //     for (let row=0; row<relation.length; row++) {
  //       // console.log([relation[row][i], relation[row][j]], 'test')
  //         arr.push(relation[row][i] + " " + relation[row][j])
  //     }
  //     let unique = [...new Set(arr)]
  //     console.log(arr, 'ini arr')
  //     console.log(unique, 'ini unique')
  //     if (arr.length === unique.length) answer += 1
  //   }
  // }

  for (let i=1; i<=relation[0].length-1; i++) {
    console.log(i, "ini jumlah kolom yg diperiksa====================================")
    for (let j=0; j<relation[0].length; j++) {
      let arr = []
      let arr2 = []
      for (let k=0; k<relation.length; k++) {
        if (i < 2) {
          for (let l=0; l<i; l++) {
            arr2.push(relation[k][j+l])
          }
        } else {
          for (let l=0; l<=relation[0].length-i; l++) {
            
          }
        }

        if (arr2.length >= i) arr.push(arr2)
        arr2 = []
      }

      if (arr.length) {
        let unique = [...new Set(arr)]
        if (arr.length === unique.length) {
          answer += 1
        }
        console.log(arr, 'arr')
        console.log(unique, 'unique')
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
    ["200", "apeach","math","2"],
    ["300", "tube","computer","3"],
    ["400", "con","computer","4"],
    ["500", "muzi","music","3"],
    ["600", "apeach","music","2"],
  ])
);

// answer: 2

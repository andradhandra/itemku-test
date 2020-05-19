const Stage = require("./Stage");

function solution(N, users) {
  let answer = [];
  if (N > 500) return "Error: total stage number exceed limit";
  if (users.length > 200000) return "Error: total players exceed limit";

  let stages = [];
  for (let i = 1; i <= N; i++) {
    const stuck = users.filter((stage) => stage === i).length;
    const pass = users.filter((stage) => stage >= i).length;

    const stage = new Stage(i, stuck / pass);
    stages.push(stage);
  }
  
  stages = stages.sort((a, b) => b.failureRate - a.failureRate);
  answer = stages.map((stage) => stage.stage);
  return answer;
}

// Input and output examples
// N: 5
// users: [2,1,2,6,2,4,3,3]
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// answer: [3,4,2,1,5]

// N: 4
// users: [4,4,4,4,4]
console.log(solution(4, [4, 4, 4, 4, 4]));
// answer: [4,1,2,3]

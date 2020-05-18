const User = require("./User");

function solution(record) {
  const answer = [];
  const users = [];

  record.forEach((el) => {
    const command = el.split(" ");
    const uid = command[1];
    const username = command[2];
    const findUid = users.findIndex((user) => user.uid === uid);

    switch (command[0]) {
      case "Enter":
        let user = "";
        if (findUid > -1) {
          user = users[findUid];
          users[findUid].username = username;

          user.record.forEach((answerIndex) => {
            let answerStatus =
              answer[answerIndex].split(" ")[1] +
              " " +
              answer[answerIndex].split(" ")[2];
            answer.splice(answerIndex, 1, user.username + " " + answerStatus);
          });
        } else {
          user = new User(uid, username);
          user.record.push(answer.length);
          users.push(user);
        }
        answer.push(user.username + " came in");
        break;

      case "Leave":
        if (findUid === -1) answer.push("user unidentified");
        else {
          users[findUid].record.push(answer.length);
          answer.push(users[findUid].username + " has left");
        }
        break;

      case "Change":
        if (findUid === -1) answer.push("user unidentified");
        else {
          let user = users[findUid];
          users[findUid].username = username;

          user.record.forEach((answerIndex) => {
            let answerStatus =
              answer[answerIndex].split(" ")[1] +
              " " +
              answer[answerIndex].split(" ")[2];
            answer.splice(answerIndex, 1, user.username + " " + answerStatus);
          });
        }
        break;

      default:
        answer.push("Error command not found");
        break;
    }
  });
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

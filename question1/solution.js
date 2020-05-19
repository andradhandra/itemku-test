const User = require("./User");

function solution(record) {
  const answer = [];
  const users = [];

  record.forEach((el) => {
    const command = el.split(" ");
    const uid = command[1];
    const username = command[2];
    const findUid = users.findIndex((user) => user.uid === uid);

    if (uid.length > 10) answer.push("error uid limit");
    else {
      switch (command[0]) {
        case "Enter":
          let user = "";
          if (findUid > -1) {
            user = users[findUid];
            users[findUid].username = username;

            user.record.forEach((answerIndex) => {
              const status = answer[answerIndex].split(" ")
              const answerStatus = status[1] + " " + status[2]
              answer.splice(answerIndex, 1, user.username + " " + answerStatus);
            });
          } else {
            user = new User(uid, username);
            user.record.push(answer.length);
            users.push(user);
          }

          if (username.length > 10) answer.push("error username limit");
          answer.push(user.username + " came in");
          break;

        case "Leave":
          if (findUid === -1) answer.push("error user unidentified");
          else {
            users[findUid].record.push(answer.length);
            answer.push(users[findUid].username + " has left");
          }
          break;

        case "Change":
          if (findUid === -1) answer.push("error user unidentified");
          else {
            let user = users[findUid];
            users[findUid].username = username;

            user.record.forEach((answerIndex) => {
              const status = answer[answerIndex].split(" ")
              const answerStatus = status[1] + " " + status[2]
              answer.splice(answerIndex, 1, user.username + " " + answerStatus);
            });
          }
          break;

        default:
          answer.push("command not found");
          break;
      }
    }
  });
  return answer;
}

// Input and output examples
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
record: console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
// answer:
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

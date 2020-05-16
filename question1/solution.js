function solution(record) {
  const answer = [];
  const uid = []

  record.forEach(el => {
    const command = el.split(' ');
    switch (command[0]) {
      case 'Enter':
        uid.push(command[1]); 
        answer.push(command[2] + "came in");
        break;
      
      case 'Leave':
        const findUid = uid.indexOf(command[1]);
        if (findUid === -1) answer.push("user uidentified");
        else {
          answer.push(command[2] + "has left");
          uid.splice(findUid, 1);
        }
        break;

      case 'Change':
        
      default: 
        answer.push("Error command not found");
        break;
    }
  });
  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))
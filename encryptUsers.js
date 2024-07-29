const bcrypt = require("bcrypt");
const fs = require("fs");

// 예시 사용자 데이터
const users = [
  {
    email: "test@example.com",
    nickname: "testuser",
    password: "Test@1234",
    phone: "01012345678",
  },
  {
    email: "user1@example.com",
    nickname: "userone",
    password: "User1@1234",
    phone: "01098765432",
  },
  {
    email: "user2@example.com",
    nickname: "usertwo",
    password: "User2@1234",
    phone: "01056781234",
  },
];

// 비밀번호 암호화 함수
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// 사용자 데이터 암호화
const encryptUsers = async () => {
  for (let user of users) {
    user.password = await hashPassword(user.password);
  }

  // 암호화된 사용자 데이터를 파일에 저장
  fs.writeFileSync("./src/data/users.json", JSON.stringify(users, null, 2));
  console.log("Encrypted user data saved to src/data/users.json");
};

encryptUsers();

interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const ans = sumOfAge(
  {
    name: "yash",
    age: 22,
  },
  {
    name: "Sharma",
    age: 22,
  }
);

console.log(ans);

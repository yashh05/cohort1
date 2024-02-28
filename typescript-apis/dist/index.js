"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const ans = sumOfAge({
    name: "yash",
    age: 22,
}, {
    name: "Sharma",
    age: 22,
});
console.log(ans);

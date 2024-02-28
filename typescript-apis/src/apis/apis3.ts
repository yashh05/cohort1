//RECORDS AND MAPS

// type userInfo = { [key: string]: User };

// const users1: userInfo[] = [
//   {
//     "@kdsavflgrea": {
//       name: "yash",
//       age: 22,
//     },
//     "@kdsavflgreb": {
//       name: "yash",
//       age: 22,
//     },
//   },
// ];

// but the syntax used above is not very nice to read or to understand, so In typescript we have this one thing called Records

const user1: Record<string, User> = {
  "@kjgdsugfs": {
    name: "hkirt",
    age: 33,
  },
};

//Maps - they  are like  objects with key value pairs but with some differences. They have keys that can be any value.

const user2 = new Map<string, User>();

user2.set("@kjgdsugfs", { name: "hkitrat", age: 22 });

user2.get("@kjgdsugfs");

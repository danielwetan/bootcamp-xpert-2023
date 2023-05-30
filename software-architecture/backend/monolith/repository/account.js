const userMap = new Map();

const dummyXpert = {
  username: 'eureka.xpert',
  postCount: 82,
  followers: 213,
  following: 18
};

const dummyDataEdutech = {
  username: 'eureka.edutech',
  postCount: 358,
  followers: 2654,
  following: 73
};

userMap.set(dummyXpert.username, dummyXpert);
userMap.set(dummyDataEdutech.username, dummyDataEdutech);

function getAccountFromDatabase(username) {
  return userMap.get(username)
}

// export function to another file
module.exports = {
  getAccountFromDatabase,
}

// --------

// xpertData = getAccount()
// console.log(
//   "debug repository\n\n",
//   xpertData
// )


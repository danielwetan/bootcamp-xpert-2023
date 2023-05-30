class Account {
  constructor(username, postCount, followers, following) {
    this.username = username
    this.postCount = postCount
    this.followers = followers
    this.following = following
  }

  getUsername() {
    return this.username
  }

  getData() {
    return {
      username: this.username,
      postCount: this.postCount,
      followers: this.followers,
      following: this.following
    }
  }
}


eurekaXpert = new Account("eureka.xpert", 82, 213, 18)
eurekaEdutech = new Account("eureka.edutech", 358, 2654, 73)

console.log(
  "data xpert -> ",
  eurekaXpert.getData(),
  "\n",
  "data edutech ->",
  eurekaEdutech.getData()
)


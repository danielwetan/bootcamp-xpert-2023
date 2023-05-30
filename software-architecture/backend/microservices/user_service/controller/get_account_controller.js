
const { getAccount } = require("../../usecase/get_account")


function getAccountHandler(username) {
  return getAccount(username)
}

// 

console.log(
  "controller -> \n\n",
  getAccountHandler()
)
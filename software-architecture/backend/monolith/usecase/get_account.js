const { getAccountFromDatabase } = require("../repository/account")

/**
 * function getAccount
 * return account by username
 */
function getAccount(username) {
  if (username == "" || username == undefined) {
    return "Validation from usecase: please input the username"
  }

  return getAccountFromDatabase(username)
}

module.exports = {
  getAccount
}
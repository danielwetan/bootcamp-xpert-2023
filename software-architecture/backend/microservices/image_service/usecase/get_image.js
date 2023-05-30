const { getImageFromDatabase } = require("../repository/image")

function getImage(path) {
  if (path == "" || path == undefined) {
    return "Validation from usecase: please input the path"
  }

  return getImageFromDatabase(path)
}

module.exports = {
  getImage
}

const { getImage } = require("../usecase/get_image")


function getImageHandler(name) {
  return getImage(name)
}

// 

console.log(
  "controller -> \n\n",
  getImageHandler("javascript")
)
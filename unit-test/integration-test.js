

// integration
// input -> arrayItems, cityName
// output -> hasil penjumlahan harga semua barang + biaya shippinng
function TestCheckout(arrayItems, cityName) {
  let itemPrice = calculateOrder(arrayItems)
  let shippingPrice = calculateShipping(cityName)

  // total belanjaan
  let amount = itemPrice + shippingPrice

  let expectedItemPrice = 50000
  let expectedShippingPrice = 20000
  let expectedAmount = expectedItemPrice + expectedShippingPrice

  if (expectedItemPrice != itemPrice) {
    console.log("HARGA TIDAK SESUAI")
  }

  if (expectedShippingPrice != shippingPrice) {
    console.log("BIAYA PENGIRIMAN TIDAK SESUAI")
  }

  if (expectedAmount != amount) {
    console.log("KALKULASI ORDER TIDAK SESUAI")
  }
}


items = [20000, 30000]
cityName = "Palembang"

console.log(
  TestCheckout(items, cityName)
)


// input -> arrayItems
// output -> hasil penjumlah dari masing2 item
function calculateOrder(arrayItems) {
  let totalOrder = 0

  arrayItems.forEach(item => {
    totalOrder += item
  })

  return totalOrder
}

data = [10000, 20000, 50000]

// input -> nama kota
// output -> harga shipping untuk kota tersebut
function calculateShipping(cityName) {
  const cities = {
    "Jakarta": 13000,
    "Malang": 15000,
    "Yogyakarta": 14000
  }

  let price = 0

  switch (cityName) {
    case "Jakarta":
      price = cities["Jakarta"]
      break;
    case "Malang":
      price = cities["Malang"]
      break;
    case "Yogyakarta":
      price = cities["Yogyakarta"]
      break;
    default:
      price = 20000
  }


  return price
}


// integration
// input -> arrayItems, cityName
// output -> hasil penjumlahan harga semua barang + biaya shippinng
function TestCheckout(arrayItems, cityName) {
  let itemPrice = calculateOrder(arrayItems)
  let shippingPrice = calculateShipping(cityName)

  // total belanjaan
  let amount = itemPrice + shippingPrice

  let expectedItemPrice = 50000
  let expectedShippingPrice = 20000
  let expectedAmount = expectedItemPrice + expectedShippingPrice

  if (expectedItemPrice != itemPrice) {
    console.log("HARGA TIDAK SESUAI")
  }

  if (expectedShippingPrice != shippingPrice) {
    console.log("BIAYA PENGIRIMAN TIDAK SESUAI")
  }

  if (expectedAmount != amount) {
    console.log("KALKULASI ORDER TIDAK SESUAI")
  }
}


items = [20000, 30000]
cityName = "Palembang"

console.log(
  TestCheckout(items, cityName)
)


// input -> arrayItems
// output -> hasil penjumlah dari masing2 item
function calculateOrder(arrayItems) {
  let totalOrder = 0

  arrayItems.forEach(item => {
    totalOrder += item
  })

  return totalOrder
}

data = [10000, 20000, 50000]

// input -> nama kota
// output -> harga shipping untuk kota tersebut
function calculateShipping(cityName) {
  const cities = {
    "Jakarta": 13000,
    "Malang": 15000,
    "Yogyakarta": 14000
  }

  let price = 0

  switch (cityName) {
    case "Jakarta":
      price = cities["Jakarta"]
      break;
    case "Malang":
      price = cities["Malang"]
      break;
    case "Yogyakarta":
      price = cities["Yogyakarta"]
      break;
    default:
      price = 20000
  }


  return price
}

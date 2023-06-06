// function calculator
// input: bilangan a dan b
// output: hasil penjumlahan antara bilangan a dan b

function calculator(a, b) {
  return a + b
}

// unit test
let expected = 30
let output = calculator(10, 20)

if (expected != output) {
  console.log("Function belum sesuai")
} else {
  console.log("Berhasil")
}



let book = {
    author: "enrico",
    title: "Learning JS"
  }
  let keys = Object.keys(book)
  let keys_values = Object.entries(book)
  let values = Object.values(book)
  console.log(keys)
  console.log(keys_values)
  console.log(values)
  
  let book_copy = book
  book_copy.author = "Ana"

  console.log(book)
  console.log(book_copy)

export async function getBooks() {
    const res = await fetch("https://book-review-179a3-default-rtdb.firebaseio.com/books.json")

    const data = await res.json()
    return data
}

export async function getBookFromId(id) {
    const books = await getBooks()
    const fetchedBook = books.filter((book) => book.id === id)[0]

    return fetchedBook
}
export async function getBooks() {
    const res = await  fetch("https://book-review-179a3-default-rtdb.firebaseio.com/books.json")

    console.log(res);
    const data = await res.json()
    return data
}
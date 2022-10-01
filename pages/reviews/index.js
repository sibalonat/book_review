import { getBooks } from "../../utils/api-utils";

export default function Reviews({ books }) {
  // return <h1> {books}</h1>
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>
            <div>
              <h1>{book.name}</h1>
              <p>{book.author}</p>
              <p>{book.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const books = await getBooks();
  console.log(books);
  return {
    props: {
      books: books,
    },
  };
}

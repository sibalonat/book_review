import { getBooks } from "../../utils/api-utils";
import Link  from "next/link";

export default function Reviews({ books }) {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <h1>{book.name}</h1>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <article> <Link href={`/reviews/${book.id}`}>Go to sigle</Link> </article>
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

import React from "react";
import { getBookFromId, getBooks } from "../../utils/api-utils";
// import { getBookFromId, getBooks } from "../../utils/api-utils";
export default function SignleReview({ book }) {
  return (
    <div>
      <h1>{book.name}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export async function getServerSideProps({params}) {
    const book = await getBookFromId(params.id)
    return {
        props: {
            book
        }
    }
}

// export async function getStaticProps({ params }) {
//   const book = await getBookFromId(params.id);

//   return {
//     props: {
//       book: book,
//     },
//     // this allows to refetch the data from db after an amount of time
//     revalidate: 10
//   };
// }

// export async function getStaticPaths() {
//   const books = await getBooks();
//   const paths = books.map((book) => ({
//     params: {
//       id: book.id,
//     },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

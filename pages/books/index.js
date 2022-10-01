import { books } from "../../data/utils";
import React from 'react';
import Link  from "next/link";
export default function BooksToReview() {

  return (
    <div>
      {books.map((book, index) => (
        <div key={index} style={{ 
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center"
         }}>
            <p style={{ 
                fontWeight: "bold",
                fontSize: 32,
                marginTop: 5, 
                marginRight: 0, 
                marginBottom: 0, 
                marginLeft: 0, 
                alignItems: "center",
                display: "flex"
            }}> {book.name} - <span style={{ 
                verticalAlign: "baseline",
                marginLeft: 5
             }}> <small style={{ 
                fontWeight: "normal",
                fontSize: 16,
                marginTop: -45
             }}> {book.author} </small></span> </p> 
            <p> {book.description}</p>
            <article style={{ 
                border: "1px solid black",
                paddingRight: 22,
                paddingLeft: 22,
                paddingTop: 2,
                paddingBottom: 2,
                background: "#ccc",
                borderRadius: 14
             }}>
                <Link href={`/books/${book.id}`}> Detail </Link>
             </article>
        </div>
      ))}
    </div>
  );
}

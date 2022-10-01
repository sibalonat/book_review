import { useRouter } from "next/router";
import { fetchBookFromId } from "../../data/utils";
import React from 'react';
export default function SingleBook() {
    // const router = useRouter()
    const {query} = useRouter()
    const bookId = query.id
    const book = fetchBookFromId(bookId)

    if (!book) {
        <p>loading</p>
    }


    return (
          <div style={{ 
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
          </div>
    )
}
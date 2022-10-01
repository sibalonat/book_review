import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import clasess from "../styles/Books.module.css";

const BookList = () => {
    const [data, setData] = useState()
    const sendRequest = () => {
        fetch('/api/books').then((res) => res.json())
        .then((data) => setData(data.message))
        .catch((error) => {
            console.log(error);
        }) 
    }
    useEffect(() => {
        sendRequest()
    }, [])

    return <div>
        <ul className={clasess.listContainer}>
            {data && data.map((single, i) => <BookItem description={single.description} 
            name={single.name} imgUrl={single.imgUrl} author={single.author} id={single.id} 
            key={i} />)}
        </ul>
    </div>
}

export default BookList
import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

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
        <ul>
            {data && data.map((single, i) => <BookItem description={single.description} 
            name={single.name} imgUrl={single.imgUrl} author={single.author} id={single.id} 
            key={i} />)}
        </ul>
    </div>
}

export default BookList
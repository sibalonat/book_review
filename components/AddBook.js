import { useState } from "react";
import formclass from "../styles/Form.module.css";

export default function AddBook() {
  // useState
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    author: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = () => {
    fetch("/api/books/", {
      method: "POST",
      body: JSON.stringify({
        name: inputs.name,
        author: inputs.author,
        imgUrl: inputs.imgUrl,
        description: inputs.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((data) => console.log(data));
  };

  const storeData = (e) => {
    e.preventDefault();
    if (!inputs.name && !inputs.author && !inputs.description && !inputs.imgUrl) {
        return         
    } else {
        sendRequest()
    }
    console.log(inputs);
  };

  return (
    <div className={formclass.container}>
      <form onSubmit={storeData} className={formclass.formControl}>
        <label htmlFor="name">name of the book</label>{" "}
        <input
          value={inputs.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="author">author</label>{" "}
        <input
          value={inputs.author}
          type="text"
          name="author"
          onChange={handleChange}
        />
        <label htmlFor="description">description</label>{" "}
        <input
          value={inputs.description}
          type="text"
          name="description"
          onChange={handleChange}
        />
        <label htmlFor="imgUrl">Image </label>{" "}
        <input
          type="text"
          value={inputs.imgUrl}
          name="imgUrl"
          onChange={handleChange}
        />
        <button type="submit">Store</button>
      </form>
    </div>
  );
}

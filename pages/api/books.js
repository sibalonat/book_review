// import fs from "fs";
// import path from "path";
import mongodb, { MongoClient } from "mongodb";

// when there was a local file to write to
// function getData() {
//     const filePath = path.join(process.cwd(), "data", "books.json");
//     const fileData = fs.readFileSync(filePath);
//     const data = JSON.parse(fileData);
//     return data
// }

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://root:vSNanXopBiIIQzuk@cluster0.cdtxbjc.mongodb.net/?retryWrites=true&w=majority"
  );

  //create database
  const db = client.db("books");

  if (req.method === "GET") {
    let books;
    try {
      books = await db.collection("books").find().sort().toArray();
    } catch (error) {
      return console.log(error);
    }
    // when there was a local file to write to
    // const data = getData()

    if (!books) {
      return res.status(500).json({
        message: "internal server error",
      });
    }

    // console.log(data);
    return res.status(200).json({
      message: books,
    });
  } else if (req.method === "POST") {
    // const filePath = path.join(process.cwd(), "data", "books.json");
    const { name, description, imgUrl, author } = req.body;
    if (
      (!name &&
        name.trim() === "" &&
        !description &&
        description.trim() === "" &&
        !imgUrl &&
        imgUrl.trim() === "",
      !author && author.trim() === "")
    ) {
      return res.status(422).json({
        message: "invalid data"
      });
    }
    const newBook = {
      name,
      description,
      imgUrl,
      author,
      id: Date.now(),
    };
    let laterBook
    try {
      laterBook = await db.collection("books").insertOne(newBook);
    } catch (error) {
      return console.log(error);
    }
    // when there was a local file to write to
    // const data = getData()
    // data.push(newBook)
    // fs.writeFileSync(filePath, JSON.stringify(data))
    return res.status(201).json({
      message: "Added",
      book: newBook,
    });
  }
}

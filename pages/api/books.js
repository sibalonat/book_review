import fs from "fs";
import path from "path";

function getData() {
    const filePath = path.join(process.cwd(), "data", "books.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data
}

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getData()

    // console.log(data);
    return res.status(200).json({
      message: data,
    });
  } else if (req.method === "POST") {
    const {name, description, imgUrl, author} = req.body
    const newBook = {
        name, description, imgUrl, author, id: Date.now()
    }
    const data = getData()
    data.push(newBook)
    return res.status(201).json({
        message: "Added", book: newBook
    })
  }
}

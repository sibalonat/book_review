import clasess from "../styles/Books.module.css";
const BookItem = ({ name, description, author, imgUrl, id}) => {
    return (
        <li className={clasess.listItem}>
            <img src={imgUrl} alt={name} />
            <h3>{name}</h3> 
            <h3>{author}</h3> 
            <h3>{description}</h3> 
        </li>
    )
}

export default BookItem
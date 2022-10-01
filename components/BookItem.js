const BookItem = ({ name, description, author, imgUrl, id}) => {
    return (
        <li>
            <img src={imgUrl} alt={name} />
            <h3>{name}</h3> 
            <h3>{author}</h3> 
            <h3>{description}</h3> 
        </li>
    )
}

export default BookItem
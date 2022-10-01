export const books = [
    {
        id: '1',
        name: '1984',
        description: 'books about future authoritarism',
        author: 'George Orwell'
    },
    {
        id: '2',
        name: '1984',
        description: 'books about future authoritarism',
        author: 'George Orwell'
    },
    {
        id: '3',
        name: '1984',
        description: 'books about future authoritarism',
        author: 'George Orwell'
    },
    {
        id: '4',
        name: '1984',
        description: 'books about future authoritarism',
        author: 'George Orwell'
    },
    {
        id: '5',
        name: '1984',
        description: 'books about future authoritarism',
        author: 'George Orwell'
    },
]

export const fetchBookFromId = (id) => {
    const fetchedBook = books.find((book) => book.id === id)
    return fetchedBook
}
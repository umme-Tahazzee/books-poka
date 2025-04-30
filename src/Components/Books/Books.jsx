import React, { useEffect, useState } from 'react'
import Book from './../Book/Book';


const Books = () => {

 useEffect(()=> {
  fetch('/booksData.json')
  .then(res=>res.json())
  .then(data=>setBooks(data))
}  ,[])


 const [books, setBooks] = useState([])
  return (
    <div>
       <h2 className='text-4xl font-bold text-center'>Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 '>
        {
        books.map((book)=> <Book key={book.bookId} book={book}  /> )
         }
        </div>
    </div>
  )
}

export default Books


// 1 . sate to set books
// 2 . useEffect for load data 
// 3. fetch load data
// 4. set data to the book state
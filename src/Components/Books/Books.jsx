import React, { useEffect, useState } from 'react'


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
         <p>Length: {books.length} </p>
    </div>
  )
}

export default Books


// 1 . sate to set books
// 2 . useEffect for load data 
// 3. fetch load data
// 4. set data to the book state
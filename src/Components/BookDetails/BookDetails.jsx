import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
 const {bookId} = useParams()
 console.log(bookId);
 
  return (
    <div>
        bok
    </div>
  )
}

export default BookDetails
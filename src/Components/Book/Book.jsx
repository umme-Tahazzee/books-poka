import React from 'react'

const Book = ({book}) => {
 const {id, bookName, author, image, publisher} = book;
  return (
   <div className="card bg-base-100 h-[482px] border border-gray-100">
   <figure>
     <img
       src={image}
       alt={author} />
   </figure>
   <div className="card-body">
     <h2 className="card-title">
        {bookName}
     </h2>
       <div className="badge badge-secondary hover:text-amber-200 bg-none">{publisher}</div>
     <p>{author}</p>
     <div className="card-actions justify-end">
       <div className="badge badge-outline">Fashion</div>
       <div className="badge badge-outline">Products</div>
     </div>
   </div>
 </div>
  )
}

export default Book
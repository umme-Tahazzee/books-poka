import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToStoreWishList } from "../../Utility/addDbTo";

const BookDetails = () => {
  const { bookId } = useParams();
  const loader = useLoaderData();
  const id = parseInt(bookId);
  const book = loader.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    rating,
    image,
    publisher,
    tags,
    category,
    yearOfPublishing,
    review,
    totalPages,
   
  } = book;

  const [isRotated, setImgRotated] = useState(false);
  const handleRotatedImg = () => {
    setImgRotated(!isRotated);
  };
  const handleMarkAsRead = (id) =>{
    /**
     * understand want to store or save
     * where to store : database
     * array, list, collection
     * check if the book is already in the readlist
     * yes, dont add the book
     
     */
      addToStoreReadList(id)
  }

  const handleWishList = (id) => {
      addToStoreWishList(id)
  }

  return (
    <div className="flex gap-10 m-10 items-start font-sans">
      {/* Image Section */}
      <div className="bg-gray-300 w-60 h-auto shadow-lg rounded-md">
        <img
          src={image}
          alt={bookId}
          onClick={handleRotatedImg}
          className={`p-4 transition-transform duration-700 ease-in-out cursor-pointer ${
            isRotated ? "rotate-[360deg]" : "rotate-0"
          }`}
        />
      </div>

      {/* Text Section */}
      <div className="w-2/3 space-y-4">
        <h1 className="font-bold text-3xl">The Catcher in the Rye</h1>

        <p className="text-sm text-gray-600">By: Awlad Hossain</p>

        <hr className="border border-gray-300" />

        <p className="text-justify leading-relaxed text-gray-800">
          <span className="font-semibold">Review:</span> {review}
        </p>
        {/* tags  */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold">Tags:</span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <hr className="border border-gray-300" />

        <div className=" text-sm space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-gray-500 ">Number of Pages: </span>
            <p className="font-semibold font-sans ">{totalPages}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 ">Publisher: </span>
            <p className="font-semibold font-sans ">{publisher}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 ">Rating: </span>
            <p className="font-semibold font-sans ">{rating}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 ">Year Of Publishing: </span>
            <p className="font-semibold font-sans ">{ yearOfPublishing}</p>
          </div>
        </div>
        <hr className="border border-gray-300" />
        {/* button  */}
         < div className="flex gap-3">
         <button 
         onClick={()=> handleMarkAsRead(bookId)}
         className="btn btn-outline btn-success">Read</button>
         <button
         onClick={()=>handleWishList(bookId)}
         className="btn btn-success">Wishlist</button>
         </div>
      </div>
    </div>
  );
};

export default BookDetails;

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, rating, image, publisher, tags, category } =
    book;
  return (
    <Link to={`/book/${bookId}`}>
      <div
        className="card bg-base-100  
    border border-gray-200 p-5 "
      >
        <figure className="bg-blue-200 py-8 rounded-2xl  ">
          <img className="h-[166px]" src={image} alt={author} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-2 ">
            {tags.map((tag, idx) => {
              return (
                <button key={idx} className="btn btn-xs text-[#23BE0A] rounded-lg border-none ">
                  {tag}
                </button>
              );
            })}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <div className="badge badge-secondary hover:text-amber-200 bg-none">
            {publisher}
          </div>
          <p>By: {author}</p>
          <div className=" border-t-2 border-dashed border-gray-400 w-full "></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge ">
              <span className="-mt-1 font-bold font-serif ">{rating}</span>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

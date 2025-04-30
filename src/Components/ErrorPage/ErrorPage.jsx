import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-serif  text-center justify-center items-center p-15">
      <h5 className="text-5xl  font-bold ">OoooPps !! Page Not Found</h5>
      <div className="flex  justify-center">
        <img
          src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif"
          alt="My GIF"
        />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-wide bg-green-300 hover:rotate-2">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

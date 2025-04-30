import React from 'react'
import bannerImg from '../../assets/img/books.jpg'

const Banner = () => {
  return (
   <div className="hero bg-slate-100 mt-5 mb-10 rounded-lg">
   <div className="hero-content flex-col lg:flex-row-reverse p-12">
     <img
       src={bannerImg}
       className="max-w-sm"
     />
     <div>
       <h1 className="text-5xl font-bold">Books to freshen up <br/>
        <span className='inline-block mt-4'>your bookshelf</span> </h1>
       <button className="btn bg-[#23BE0A] mt-5 hover:rotate-6 ">View The List</button>
     </div>
   </div>
 </div>
  )
}

export default Banner
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import useCart from "../../Hook/useCart,jsx";
import Swal from "sweetalert2";
import useFeedbacks from "../../Hook/useFeedbacks";

const ProductDetails = () => {
    const ProductDetails=useLoaderData()
    // const [refetch]=useCart()
    const [feedbacks,refetch]=useFeedbacks()
    console.log(feedbacks)
    const {title,newprice,oldprice,image,_id,}=ProductDetails
    const {user}=useContext(AuthContext)
    const email=user?.email
    const displayName=user?.displayName
    const photoURL=user?.photoURL
    console.log(ProductDetails)
    const AxiosPublic=UseAxiosPublic()
    const location=useLocation()
    const navigate=useNavigate()
    
    const handleAddToCart=()=>{
        const body={title,newprice,oldprice,image,email,displayName,photoURL}
        console.log(body)
        AxiosPublic.post('http://localhost:5000/cart',body)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
    }


    //////////////////////////////////////////////////////////////////////////

  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitted = (e) => {
    e.preventDefault();
    const textareaValue = e.target.textarea.value;

    // Get current date (without time)
    const submissionDate = new Date().toISOString().split("T")[0];

    const body = {
      email,
      displayName,
      photoURL,
      id:_id,
      textarea: textareaValue,
      rating: selectedRating,
      submissionDate, // Just the date without time
    };
    console.log(body)
    fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
        navigate(location.state ? location.state : `/productDetails/${ProductDetails._id}`);
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Success",
            text: "Feedback sent successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Clear textarea after successful submission
          e.target.textarea.value = "";
          setSelectedRating(0);
        }
      });
  };
  const [feed,setFeed]=useState([])
    useEffect(()=>{
        const filter=feedbacks.filter(feedback=>feedback.id===ProductDetails._id)
        setFeed(filter)
    },[feedbacks])
    return (
        <div>
            <div className="grid lg:grid-cols-3 mt-24">
            <div className="rounded-lg bg-violet-200 p-5 sm:order-1 md:order-1 md:col-span-1 lg:order-1 lg:col-span-1">
                <img src={image} alt="" />
                <div className="flex gap-2 m-4 justify-between ">
                    <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart </button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div className="rounded-lg px-10 border-t border-gray-400 bg-white sm:order-2 md:order-2 md:col-span-2 lg:order-2 lg:col-span-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex justify-start gap-5">
                    <h1>ratings</h1>
                 <button className="text-red-500 font-bold" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Your Review</button>
             <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="">
      <h2 className="text-center text-3xl font-bold">
        <span className="text-[#ff9f0d]">Pl</span>ease share your feedback
      </h2>

      <span className="flex justify-center py-4">How was your experience?</span>
      <div className="flex space-x-3 justify-center">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            title={`Rate ${rating} stars`}
            aria-label={`Rate ${rating} stars`}
            className={`${
              rating <= selectedRating ? "text-yellow-500" : "text-gray-400"
            } w-10 h-10`}
            onClick={() => handleRatingClick(rating)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmitted}>
          <div className="flex gap-6 mb-5">
          </div>
          <div>
            <textarea
              placeholder="Give Your Feedback"
              name="textarea"
              className="textarea textarea-bordered textarea-lg w-full max-w-md"
            ></textarea>
          </div>

          <div className="text-center mt-5">
            <button method="dialog"
              className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
            </dialog>
                </div>
                <div className="flex  py-5  justify-start gap-5">
                <h1>Brand : <span className="text-blue-500 font-bold">Samsung</span></h1>
                <h1>sold by : <span className="text-blue-500 font-bold">Samsung Official</span></h1>
                </div>
                <div className="flex border-t border-b border-gray-400 py-5 justify-start gap-9">
                    <p className="font-bold text-3xl text-blue-500 ">৳{newprice}</p>
                    <p className="line-through text-2xl"> ৳{oldprice}</p>
                    <p className="p-3 bg-red-200 rounded-lg">-25%</p>
                </div>
                    <p>Warranty : <span className="text-red-500 font-bold">12 Months Official Warranty</span> </p>
                    <p>EMIs from : <span className="text-red-500 font-bold"> ৳512.47/month</span> </p>

                    <div>
                    {
    feed.map(feedback => (
        <div className="my-2" key={feedback._id}>
            <div className="flex justify-start gap-4 items-center">
                <img className="h-10 w-10 rounded-full" src={feedback.photoURL} alt="" />
                <h1>{feedback.displayName}</h1>
                <div className="rating rating-lg">
                    {[...Array(5)].map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            name={`rating-${feedback._id}`}
                            className={`opacity-0 absolute ${
                                feedback.rating >= index + 1 ? 'checked' : ''
                            }`}
                            readOnly
                        />
                    ))}
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-6 h-6 fill-current ${
                                    feedback.rating >= index + 1 ? 'text-yellow-500' : 'text-gray-400'
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2c-.3 0-.5.1-.7.3l-4.5 6.5-6.4.9c-.4.1-.7.5-.7.9 0 .4.3.8.6.9l5 3.9-1.5 6c-.1.3 0 .6.2.9.2.3.5.4.8.4.1 0 .2 0 .3-.1L12 18l5.2 3c.1 0 .2.1.3.1.3 0 .6-.1.8-.4.2-.3.3-.6.2-.9l-1.5-6 5-3.9c.3-.2.6-.5.6-.9s-.3-.8-.7-.9l-6.4-.9-4.5-6.5c-.2-.2-.4-.3-.7-.3z"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="text-red-400 font-bold">{feedback.textarea}</h1>
        </div>
    ))
}

                    </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;
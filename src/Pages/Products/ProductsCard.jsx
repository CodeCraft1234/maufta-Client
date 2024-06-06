import { useState} from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ item, index }) => {
  const { image, newprice,oldprice, short, category, title, _id } = item;
  console.log(item)
  const [expandedCards, setExpandedCards] = useState(
    Array(item.length).fill(false)
  );

  const toggleCardVisibility = () => {
    const updatedExpandedCards = [...expandedCards];
    updatedExpandedCards[index] = !expandedCards[index];
    setExpandedCards(updatedExpandedCards);
  };

  return (
    <div>
    <Link to={`/productDetails/${_id}`}>
    <div className="border-1 hover:text-blue-700 border-black p-1 bg-blue-100">
                    <img  src={image} alt="" />
                    <h1 className="text-xl hover:text-blue-700 font-bold"> {title}</h1>
                    <div className="flex justify-between gap-3">
                    <p className="font-bold text-blue-500 ">৳{newprice}</p>
                    <p className="line-through"> ৳{oldprice}</p>
                    </div>
                    <div className="flex justify-start gap-5">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   </div>
                   <h1>(20)</h1>
                    </div>
                </div></Link>
    </div>
  );
};

export default ProductsCard;

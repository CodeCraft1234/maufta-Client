
import useCart from "../../Hook/useCart,jsx";


const MyCart = () => {
    const [cart,refetch]=useCart()
    console.log(cart.title)
  
    const {image,title}=cart
    console.log(title)
    return (
        <div>
            <h2 className="text-4xl p-5 text-center mt-24 font-bold">My cart</h2>
            <div className="grid lg:grid-cols-3">
           <div className=" rounded-lg bg-white sm:order-1 md:order-1 md:col-span-2 lg:order-2 lg:col-span-2">
           
           {
                cart.map(c=><div key={c._id} className="flex flex-col w-full border-r-2 border-white border-b-2 p-5  space-y-4  dark:bg-gray-900 dark:text-gray-100">
                
                <ul className="flex flex-col divide-y dark:divide-gray-700">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={c.image} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leadi sm:pr-8">{c.title}</h3>
                                        <p className="text-sm dark:text-gray-400">Classic</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">৳{c.newprice}</p>
                                        <p className="text-sm line-through dark:text-gray-600">{c.oldprice}</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect width="32" height="200" x="168" y="216"></rect>
                                            <rect width="32" height="200" x="240" y="216"></rect>
                                            <rect width="32" height="200" x="312" y="216"></rect>
                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                        </svg>
                                        <span>Remove</span>
                                    </button>
                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Add to favorites</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                       </div>)
            }
           </div>
           <div className=" border-b-2 border-white dark:bg-gray-900 dark:text-gray-100 sm:order-2 md:order-2 md:col-span-1 lg:order-2 lg:col-span-1">
              <div className="flex flex-col  p-6 space-y-4 divide-y  dark:divide-gray-700  ">
                <h2 className="text-2xl font-semibold">Your Order</h2>
                <div className="flex justify-between py-5 items-center">
                  <div>
                    <h1>Product</h1>
                    <div className="flex justify-center items-center gap-2 mt-5">
                      <h1>ahfadsh</h1>
                    </div>
                  </div>
                  <h1>Subtitle</h1>
                </div>
                <div className="pt-4 space-y-2">
                  <div>
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>৳6236</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs"></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Shiping</span>
                    <span>dhndh</span>
                  </div>
                </div>
                {/* /// */}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>৳3266</span>
                  </div>
                  <div className="flex flex-col"></div>
                  <div className="flex justify-center">
                  <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default MyCart;
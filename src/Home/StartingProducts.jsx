

const StartingProducts = () => {
    return (
        <div>
           
            <div className="grid my-5 lg:grid-cols-3 items-center gap-5 justify-center">


            <div className="h-96 border border-black">
            <img className="h-72 w-full" src=" https://i.ibb.co/F6YcGGc/Scroller-Banner-4-1.jpg" alt="" />
            <div className="p-2">
            <h1 className="text-2xl font-bold"> Smartwatch</h1>
            <p className="text-xl ">Starting From TK.1,499</p>
            </div>
            </div>
            

            <div className="h-96 border border-black">
            <img className="h-72 w-full" src="https://i.ibb.co/KN0pc4G/scroller-banner-2.jpg" alt="" />
            <div className="p-2">
            <h1 className="text-2xl font-bold"> Air Conditioners</h1>
            <p className="text-xl ">Starting From TK.34,999</p>
            </div>
            </div>
           

           <div className="h-96 border border-black">
           <img className="h-72 w-full" src="https://i.ibb.co/nkmHQdt/realme-Note-50-Scollor-Banner-6.jpg" alt="" />
            <div className="p-2">
            <h1 className="text-2xl font-bold">  Realme Note 50(4/128GB)</h1>
            <p className="text-xl ">Enjoy TK. 600 Discount | EMI Facility</p>
            </div>
           </div>
            </div>
        </div>
    );
};

export default StartingProducts;
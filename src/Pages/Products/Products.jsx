import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import { useState } from "react";

import ProductsCard from "./ProductsCard";
import useProducts from "../../Hook/useProducts";

const Products = () => {
  const [Products] = useProducts();
  console.log(Products)
  const categories = ["mobile", "laptop", "television", "watch"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabs, setTabs] = useState(initialIndex === -1 ? 0 : initialIndex);

  const filteredMenu = (category) =>
    Products.filter((item) => item.category === category);

  return (
    <div className="mt-5 ">
      <div>
        <div className=" mb-8">
          <h2 className=" text-center text-5xl font-bold"><span className=" text-[#ff9f0d]">Ou</span>r Products</h2>
        </div>
      </div>

      <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
        <TabList className="tabs tabs-bordered text-center flex justify-center items-center gap-5 my-5 uppercase">
          {categories.map((cat, index) => (
            <Tab
              key={index}
              className={`tab ${tabs === index ? "tab-active" : ""}`}
              style={{
                borderBottom: tabs === index ? "2px solid #f97316" : "none",
                outline: "none",
                color: tabs === index ? "#f97316" : "inherit",
              }}
            >
              {cat}
            </Tab>
          ))}
        </TabList>
        {categories.map((cat, index) => (
          <TabPanel key={index}>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-2">
              {filteredMenu(cat).map((item) => (
                <ProductsCard key={item._id} item={item}></ProductsCard>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
      {/* // */}
    </div>
  );
};

export default Products;

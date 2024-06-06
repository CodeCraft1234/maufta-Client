import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../../Axios/UseAxiosPublic';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      

      const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
      const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    
      const AxiosPublic = UseAxiosPublic();

      const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    
      const onSubmit = async (data) => {
        const img = { image: data.image[0] };
        const res = await AxiosPublic.post(image_hosting_api, img, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
        const title = data.title;
        const short = data.short;
        const long = data.long;
        const newprice = data.newprice;
        const oldprice = data.oldprice;
        const category = data.category;
    
        const image = res.data.data.display_url;
        console.log(title, image, short,oldprice, newprice,long, category);
        const body = { title,currentTime, image,oldprice, short,long, newprice, category };
    
        AxiosPublic.post("/products", body)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Menu has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      };
    return (
        <div>
            <div className=" px-20 text-black mt-10">
      <div className=" text-center  ">
        <h2 className=" text-2xl font-bold">Add Products</h2>
      </div>

      <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            className="input  input-bordered  text-xs font-normal "
            required
          />

          <input
            {...register("image")}
            type="file"
            placeholder="image"
            className="file-input file-input-bordered w-full my-5"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <input
            {...register("newprice", { required: true })}
            type="text"
            placeholder="newPrice"
            className="input  input-bordered  text-xs font-normal "
            required
          />
          <input
            {...register("oldprice", { required: true })}
            type="text"
            placeholder="oldPrice"
            className="input  input-bordered  text-xs font-normal "
            required
          />

          <select
            {...register("category", { required: true })}
            className="py-3 px-2 text-black rounded-r-lg "
            name="category"
          >
            <option value="mobile"> Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="television">Television</option>
            <option value="watch">Watch</option>
          </select>
        </div>

        <input
          {...register("short", { required: true })}
          type="text"
          placeholder="Short Description"
          className="input  input-bordered w-full mt-5 text-xs font-normal "
          required
        />

        <textarea
          {...register("long", { required: true })}
          type="textarea"
          placeholder="Long Description"
          className="textarea textarea-bordered py-auto w-full mt-5 text-xs font-normal "
          required
        />

        <input
          type="submit"
          value="Submit"
          className="btn btn-block mt-5 bg-[#003a90] hover:bg-[#003481] text-white"
        />
      </form>
    </div>
        </div>
    );
};

export default AddProduct;
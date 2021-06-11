import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="add-review">
      <div className="dashboard-header">
        <h6 className="d-inline-block px-4 text-white py-3 mb-4">
          Add New Product
        </h6>
      </div>
      <div className="col-lg-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="form-control my-2"
              {...register("name", { required: true })}
              placeholder="food name"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div>
            <input
              className="form-control my-2"
              {...register("price", { required: true })}
              placeholder="food Price"
            />
            {errors.price && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div>
            <input
              className="form-control my-2"
              {...register("foodType", { required: true })}
              placeholder="food type"
            />
            {errors.foodType && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="file"
              className="form-control my-2"
              {...register("foodImage", { required: true })}
            />
            {errors.foodImage && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div>
            <textarea
              className="form-control my-2"
              {...register("textBox", { required: true })}
              placeholder="food-description"
            />
            {errors.textBox && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <input
            type="submit"
            value="Add Food"
            className="brand-btn text-uppercase mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

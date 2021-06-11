import React from "react";
import { useForm } from "react-hook-form";
import RatingStar from "./RatingStar";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="col-lg-6 add-review">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* rating start */}

          <RatingStar />
          <div className="mt-4">
            <textarea
              {...register("textBox", { required: true })}
              className="form-control my-2"
            />
            {errors.textBox && <span>This field is required</span>}
          </div>

          <input
            type="submit"
            value="Add Review"
            className="brand-btn text-uppercase mt-3"
          />
        </form>
      </div>
    </>
  );
};

export default AddReview;

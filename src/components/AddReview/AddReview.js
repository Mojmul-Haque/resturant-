import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="add-review">
      <div className="col-lg-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="form-control my-2"
              defaultValue="Mojmul"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <input
              className="form-control my-2"
              defaultValue="mojmul89@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <input
              className="form-control my-2"
              type="file"
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required</span>}
          </div>
          <div>
            <textarea
              {...register("textBox", { required: true })}
              className="form-control my-2"
            />
            {errors.textBox && <span>This field is required</span>}
          </div>

          <input type="submit" value="Add Review" className="brand-btn text-uppercase mt-3" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;

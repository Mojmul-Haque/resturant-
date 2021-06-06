import { faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const contactInfo = [
    {
      name: "name",
      placeholder: "Name",
      icon: faUserAlt,
      errorMessage: "Your Name is required",
      type: "text",
    },
    {
      name: "email",
      placeholder: "email",
      icon: faUserAlt,
      errorMessage: "Your Email is required",
      type: "email",
    },
    {
      name: "phoneNumber",
      placeholder: "Mobile Number",
      icon: faUserAlt,
      errorMessage: "Your phoneNumber is required",
      type: "text",
    },
    {
      name: "date",
      placeholder: "date",
      icon: faUserAlt,
      errorMessage: "Your Date is required",
      type: "date",
    },
    {
      name: "time",
      placeholder: "time",
      icon: faUserAlt,
      errorMessage: "Your Time is required",
      type: "text",
    },
    {
      name: "persons",
      placeholder: "number of persons",
      icon: faUserAlt,
      errorMessage: "Your Time is required",
      type: "text",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <section id="contact-part">
      <div className="container">
        <div className="row justify-content-center">
          <div className="contact-head section-head text-center">
            <h3 className="text-white">Book Your Table</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur placerat nulla, in suscipit erat sodales id. Nullam
              ultricies eu turpis at accumsan. Mauris a sodales mi, eget
              lobortis nulla.
            </p>
          </div>
          <div className="col-lg-10 col-md-10 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                {contactInfo.map((info, index) => (
                  <div key={index} className="col-lg-4 col-md-4 col-12 position-relative">
                    <input
                      type={info.type}
                      className="form-control"
                      {...register(info.name, { required: true })}
                      placeholder={info.placeholder}
                    />
                    <FontAwesomeIcon className="input-icon" icon={info.icon} />
                    {/* {errors.name && <span>{info.errorMessage}</span>} */}
                  </div>
                ))}
              </div>
              <button className="brandBtn" type="submit">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

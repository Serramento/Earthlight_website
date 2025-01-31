import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data, event) => {
    const sentData = {
      from_name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const serviceId = "service_d1tn7wn";
    const templateId = "template_2xx1nt5";
    const publicKey = "nxO2Y4RWqs89VH9kH";

    emailjs
      .send(serviceId, templateId, sentData, {
        publicKey: publicKey,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Tu mensaje ha sido entregado.");
        reset();
      })
      .catch((error) => {
        console.error(error.response.message);
      });
    event.target.reset();
  };

  const validateName = (value) => {
    return (
      value.trim().length >= 3 || "El nombre debe tener al menos 3 caracteres"
    );
  };

  const validateSubject = (value) => {
    return (
      value.trim().length >= 3 || "El asunto debe tener al menos 3 caracteres"
    );
  };

  const validateMessage = (value) => {
    return (
      value.trim().length >= 10 ||
      "Su mensaje debe tener al menos 10 caracteres"
    );
  };

  return (
    <>
      <form
        className="md:flex md:flex-row"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <div className="mt-24 mb-8">
            <input
              className="sm:w-80 w-72 md:w-[28rem] h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-xl placeholder-[#737373] "
              placeholder="Nombre*"
              id="name"
              type="text"
              {...register("name", { validate: validateName })}
            />
            {
              <p className="text-[#39405A] mt-2 text-sm text-left pl-2">
                {errors.name?.message}
              </p>
            }
          </div>

          <div className="mb-8">
            <input
              className="sm:w-80 w-72 md:w-[28rem] h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-xl placeholder-[#737373] "
              placeholder="Correo*"
              id="email"
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    "El valor ingresado no coincide con el formato de correo electrónico",
                },
              })}
            />
            <p className="text-[#39405A] mt-2 text-sm text-left pl-2">
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-8">
            <input
              className="sm:w-80 w-72 md:w-[28rem] h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-xl placeholder-[#737373] "
              placeholder="Sujeto*"
              id="subject"
              type="text"
              {...register("subject", { validate: validateSubject })}
            />
            <p className="text-[#39405A] mt-2 text-sm text-left pl-2">
              {errors.subject?.message}
            </p>
          </div>
        </div>

        <div className="md:mt-24 md:ml-10">
          <div className="mb-8">
            <textarea
              className="sm:w-80 w-72 pt-4 md:w-[28rem] h-48 md:h-64 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-xl placeholder-[#737373] "
              placeholder="Mesaje*"
              id="description"
              {...register("message", { validate: validateMessage })}
            ></textarea>
            <p className="text-[#39405A] mt-2 text-sm text-left pl-2">
              {errors.message?.message}
            </p>
          </div>

          <div className="form-line">
            <button
              className="text-white bg-[#98B8DF] md:ml-72 mb-10 px-7 py-3 font-semibold"
              type="submit"
              disabled={!isValid}
            >
              ENTREGAR
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

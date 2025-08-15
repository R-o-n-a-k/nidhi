"use client";
import React, { useState, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Envelope = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const formPublicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    e.preventDefault();
    const confirmSend = window.confirm("Are you sure you want to send?");
    if (confirmSend) {
      emailjs
        .sendForm(serviceKey, templateId, form.current, {
          publicKey: formPublicKey,
        })
        .then(
          () => {
            toast.success("The form was submitted successfully");
          },
          (error) => {
            console.error("Error:", error.text);
            toast.error("❌ Failed to send. Please try again.");
          }
        );
      e.target.reset();
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
  };

  return (
    // ->frame
    <div className="relative text-center mb-20 bg-[#004C4C] w-[328px] h-[235px] md:w-[600px] md:h-[350px] mx-auto rounded-b-xl md:rounded-b-[40px] z-10">
      <button
        onClick={handleOpen}
        className="z-40 cursor-pointer absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-4 md:py-2 md:px-6 text-primary text-base font-medium overflow-hidden bg-white border-2 border-white rounded-full transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#006666] before:to-[#006666] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
      >
        Email Me
      </button>
      {/* inside Contact Form */}
      <div
        className={`relative top-5 md:top-8 w-[95%] h-[210px] md:w-[580px] md:h-[300px] mx-auto bg-[#fbfbfb] shadow-2xl shadow-custom transition ease-in-out duration-[2000ms] delay-[1500ms] z-20 
        ${hasInteracted ? (isOpen ? "pull" : "push") : ""}`}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="font-medium">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Type your message..."
              required
              className="form-input py-1 h-[122px] md:h-44 resize-none"
            />
            <input
              type="submit"
              value="Send"
              className="cursor-pointer text-white text-sm md:text-base w-full h-9 md:h-11.5 -mt-[6px] bg-primary hover:bg-primary-hover transition-all duration-300 ease-in-out"
            />
          </div>
        </form>
      </div>
      {/* Envelope all Parts */}
      {/* bottom part */}
      <div className="absolute top-[110px] md:top-[160px] w-full h-[125px] md:w-[600px] md:h-[190px] bg-[#006666] rounded-b-xl md:rounded-b-[40px] z-30"></div>
      {/* left part */}
      <div className="evnelope-common border-l-[170px] md:border-l-[300px] border-l-[#009999] border-t-[110px] md:border-t-[160px] border-t-transparent border-b-[110px] md:border-b-[155px] border-b-transparent"></div>
      {/* right part */}
      <div className="evnelope-common border-r-[170px] md:border-r-[300px] border-r-[#009999] border-t-[110px] md:border-t-[160px] border-t-transparent border-b-[110px] md:border-b-[155px] border-b-transparent left-[158px] md:left-[300px]"></div>
      {/* top part */}
      <div
        className={`topPart evnelope-common border-r-[164px] md:border-r-[300px] border-r-transparent border-t-[135px] md:border-t-[200px] border-t-[#008080] border-l-[164px] md:border-l-[300px] border-l-transparent transition-[transform,border] ease-in-out duration-[1000ms] origin-top rotate-x-[0deg] z-[30] 
        ${hasInteracted ? (isOpen ? "open" : "close") : ""}
        `}
      ></div>
      <style>{`
        
        @keyframes message_animation {
          0%   { transform: translateY(0);     z-index: 20; }
          50%  { transform: translateY(-235px); z-index: 20; }
          51%  { transform: translateY(-235px); z-index: 450; }
          100% { transform: translateY(0);     z-index: 45; }
        }

        @media (min-width: 768px) { /* md: in Tailwind */
          @keyframes message_animation {
            0%   { transform: translateY(0);     z-index: 20; }
            50%  { transform: translateY(-340px); z-index: 20; }
            51%  { transform: translateY(-340px); z-index: 45; }
            100% { transform: translateY(0);     z-index: 45; }
          }
        }

        .pull {
          animation: message_animation 2s ease-in-out 0.45s 1 forwards;
        }

        .topPart.open {
          transform-origin: top;
          transform: rotateX(180deg);
          transition: transform .7s, border .7s, z-index .7s ease-in-out;
          border-top-color: #013d3d;
          z-index: 15;
        }

        .push {
          animation: message_animation_close 2s ease-in-out forwards;
        }

        /* Closing */
        @keyframes message_animation_close {
          0%   { transform: translateY(0); z-index: 45; }
          50%  { transform: translateY(-240px); z-index: 45; }
          51%  { transform: translateY(-240px); z-index: 20; }
          100% { transform: translateY(0); z-index: 20; }
        }

        @media (min-width: 768px) {
          @keyframes message_animation_close {
            0%   { transform: translateY(0); z-index: 45; }
            50%  { transform: translateY(-340px); z-index: 45; }
            51%  { transform: translateY(-340px); z-index: 20; }
            100% { transform: translateY(0); z-index: 20; }
          }
        }

        .topPart.close {
          transform-origin: top;
          transform: rotateX(0deg);
          transition: transform .7s 1.8s, border .7s 1.6s, z-index .7s 1.8s ease-in-out;
          border-top-color: #008080;
          z-index: 30;
        }
        
      `}</style>

      {isOpen && (
        <button
          onClick={handleClose}
          className="absolute cursor-pointer -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 text-amber-400 dark:text-[#FFE28A] hover:text-amber-600 dark:hover:text-amber-300 text-sm md:text-base font-medium  transition-colors hover:scale-105 duration-300"
        >
          Close Envelope
          <FaXmark className="text-lg md:text-xl" />
        </button>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Envelope;

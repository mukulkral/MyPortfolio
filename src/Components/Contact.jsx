import React from "react";

function Contact({ contactRef }) {
  return (
    <>
      <div
        ref={contactRef}
        className="h-full bg-slate-900 text-white p-10 pt-32  md:pt-40 md:px-40"
      >
        <h2 className="font-bold text-[30px] lg:text-[40px]  bg-slate-600 duration-200 rounded-md inline-block px-5">
          Contact Me
        </h2>
        <br />
        <br />
        <div
          className="my-5 flex flex-col gap-5   sm:flex sm:flex-row sm:justify-between sm:gap-20 
        "
        >
          <div className="flex flex-col gap-5  sm:flex  sm:justify-between sm:w-1/2 ">
            <div className="flex flex-col justify-center items-center w-full py-[20px] px-[80px] border-2 rounded-md sm:py-[40px]">
              <a href="https://mail.google.com/" target="_blank">
                <i class="fa-solid fa-envelope text-[50px] text-blue-500 hover:scale-150 duration-200 cursor-pointer"></i>
              </a>

              <br />
              <p>Mukulkral8058@gmail.com</p>
            </div>
            <div
              className="flex flex-col justify-center items-center w-full py-[20px] px-[80px] border-2 rounded-md
            sm:py-[40px]"
            >
              <a href="https://github.com/mukulkral" target="_blank">
                <i class="fa-brands fa-github text-[50px] hover:scale-150 duration-200 cursor-pointer"></i>
              </a>
              <br />
              <p>https://github.com/mukulkral</p>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col gap-5 sm:flex sm:flex-col sm:justify-between sm:w-1/2 "
          >
            <div className=" flex flex-col gap-5 sm:flex sm:flex-row  sm:justify-between sm:items-center">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-5 py-3 bg-transparent border-2 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-5 py-3 bg-transparent border-2 rounded-md"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="px-5 py-3 bg-transparent border-2 rounded-md"
              required
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="h-full px-5 py-3 bg-transparent border-2 rounded-md"
              required
            ></textarea>
            <button className="cursor-pointer backdrop-blur-md bg-white/30 rounded-md py-2 active:scale-95 duration-100 hover:bg-white hover:text-black">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

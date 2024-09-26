import React from "react";

function Firstpage({ firstPageRef }) {
  return (
    <>
      <div ref={firstPageRef} className="h-full w-full pt-40 bg-slate-900">
        <div
          className="flex flex-col-reverse items-center gap-4
        sm:flex-row sm:justify-evenly sm:items-start  px-20 md:px-20  lg:px-40"
        >
          <div className="text-white  w-1/2 md:w-1/3 lg:w-1/3">
            <h2 className="font-bold text-[25px] text-center sm:text-[30px]  md:text-[40px] lg:text-[50px] ">
              Front-End React Developer 👋🏻
            </h2>
            <br />
            <p
              className="text-[10px] sm:text-[12px] md:text-[14px]
            lg:text-[15px] text-center sm:text-left"
            >
              Hi, i'm Mukul Singh Kral. A passionate Front-end React Developer
              based in Gurugram 📍
            </p>
            <br />
            <div className="text-[30px] text-center lg:text-[50px] sm:text-left md:text-left lg:text-left">
              <a
                href="https://www.linkedin.com/in/mukul-kral-7a36a2214/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-bounce cursor-pointer mr-10 hover:text-blue-400 hover:animate-none"></i>
              </a>

              <a href="https://github.com/mukulkral" target="_blank"><i class="fa-brands fa-github fa-bounce cursor-pointer hover:animate-none"></i></a>
            </div>
          </div>
          <img

            className="h-[200px] rounded-[20px] sm:p-2 sm:h-[400px]"
            src="ProfilePhoto.webp"
            alt=""
          />
        </div>
        <br />
        <div className="flex justify-center items-center gap-4 text-[20px] sm:text-[30px] sm:gap-10 md:text-[40] lg:gap-[75px]  lg:text-[50px] flex-wrap">
          <h3 className="text-white border-r-4 px-4 sm:text-[20px] lg:text-[30px] ">
            Tech Stack 
          </h3>
          <i class="fa-brands fa-html5 fa-beat-fade text-orange-600  cursor-pointer"></i>
          <i class="fa-brands fa-css3-alt fa-beat-fade text-blue-500"></i>
          <i class="fa-brands fa-js fa-beat-fade text-yellow-400"></i>
          <img
            className="w-[20px] sm:w-[40px] lg:w-[50px]"
            src="tailwindicon.png"
            alt="tailwind"
          />
          <i class="fa-brands fa-react fa-spin text-blue-400"></i>

          <img
            className="w-[20px] sm:w-[40px] lg:w-[50px] "
            src="redux.png"
            alt="redux"
          />
        </div>
      </div>
    </>
  );
}

export default Firstpage;

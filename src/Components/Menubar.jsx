import React from "react";

function Menubar({
  showMenu,
  handleScroll,
  firstPageRef,
  aboutRef,
  projectsRef,
  contactRef,
  on,
  handleON,
}) {
  return (
    <>
      <div
        className={` h-full w-3/4 backdrop-blur-sm  bg-white/10 fixed top-0 left-0 shadow-xl duration-1000 md:hidden z-20 ${
          showMenu ? "" : "translate-x-[-600px]"
        }`}
      >
        <div className="">
          <ul className="flex flex-col gap-5 p-4  text-[25px] sm:text-4xl text-orange-500/80 font-sans ">
            <li
              className="cursor-pointer rounded-sm px-16 text-center transition-all duration-300 ease-in-out hover:bg-slate-300/20"
              onClick={() => handleScroll(firstPageRef)}
            >
              Home
            </li>
            <li
              className="cursor-pointer rounded-sm px-16 text-center transition-all duration-300 ease-in-out hover:bg-slate-300/20"
              onClick={() => handleScroll(aboutRef)}
            >
              About
            </li>
            <li
              className="cursor-pointer rounded-sm px-16 text-center transition-all duration-300 ease-in-out hover:bg-slate-300/20"
              onClick={() => handleScroll(projectsRef)}
            >
              Projects
            </li>
            <li
              className="cursor-pointer rounded-sm px-16 text-center transition-all duration-300 ease-in-out hover:bg-slate-300/20"
              onClick={() => handleScroll(contactRef)}
            >
              Contact
            </li>
            <li className="cursor-pointer rounded-sm px-16 text-center transition-all duration-300 ease-in-out hover:bg-slate-300/20">
              <a
                href="MukulKralResume.pdf"
                download=""
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-nowrap">Download CV</button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <div
                onClick={() => handleON()}
                className={`flex items-center cursor-pointer bg-white w-[120px] h-[50px] rounded-tr-[150px] rounded-br-[150px] rounded-tl-[150px] rounded-bl-[150px] p-2 shadow-inner shadow-gray-700 border-4 duration-500 md:w-[90px]`}
              >
                <div
                  className={`flex justify-center items-center text-[10px] text-white h-[30px] w-[30px] rounded-full shadow-inner cursor-pointer duration-200 md:h-[25px] md:w-[25px] ${
                    on
                      ? "bg-black translate-x-[65px] md:translate-x-[42px] "
                      : "bg-orange-400 "
                  }`}
                  onClick={() => handleON()}
                >
                  {on ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className={`fa-solid fa-sun ${on ? "" : ""}`}></i>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menubar;

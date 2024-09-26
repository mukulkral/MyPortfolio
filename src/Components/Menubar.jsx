import React from "react";

function Menubar({
  showMenu,
  handleScroll,
  firstPageRef,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <>
      <div
        className={` h-full w-3/4 backdrop-blur-sm  bg-white/10 fixed top-0 left-0 shadow-xl duration-1000 md:hidden z-20 ${
          showMenu ? "" : "translate-x-[-600px]"
        }`}
      >
        <div className="">
          <ul className="flex flex-col gap-5 p-4  text-[15px] sm:text-4xl text-pink-500 font-bold font-mono ">
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menubar;

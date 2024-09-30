import React, { useRef, useState } from "react";
import Menubar from "./Menubar";
import Firstpage from "./Firstpage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [on, setOn] = useState(false);

  const handleON = () => {
    setOn(!on);
    console.log(on);
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const firstPageRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleScroll = (eleRef) => {
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`NavContainer h-20 w-full fixed top-0 left-0 z-10 duration-500 ${
          on ? "" : ""
        }`}
      >
        <div
          className={`h-20 w-100  shadow-2xl flex justify-between items-center duration-500 ${
            on ? "bg-slate-900 text-white" : "bg-white text-black "
          }`}
        >
          <img
            className="h-full w-28 cursor-pointer"
            src="NameLogo.png"
            alt="logo"
          />

          <div className="">
            <ul
              className={`hidden md:flex justify-between gap-0 p-4 text-xl md:text-[15px] lg:text-2xl
        `}
            >
              <div
                onClick={() => {
                  handleScroll(firstPageRef);
                }}
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 hover:text-white"
                // style={({ isActive }) => ({
                //   background: isActive ? "" : "",
                //   borderBottom: isActive ? "2px solid white" : "",
                // })}
              >
                <li>Home</li>
              </div>
              <div
                onClick={() => {
                  handleScroll(aboutRef);
                }}
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 hover:text-white" 
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "",
                //   background: isActive ? "" : "",
                //   borderBottom: isActive ? "2px solid white" : "",
                // })}
              >
                <li>About</li>
              </div>
              <div
                onClick={() => {
                  handleScroll(projectsRef);
                }}
                className=" cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 hover:text-white"
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "",
                //   background: isActive ? "" : "",
                //   borderBottom: isActive ? "2px solid white" : "",
                // })}
              >
                <li>Projects</li>
              </div>
              <div
                onClick={() => handleScroll(contactRef)}
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 hover:text-white"
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "",
                //   background: isActive ? "" : "",
                //   borderBottom: isActive ? "2px solid white" : "",
                // })}
              >
                <li>Contact</li>
              </div>
              <div className=" cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 flex gap-3 flex-nowrap hover:text-white">
                <li className="flex gap-2">
                  <a
                    href="MukulKralResume.pdf"
                    download=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-nowrap">Download CV</button>
                  </a>
                  <i class="fa-solid fa-download fa-bounce text-green-500 text-2xl"></i>
                </li>
              </div>
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
            </ul>
          </div>
          <i
            onClick={handleClick}
            className={`fa-solid ${
              !showMenu ? "fa-bars" : "fa-xmark"
            }  text-[50px] px-10 cursor-pointer active:scale-75 duration-300 md:hidden ${
              on ? "text-white" : "text-black"
            }`}
          ></i>
        </div>
      </div>
      <Menubar
        showMenu={showMenu}
        firstPageRef={firstPageRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        handleScroll={handleScroll}
        on={on}
        handleON={handleON}
      />
      <Firstpage firstPageRef={firstPageRef} on={on} />
      <About aboutRef={aboutRef} on={on} />
      <Projects projectsRef={projectsRef} on={on} />
      <Contact contactRef={contactRef} on={on} />
    </>
  );
}

export default Navbar;

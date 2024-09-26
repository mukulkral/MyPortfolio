import React, { useRef, useState } from "react";
import Menubar from "./Menubar";
import Firstpage from "./Firstpage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

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
      <div className="NavContainer h-20 w-full bg-slate-900 shadow-slate-100 fixed top-0 left-0 z-10">
        <div className="h-20 w-100 bg-slate-900 shadow-2xl flex justify-between items-center">
          <img
            className="h-full w-28 cursor-pointer"
            src="NameLogo.png"
            alt="logo"
          />

          <div className="">
            <ul
              className="hidden md:flex justify-between gap-2 p-4 text-xl md:text-[15px] lg:text-2xl
             text-white"
            >
              <div
                onClick={() => {
                  handleScroll(firstPageRef);
                }}
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200"
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
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200"
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
                className=" cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200"
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
                className="cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200"
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "",
                //   background: isActive ? "" : "",
                //   borderBottom: isActive ? "2px solid white" : "",
                // })}
              >
                <li>Contact</li>
              </div>
              <div className=" cursor-pointer px-6 py-2 rounded-full hover:bg-slate-600 duration-200 flex gap-3 flex-nowrap">
                <li>
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
            </ul>
          </div>
          <i
            onClick={handleClick}
            className={`fa-solid ${
              !showMenu ? "fa-bars" : "fa-xmark"
            } text-white text-[50px] px-10 cursor-pointer active:scale-75 duration-300 md:hidden`}
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
      />
      <Firstpage firstPageRef={firstPageRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default Navbar;

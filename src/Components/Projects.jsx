import React from "react";

function Projects({ projectsRef, on }) {
  return (
    <>
      <div
        ref={projectsRef}
        className={` duration-500 text-white p-10 pt-32  md:pt-40 md:px-40 ${on ? "bg-slate-900" : ""}`}
      >
        <h2 className="font-bold text-[30px] sm:text-[40px]  bg-slate-600 duration-200 rounded-md inline-block px-5">
          Projects
        </h2>
      </div>
    </>
  );
}

export default Projects;

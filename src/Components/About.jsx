import React from "react";

function About({ aboutRef, on }) {
  return (
    <>
      <div
        ref={aboutRef}
        className={` p-10 pt-32  md:pt-40 md:px-40 duration-500 ${
          on ? "bg-slate-900 text-white" : ""
        }`}
      >
        <h2
          className={`font-bold text-white text-[30px] sm:text-[40px]  bg-slate-600 duration-200 rounded-md inline-block px-5 `}
        >
          About
        </h2>
        <br />
        <br />
        <p className="text-[12px] sm:text-[15px] md:text-[20px]">
          Hello, I'm{" "}
          <b>
            <u>Mukul Singh Kral</u>
          </b>
          , a passionate and creative Front-end React Developer based in
          Gurugram, Harayana. I have a strong background in web development and
          a deep love for design. I am dedicated to creating user-friendly and
          visually appealing web experiences. Throughout my career, I've had the
          privilege of working on a variety of exciting projects, from building
          responsive e-commerce websites to developing interactive web
          applications. These experiences have allowed me to hone my skills and
          stay up-to-date with the latest front-end technologies and trends.
          When I'm not coding, you can find me exploring the great outdoors or
          playing video games. I'm always excited to take on new challenges and
          bring innovative ideas to life. Feel free to explore my portfolio to
          see examples of my work. If you have any questions or would like to
          collaborate, please don't hesitate to reach out.
        </p>
      </div>
    </>
  );
}

export default About;

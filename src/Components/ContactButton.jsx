import React from "react";

const ContactButton = () => {
  const whatsappNumber = "918441882493";
  const phoneNumber = "+918441882493";
  return (
    <>
      <div className="fixed right-5 bottom-5 flex flex-col gap-5 z-20">
        <a
          href={`tel:${phoneNumber}`}
          className=" bg-white/10 rounded-full h-20 w-20 z-10 flex justify-center items-center cursor-pointer backdrop-blur-[1px]"
        >
          <i class="fa-solid fa-phone fa-shake text-[40px] text-blue-300"></i>
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="  bg-white/10 rounded-full h-20 w-20 z-10 flex justify-center items-center cursor-pointer backdrop-blur-[1px]"
        >
          <i class="fa-brands fa-whatsapp fa-fade text-[40px] text-green-500"></i>
        </a>
      </div>
    </>
  );
};

export default ContactButton;

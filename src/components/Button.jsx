import React from "react";

const Button = (props) => {

  const {label,iconURL,backgroundColor, textColor,borderColor,fullWith}=props;
  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-2 px-7 py-4 
      border font-montserrat text-lg leading-none rounded-full
      
      ${(backgroundColor&&borderColor&&textColor)? `${backgroundColor}${borderColor}${textColor}`:`bg-coral-red
      text-white border-coral-red hover:bg-red-500 ${fullWith&& 'w-full'}`}`}
    >
      
      {label}
      {iconURL&&
      <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;

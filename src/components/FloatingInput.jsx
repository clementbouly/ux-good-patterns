import React from "react";

function FloatingInput({ id, label, value, placeholder, type, required, onHandleChange }) {
  return (
    <div className="relative mt-4">
      <input
        id={id}
        onChange={onHandleChange}
        value={value}
        placeholder={placeholder}
        name={id}
        type={type}
        autoComplete={placeholder}
        className="peer border border-input px-3 py-1 h-9 shadow-xs pr-10 rounded-md w-full placeholder:text-transparent"
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute -top-4 left-0 text-xs text-amber-700 transition-all 
            peer-focus:-top-4
            peer-focus:left-0
            peer-focus:text-xs
            peer-focus:text-amber-700
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:top-2
            peer-placeholder-shown:left-3"
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;

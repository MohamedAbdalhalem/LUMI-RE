import React from "react";

export default function CustomInput({id,label,...props}) {
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className="text-[#74777D] text-[10px] font-normal mb-2 w-full"
      >
        {label}
      </label>
          <input
              id={id}
        {...props}
        className="text-base font-normal py-3 outline-0 border-b boder-b-[#C4C6CD] w-full"
        placeholder="name@example.com"
      />
    </div>
  );
}

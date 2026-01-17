import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full
        sm:w-full
        md:w-64
        lg:w-72
        xl:w-80
        px-3 py-2
        border rounded-lg text-sm shadow-sm
        outline-none
        focus:ring-2
        transition
      "
      style={{
        borderColor: "var(--color-primary)",
        "--tw-ring-color": "var(--color-primary)",
      }}
    />
  );
};

export default SearchBar;

import { useState } from "react";

export const Hero = () => {
  const [value, setValue] = useState("");

  const handleinput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" h-[200px]  flex justify-center items-center mx-auto text-4xl font-bold">
      <input
        onChange={handleinput}
        className="border-2 border-black"
        type="text"
        placeholder="write here "
      />
      {value}
    </div>
  );
};

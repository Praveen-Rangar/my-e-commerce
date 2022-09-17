import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center space-x-1"
  );

  function handleClose() {
    setAnnounceStyle(announceStyle + " hidden");
  }

  return (
    <div className={announceStyle}>
      <h2>Hurry up it's 40% off now</h2>
      <AiOutlineClose className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Announce;

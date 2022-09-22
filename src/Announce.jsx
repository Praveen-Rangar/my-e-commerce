import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center space-x-2 justify-center space-x-1"
  );

  function handleClose() {
    setAnnounceStyle(announceStyle + " hidden");
  }

  return (
    <div className={announceStyle}>
      <h2>Hurry up it's 40% off now</h2>
      <ImCancelCircle className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Announce;

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./../css/App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SlotBooking = () => {
  const [show, setShow] = useState(-1);
  const [isPending, setIsPending] = useState(true);
  const [slot, setSlot] = useState("");
  const timeList = [
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "01:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "05:00 PM",
    "05:15 PM",
    "05:30 PM",
    "05:45 PM",
  ];
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000").then((res) => {
        setIsPending(false);
      });
    }, 1000);
  });
  return (
    <div className="stuff">
      <div className="day">
        <p>Available Slots</p>
      </div>
      <Pagination />
      <div className="slots">
        {isPending ? (
          <div className="Loading">Loading ....</div>
        ) : (
          timeList.map((time, index) => (
            <input label={time}
            type="radio" 
            checked = {time === slot} 
            onClick={() => 
                {setShow(index);
                setSlot(time);}} 
            />
          ))
        )}
      </div>
      {show !== -1 && (
        <button className="Book">
          <p>Confirm Booking</p>
          <ArrowForwardIcon />
        </button>
      )}
      </div>
  );
};

export default SlotBooking;

import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./../css/App.css";
import { getSlots } from "./axios";

const SlotBooking = (props) => {
  const [show, setShow] = useState(-1);
  const [isPending, setIsPending] = useState(true);
  const [slot, setSlot] = useState('`')
  const [userId, setUserId] = useState('');
  const timeList = [
    "08:00 AM",
    "08:15 AM",
    "08:30 AM",
    "08:45 AM",
    "09:00 AM",
    "09:15 AM",
    "09:30 AM",
    "09:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 AM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM",
    "05:15 PM",
  ];

  useEffect(() => {
    getSlots();
  });

  return (
    <div className="stuff">
      {/* <Pagination /> */}
      {isPending ? (
        <div className='flex flex-col items-center justify-center h-full'>
          <CircularProgress />
          <p className='text-lg'>Loading...</p>
        </div>
      ) : (
        <div className="slots">
          {timeList.map((time, index) => (
            <input label={time}
              type="radio"
              checked={time === slot}
              onClick={() => {
                setShow(index);
                setSlot(time);
              }}
            />
          ))}
        </div>
      )}
      {show !== -1 && (
        <button
          className="Book"
          onClick={() => {
            setUserId(localStorage.getItem('token'))
            console.log({ userId })
          }}
        >
          <p>Confirm Booking</p>
        </button>
      )}
    </div>
  );
};

export default SlotBooking;

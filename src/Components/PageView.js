import React, { useContext, useEffect, useState } from "react";
import { customErrorCodes } from "../util/customErrorCodes";
import { processSlotData } from "../util/processSlotData";
import { chooseSlot, getSlots, getUserInfo } from "./axios";
import { BookingInfo } from "./BookingInfo";
import DatePicker from "./Calender";
import { ToastContext } from "./GlobalAlert";
import SlotBooking from "./SlotBooking";

const PageView = () => {
  const { handleSnackOpen } = useContext(ToastContext);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(null);
  const [slotsDataPro, setSlotsDataPro] = useState({ 0: {}, 1: {}, 2: {} });
  const [userData, setUserData] = useState(undefined);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [errorCode, setErrorCode] = useState(0);

  const handleSlotBooking = async () => {
    setDisableButton(true);

    const res = await chooseSlot(slot);
    if (res.success) {
      // setUserData(res.data);
      handleSnackOpen({
        message: "Slot booked successfully",
        variant: "success",
      });
    } else {
      handleSnackOpen({
        message: `Error ${res.code}: ${res.message}`,
        variant: "error",
      });
    }
    await getAllData();
    setDisableButton(false);
  };

  const getAllData = async () => {
    setSlotsDataPro({ 0: {}, 1: {}, 2: {} });
    setUserData(undefined);
    const userRes = await getUserInfo();
    if (userRes.success) {
      setUserData(userRes.userInfo);
      const bookedSlotDetails = userRes.userInfo.slotBooked;
      setSelectedSlot(bookedSlotDetails ? bookedSlotDetails._id : null);
    } else {
      setErrorMessages(customErrorCodes(userRes.code) || userRes.message);
      setErrorCode(userRes.code);
      handleSnackOpen({
        message: `Error ${userRes.code}: ${userRes.message}`,
        variant: "error",
      });
    }

    const slotRes = await getSlots();
    if (slotRes.success) {
      setSlotsDataPro(processSlotData(slotRes.slots));
    } else {
      handleSnackOpen({
        message: `Error ${slotRes.code}: ${slotRes.message}`,
        message: `Slot Booking is currently down for maintenance. Please try again later.`,
        variant: "error",
      });
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {!errorMessages ? (
        <div className="bg-dark-black flex flex-col items-center justify-center h-screen w-screen">
          <div className="w-11/12 sm:w-4/5 h-5/6 sm:h-4/5 flex flex-col md:flex-row bg-gray-modal rounded-3xl overflow-auto border-1 border-stone-700 border-solid px-4 lg:px-10">
            <div className="md:p-5 border-0 border-b-1 md:border-r-1 border-stone-700 border-solid w-full md:w-1/2 flex flex-col gap-2 pb-5 md:pb-0">
              <p className="text-white sm:whitespace-nowrap text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-inter my-8 sm:my-4 font-semibold">
                Laser Tag Slot Booking
              </p>
              <DatePicker
                day={day}
                setDay={setDay}
                selectedSlot={selectedSlot}
                slotsDataPro={slotsDataPro}
              />
            </div>
            <div className="md:p-5 w-full md:w-1/2 flex flex-col gap-2">
              <p className="text-white sm:whitespace-nowrap text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-inter my-8 sm:my-4 font-semibold">
                Select Time
              </p>
              <div className="dateinfo">
                <p className="day mb-4 font-inter font-semibold">
                  {["Friday", "Saturday", "Sunday"][day]},
                </p>
                <p className="date mb-4 font-inter font-normal">
                  {["30 September", "1 October", "2 October"][day]}
                </p>
              </div>
              <SlotBooking
                slot={slot}
                setSlot={setSlot}
                day={day}
                slotsDataPro={slotsDataPro}
                selectedSlot={selectedSlot}
              />
              <p className="hidden md:block text-xs text-center text-stone-600">
                Hover for the number of seats left.
              </p>
              <div className="text-right">
                <button
                  className="relative py-2.5 px-8 my-3 text-md rounded-lg font-inter border-none cursor-pointer"
                  disabled={slot === -1 || selectedSlot || disableButton}
                  title={slot === -1 ? "Select a Slot to enable" : null}
                  onClick={handleSlotBooking}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
          <BookingInfo userData={userData} getAllData={getAllData} />
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center p-5">
          <p className="text-white text-6xl font-inter font-semibold my-2">
            {errorCode}
          </p>
          <p className="max-w-2xl text-center">{errorMessages}</p>
          <a
            href="logout"
            className="text-black bg-white text-2xl font-inter font-semibold mt-4 p-3 rounded-lg mb-5"
          >
            Logout
          </a>
          <p className="text-stone-500 mb-2">
            Contact Us if the issue is not resolved.
          </p>
          <a className="mb-1" href="mailto:askcsivit@gmail.com">
            askcsivit@gmail.com
          </a>
          <a className="mb-1" href="tel:+918764252221">
            +91 87642 52221
          </a>
          <a className="mb-1" href="tel:+919910158496">
            +91 99101 58496
          </a>
          <a className="mb-1" href="tel:+919650021699">
            +91 96500 21699
          </a>
        </div>
      )}
    </>
  );
};

export default PageView;

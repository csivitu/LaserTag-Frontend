import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { getTime } from "../util/processSlotData";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { adminCancelSlot } from "./axios";
import { ToastContext } from "./GlobalAlert";
import { useContext } from "react";

const AdminUserDetails = ({ user, key }) => {
	const { handleSnackOpen } = useContext(ToastContext);
	const handleBook = () => {
		window.location.href = `/admin/book/${user.username}`;
	};

	const handleCancel = async () => {
		const res = await adminCancelSlot(user.username)
		if (res.success) {
			handleSnackOpen({
				message: 'Slot cancelled successfully',
				variant: 'success',
			});
			setTimeout(() => {
				window.location.reload();
			}, );
		} else {
			handleSnackOpen({
				message: `Error ${res.code}: ${res.message}`,
				variant: 'error',
			});
		}
	};
  return (
    <Accordion key={key}>
      <AccordionSummary
        expandIcon={<FaChevronDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="grid grid-cols-3 items-center justify-items-center w-full">
          <p className="break-all text-xs sm:text-sm p-2 m-0">{user.name}</p>
          <p className="break-all text-xs sm:text-sm p-2 m-0">
            {user.username}
          </p>
          <p className="break-all text-xs sm:text-sm p-2 m-0">{user.email}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="p-2 bg-gray-modal rounded-md w-90 max-w-full m-2 border-1 border-solid border-white flex flex-col justify-center items-center">
          <p className="my-1 break-all">{user.name}</p>
          <p className="my-1 break-all">{user.email}</p>
          <p className="my-1 break-all">{user.username}</p>
          <p className="text-sm m-0">
            <b>Payment: </b>
            <Status value={user.isPaid} />
          </p>
          <p className="text-sm m-0">
            <b>Slot Changed: </b>
            <Status value={user.isChangedSlot} />
          </p>
          <p className="text-sm m-0">
            <b>Scanned: </b>
            <Status value={user.isScanned} />
          </p>
          <h3 className="my-2">Slot Details:</h3>
          {user.slotBooked ? (
            <>
              <p className="text-sm m-0">
                {getTime(user.slotBooked.startTime)}
                {" - "}
                {getTime(user.slotBooked.endTime)}
              </p>
              <p className="text-sm m-0">
                {new Date(user.slotBooked.startTime).toDateString()}
              </p>
              <p className="text-sm m-0">SJT 308</p>

			  <button
              className="border-none py-0.5 px-2 cursor-pointer rounded-sm"
              onClick={handleCancel}
            >
              cancel slot
            </button>
            </>
          ) : (
            <button
              className="border-none py-0.5 px-2 cursor-pointer rounded-sm"
              onClick={handleBook}
            >
              book slot
            </button>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export const Status = ({ value }) => {
  return (
    <>
      {value ? (
        <BsFillCheckCircleFill className="text-green-600 -mb-0.5" />
      ) : (
        <BsFillXCircleFill className="text-red-500 -mb-0.5" />
      )}
    </>
  );
};

export default AdminUserDetails;

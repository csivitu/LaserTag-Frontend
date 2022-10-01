import React, { useEffect, useState } from "react";
import { getAllData } from "../Components/axios";
import Lottie from "lottie-react";
import lasertagLogo from "../lottie/loading.json";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AdminUserDetails from "../Components/AdminUserDetails";
import { Pagination } from "@mui/material";
import usePagination from "../util/usePagination";

const Admin = () => {
  const [view, setView] = useState(false);
  const [errorMesaage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState(0);
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [radioValue, setRadioValue] = useState("all");

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(filteredInfo.length / PER_PAGE);
  const _DATA = usePagination(filteredInfo, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const isRadioTrue = (user) => {
    if (radioValue === "all") return true;
    else if (radioValue === "paid") return user.isPaid;
    else if (radioValue === "unpaid") return !user.isPaid;
    else if (radioValue === "booked") return user.slotBooked !== null;
    else if (radioValue === "notBooked") return user.slotBooked === null;
    else return true;
  };

  const isSearchTrue = (user) => {
    if (search === "") setFilteredInfo(info);

    return (
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.slotBooked?._id.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterUsers = (users) => {
    setFilteredInfo(
      users.filter((user) => isRadioTrue(user) && isSearchTrue(user))
    );
  };

  const handleSearch = () => {
    filterUsers(info);
    setPage(1);
	_DATA.jump(1);
  };

  useEffect(() => {
	_DATA.jump(1);
  }, [filteredInfo]);

  useEffect(() => {
    handleSearch();
  }, [radioValue, search]);

  useEffect(() => {
    const getRequest = async () => {
      setInfo([]);
      setFilteredInfo([]);
      const res = await getAllData();
      if (res.success) {
        setInfo(res.data);
        setFilteredInfo(res.data);
        setView(true);
      } else {
        setErrorCode(res.code);
        setErrorMessage(res.message);
        setView(false);
      }
    };
    getRequest();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center px-2 pt-5 max-w-5xl m-auto">
      {info.length > 0 && (
        <>
          <div className="w-full fixed z-50 bg-black flex flex-col p-2 -mt-5 max-w-5xl m-auto">
            <div className="flex gap-2">
              <input
                id="search-input"
                placeholder="Search for anything"
                className="border-1 border-solid border-white w-full bg-stone-900 text-white outline-none rounded-md px-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button variant="contained" onClick={handleSearch}>
                Search
              </Button>
            </div>
            <FilterRadioGroup
              radioValue={radioValue}
              setRadioValue={setRadioValue}
            />
            <div className="pl-4 pr-8 text-lg text-center font-bold grid grid-cols-3 justify-between align-center mt-3 border-t-2 border-solid border-stone-500">
              <p className="my-1">Name</p>
              <p className="my-1">Username</p>
              <p className="my-1">Email</p>
            </div>
          </div>

          <div className="text-center pt-40 w-full">
            {filteredInfo.length ? (
              <>
                <p className="text-xs m-0 text-center text-stone-500">
                  {filteredInfo.length} users found.
                </p>
                {_DATA
                  .currentData()
                  .sort((a, b) =>
                    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                  )
                  .map((data, index) => (
                    <AdminUserDetails user={data} key={index} />
                  ))}
              </>
            ) : (
              <p className="text-center">No users found!</p>
            )}
          </div>
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </>
      )}
      {view ? null : errorCode ? (
        <>
          <h1 className="my-2">{errorCode}</h1>
          <p className="my-2 text-center max-w-xl">{errorMesaage}</p>
        </>
      ) : (
        <>
          <Lottie
            animationData={lasertagLogo}
            className="w-full sm:w-3/5 md:w-1/4"
          />
          <p className="text-lg -mt-5">Loading... Please wait</p>
        </>
      )}
    </div>
  );
};

const FilterRadioGroup = ({ radioValue, setRadioValue }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      >
        <div className="grid grid-cols-5 w-full">
          <FormControlLabel
            value="all"
            control={<Radio />}
            labelPlacement="bottom"
            className="text-center m-0"
            classes={{
              label: "!text-xs sm:!text-sm",
            }}
            label="All"
          />
          <FormControlLabel
            value="paid"
            control={<Radio />}
            labelPlacement="bottom"
            className="text-center m-0"
            classes={{
              label: "!text-xs sm:!text-sm",
            }}
            label="Paid"
          />
          <FormControlLabel
            value="unpaid"
            control={<Radio />}
            labelPlacement="bottom"
            className="text-center m-0"
            classes={{
              label: "!text-xs sm:!text-sm",
            }}
            label="Not Paid"
          />
          <FormControlLabel
            value="booked"
            control={<Radio />}
            labelPlacement="bottom"
            className="text-center m-0"
            classes={{
              label: "!text-xs sm:!text-sm",
            }}
            label="Booked"
          />
          <FormControlLabel
            value="notBooked"
            control={<Radio />}
            labelPlacement="bottom"
            className="text-center m-0"
            classes={{
              label: "!text-xs sm:!text-sm",
            }}
            label="Not Booked"
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default Admin;

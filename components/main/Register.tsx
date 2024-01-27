import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./register.css";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        background: "black",
        padding: "40px",
        width: "600px",
      }}
      id="mainDiv"
    >
      <form
        id="mG61Hd"
        action="https://docs.google.com/forms/u/7/d/e/1FAIpQLSdtdxgclUq1TzbMIDi4EeG0xGucFManUtlrkOJl7s51xCJkGw/formResponse"
        method="POST"
        onSubmit={handleSubmit}
        target="_self"
        autoComplete="false"
      >
        <div className="flex justify-center">
          <Typography variant="h3" className="text-white font-extrabold py-4">
            Register
          </Typography>
        </div>

        <div className="sm:col-span-4 py-3">
          <label className="block text-sm font-medium leading-6 text-white ">
            Name
          </label>

          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="entry.1803027154"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 py-3">
          <label className="block text-sm font-medium leading-6 text-white">
            Email
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="entry.900645420"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 py-3">
          <label className="block text-sm font-medium leading-6 text-white">
            Number
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="entry.1285232124"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 py-3">
          <label className="block text-sm font-medium leading-6 text-white">
            College
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="entry.915629482"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your college name"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 py-3">
          <label className="block text-sm font-medium leading-6 text-white">
            Department
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="entry.153855153"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your department"
              />
            </div>
          </div>
        </div>
        <fieldset className="">
          <legend className="text-lg font-semibold leading-6 text-white pt-8">
            Year
          </legend>

          <div className="mt-1 space-y-3">
            <div className="flex items-center gap-x-3">
              <input
                id="push-everything"
                name="entry.164361115"
                type="radio"
                className="h-4 w-4 border-[#2A0E61] shadow-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
              />
              <label className="block text-sm font-medium leading-6 text-white">
                1st year
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-email"
                name="entry.164361115"
                type="radio"
                className="h-4 w-4 border-[#2A0E61] shadow-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
              />
              <label className="block text-sm font-medium leading-6 text-white">
                2nd year
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-nothing"
                name="entry.164361115"
                type="radio"
                className="h-4 w-4 border-[#2A0E61] text-indigo-600 shadow-[#2A0E61] focus:ring-indigo-600"
              />
              <label className="block text-sm font-medium leading-6 text-white">
                3rd year
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-nothing"
                name="entry.164361115"
                type="radio"
                className="h-4 w-4 border-[#2A0E61] shadow-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
              />
              <label className="block text-sm font-medium leading-6 text-white">
                4th year
              </label>
            </div>
          </div>
        </fieldset>

        {/* Events */}
        <fieldset className="">
          <legend className="text-lg font-semibold leading-6 text-white pt-10 mb-5">
            Events(Max 3 events)
          </legend>
          <div className="space-y-3">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="entry.683230345"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#2A0E61] shadow-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Paper Presentation -{" "}
                  <a className="text-indigo-600">
                    <Link href="/paperpresentation">
                      Click here for details
                    </Link>
                  </a>
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  name="entry.683230345"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Mysticode -{" "}
                  <a className="text-indigo-600">
                    <Link href="/mysticode">Click here for details</Link>
                  </a>
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="entry.683230345"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Res-Q Ventures -{" "}
                  <a className="text-indigo-600">
                    <Link href="/resqventure">Click here for details</Link>
                  </a>
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="entry.683230345"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Sherlock -{" "}
                  <a className="text-indigo-600">
                    <Link href="/sherlock">Click here for details</Link>
                  </a>
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="entry.683230345"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Box Cricket -{" "}
                  <a className="text-indigo-600">
                    <Link href="/boxcricket">Click here for details</Link>
                  </a>
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold leading-6 text-white pt-8">
            The registration fees (Rs. 150) should be paid in college
          </legend>
          <div className="flex items-center gap-x-3 mt-3">
            <input
              id="push-nothing"
              name="entry.44926428"
              type="radio"
              className="h-4 w-4 border-[#2A0E61] text-indigo-600 shadow-[#2A0E61] focus:ring-indigo-600"
            />
            <label className="block text-sm font-medium leading-6 text-white ">
              Sure
            </label>
          </div>
        </fieldset>

        {showAlert && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            onClose={handleCloseAlert}
            className="mt-5"
          >
            Your submission was successful.
          </Alert>
        )}
        <button
          type="submit"
          className="sub text-white button-primary rounded-lg p-2 mt-7 text-2xl"
          value="submit"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

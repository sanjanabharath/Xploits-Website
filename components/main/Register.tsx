import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./register.css";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        id="gform"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdJOr3XdwaIOGaczotAMMpuztn70gyMXMmFj6rlDhCSvQX21A/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={(event) => {
          handleSubmit(event);
          setFormSubmitted(true);
        }}
        autoComplete="new-password"
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
                name="username"
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
                name="username"
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
                name="username"
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
                name="username"
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
                name="username"
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
                name="push-notifications"
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
                name="push-notifications"
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
                name="push-notifications"
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
                name="push-notifications"
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
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#2A0E61] shadow-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">
                  Paper Presentation
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">Mysticode</label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">Res-Q Ventures</label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded shadow-[#2A0E61] border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">Sherlock</label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#2A0E61] text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-white">Box Cricket</label>
              </div>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          className="sub text-white button-primary rounded-lg p-2 mt-7 text-2xl"
          value="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

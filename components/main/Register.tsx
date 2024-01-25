import { useState } from "react";
import { TextField } from "@mui/material";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
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
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            By Email
          </legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">Comments</label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">Candidates</label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">Offers</label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="sub" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";

function registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    events: [],
    year: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedEvents = checked
        ? [...formData.events, value]
        : formData.events.filter((event) => event !== value);

      setFormData({ ...formData, events: updatedEvents });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/u/7/d/e/1FAIpQLSdtdxgclUq1TzbMIDi4EeG0xGucFManUtlrkOJl7s51xCJkGw/formResponse";
    const formDataEntries = Object.entries(formData);

    const urlSearchParams = new URLSearchParams();
    formDataEntries.forEach(([key, value]) => {
      if (typeof value === "string") {
        urlSearchParams.append(key, value);
      }
    });

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlSearchParams,
    });

    alert("Form submitted successfully!");
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="entry.1803027154"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="entry.900645420"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="tel"
          name="entry.1285232124"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        College Name:
        <input
          type="text"
          name="entry.915629482"
          value={formData.college}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Department:
        <input
          type="text"
          name="entry.153855153"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Events Interested In:
        <input
          type="checkbox"
          name="entry.683230345"
          value="Paper Presentation"
          onChange={handleChange}
        />{" "}
        Paper Presentation
        <input
          type="checkbox"
          name="entry.683230345"
          value="Mysticode"
          onChange={handleChange}
        />{" "}
        Mysticode
        <input
          type="checkbox"
          name="entry.683230345"
          value="Sherlock"
          onChange={handleChange}
        />{" "}
        Sherlock
        <input
          type="checkbox"
          name="entry.683230345"
          value="RES-Q VENTURES"
          onChange={handleChange}
        />{" "}
        RES-Q VENTURES
        <input
          type="checkbox"
          name="entry.683230345"
          value="Box Cricket"
          onChange={handleChange}
        />{" "}
        Box Cricket
      </label>
      <br />

      <label>
        Year of Study:
        <input
          type="radio"
          name="entry.164361115"
          value="1"
          onChange={handleChange}
        />{" "}
        First Year
        <input
          type="radio"
          name="entry.164361115"
          value="2"
          onChange={handleChange}
        />{" "}
        Second Year
        <input
          type="radio"
          name="entry.164361115"
          value="3"
          onChange={handleChange}
        />{" "}
        Third Year
        <input
          type="radio"
          name="entry.164361115"
          value="4"
          onChange={handleChange}
        />{" "}
        Fourth Year
      </label>
      <br />
      <label htmlFor="">
        Pay
        <input
          type="radio"
          name="entry.44926428"
          value="Sure"
          onChange={handleChange}
        />{" "}
        Sure
      </label>

      <button type="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default registration;

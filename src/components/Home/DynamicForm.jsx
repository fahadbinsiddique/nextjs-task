"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DynamicForm = () => {
  const [fields, setFields] = useState([
    { id: 1, name: "", position: "", jobtype: "", worktype: "" },
  ]);
  const [errors, setErrors] = useState({});

  const handleChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([
      ...fields,
      { id: Date.now(), name: "", position: "", jobtype: "", worktype: "" },
    ]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    fields.forEach((field, index) => {
      if (!field.name)
        newErrors[index] = { ...newErrors[index], name: "Name is required" };
      if (!field.position)
        newErrors[index] = {
          ...newErrors[index],
          position: "position is required",
        };
      if (!field.position)
        newErrors[index] = {
          ...newErrors[index],
          jobtype: "jobtype is required",
        };
      if (!field.position)
        newErrors[index] = {
          ...newErrors[index],
          worktype: "worktype is required",
        };
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data:", fields);
      setErrors({});
    }
  };

  return (
    <>
      <div
        className={`${poppins.className} max-w-4xl mx-auto mt-10 p-5  border rounded-lg shadow-lg`}
      >
        <h2 className="text-xl font-bold mb-4">Dynamic Form</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-3 mb-3 items-center">
              <div>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={field.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="border p-2 rounded w-45"
                />
                {errors[index]?.name && (
                  <p className="text-red-500 text-sm">{errors[index].name}</p>
                )}
              </div>

              <div>
                <select
                  value={field.position}
                  onChange={(e) =>
                    handleChange(index, "position", e.target.value)
                  }
                  className="border p-2 rounded w-45"
                >
                  <option value="">Select Position</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Flutter Developer">Flutter Developer</option>
                </select>
                {errors[index]?.position && (
                  <p className="text-red-500 text-sm">
                    {errors[index].position}
                  </p>
                )}
              </div>

              <div>
                <select
                  value={field.jobtype}
                  onChange={(e) =>
                    handleChange(index, "jobtype", e.target.value)
                  }
                  className="border p-2 rounded w-45"
                >
                  <option value="">Select Jobtype</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
                {errors[index]?.jobtype && (
                  <p className="text-red-500 text-sm">
                    {errors[index].jobtype}
                  </p>
                )}
              </div>

              <div>
                <select
                  value={field.worktype}
                  onChange={(e) =>
                    handleChange(index, "worktype", e.target.value)
                  }
                  className="border p-2 rounded w-45"
                >
                  <option value="">Select Worktype</option>
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                </select>
                {errors[index]?.worktype && (
                  <p className="text-red-500 text-sm">
                    {errors[index].worktype}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="text-red-500 flex items-center gap-1 cursor-pointer"
              >
                <FaTrash /> Delete
              </button>
            </div>
          ))}

          <div className="flex">
            <div>
              <button
                type="button"
                onClick={addField}
                className="bg-blue-500 flex items-center gap-1 text-white p-2 rounded cursor-pointer"
              >
                <FaPlus /> Add Field
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded ml-3 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <h3 className="text-lg font-bold mt-5">Form Data</h3>
        <table className="w-full border mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Job Type</th>
              <th className="border p-2">Work Type</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td className="border p-2">{field.name}</td>
                <td className="border p-2">{field.position}</td>
                <td className="border p-2">{field.jobtype}</td>
                <td className="border p-2">{field.worktype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DynamicForm;

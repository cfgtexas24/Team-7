"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const options = [
    "Being paired with a volunteer mentor",
    "Housing",
    "Utilities",
    "Clothes",
    "Life Skills",
    "Resume Writing",
    "Joining STORM",
    "Ready-Up Service Center",
    "Other",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    additionalInfo: "", // Add this field
  });

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      selectedOptions,
    });
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <form
        className="max-w-[600px] bg-gray-800 w-full flex flex-col p-8 rounded-md gap-4 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-2xl text-white mb-3">
          Get Help from STORM
        </h3>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue
              className="text-white"
              placeholder="What is the emergency"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Homeless</SelectItem>
              <SelectItem value="Sle">Sleeping in Car</SelectItem>
              <SelectItem value="No Parent">No Parent/Guardian</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex flex-row flex-1 gap-2">
          <Input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            placeholder="Age"
            name="age"
            className="min-w-[20px]"
            value={formData.age}
            onChange={handleInputChange}
            max={99} // Allows a maximum of two digits
          />
        </div>

        <Input
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <div className="flex flex-1 gap-2">
          <Input
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <Input
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
        </div>

        {/* <div className="flex flex-col gap-3">
          <h4 className="text-white">I am interested in contacting someone about</h4>
          <div className="flex flex-row flex-wrap gap-2">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer bg-slate-600 p-2 rounded select-none"
                onClick={() => handleOptionClick(option)}
              >
                <span
                  className={`h-6 w-6 mr-1 inline-block rounded ${
                    selectedOptions.includes(option)
                      ? "bg-white"
                      : "border border-gray-300"
                  } transition-colors`}
                ></span>
                <span className="text-white">{option}</span>
              </label>
            ))}
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <label className="text-white">Additional information </label>
          <Textarea
            placeholder="Message"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
          />
        </div>

        <button className="bg-blue-500 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

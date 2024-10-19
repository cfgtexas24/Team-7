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

export default function Emergency() {
  const options = [
    "Being paired with a volunteer mentor",
    "Housing",
    "Utilities",
    "Clothes",
    "Life Skills",
    "Resume Writing",
    "Joining STORM and having access to all programs",
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
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
      <form
        className="max-w-[500px] bg-gray-800 border w-full flex flex-col p-3 rounded-md gap-4"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-4xl text-white">Get Help from STORM</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue className="text-white" placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Homeless</SelectItem>
              <SelectItem value="banana">Sleeping in Car</SelectItem>
              <SelectItem value="blueberry">No Parent/Guardian</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

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
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <Input
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <Input
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Zip Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />

        <div className="flex flex-row flex-wrap gap-2">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer"
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

        <div className="flex flex-col gap-2">
          <label className="text-white">Additional information </label>
          <Textarea
            placeholder="Message"
            name="additionalInfo" // Add name attribute
            value={formData.additionalInfo} // Bind value to formData
            onChange={handleInputChange} // Add onChange handler
          />
        </div>

        <button className="bg-blue-500 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

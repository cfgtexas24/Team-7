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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
    additionalInfo: "",
    gender: "",
    age: "",
    //emergency: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      emergency: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "state",
      "city",
      "gender",
      "age",
      "emergency",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    console.log({
      formData: Object.fromEntries(form.entries()),
    });

    console.log({
      ...formData,
      selectedOptions,
    });

    const data = {
      ...formData,
      selectedOptions,
    };

    const response = await fetch('/api/sms', {method: "GET"});
    try {
      const response = await fetch("http://52.91.214.247:8080/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error sending post call to backend");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center py-8">
      <form
        className="max-w-[600px] bg-white w-full flex flex-col p-8 rounded-lg shadow-xl h-fit"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-2xl text-gray-800 mb-6">
          Get Help from STORM
        </h3>

        {Object.keys(errors).length > 0 && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside">
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="What is the emergency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Homeless">Homeless</SelectItem>
              <SelectItem value="Sleeping in Car">Sleeping in Car</SelectItem>
              <SelectItem value="No Parent/Guardian">
                No Parent/Guardian
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-2 gap-4 mb-4">
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

        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            max={99}
          />
          <Input
            placeholder="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>

        <Input
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mb-4"
        />

        <div className="grid grid-cols-3 gap-4 mb-4">
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional information
          </label>
          <Textarea
            placeholder="Message"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
          />
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
}

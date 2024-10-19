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
import { motion, AnimatePresence } from "framer-motion";

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

    const response = await fetch("/api/sms", { method: "GET" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const errorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex h-[90vh] bg-gray-100 justify-center py-8">
      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[600px] bg-white w-full flex flex-col p-8 rounded-lg shadow-xl h-fit"
        onSubmit={handleSubmit}
      >
        <motion.h3
          variants={itemVariants}
          className="font-bold text-2xl text-gray-800 mb-6"
        >
          Get Help from STORM
        </motion.h3>

        <AnimatePresence>
          {Object.keys(errors).length > 0 && (
            <motion.div
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
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
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={itemVariants}>
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4 mb-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4 mb-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4 mb-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              placeholder="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              max={99}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Input
              placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Input
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mb-4"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          {["city", "state", "zipCode"].map((field) => (
            <motion.div
              key={field}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Input
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional information
          </label>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Textarea
              placeholder="Message"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
            />
          </motion.div>
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}

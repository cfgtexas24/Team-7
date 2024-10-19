"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
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
    reason: "",
  });

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      reason: value,
    }));
  };

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

  const validateFields = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "state",
      "city",
      "gender",
      "age",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    if (selectedOptions.length === 0) {
      newErrors.options = "At least one option must be selected";
    }

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
    if (response.ok) {
      router.push('/thank-you'); // Navigate to thank-you page on success
    } else {
      // Handle error response here
      console.error('Submission failed', response.statusText);
    }
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

  const checkboxVariants = {
    checked: {
      backgroundColor: "rgb(51, 65, 85)",
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    unchecked: {
      backgroundColor: "transparent",
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  const optionVariants = {
    hover: {
      scale: 1.02,
      backgroundColor: "rgb(241, 245, 249)",
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="flex h-[90vh] min-h-fit bg-gray-100 justify-center py-8">
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
          Apply for Mentorship
        </motion.h3>

        <AnimatePresence>
          {Object.keys(errors).length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
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
              <SelectValue placeholder="What are you applying for" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Homeless">Become a Mentor</SelectItem>
                <SelectItem value="Sleeping in Car">Become a Mentee</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </motion.div>

        {[
          {
            grid: "grid-cols-2",
            fields: [
              { name: "firstName", placeholder: "First Name" },
              { name: "lastName", placeholder: "Last Name" },
            ],
          },
          {
            grid: "grid-cols-2",
            fields: [
              { name: "email", placeholder: "Email", type: "email" },
              { name: "phoneNumber", placeholder: "Phone Number", type: "tel" },
            ],
          },
          {
            grid: "grid-cols-2",
            fields: [
              { name: "age", placeholder: "Age", type: "number", max: 99 },
              { name: "gender", placeholder: "Gender" },
            ],
          },
        ].map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            variants={itemVariants}
            className={`grid ${group.grid} gap-4 mb-4`}
          >
            {group.fields.map((field, fieldIndex) => (
              <motion.div
                key={fieldIndex}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  {...field}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}

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

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3 mb-3"
        >
          <h4>I am interested in</h4>
          <motion.div
            className="flex flex-row flex-wrap gap-2"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {options.map((option, index) => (
              <motion.label
                key={index}
                className="flex items-center cursor-pointer bg-slate-50 p-2 rounded select-none"
                onClick={() => handleOptionClick(option)}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <motion.span
                  className={`h-6 w-6 mr-1 inline-block rounded border border-gray-300`}
                  animate={
                    selectedOptions.includes(option) ? "checked" : "unchecked"
                  }
                  variants={checkboxVariants}
                />
                <span>{option}</span>
              </motion.label>
            ))}
          </motion.div>
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
